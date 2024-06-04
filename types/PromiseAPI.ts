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
import { ObservableCustomerApi } from './ObservableAPI';

import { CustomerApiRequestFactory, CustomerApiResponseProcessor} from "../apis/CustomerApi";
export class PromiseCustomerApi {
    private api: ObservableCustomerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomerApiRequestFactory,
        responseProcessor?: CustomerApiResponseProcessor
    ) {
        this.api = new ObservableCustomerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriberWithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerAcquireSubscriberWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriber(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerAcquireSubscriber(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriberWithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        const result = this.api.customerAcquireUnsubscriberWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriber(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        const result = this.api.customerAcquireUnsubscriber(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroupWithHttpInfo(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerAddCustomerToGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroup(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerAddCustomerToGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerBulkUpdateWithHttpInfo(body: CustomerBulkUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerBulkUpdateResponse>> {
        const result = this.api.customerBulkUpdateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerBulkUpdate(body: CustomerBulkUpdateRequest, _options?: Configuration): Promise<CustomerBulkUpdateResponse> {
        const result = this.api.customerBulkUpdate(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateWithHttpInfo(body: CustomerCreateRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerCreateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreate(body: CustomerCreateRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerCreate(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateAddressWithHttpInfo(body: CustomerAddressCreateRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressCustomerResponse>> {
        const result = this.api.customerCreateAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateAddress(body: CustomerAddressCreateRequest, _options?: Configuration): Promise<CustomerAddressCustomerResponse> {
        const result = this.api.customerCreateAddress(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateGroupWithHttpInfo(body: CustomerCreateGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerCreateGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateGroup(body: CustomerCreateGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerCreateGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateSubscriberWithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerCreateSubscriberWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateSubscriber(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerCreateSubscriber(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteAddressWithHttpInfo(body: CustomerAddressDeleteRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressDeleteResponse>> {
        const result = this.api.customerDeleteAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteAddress(body: CustomerAddressDeleteRequest, _options?: Configuration): Promise<CustomerAddressDeleteResponse> {
        const result = this.api.customerDeleteAddress(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteGroupWithHttpInfo(body: CustomerDeleteGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerDeleteGroupResponse>> {
        const result = this.api.customerDeleteGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteGroup(body: CustomerDeleteGroupRequest, _options?: Configuration): Promise<CustomerDeleteGroupResponse> {
        const result = this.api.customerDeleteGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindWithHttpInfo(body: CustomerFindManyRequest, _options?: Configuration): Promise<HttpInfo<CustomerFindManyResponse>> {
        const result = this.api.customerFindWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFind(body: CustomerFindManyRequest, _options?: Configuration): Promise<CustomerFindManyResponse> {
        const result = this.api.customerFind(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindByEmailWithHttpInfo(body: CustomerFindByEmailRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerFindByEmailWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindByEmail(body: CustomerFindByEmailRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerFindByEmail(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindByIdWithHttpInfo(body: CustomerFindByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerFindByIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindById(body: CustomerFindByIdRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerFindById(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmailWithHttpInfo(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerFindSubscriberByEmailWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmail(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerFindSubscriberByEmail(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByIdWithHttpInfo(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerFindSubscriberByIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberById(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerFindSubscriberById(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupByCodeWithHttpInfo(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerGetGroupByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupByCode(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerGetGroupByCode(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupByIdWithHttpInfo(body: CustomerGetGroupByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerGetGroupByIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupById(body: CustomerGetGroupByIdRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerGetGroupById(body, _options);
        return result.toPromise();
    }

    /**
     * GrantPermissions add permissions to a customer
     * @param body 
     */
    public customerGrantPermissionsWithHttpInfo(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerGrantPermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * GrantPermissions add permissions to a customer
     * @param body 
     */
    public customerGrantPermissions(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerGrantPermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListCustomersWithHttpInfo(body: CustomerListCustomersRequest, _options?: Configuration): Promise<HttpInfo<CustomerListCustomersResponse>> {
        const result = this.api.customerListCustomersWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListCustomers(body: CustomerListCustomersRequest, _options?: Configuration): Promise<CustomerListCustomersResponse> {
        const result = this.api.customerListCustomers(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListGroupsWithHttpInfo(body: CustomerListGroupsRequest, _options?: Configuration): Promise<HttpInfo<CustomerListGroupsResponse>> {
        const result = this.api.customerListGroupsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListGroups(body: CustomerListGroupsRequest, _options?: Configuration): Promise<CustomerListGroupsResponse> {
        const result = this.api.customerListGroups(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroupWithHttpInfo(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerRemoveCustomerFromGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroup(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerRemoveCustomerFromGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddressWithHttpInfo(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerRemoveDefaultAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddress(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerRemoveDefaultAddress(body, _options);
        return result.toPromise();
    }

    /**
     * RevokePermissions remove permissions from a customer
     * @param body 
     */
    public customerRevokePermissionsWithHttpInfo(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerRevokePermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * RevokePermissions remove permissions from a customer
     * @param body 
     */
    public customerRevokePermissions(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerRevokePermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSearchWithHttpInfo(body: CustomerSearchRequest, _options?: Configuration): Promise<HttpInfo<CustomerSearchResponse>> {
        const result = this.api.customerSearchWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSearch(body: CustomerSearchRequest, _options?: Configuration): Promise<CustomerSearchResponse> {
        const result = this.api.customerSearch(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddressWithHttpInfo(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerSetDefaultAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddress(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerSetDefaultAddress(body, _options);
        return result.toPromise();
    }

    /**
     * SetPermissions set permissions to a customer
     * @param body 
     */
    public customerSetPermissionsWithHttpInfo(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerSetPermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * SetPermissions set permissions to a customer
     * @param body 
     */
    public customerSetPermissions(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerSetPermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUnsubscribeWithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        const result = this.api.customerUnsubscribeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUnsubscribe(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        const result = this.api.customerUnsubscribe(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateWithHttpInfo(body: CustomerUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerUpdateWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdate(body: CustomerUpdateRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerUpdate(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateAddressWithHttpInfo(body: CustomerAddressUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressUpdateResponse>> {
        const result = this.api.customerUpdateAddressWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateAddress(body: CustomerAddressUpdateRequest, _options?: Configuration): Promise<CustomerAddressUpdateResponse> {
        const result = this.api.customerUpdateAddress(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateGroupWithHttpInfo(body: CustomerUpdateGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerUpdateGroupWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateGroup(body: CustomerUpdateGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerUpdateGroup(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriberWithHttpInfo(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerUpdateSubscriberWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriber(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerUpdateSubscriber(body, _options);
        return result.toPromise();
    }


}



