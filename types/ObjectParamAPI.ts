import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableCustomerApi } from "./ObservableAPI";
import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";

export interface CustomerApiCustomerAcquireSubscriberRequest {
    /**
     * 
     * @type CustomerCreateSubscriberRequest
     * @memberof CustomerApicustomerAcquireSubscriber
     */
    body: CustomerCreateSubscriberRequest
}

export interface CustomerApiCustomerAcquireSubscriber2Request {
    /**
     * 
     * @type CustomerCreateSubscriberRequest
     * @memberof CustomerApicustomerAcquireSubscriber2
     */
    body: CustomerCreateSubscriberRequest
}

export interface CustomerApiCustomerAcquireUnsubscriberRequest {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerAcquireUnsubscriber
     */
    body: CustomerUnsubscribeRequest
}

export interface CustomerApiCustomerAcquireUnsubscriber2Request {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerAcquireUnsubscriber2
     */
    body: CustomerUnsubscribeRequest
}

export interface CustomerApiCustomerAddCustomerToGroupRequest {
    /**
     * 
     * @type CustomerAddCustomerToGroupRequest
     * @memberof CustomerApicustomerAddCustomerToGroup
     */
    body: CustomerAddCustomerToGroupRequest
}

export interface CustomerApiCustomerAddCustomerToGroup2Request {
    /**
     * 
     * @type CustomerAddCustomerToGroupRequest
     * @memberof CustomerApicustomerAddCustomerToGroup2
     */
    body: CustomerAddCustomerToGroupRequest
}

export interface CustomerApiCustomerAssignAgentRequest {
    /**
     * 
     * @type CustomerAssignAgentRequest
     * @memberof CustomerApicustomerAssignAgent
     */
    body: CustomerAssignAgentRequest
}

export interface CustomerApiCustomerBulkUpdateRequest {
    /**
     * 
     * @type CustomerBulkUpdateRequest
     * @memberof CustomerApicustomerBulkUpdate
     */
    body: CustomerBulkUpdateRequest
}

export interface CustomerApiCustomerBulkUpdate2Request {
    /**
     * 
     * @type CustomerBulkUpdateRequest
     * @memberof CustomerApicustomerBulkUpdate2
     */
    body: CustomerBulkUpdateRequest
}

export interface CustomerApiCustomerCreateRequest {
    /**
     * 
     * @type CustomerCreateRequest
     * @memberof CustomerApicustomerCreate
     */
    body: CustomerCreateRequest
}

export interface CustomerApiCustomerCreate2Request {
    /**
     * 
     * @type CustomerCreateRequest
     * @memberof CustomerApicustomerCreate2
     */
    body: CustomerCreateRequest
}

export interface CustomerApiCustomerCreateAddressRequest {
    /**
     * 
     * @type CustomerAddressCreateRequest
     * @memberof CustomerApicustomerCreateAddress
     */
    body: CustomerAddressCreateRequest
}

export interface CustomerApiCustomerCreateAddress2Request {
    /**
     * 
     * @type CustomerAddressCreateRequest
     * @memberof CustomerApicustomerCreateAddress2
     */
    body: CustomerAddressCreateRequest
}

export interface CustomerApiCustomerCreateGroupRequest {
    /**
     * 
     * @type CustomerCreateGroupRequest
     * @memberof CustomerApicustomerCreateGroup
     */
    body: CustomerCreateGroupRequest
}

export interface CustomerApiCustomerCreateGroup2Request {
    /**
     * 
     * @type CustomerCreateGroupRequest
     * @memberof CustomerApicustomerCreateGroup2
     */
    body: CustomerCreateGroupRequest
}

export interface CustomerApiCustomerCreateSubscriberRequest {
    /**
     * 
     * @type CustomerCreateSubscriberRequest
     * @memberof CustomerApicustomerCreateSubscriber
     */
    body: CustomerCreateSubscriberRequest
}

export interface CustomerApiCustomerCreateSubscriber2Request {
    /**
     * 
     * @type CustomerCreateSubscriberRequest
     * @memberof CustomerApicustomerCreateSubscriber2
     */
    body: CustomerCreateSubscriberRequest
}

export interface CustomerApiCustomerDeleteAddressRequest {
    /**
     * 
     * @type CustomerAddressDeleteRequest
     * @memberof CustomerApicustomerDeleteAddress
     */
    body: CustomerAddressDeleteRequest
}

