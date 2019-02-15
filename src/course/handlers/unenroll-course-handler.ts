import {ApiRequestHandler, ApiService, HttpRequestType, Request} from '../../api';
import {UnenrollCourseRequest} from '..';
import {Observable} from 'rxjs';
import {CourseServiceConfig} from '..';

export class UnenrollCourseHandler implements ApiRequestHandler<UnenrollCourseRequest, boolean> {
    private readonly GET_UNENROLL_COURSE_ENDPOINT = '/unenrol';

    constructor(private apiService: ApiService,
                private unenrollCourseServiceApiConfig: CourseServiceConfig) {
    }

    handle(unenrollCourseRequest: UnenrollCourseRequest): Observable<boolean> {
        const apiRequest: Request = new Request.Builder()
            .withType(HttpRequestType.POST)
            .withPath(this.unenrollCourseServiceApiConfig.apiPath + this.GET_UNENROLL_COURSE_ENDPOINT)
            .withApiToken(true)
            .withSessionToken(true)
            .withBody({request: unenrollCourseRequest})
            .build();

        return this.apiService.fetch<{ result: { response: string } }>(apiRequest).map((success) => {
            return success.body.result.response === 'SUCCESS';
        });
    }

}
