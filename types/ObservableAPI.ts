import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BulkUpdateRequestAction } from '../models/BulkUpdateRequestAction';
import { CustomerAddCustomerToGroupRequest } from '../models/CustomerAddCustomerToGroupRequest';
import { CustomerAddressCreateRequest } from '../models/CustomerAddressCreateRequest';
import { CustomerAddressCreateRequestKind } from '../models/CustomerAddressCreateRequestKind';
import { CustomerAddressCustomerResponse } from '../models/CustomerAddressCustomerResponse';
import { CustomerAddressCustomerResponseKind } from '../models/CustomerAddressCustomerResponseKind';
import { CustomerAddressDeleteRequest } from '../models/CustomerAddressDeleteRequest';
import { CustomerAddressDeleteResponse } from '../models/CustomerAddressDeleteResponse';
import { CustomerAddressEntity } from '../models/CustomerAddressEntity';
import { CustomerAddressEntityKind } from '../models/CustomerAddressEntityKind';
import { CustomerAddressUpdateRequest } from '../models/CustomerAddressUpdateRequest';
import { CustomerAddressUpdateResponse } from '../models/CustomerAddressUpdateResponse';
import { CustomerAssignAgentRequest } from '../models/CustomerAssignAgentRequest';
import { CustomerBulkUpdateRequest } from '../models/CustomerBulkUpdateRequest';
import { CustomerBulkUpdateResponse } from '../models/CustomerBulkUpdateResponse';
import { CustomerConsent } from '../models/CustomerConsent';
import { CustomerConsentSource } from '../models/CustomerConsentSource';
import { CustomerCreateConsentRequest } from '../models/CustomerCreateConsentRequest';
import { CustomerCreateGroupRequest } from '../models/CustomerCreateGroupRequest';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerCreateSubscriberRequest } from '../models/CustomerCreateSubscriberRequest';
import { CustomerCustomerResponse } from '../models/CustomerCustomerResponse';
import { CustomerDeleteGroupRequest } from '../models/CustomerDeleteGroupRequest';
import { CustomerDeleteGroupResponse } from '../models/CustomerDeleteGroupResponse';
import { CustomerEMFields } from '../models/CustomerEMFields';
import { CustomerFindByEmailRequest } from '../models/CustomerFindByEmailRequest';
import { CustomerFindByIdRequest } from '../models/CustomerFindByIdRequest';
import { CustomerFindManyRequest } from '../models/CustomerFindManyRequest';
import { CustomerFindManyRequestFilter } from '../models/CustomerFindManyRequestFilter';
import { CustomerFindManyResponse } from '../models/CustomerFindManyResponse';
import { CustomerFindSubscriberByEmailRequest } from '../models/CustomerFindSubscriberByEmailRequest';
import { CustomerFindSubscriberByIdRequest } from '../models/CustomerFindSubscriberByIdRequest';
import { CustomerGetGroupByCodeRequest } from '../models/CustomerGetGroupByCodeRequest';
import { CustomerGetGroupByIdRequest } from '../models/CustomerGetGroupByIdRequest';
import { CustomerGrantPermissionsRequest } from '../models/CustomerGrantPermissionsRequest';
import { CustomerGroupResponse } from '../models/CustomerGroupResponse';
import { CustomerListConsentsRequest } from '../models/CustomerListConsentsRequest';
import { CustomerListConsentsResponse } from '../models/CustomerListConsentsResponse';
import { CustomerListCustomersRequest } from '../models/CustomerListCustomersRequest';
import { CustomerListCustomersRequestFilter } from '../models/CustomerListCustomersRequestFilter';
import { CustomerListCustomersResponse } from '../models/CustomerListCustomersResponse';
import { CustomerListGroupsRequest } from '../models/CustomerListGroupsRequest';
import { CustomerListGroupsRequestFilter } from '../models/CustomerListGroupsRequestFilter';
import { CustomerListGroupsResponse } from '../models/CustomerListGroupsResponse';
import { CustomerNewsletterRequest } from '../models/CustomerNewsletterRequest';
import { CustomerNewsletterResponse } from '../models/CustomerNewsletterResponse';
import { CustomerPassword } from '../models/CustomerPassword';
import { CustomerPermission } from '../models/CustomerPermission';
import { CustomerRemoveCustomerFromGroupRequest } from '../models/CustomerRemoveCustomerFromGroupRequest';
import { CustomerRemoveDefaultAddressRequest } from '../models/CustomerRemoveDefaultAddressRequest';
import { CustomerRevokePermissionsRequest } from '../models/CustomerRevokePermissionsRequest';
import { CustomerSearchRequest } from '../models/CustomerSearchRequest';
import { CustomerSearchRequestFilter } from '../models/CustomerSearchRequestFilter';
import { CustomerSearchResponse } from '../models/CustomerSearchResponse';
import { CustomerSetDefaultAddressRequest } from '../models/CustomerSetDefaultAddressRequest';
import { CustomerSetPermissionsRequest } from '../models/CustomerSetPermissionsRequest';
import { CustomerSubscriberRequest } from '../models/CustomerSubscriberRequest';
import { CustomerSubscriberResponse } from '../models/CustomerSubscriberResponse';
import { CustomerSubscriberResponseWithNewsletterRequest } from '../models/CustomerSubscriberResponseWithNewsletterRequest';
import { CustomerUnassignAgentRequest } from '../models/CustomerUnassignAgentRequest';
import { CustomerUnsubscribeRequest } from '../models/CustomerUnsubscribeRequest';
import { CustomerUnsubscribeResponse } from '../models/CustomerUnsubscribeResponse';
import { CustomerUpdateGroupRequest } from '../models/CustomerUpdateGroupRequest';
import { CustomerUpdateGroupRequestPayload } from '../models/CustomerUpdateGroupRequestPayload';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { CustomerUpdateRequestPayload } from '../models/CustomerUpdateRequestPayload';
import { CustomerUpdateSubscriberRequest } from '../models/CustomerUpdateSubscriberRequest';
import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ListConsentsRequestFilters } from '../models/ListConsentsRequestFilters';
import { ListConsentsRequestSort } from '../models/ListConsentsRequestSort';
import { ListCustomersRequestFilterDate } from '../models/ListCustomersRequestFilterDate';
import { PasswordPasswordType } from '../models/PasswordPasswordType';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { SortSortField } from '../models/SortSortField';
import { SortSortOrder } from '../models/SortSortOrder';