export interface CustomerApiCustomerDeleteAddress2Request {
    /**
     * 
     * @type CustomerAddressDeleteRequest
     * @memberof CustomerApicustomerDeleteAddress2
     */
    body: CustomerAddressDeleteRequest
}

export interface CustomerApiCustomerDeleteGroupRequest {
    /**
     * 
     * @type CustomerDeleteGroupRequest
     * @memberof CustomerApicustomerDeleteGroup
     */
    body: CustomerDeleteGroupRequest
}

export interface CustomerApiCustomerDeleteGroup2Request {
    /**
     * 
     * @type CustomerDeleteGroupRequest
     * @memberof CustomerApicustomerDeleteGroup2
     */
    body: CustomerDeleteGroupRequest
}

export interface CustomerApiCustomerFindRequest {
    /**
     * 
     * @type CustomerFindManyRequest
     * @memberof CustomerApicustomerFind
     */
    body: CustomerFindManyRequest
}

export interface CustomerApiCustomerFind2Request {
    /**
     * 
     * @type CustomerFindManyRequest
     * @memberof CustomerApicustomerFind2
     */
    body: CustomerFindManyRequest
}

export interface CustomerApiCustomerFindByEmailRequest {
    /**
     * 
     * @type CustomerFindByEmailRequest
     * @memberof CustomerApicustomerFindByEmail
     */
    body: CustomerFindByEmailRequest
}

export interface CustomerApiCustomerFindByEmail2Request {
    /**
     * 
     * @type CustomerFindByEmailRequest
     * @memberof CustomerApicustomerFindByEmail2
     */
    body: CustomerFindByEmailRequest
}

export interface CustomerApiCustomerFindByIdRequest {
    /**
     * 
     * @type CustomerFindByIdRequest
     * @memberof CustomerApicustomerFindById
     */
    body: CustomerFindByIdRequest
}

export interface CustomerApiCustomerFindById2Request {
    /**
     * 
     * @type CustomerFindByIdRequest
     * @memberof CustomerApicustomerFindById2
     */
    body: CustomerFindByIdRequest
}

export interface CustomerApiCustomerFindSubscriberByEmailRequest {
    /**
     * 
     * @type CustomerFindSubscriberByEmailRequest
     * @memberof CustomerApicustomerFindSubscriberByEmail
     */
    body: CustomerFindSubscriberByEmailRequest
}

export interface CustomerApiCustomerFindSubscriberByEmail2Request {
    /**
     * 
     * @type CustomerFindSubscriberByEmailRequest
     * @memberof CustomerApicustomerFindSubscriberByEmail2
     */
    body: CustomerFindSubscriberByEmailRequest
}

export interface CustomerApiCustomerFindSubscriberByIdRequest {
    /**
     * 
     * @type CustomerFindSubscriberByIdRequest
     * @memberof CustomerApicustomerFindSubscriberById
     */
    body: CustomerFindSubscriberByIdRequest
}

export interface CustomerApiCustomerFindSubscriberById2Request {
    /**
     * 
     * @type CustomerFindSubscriberByIdRequest
     * @memberof CustomerApicustomerFindSubscriberById2
     */
    body: CustomerFindSubscriberByIdRequest
}

export interface CustomerApiCustomerGetGroupByCodeRequest {
    /**
     * 
     * @type CustomerGetGroupByCodeRequest
     * @memberof CustomerApicustomerGetGroupByCode
     */
    body: CustomerGetGroupByCodeRequest
}

export interface CustomerApiCustomerGetGroupByCode2Request {
    /**
     * 
     * @type CustomerGetGroupByCodeRequest
     * @memberof CustomerApicustomerGetGroupByCode2
     */
    body: CustomerGetGroupByCodeRequest
}

export interface CustomerApiCustomerGetGroupByIdRequest {
    /**
     * 
     * @type CustomerGetGroupByIdRequest
     * @memberof CustomerApicustomerGetGroupById
     */
    body: CustomerGetGroupByIdRequest
}

export interface CustomerApiCustomerGetGroupById2Request {
    /**
     * 
     * @type CustomerGetGroupByIdRequest
     * @memberof CustomerApicustomerGetGroupById2
     */
    body: CustomerGetGroupByIdRequest
}

