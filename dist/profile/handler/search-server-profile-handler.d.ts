import { ApiRequestHandler, ApiService } from '../../api';
import { ServerProfileSearchCriteria } from '..';
import { ServerProfile } from '../def/server-profile';
import { ProfileServiceConfig } from '..';
import { Observable } from 'rxjs';
export declare class SearchServerProfileHandler implements ApiRequestHandler<ServerProfileSearchCriteria, ServerProfile[]> {
    private apiService;
    private searchServiceConfig;
    private readonly GET_SEARCH_USER_ENDPOINT;
    constructor(apiService: ApiService, searchServiceConfig: ProfileServiceConfig);
    handle(request: ServerProfileSearchCriteria): Observable<ServerProfile[]>;
}