import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";
export class ObservableCustomerApi {
    private requestFactory: CustomerApiRequestFactory;
    private responseProcessor: CustomerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerApiRequestFactory,
        responseProcessor?: CustomerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomerApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriberWithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerAcquireSubscriber(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAcquireSubscriberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriber(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerAcquireSubscriberWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriber2WithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerAcquireSubscriber2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAcquireSubscriber2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriber2(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerAcquireSubscriber2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriberWithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<HttpInfo<CustomerUnsubscribeResponse>> {
        const requestContextPromise = this.requestFactory.customerAcquireUnsubscriber(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAcquireUnsubscriberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriber(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<CustomerUnsubscribeResponse> {
        return this.customerAcquireUnsubscriberWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerUnsubscribeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriber2WithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<HttpInfo<CustomerUnsubscribeResponse>> {
        const requestContextPromise = this.requestFactory.customerAcquireUnsubscriber2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAcquireUnsubscriber2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriber2(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<CustomerUnsubscribeResponse> {
        return this.customerAcquireUnsubscriber2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerUnsubscribeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroupWithHttpInfo(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerAddCustomerToGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAddCustomerToGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroup(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerAddCustomerToGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroup2WithHttpInfo(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerAddCustomerToGroup2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAddCustomerToGroup2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroup2(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerAddCustomerToGroup2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerAssignAgentWithHttpInfo(body: CustomerAssignAgentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerAssignAgent(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerAssignAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerAssignAgent(body: CustomerAssignAgentRequest, _options?: Configuration): Observable<any> {
        return this.customerAssignAgentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerBulkUpdateWithHttpInfo(body: CustomerBulkUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.customerBulkUpdate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerBulkUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerBulkUpdate(body: CustomerBulkUpdateRequest, _options?: Configuration): Observable<CustomerBulkUpdateResponse> {
        return this.customerBulkUpdateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerBulkUpdate2WithHttpInfo(body: CustomerBulkUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerBulkUpdateResponse>> {
        const requestContextPromise = this.requestFactory.customerBulkUpdate2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerBulkUpdate2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerBulkUpdate2(body: CustomerBulkUpdateRequest, _options?: Configuration): Observable<CustomerBulkUpdateResponse> {
        return this.customerBulkUpdate2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerBulkUpdateResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateWithHttpInfo(body: CustomerCreateRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerCreate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreate(body: CustomerCreateRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerCreateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreate2WithHttpInfo(body: CustomerCreateRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerCreate2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreate2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreate2(body: CustomerCreateRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerCreate2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateAddressWithHttpInfo(body: CustomerAddressCreateRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateAddress(body: CustomerAddressCreateRequest, _options?: Configuration): Observable<CustomerAddressCustomerResponse> {
        return this.customerCreateAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateAddress2WithHttpInfo(body: CustomerAddressCreateRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateAddress2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateAddress2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateAddress2(body: CustomerAddressCreateRequest, _options?: Configuration): Observable<CustomerAddressCustomerResponse> {
        return this.customerCreateAddress2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateGroupWithHttpInfo(body: CustomerCreateGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateGroup(body: CustomerCreateGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerCreateGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateGroup2WithHttpInfo(body: CustomerCreateGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateGroup2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateGroup2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateGroup2(body: CustomerCreateGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerCreateGroup2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateSubscriberWithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateSubscriber(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateSubscriberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateSubscriber(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerCreateSubscriberWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerCreateSubscriber2WithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerCreateSubscriber2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerCreateSubscriber2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerCreateSubscriber2(body: CustomerCreateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerCreateSubscriber2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerDeleteAddressWithHttpInfo(body: CustomerAddressDeleteRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressDeleteResponse>> {
        const requestContextPromise = this.requestFactory.customerDeleteAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDeleteAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerDeleteAddress(body: CustomerAddressDeleteRequest, _options?: Configuration): Observable<CustomerAddressDeleteResponse> {
        return this.customerDeleteAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressDeleteResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerDeleteAddress2WithHttpInfo(body: CustomerAddressDeleteRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressDeleteResponse>> {
        const requestContextPromise = this.requestFactory.customerDeleteAddress2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDeleteAddress2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerDeleteAddress2(body: CustomerAddressDeleteRequest, _options?: Configuration): Observable<CustomerAddressDeleteResponse> {
        return this.customerDeleteAddress2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressDeleteResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerDeleteGroupWithHttpInfo(body: CustomerDeleteGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerDeleteGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerDeleteGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDeleteGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerDeleteGroup(body: CustomerDeleteGroupRequest, _options?: Configuration): Observable<CustomerDeleteGroupResponse> {
        return this.customerDeleteGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerDeleteGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerDeleteGroup2WithHttpInfo(body: CustomerDeleteGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerDeleteGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerDeleteGroup2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerDeleteGroup2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerDeleteGroup2(body: CustomerDeleteGroupRequest, _options?: Configuration): Observable<CustomerDeleteGroupResponse> {
        return this.customerDeleteGroup2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerDeleteGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindWithHttpInfo(body: CustomerFindManyRequest, _options?: Configuration): Observable<HttpInfo<CustomerFindManyResponse>> {
        const requestContextPromise = this.requestFactory.customerFind(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFind(body: CustomerFindManyRequest, _options?: Configuration): Observable<CustomerFindManyResponse> {
        return this.customerFindWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerFindManyResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFind2WithHttpInfo(body: CustomerFindManyRequest, _options?: Configuration): Observable<HttpInfo<CustomerFindManyResponse>> {
        const requestContextPromise = this.requestFactory.customerFind2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFind2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFind2(body: CustomerFindManyRequest, _options?: Configuration): Observable<CustomerFindManyResponse> {
        return this.customerFind2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerFindManyResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindByEmailWithHttpInfo(body: CustomerFindByEmailRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerFindByEmail(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindByEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindByEmail(body: CustomerFindByEmailRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerFindByEmailWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindByEmail2WithHttpInfo(body: CustomerFindByEmailRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerFindByEmail2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindByEmail2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindByEmail2(body: CustomerFindByEmailRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerFindByEmail2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindByIdWithHttpInfo(body: CustomerFindByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerFindById(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindById(body: CustomerFindByIdRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerFindByIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindById2WithHttpInfo(body: CustomerFindByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerFindById2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindById2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindById2(body: CustomerFindByIdRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerFindById2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmailWithHttpInfo(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerFindSubscriberByEmail(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindSubscriberByEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmail(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerFindSubscriberByEmailWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmail2WithHttpInfo(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerFindSubscriberByEmail2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindSubscriberByEmail2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmail2(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerFindSubscriberByEmail2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByIdWithHttpInfo(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerFindSubscriberById(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindSubscriberByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberById(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerFindSubscriberByIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberById2WithHttpInfo(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerFindSubscriberById2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerFindSubscriberById2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerFindSubscriberById2(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerFindSubscriberById2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGetGroupByCodeWithHttpInfo(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerGetGroupByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGetGroupByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGetGroupByCode(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerGetGroupByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGetGroupByCode2WithHttpInfo(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerGetGroupByCode2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGetGroupByCode2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGetGroupByCode2(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerGetGroupByCode2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGetGroupByIdWithHttpInfo(body: CustomerGetGroupByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerGetGroupById(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGetGroupByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGetGroupById(body: CustomerGetGroupByIdRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerGetGroupByIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGetGroupById2WithHttpInfo(body: CustomerGetGroupByIdRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerGetGroupById2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGetGroupById2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGetGroupById2(body: CustomerGetGroupByIdRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerGetGroupById2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGrantPermissionsWithHttpInfo(body: CustomerGrantPermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerGrantPermissions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGrantPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGrantPermissions(body: CustomerGrantPermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerGrantPermissionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerGrantPermissions2WithHttpInfo(body: CustomerGrantPermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerGrantPermissions2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerGrantPermissions2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerGrantPermissions2(body: CustomerGrantPermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerGrantPermissions2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * ListConsents list all consents of a customer
     * @param body 
     */
    public customerListConsentsWithHttpInfo(body: CustomerListConsentsRequest, _options?: Configuration): Observable<HttpInfo<CustomerListConsentsResponse>> {
        const requestContextPromise = this.requestFactory.customerListConsents(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListConsentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * ListConsents list all consents of a customer
     * @param body 
     */
    public customerListConsents(body: CustomerListConsentsRequest, _options?: Configuration): Observable<CustomerListConsentsResponse> {
        return this.customerListConsentsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerListConsentsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerListCustomersWithHttpInfo(body: CustomerListCustomersRequest, _options?: Configuration): Observable<HttpInfo<CustomerListCustomersResponse>> {
        const requestContextPromise = this.requestFactory.customerListCustomers(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListCustomersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerListCustomers(body: CustomerListCustomersRequest, _options?: Configuration): Observable<CustomerListCustomersResponse> {
        return this.customerListCustomersWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerListCustomersResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerListCustomers2WithHttpInfo(body: CustomerListCustomersRequest, _options?: Configuration): Observable<HttpInfo<CustomerListCustomersResponse>> {
        const requestContextPromise = this.requestFactory.customerListCustomers2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListCustomers2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerListCustomers2(body: CustomerListCustomersRequest, _options?: Configuration): Observable<CustomerListCustomersResponse> {
        return this.customerListCustomers2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerListCustomersResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerListGroupsWithHttpInfo(body: CustomerListGroupsRequest, _options?: Configuration): Observable<HttpInfo<CustomerListGroupsResponse>> {
        const requestContextPromise = this.requestFactory.customerListGroups(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerListGroups(body: CustomerListGroupsRequest, _options?: Configuration): Observable<CustomerListGroupsResponse> {
        return this.customerListGroupsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerListGroupsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerListGroups2WithHttpInfo(body: CustomerListGroupsRequest, _options?: Configuration): Observable<HttpInfo<CustomerListGroupsResponse>> {
        const requestContextPromise = this.requestFactory.customerListGroups2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerListGroups2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerListGroups2(body: CustomerListGroupsRequest, _options?: Configuration): Observable<CustomerListGroupsResponse> {
        return this.customerListGroups2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerListGroupsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroupWithHttpInfo(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerRemoveCustomerFromGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRemoveCustomerFromGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroup(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerRemoveCustomerFromGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroup2WithHttpInfo(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerRemoveCustomerFromGroup2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRemoveCustomerFromGroup2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroup2(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerRemoveCustomerFromGroup2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddressWithHttpInfo(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerRemoveDefaultAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRemoveDefaultAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddress(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerRemoveDefaultAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddress2WithHttpInfo(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerRemoveDefaultAddress2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRemoveDefaultAddress2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddress2(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerRemoveDefaultAddress2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRevokePermissionsWithHttpInfo(body: CustomerRevokePermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerRevokePermissions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRevokePermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRevokePermissions(body: CustomerRevokePermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerRevokePermissionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerRevokePermissions2WithHttpInfo(body: CustomerRevokePermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerRevokePermissions2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerRevokePermissions2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerRevokePermissions2(body: CustomerRevokePermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerRevokePermissions2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSearchWithHttpInfo(body: CustomerSearchRequest, _options?: Configuration): Observable<HttpInfo<CustomerSearchResponse>> {
        const requestContextPromise = this.requestFactory.customerSearch(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSearch(body: CustomerSearchRequest, _options?: Configuration): Observable<CustomerSearchResponse> {
        return this.customerSearchWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSearchResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSearch2WithHttpInfo(body: CustomerSearchRequest, _options?: Configuration): Observable<HttpInfo<CustomerSearchResponse>> {
        const requestContextPromise = this.requestFactory.customerSearch2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSearch2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSearch2(body: CustomerSearchRequest, _options?: Configuration): Observable<CustomerSearchResponse> {
        return this.customerSearch2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSearchResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddressWithHttpInfo(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerSetDefaultAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSetDefaultAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddress(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerSetDefaultAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddress2WithHttpInfo(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerSetDefaultAddress2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSetDefaultAddress2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddress2(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerSetDefaultAddress2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSetPermissionsWithHttpInfo(body: CustomerSetPermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerSetPermissions(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSetPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSetPermissions(body: CustomerSetPermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerSetPermissionsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerSetPermissions2WithHttpInfo(body: CustomerSetPermissionsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerSetPermissions2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerSetPermissions2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerSetPermissions2(body: CustomerSetPermissionsRequest, _options?: Configuration): Observable<any> {
        return this.customerSetPermissions2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUnassignAgentWithHttpInfo(body: CustomerUnassignAgentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.customerUnassignAgent(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUnassignAgentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUnassignAgent(body: CustomerUnassignAgentRequest, _options?: Configuration): Observable<any> {
        return this.customerUnassignAgentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUnsubscribeWithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<HttpInfo<CustomerUnsubscribeResponse>> {
        const requestContextPromise = this.requestFactory.customerUnsubscribe(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUnsubscribeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUnsubscribe(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<CustomerUnsubscribeResponse> {
        return this.customerUnsubscribeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerUnsubscribeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUnsubscribe2WithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<HttpInfo<CustomerUnsubscribeResponse>> {
        const requestContextPromise = this.requestFactory.customerUnsubscribe2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUnsubscribe2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUnsubscribe2(body: CustomerUnsubscribeRequest, _options?: Configuration): Observable<CustomerUnsubscribeResponse> {
        return this.customerUnsubscribe2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerUnsubscribeResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateWithHttpInfo(body: CustomerUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdate(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdate(body: CustomerUpdateRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerUpdateWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdate2WithHttpInfo(body: CustomerUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerCustomerResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdate2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdate2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdate2(body: CustomerUpdateRequest, _options?: Configuration): Observable<CustomerCustomerResponse> {
        return this.customerUpdate2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerCustomerResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateAddressWithHttpInfo(body: CustomerAddressUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressUpdateResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateAddress(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateAddressWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateAddress(body: CustomerAddressUpdateRequest, _options?: Configuration): Observable<CustomerAddressUpdateResponse> {
        return this.customerUpdateAddressWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressUpdateResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateAddress2WithHttpInfo(body: CustomerAddressUpdateRequest, _options?: Configuration): Observable<HttpInfo<CustomerAddressUpdateResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateAddress2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateAddress2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateAddress2(body: CustomerAddressUpdateRequest, _options?: Configuration): Observable<CustomerAddressUpdateResponse> {
        return this.customerUpdateAddress2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerAddressUpdateResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateGroupWithHttpInfo(body: CustomerUpdateGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateGroup(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateGroup(body: CustomerUpdateGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerUpdateGroupWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateGroup2WithHttpInfo(body: CustomerUpdateGroupRequest, _options?: Configuration): Observable<HttpInfo<CustomerGroupResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateGroup2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateGroup2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateGroup2(body: CustomerUpdateGroupRequest, _options?: Configuration): Observable<CustomerGroupResponse> {
        return this.customerUpdateGroup2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerGroupResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriberWithHttpInfo(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateSubscriber(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateSubscriberWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriber(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerUpdateSubscriberWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriber2WithHttpInfo(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Observable<HttpInfo<CustomerSubscriberResponse>> {
        const requestContextPromise = this.requestFactory.customerUpdateSubscriber2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.customerUpdateSubscriber2WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriber2(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Observable<CustomerSubscriberResponse> {
        return this.customerUpdateSubscriber2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<CustomerSubscriberResponse>) => apiResponse.data));
    }

}