export interface CustomerApiCustomerGrantPermissionsRequest {
    /**
     * 
     * @type CustomerGrantPermissionsRequest
     * @memberof CustomerApicustomerGrantPermissions
     */
    body: CustomerGrantPermissionsRequest
}

export interface CustomerApiCustomerGrantPermissions2Request {
    /**
     * 
     * @type CustomerGrantPermissionsRequest
     * @memberof CustomerApicustomerGrantPermissions2
     */
    body: CustomerGrantPermissionsRequest
}

export interface CustomerApiCustomerListConsentsRequest {
    /**
     * 
     * @type CustomerListConsentsRequest
     * @memberof CustomerApicustomerListConsents
     */
    body: CustomerListConsentsRequest
}

export interface CustomerApiCustomerListCustomersRequest {
    /**
     * 
     * @type CustomerListCustomersRequest
     * @memberof CustomerApicustomerListCustomers
     */
    body: CustomerListCustomersRequest
}

export interface CustomerApiCustomerListCustomers2Request {
    /**
     * 
     * @type CustomerListCustomersRequest
     * @memberof CustomerApicustomerListCustomers2
     */
    body: CustomerListCustomersRequest
}

export interface CustomerApiCustomerListGroupsRequest {
    /**
     * 
     * @type CustomerListGroupsRequest
     * @memberof CustomerApicustomerListGroups
     */
    body: CustomerListGroupsRequest
}

export interface CustomerApiCustomerListGroups2Request {
    /**
     * 
     * @type CustomerListGroupsRequest
     * @memberof CustomerApicustomerListGroups2
     */
    body: CustomerListGroupsRequest
}

export interface CustomerApiCustomerRemoveCustomerFromGroupRequest {
    /**
     * 
     * @type CustomerRemoveCustomerFromGroupRequest
     * @memberof CustomerApicustomerRemoveCustomerFromGroup
     */
    body: CustomerRemoveCustomerFromGroupRequest
}

export interface CustomerApiCustomerRemoveCustomerFromGroup2Request {
    /**
     * 
     * @type CustomerRemoveCustomerFromGroupRequest
     * @memberof CustomerApicustomerRemoveCustomerFromGroup2
     */
    body: CustomerRemoveCustomerFromGroupRequest
}

export interface CustomerApiCustomerRemoveDefaultAddressRequest {
    /**
     * 
     * @type CustomerRemoveDefaultAddressRequest
     * @memberof CustomerApicustomerRemoveDefaultAddress
     */
    body: CustomerRemoveDefaultAddressRequest
}

export interface CustomerApiCustomerRemoveDefaultAddress2Request {
    /**
     * 
     * @type CustomerRemoveDefaultAddressRequest
     * @memberof CustomerApicustomerRemoveDefaultAddress2
     */
    body: CustomerRemoveDefaultAddressRequest
}

export interface CustomerApiCustomerRevokePermissionsRequest {
    /**
     * 
     * @type CustomerRevokePermissionsRequest
     * @memberof CustomerApicustomerRevokePermissions
     */
    body: CustomerRevokePermissionsRequest
}

export interface CustomerApiCustomerRevokePermissions2Request {
    /**
     * 
     * @type CustomerRevokePermissionsRequest
     * @memberof CustomerApicustomerRevokePermissions2
     */
    body: CustomerRevokePermissionsRequest
}

export interface CustomerApiCustomerSearchRequest {
    /**
     * 
     * @type CustomerSearchRequest
     * @memberof CustomerApicustomerSearch
     */
    body: CustomerSearchRequest
}

export interface CustomerApiCustomerSearch2Request {
    /**
     * 
     * @type CustomerSearchRequest
     * @memberof CustomerApicustomerSearch2
     */
    body: CustomerSearchRequest
}

export interface CustomerApiCustomerSetDefaultAddressRequest {
    /**
     * 
     * @type CustomerSetDefaultAddressRequest
     * @memberof CustomerApicustomerSetDefaultAddress
     */
    body: CustomerSetDefaultAddressRequest
}

export interface CustomerApiCustomerSetDefaultAddress2Request {
    /**
     * 
     * @type CustomerSetDefaultAddressRequest
     * @memberof CustomerApicustomerSetDefaultAddress2
     */
    body: CustomerSetDefaultAddressRequest
}

export interface CustomerApiCustomerSetPermissionsRequest {
    /**
     * 
     * @type CustomerSetPermissionsRequest
     * @memberof CustomerApicustomerSetPermissions
     */
    body: CustomerSetPermissionsRequest
}

