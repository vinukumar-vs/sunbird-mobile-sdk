import { FrameworkUtilService } from './framework-util-service';
import { SharedPreferences } from '../../util/shared-preferences';
import { CategoryTerm, Channel, Framework, FrameworkService, GetFrameworkCategoryTermsRequest } from '..';
import { Observable } from 'rxjs';
import { GetSuggestedFrameworksRequest } from './requests';
import { ProfileService } from '../../profile';
import { SystemSettingsService } from '../../system-settings';
export declare class FrameworkUtilServiceImpl implements FrameworkUtilService {
    private sharedPreferences;
    private frameworkService;
    private profileService;
    private systemSettingsService;
    private readonly SYSTEM_SETTINGS_CUSTODIAN_ORG_ID_KEY;
    constructor(sharedPreferences: SharedPreferences, frameworkService: FrameworkService, profileService: ProfileService, systemSettingsService: SystemSettingsService);
    getActiveChannelSuggestedFrameworkList(getSuggestedFrameworksRequest: GetSuggestedFrameworksRequest): Observable<Framework[]>;
    getCustodianChannel(): Observable<Channel>;
    getFrameworkCategoryTerms(request: GetFrameworkCategoryTermsRequest): Observable<CategoryTerm[]>;
}
