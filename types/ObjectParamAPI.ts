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
import { CustomerBulkUpdateRequest } from '../models/CustomerBulkUpdateRequest';
import { CustomerBulkUpdateResponse } from '../models/CustomerBulkUpdateResponse';
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
import { CustomerListCustomersRequest } from '../models/CustomerListCustomersRequest';
import { CustomerListCustomersRequestFilter } from '../models/CustomerListCustomersRequestFilter';
import { CustomerListCustomersResponse } from '../models/CustomerListCustomersResponse';
import { CustomerListGroupsRequest } from '../models/CustomerListGroupsRequest';
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
import { CustomerUnsubscribeRequest } from '../models/CustomerUnsubscribeRequest';
import { CustomerUnsubscribeResponse } from '../models/CustomerUnsubscribeResponse';
import { CustomerUpdateGroupRequest } from '../models/CustomerUpdateGroupRequest';
import { CustomerUpdateGroupRequestPayload } from '../models/CustomerUpdateGroupRequestPayload';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { CustomerUpdateRequestPayload } from '../models/CustomerUpdateRequestPayload';
import { CustomerUpdateSubscriberRequest } from '../models/CustomerUpdateSubscriberRequest';
import { GooglerpcStatus } from '../models/GooglerpcStatus';
import { ListCustomersRequestFilterDate } from '../models/ListCustomersRequestFilterDate';
import { PasswordPasswordType } from '../models/PasswordPasswordType';
import { ProtobufAny } from '../models/ProtobufAny';

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

export interface CustomerApiCustomerAcquireUnsubscriberRequest {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerAcquireUnsubscriber
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

export interface CustomerApiCustomerBulkUpdateRequest {
    /**
     * 
     * @type CustomerBulkUpdateRequest
     * @memberof CustomerApicustomerBulkUpdate
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

export interface CustomerApiCustomerCreateAddressRequest {
    /**
     * 
     * @type CustomerAddressCreateRequest
     * @memberof CustomerApicustomerCreateAddress
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

export interface CustomerApiCustomerCreateSubscriberRequest {
    /**
     * 
     * @type CustomerCreateSubscriberRequest
     * @memberof CustomerApicustomerCreateSubscriber
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

export interface CustomerApiCustomerDeleteGroupRequest {
    /**
     * 
     * @type CustomerDeleteGroupRequest
     * @memberof CustomerApicustomerDeleteGroup
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

export interface CustomerApiCustomerFindByEmailRequest {
    /**
     * 
     * @type CustomerFindByEmailRequest
     * @memberof CustomerApicustomerFindByEmail
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

export interface CustomerApiCustomerFindSubscriberByEmailRequest {
    /**
     * 
     * @type CustomerFindSubscriberByEmailRequest
     * @memberof CustomerApicustomerFindSubscriberByEmail
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

export interface CustomerApiCustomerGetGroupByCodeRequest {
    /**
     * 
     * @type CustomerGetGroupByCodeRequest
     * @memberof CustomerApicustomerGetGroupByCode
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

export interface CustomerApiCustomerGrantPermissionsRequest {
    /**
     * 
     * @type CustomerGrantPermissionsRequest
     * @memberof CustomerApicustomerGrantPermissions
     */
    body: CustomerGrantPermissionsRequest
}

export interface CustomerApiCustomerListCustomersRequest {
    /**
     * 
     * @type CustomerListCustomersRequest
     * @memberof CustomerApicustomerListCustomers
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

export interface CustomerApiCustomerRemoveCustomerFromGroupRequest {
    /**
     * 
     * @type CustomerRemoveCustomerFromGroupRequest
     * @memberof CustomerApicustomerRemoveCustomerFromGroup
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

export interface CustomerApiCustomerRevokePermissionsRequest {
    /**
     * 
     * @type CustomerRevokePermissionsRequest
     * @memberof CustomerApicustomerRevokePermissions
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

export interface CustomerApiCustomerSetDefaultAddressRequest {
    /**
     * 
     * @type CustomerSetDefaultAddressRequest
     * @memberof CustomerApicustomerSetDefaultAddress
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

export interface CustomerApiCustomerUnsubscribeRequest {
    /**
     * 
     * @type CustomerUnsubscribeRequest
     * @memberof CustomerApicustomerUnsubscribe
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

export interface CustomerApiCustomerUpdateAddressRequest {
    /**
     * 
     * @type CustomerAddressUpdateRequest
     * @memberof CustomerApicustomerUpdateAddress
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

export interface CustomerApiCustomerUpdateSubscriberRequest {
    /**
     * 
     * @type CustomerUpdateSubscriberRequest
     * @memberof CustomerApicustomerUpdateSubscriber
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
     * GrantPermissions add permissions to a customer
     * @param param the request object
     */
    public customerGrantPermissionsWithHttpInfo(param: CustomerApiCustomerGrantPermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerGrantPermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * GrantPermissions add permissions to a customer
     * @param param the request object
     */
    public customerGrantPermissions(param: CustomerApiCustomerGrantPermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerGrantPermissions(param.body,  options).toPromise();
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
     * RevokePermissions remove permissions from a customer
     * @param param the request object
     */
    public customerRevokePermissionsWithHttpInfo(param: CustomerApiCustomerRevokePermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerRevokePermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * RevokePermissions remove permissions from a customer
     * @param param the request object
     */
    public customerRevokePermissions(param: CustomerApiCustomerRevokePermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerRevokePermissions(param.body,  options).toPromise();
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
     * SetPermissions set permissions to a customer
     * @param param the request object
     */
    public customerSetPermissionsWithHttpInfo(param: CustomerApiCustomerSetPermissionsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.customerSetPermissionsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * SetPermissions set permissions to a customer
     * @param param the request object
     */
    public customerSetPermissions(param: CustomerApiCustomerSetPermissionsRequest, options?: Configuration): Promise<any> {
        return this.api.customerSetPermissions(param.body,  options).toPromise();
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
    public customerUpdateSubscriberWithHttpInfo(param: CustomerApiCustomerUpdateSubscriberRequest, options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        return this.api.customerUpdateSubscriberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public customerUpdateSubscriber(param: CustomerApiCustomerUpdateSubscriberRequest, options?: Configuration): Promise<CustomerSubscriberResponse> {
        return this.api.customerUpdateSubscriber(param.body,  options).toPromise();
    }

}