export interface CustomerApiCustomerSetPermissions2Request {
    /**
     * 
     * @type CustomerSetPermissionsRequest
     * @memberof CustomerApicustomerSetPermissions2
     */
    body: CustomerSetPermissionsRequest
}

export interface CustomerApiCustomerUnassignAgentRequest {
    /**
     * 
     * @type CustomerUnassignAgentRequest
     * @memberof CustomerApicustomerUnassignAgent
     */
    body: CustomerUnassignAgentRequest
}

export interface CustomerApiCustomerUnsubscribeRequest {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerUnsubscribe
     */
    body: CustomerUnsubscribeRequest
}

export interface CustomerApiCustomerUnsubscribe2Request {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerUnsubscribe2
     */
    body: CustomerUnsubscribeRequest
}

export interface CustomerApiCustomerUpdateRequest {
    /**
     * 
     * @type CustomerUpdateRequest
     * @memberof CustomerApicustomerUpdate
     */
    body: CustomerUpdateRequest
}

export interface CustomerApiCustomerUpdate2Request {
    /**
     * 
     * @type CustomerUpdateRequest
     * @memberof CustomerApicustomerUpdate2
     */
    body: CustomerUpdateRequest
}

export interface CustomerApiCustomerUpdateAddressRequest {
    /**
     * 
     * @type CustomerAddressUpdateRequest
     * @memberof CustomerApicustomerUpdateAddress
     */
    body: CustomerAddressUpdateRequest
}

export interface CustomerApiCustomerUpdateAddress2Request {
    /**
     * 
     * @type CustomerAddressUpdateRequest
     * @memberof CustomerApicustomerUpdateAddress2
     */
    body: CustomerAddressUpdateRequest
}

export interface CustomerApiCustomerUpdateGroupRequest {
    /**
     * 
     * @type CustomerUpdateGroupRequest
     * @memberof CustomerApicustomerUpdateGroup
     */
    body: CustomerUpdateGroupRequest
}

export interface CustomerApiCustomerUpdateGroup2Request {
    /**
     * 
     * @type CustomerUpdateGroupRequest
     * @memberof CustomerApicustomerUpdateGroup2
     */
    body: CustomerUpdateGroupRequest
}

export interface CustomerApiCustomerUpdateSubscriberRequest {
    /**
     * 
     * @type CustomerUpdateSubscriberRequest
     * @memberof CustomerApicustomerUpdateSubscriber
     */
    body: CustomerUpdateSubscriberRequest
}

export interface CustomerApiCustomerUpdateSubscriber2Request {
    /**
     * 
     * @type CustomerUpdateSubscriberRequest
     * @memberof CustomerApicustomerUpdateSubscriber2
     */
    body: CustomerUpdateSubscriberRequest
}

export class ObjectCustomerApi {
    private api: ObservableCustomerApi

