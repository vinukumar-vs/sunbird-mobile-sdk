import {ApiRequestHandler} from '../../api';
import {
    CategoryAssociation,
    CategoryTerm,
    Channel,
    Framework,
    FrameworkCategory,
    FrameworkCategoryCode,
    FrameworkService,
    GetFrameworkCategoryTermsRequest
} from '..';
import {Observable} from 'rxjs';
import {NoActiveChannelFoundError} from '../errors/no-active-channel-found-error';
import * as Collections from 'typescript-collections';
import {FrameworkMapper} from '../util/framework-mapper';

export class GetFrameworkCategoryTermsHandler implements ApiRequestHandler<GetFrameworkCategoryTermsRequest, CategoryTerm[]> {

    constructor(private frameworkService: FrameworkService) {
    }

    handle(request: GetFrameworkCategoryTermsRequest): Observable<CategoryTerm[]> {
        return ((() => {
            if (request.frameworkId) {
                return this.getTranslatedFrameworkDetails(request.frameworkId, request.requiredCategories, request.language);
            }

            return this.getCurrentChannelTranslatedDefaultFrameworkDetails(request.requiredCategories, request.language);
        }) as () => Observable<Framework>)()
            .map((framework: Framework) => {
                let terms: CategoryTerm[] = [];

                if (!request.prevCategoryCode && request.currentCategoryCode) {
                    terms = this.getCategoryTerms(framework, request).toArray();
                } else {
                    terms = this.getCategoryAssociationTerms(framework, request).toArray();
                }

                terms.sort((prevTerm: CategoryTerm, term: CategoryTerm) => prevTerm.index - term.index);

                return terms;
            });
    }

    private getCurrentChannelTranslatedDefaultFrameworkDetails(requiredCategories: FrameworkCategoryCode[], language: string): Observable<Framework> {
        return this.frameworkService.activeChannel$
            .map((channel) => {
                if (!channel) {
                    throw new NoActiveChannelFoundError('No active channel found');
                }
                return channel;
            })
            .mergeMap((channel: Channel) => {
                return this.getTranslatedFrameworkDetails(channel.defaultFramework, requiredCategories, language);
            });
    }

    private getTranslatedFrameworkDetails(frameworkId: string, requiredCategories: FrameworkCategoryCode[], language: string): Observable<Framework> {
        return this.frameworkService.getFrameworkDetails({
            frameworkId,
            requiredCategories
        }).map((f) => FrameworkMapper.prepareFrameworkTranslations(f, language));
    }

    private getAllCategoriesTermsSet(framework: Framework): Collections.Set<CategoryTerm> {
        if (!framework.categories) {
            return new Collections.Set<CategoryTerm>();
        }

        return framework.categories
            .reduce((acc: CategoryTerm[][], category: FrameworkCategory) => [...acc, category.terms || []], [])
            .reduce((acc, val) => acc.concat(val), [])
            .reduce((acc, val) => {
                    acc.add(val);
                    return acc;
                }, new Collections.Set<CategoryTerm>((term) => Collections.util.makeString(term))
            );
    }

    private getCategoryTerms(framework: Framework, request: GetFrameworkCategoryTermsRequest): Collections.Set<CategoryTerm> {
        return framework.categories!.find((category) => category.code === request.currentCategoryCode)!.terms!
            .reduce((acc, val) => {
                    acc.add(val!);
                    return acc;
                }, new Collections.Set<CategoryTerm>((term) => Collections.util.makeString(term))
            );
    }

    private getCategoryAssociationTerms(framework: Framework, request: GetFrameworkCategoryTermsRequest): Collections.Set<CategoryTerm> {
        if (!framework.categories) {
            return new Collections.Set<CategoryTerm>();
        }

        const categoryTerms = framework.categories.find((category) => category.code === request.prevCategoryCode)!.terms;

        if (!categoryTerms) {
            return new Collections.Set<CategoryTerm>();
        }

        const categoryAssociationsArray: CategoryAssociation[][] = categoryTerms
            .filter((term) => request.selectedTermsCodes!.find((selectedTerm) => selectedTerm === term.code))
            .map((term) => term.associations);

        if (categoryAssociationsArray.some((categoryAssociations) => categoryAssociations.length === 0)) {
            return framework.categories!.find((category) => category.code === request.currentCategoryCode)!.terms!
                .reduce((acc, val) => {
                        acc.add(val!);
                        return acc;
                    }, new Collections.Set<CategoryTerm>((term) => Collections.util.makeString(term))
                );
        } else {
            return categoryAssociationsArray
                .reduce((acc, val) => acc.concat(val))
                .reduce((acc, val) => {
                        acc.add(val);
                        return acc;
                    }, new Collections.Set<CategoryAssociation>((term) => Collections.util.makeString(term))
                )
                .toArray()
                .map((association: CategoryAssociation) =>
                    this.getAllCategoriesTermsSet(framework).toArray().find((term) => term.code === association.code))
                .reduce((acc, val) => {
                        acc.add(val!);
                        return acc;
                    }, new Collections.Set<CategoryTerm>((term) => Collections.util.makeString(term))
                );
        }
    }
}