    public constructor(configuration: Configuration, requestFactory?: CustomerApiRequestFactory, responseProcessor?: CustomerApiResponseProcessor) {
        this.api = new ObservableCustomerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public customerAcquireSubscriberWithHttpInfo(param: CustomerApiCustomerAcquireSubscriberRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerAcquireSubscriberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireSubscriber(param: CustomerApiCustomerAcquireSubscriberRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerAcquireSubscriber(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireSubscriber2WithHttpInfo(param: CustomerApiCustomerAcquireSubscriber2Request, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerAcquireSubscriber2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireSubscriber2(param: CustomerApiCustomerAcquireSubscriber2Request, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerAcquireSubscriber2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireUnsubscriberWithHttpInfo(param: CustomerApiCustomerAcquireUnsubscriberRequest, options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        return this.api.customerAcquireUnsubscriberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireUnsubscriber(param: CustomerApiCustomerAcquireUnsubscriberRequest, options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        return this.api.customerAcquireUnsubscriber(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireUnsubscriber2WithHttpInfo(param: CustomerApiCustomerAcquireUnsubscriber2Request, options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        return this.api.customerAcquireUnsubscriber2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAcquireUnsubscriber2(param: CustomerApiCustomerAcquireUnsubscriber2Request, options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        return this.api.customerAcquireUnsubscriber2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAddCustomerToGroupWithHttpInfo(param: CustomerApiCustomerAddCustomerToGroupRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerAddCustomerToGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAddCustomerToGroup(param: CustomerApiCustomerAddCustomerToGroupRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerAddCustomerToGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAddCustomerToGroup2WithHttpInfo(param: CustomerApiCustomerAddCustomerToGroup2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerAddCustomerToGroup2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAddCustomerToGroup2(param: CustomerApiCustomerAddCustomerToGroup2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerAddCustomerToGroup2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAssignAgentWithHttpInfo(param: CustomerApiCustomerAssignAgentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerAssignAgentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerAssignAgent(param: CustomerApiCustomerAssignAgentRequest, options?: Configuration): Promise<any> {
        return this.api.customerAssignAgent(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerBulkUpdateWithHttpInfo(param: CustomerApiCustomerBulkUpdateRequest, options?: Configuration): Promise<HttpInfo<CustomerBulkUpdateResponse>> {
        return this.api.customerBulkUpdateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerBulkUpdate(param: CustomerApiCustomerBulkUpdateRequest, options?: Configuration): Promise<CustomerBulkUpdateResponse> {
        return this.api.customerBulkUpdate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerBulkUpdate2WithHttpInfo(param: CustomerApiCustomerBulkUpdate2Request, options?: Configuration): Promise<HttpInfo<CustomerBulkUpdateResponse>> {
        return this.api.customerBulkUpdate2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerBulkUpdate2(param: CustomerApiCustomerBulkUpdate2Request, options?: Configuration): Promise<CustomerBulkUpdateResponse> {
        return this.api.customerBulkUpdate2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateWithHttpInfo(param: CustomerApiCustomerCreateRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerCreateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreate(param: CustomerApiCustomerCreateRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerCreate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreate2WithHttpInfo(param: CustomerApiCustomerCreate2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerCreate2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreate2(param: CustomerApiCustomerCreate2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerCreate2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateAddressWithHttpInfo(param: CustomerApiCustomerCreateAddressRequest, options?: Configuration): Promise<HttpInfo<CustomerAddressCustomerResponse>> {
        return this.api.customerCreateAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateAddress(param: CustomerApiCustomerCreateAddressRequest, options?: Configuration): Promise<CustomerAddressCustomerResponse> {
        return this.api.customerCreateAddress(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateAddress2WithHttpInfo(param: CustomerApiCustomerCreateAddress2Request, options?: Configuration): Promise<HttpInfo<CustomerAddressCustomerResponse>> {
        return this.api.customerCreateAddress2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateAddress2(param: CustomerApiCustomerCreateAddress2Request, options?: Configuration): Promise<CustomerAddressCustomerResponse> {
        return this.api.customerCreateAddress2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateGroupWithHttpInfo(param: CustomerApiCustomerCreateGroupRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerCreateGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateGroup(param: CustomerApiCustomerCreateGroupRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerCreateGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateGroup2WithHttpInfo(param: CustomerApiCustomerCreateGroup2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerCreateGroup2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateGroup2(param: CustomerApiCustomerCreateGroup2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerCreateGroup2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateSubscriberWithHttpInfo(param: CustomerApiCustomerCreateSubscriberRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerCreateSubscriberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateSubscriber(param: CustomerApiCustomerCreateSubscriberRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerCreateSubscriber(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateSubscriber2WithHttpInfo(param: CustomerApiCustomerCreateSubscriber2Request, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerCreateSubscriber2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerCreateSubscriber2(param: CustomerApiCustomerCreateSubscriber2Request, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerCreateSubscriber2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteAddressWithHttpInfo(param: CustomerApiCustomerDeleteAddressRequest, options?: Configuration): Promise<HttpInfo<CustomerAddressDeleteResponse>> {
        return this.api.customerDeleteAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteAddress(param: CustomerApiCustomerDeleteAddressRequest, options?: Configuration): Promise<CustomerAddressDeleteResponse> {
        return this.api.customerDeleteAddress(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteAddress2WithHttpInfo(param: CustomerApiCustomerDeleteAddress2Request, options?: Configuration): Promise<HttpInfo<CustomerAddressDeleteResponse>> {
        return this.api.customerDeleteAddress2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteAddress2(param: CustomerApiCustomerDeleteAddress2Request, options?: Configuration): Promise<CustomerAddressDeleteResponse> {
        return this.api.customerDeleteAddress2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteGroupWithHttpInfo(param: CustomerApiCustomerDeleteGroupRequest, options?: Configuration): Promise<HttpInfo<CustomerDeleteGroupResponse>> {
        return this.api.customerDeleteGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteGroup(param: CustomerApiCustomerDeleteGroupRequest, options?: Configuration): Promise<CustomerDeleteGroupResponse> {
        return this.api.customerDeleteGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteGroup2WithHttpInfo(param: CustomerApiCustomerDeleteGroup2Request, options?: Configuration): Promise<HttpInfo<CustomerDeleteGroupResponse>> {
        return this.api.customerDeleteGroup2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerDeleteGroup2(param: CustomerApiCustomerDeleteGroup2Request, options?: Configuration): Promise<CustomerDeleteGroupResponse> {
        return this.api.customerDeleteGroup2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindWithHttpInfo(param: CustomerApiCustomerFindRequest, options?: Configuration): Promise<HttpInfo<CustomerFindManyResponse>> {
        return this.api.customerFindWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFind(param: CustomerApiCustomerFindRequest, options?: Configuration): Promise<CustomerFindManyResponse> {
        return this.api.customerFind(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFind2WithHttpInfo(param: CustomerApiCustomerFind2Request, options?: Configuration): Promise<HttpInfo<CustomerFindManyResponse>> {
        return this.api.customerFind2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFind2(param: CustomerApiCustomerFind2Request, options?: Configuration): Promise<CustomerFindManyResponse> {
        return this.api.customerFind2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindByEmailWithHttpInfo(param: CustomerApiCustomerFindByEmailRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerFindByEmailWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindByEmail(param: CustomerApiCustomerFindByEmailRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerFindByEmail(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindByEmail2WithHttpInfo(param: CustomerApiCustomerFindByEmail2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerFindByEmail2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindByEmail2(param: CustomerApiCustomerFindByEmail2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerFindByEmail2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindByIdWithHttpInfo(param: CustomerApiCustomerFindByIdRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerFindByIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindById(param: CustomerApiCustomerFindByIdRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerFindById(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindById2WithHttpInfo(param: CustomerApiCustomerFindById2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerFindById2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindById2(param: CustomerApiCustomerFindById2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerFindById2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberByEmailWithHttpInfo(param: CustomerApiCustomerFindSubscriberByEmailRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerFindSubscriberByEmailWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberByEmail(param: CustomerApiCustomerFindSubscriberByEmailRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerFindSubscriberByEmail(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberByEmail2WithHttpInfo(param: CustomerApiCustomerFindSubscriberByEmail2Request, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerFindSubscriberByEmail2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberByEmail2(param: CustomerApiCustomerFindSubscriberByEmail2Request, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerFindSubscriberByEmail2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberByIdWithHttpInfo(param: CustomerApiCustomerFindSubscriberByIdRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerFindSubscriberByIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberById(param: CustomerApiCustomerFindSubscriberByIdRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerFindSubscriberById(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberById2WithHttpInfo(param: CustomerApiCustomerFindSubscriberById2Request, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerFindSubscriberById2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerFindSubscriberById2(param: CustomerApiCustomerFindSubscriberById2Request, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerFindSubscriberById2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupByCodeWithHttpInfo(param: CustomerApiCustomerGetGroupByCodeRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerGetGroupByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupByCode(param: CustomerApiCustomerGetGroupByCodeRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerGetGroupByCode(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupByCode2WithHttpInfo(param: CustomerApiCustomerGetGroupByCode2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerGetGroupByCode2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupByCode2(param: CustomerApiCustomerGetGroupByCode2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerGetGroupByCode2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupByIdWithHttpInfo(param: CustomerApiCustomerGetGroupByIdRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerGetGroupByIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupById(param: CustomerApiCustomerGetGroupByIdRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerGetGroupById(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupById2WithHttpInfo(param: CustomerApiCustomerGetGroupById2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerGetGroupById2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGetGroupById2(param: CustomerApiCustomerGetGroupById2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerGetGroupById2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGrantPermissionsWithHttpInfo(param: CustomerApiCustomerGrantPermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerGrantPermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGrantPermissions(param: CustomerApiCustomerGrantPermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerGrantPermissions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGrantPermissions2WithHttpInfo(param: CustomerApiCustomerGrantPermissions2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerGrantPermissions2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerGrantPermissions2(param: CustomerApiCustomerGrantPermissions2Request, options?: Configuration): Promise<any> {
        return this.api.customerGrantPermissions2(param.body,  options).toPromise();
    }

    /**
     * ListConsents list all consents of a customer
     * @param param the request object
     */
    public customerListConsentsWithHttpInfo(param: CustomerApiCustomerListConsentsRequest, options?: Configuration): Promise<HttpInfo<CustomerListConsentsResponse>> {
        return this.api.customerListConsentsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * ListConsents list all consents of a customer
     * @param param the request object
     */
    public customerListConsents(param: CustomerApiCustomerListConsentsRequest, options?: Configuration): Promise<CustomerListConsentsResponse> {
        return this.api.customerListConsents(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListCustomersWithHttpInfo(param: CustomerApiCustomerListCustomersRequest, options?: Configuration): Promise<HttpInfo<CustomerListCustomersResponse>> {
        return this.api.customerListCustomersWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListCustomers(param: CustomerApiCustomerListCustomersRequest, options?: Configuration): Promise<CustomerListCustomersResponse> {
        return this.api.customerListCustomers(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListCustomers2WithHttpInfo(param: CustomerApiCustomerListCustomers2Request, options?: Configuration): Promise<HttpInfo<CustomerListCustomersResponse>> {
        return this.api.customerListCustomers2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListCustomers2(param: CustomerApiCustomerListCustomers2Request, options?: Configuration): Promise<CustomerListCustomersResponse> {
        return this.api.customerListCustomers2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListGroupsWithHttpInfo(param: CustomerApiCustomerListGroupsRequest, options?: Configuration): Promise<HttpInfo<CustomerListGroupsResponse>> {
        return this.api.customerListGroupsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListGroups(param: CustomerApiCustomerListGroupsRequest, options?: Configuration): Promise<CustomerListGroupsResponse> {
        return this.api.customerListGroups(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListGroups2WithHttpInfo(param: CustomerApiCustomerListGroups2Request, options?: Configuration): Promise<HttpInfo<CustomerListGroupsResponse>> {
        return this.api.customerListGroups2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerListGroups2(param: CustomerApiCustomerListGroups2Request, options?: Configuration): Promise<CustomerListGroupsResponse> {
        return this.api.customerListGroups2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveCustomerFromGroupWithHttpInfo(param: CustomerApiCustomerRemoveCustomerFromGroupRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerRemoveCustomerFromGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveCustomerFromGroup(param: CustomerApiCustomerRemoveCustomerFromGroupRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerRemoveCustomerFromGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveCustomerFromGroup2WithHttpInfo(param: CustomerApiCustomerRemoveCustomerFromGroup2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerRemoveCustomerFromGroup2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveCustomerFromGroup2(param: CustomerApiCustomerRemoveCustomerFromGroup2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerRemoveCustomerFromGroup2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveDefaultAddressWithHttpInfo(param: CustomerApiCustomerRemoveDefaultAddressRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerRemoveDefaultAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveDefaultAddress(param: CustomerApiCustomerRemoveDefaultAddressRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerRemoveDefaultAddress(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveDefaultAddress2WithHttpInfo(param: CustomerApiCustomerRemoveDefaultAddress2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerRemoveDefaultAddress2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRemoveDefaultAddress2(param: CustomerApiCustomerRemoveDefaultAddress2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerRemoveDefaultAddress2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRevokePermissionsWithHttpInfo(param: CustomerApiCustomerRevokePermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerRevokePermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRevokePermissions(param: CustomerApiCustomerRevokePermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerRevokePermissions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRevokePermissions2WithHttpInfo(param: CustomerApiCustomerRevokePermissions2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerRevokePermissions2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerRevokePermissions2(param: CustomerApiCustomerRevokePermissions2Request, options?: Configuration): Promise<any> {
        return this.api.customerRevokePermissions2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSearchWithHttpInfo(param: CustomerApiCustomerSearchRequest, options?: Configuration): Promise<HttpInfo<CustomerSearchResponse>> {
        return this.api.customerSearchWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSearch(param: CustomerApiCustomerSearchRequest, options?: Configuration): Promise<CustomerSearchResponse> {
        return this.api.customerSearch(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSearch2WithHttpInfo(param: CustomerApiCustomerSearch2Request, options?: Configuration): Promise<HttpInfo<CustomerSearchResponse>> {
        return this.api.customerSearch2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSearch2(param: CustomerApiCustomerSearch2Request, options?: Configuration): Promise<CustomerSearchResponse> {
        return this.api.customerSearch2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetDefaultAddressWithHttpInfo(param: CustomerApiCustomerSetDefaultAddressRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerSetDefaultAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetDefaultAddress(param: CustomerApiCustomerSetDefaultAddressRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerSetDefaultAddress(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetDefaultAddress2WithHttpInfo(param: CustomerApiCustomerSetDefaultAddress2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerSetDefaultAddress2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetDefaultAddress2(param: CustomerApiCustomerSetDefaultAddress2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerSetDefaultAddress2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetPermissionsWithHttpInfo(param: CustomerApiCustomerSetPermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerSetPermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetPermissions(param: CustomerApiCustomerSetPermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerSetPermissions(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetPermissions2WithHttpInfo(param: CustomerApiCustomerSetPermissions2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerSetPermissions2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerSetPermissions2(param: CustomerApiCustomerSetPermissions2Request, options?: Configuration): Promise<any> {
        return this.api.customerSetPermissions2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnassignAgentWithHttpInfo(param: CustomerApiCustomerUnassignAgentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerUnassignAgentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnassignAgent(param: CustomerApiCustomerUnassignAgentRequest, options?: Configuration): Promise<any> {
        return this.api.customerUnassignAgent(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnsubscribeWithHttpInfo(param: CustomerApiCustomerUnsubscribeRequest, options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        return this.api.customerUnsubscribeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnsubscribe(param: CustomerApiCustomerUnsubscribeRequest, options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        return this.api.customerUnsubscribe(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnsubscribe2WithHttpInfo(param: CustomerApiCustomerUnsubscribe2Request, options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        return this.api.customerUnsubscribe2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUnsubscribe2(param: CustomerApiCustomerUnsubscribe2Request, options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        return this.api.customerUnsubscribe2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateWithHttpInfo(param: CustomerApiCustomerUpdateRequest, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerUpdateWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdate(param: CustomerApiCustomerUpdateRequest, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerUpdate(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdate2WithHttpInfo(param: CustomerApiCustomerUpdate2Request, options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        return this.api.customerUpdate2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdate2(param: CustomerApiCustomerUpdate2Request, options?: Configuration): Promise<CustomerCustomerResponse> {
        return this.api.customerUpdate2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateAddressWithHttpInfo(param: CustomerApiCustomerUpdateAddressRequest, options?: Configuration): Promise<HttpInfo<CustomerAddressUpdateResponse>> {
        return this.api.customerUpdateAddressWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateAddress(param: CustomerApiCustomerUpdateAddressRequest, options?: Configuration): Promise<CustomerAddressUpdateResponse> {
        return this.api.customerUpdateAddress(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateAddress2WithHttpInfo(param: CustomerApiCustomerUpdateAddress2Request, options?: Configuration): Promise<HttpInfo<CustomerAddressUpdateResponse>> {
        return this.api.customerUpdateAddress2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateAddress2(param: CustomerApiCustomerUpdateAddress2Request, options?: Configuration): Promise<CustomerAddressUpdateResponse> {
        return this.api.customerUpdateAddress2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateGroupWithHttpInfo(param: CustomerApiCustomerUpdateGroupRequest, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerUpdateGroupWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateGroup(param: CustomerApiCustomerUpdateGroupRequest, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerUpdateGroup(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateGroup2WithHttpInfo(param: CustomerApiCustomerUpdateGroup2Request, options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        return this.api.customerUpdateGroup2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateGroup2(param: CustomerApiCustomerUpdateGroup2Request, options?: Configuration): Promise<CustomerGroupResponse> {
        return this.api.customerUpdateGroup2(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateSubscriberWithHttpInfo(param: CustomerApiCustomerUpdateSubscriberRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerUpdateSubscriberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateSubscriber(param: CustomerApiCustomerUpdateSubscriberRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerUpdateSubscriber(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateSubscriber2WithHttpInfo(param: CustomerApiCustomerUpdateSubscriber2Request, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerUpdateSubscriber2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateSubscriber2(param: CustomerApiCustomerUpdateSubscriber2Request, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerUpdateSubscriber2(param.body,  options).toPromise();
    }

}
