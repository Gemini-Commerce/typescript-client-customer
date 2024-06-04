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
    public customerAcquireSubscriber2WithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerAcquireSubscriber2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAcquireSubscriber2(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerAcquireSubscriber2(body, _options);
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
    public customerAcquireUnsubscriber2WithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        const result = this.api.customerAcquireUnsubscriber2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAcquireUnsubscriber2(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        const result = this.api.customerAcquireUnsubscriber2(body, _options);
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
    public customerAddCustomerToGroup2WithHttpInfo(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerAddCustomerToGroup2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAddCustomerToGroup2(body: CustomerAddCustomerToGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerAddCustomerToGroup2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAssignAgentWithHttpInfo(body: CustomerAssignAgentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerAssignAgentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerAssignAgent(body: CustomerAssignAgentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerAssignAgent(body, _options);
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
    public customerBulkUpdate2WithHttpInfo(body: CustomerBulkUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerBulkUpdateResponse>> {
        const result = this.api.customerBulkUpdate2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerBulkUpdate2(body: CustomerBulkUpdateRequest, _options?: Configuration): Promise<CustomerBulkUpdateResponse> {
        const result = this.api.customerBulkUpdate2(body, _options);
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
    public customerCreate2WithHttpInfo(body: CustomerCreateRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerCreate2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreate2(body: CustomerCreateRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerCreate2(body, _options);
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
    public customerCreateAddress2WithHttpInfo(body: CustomerAddressCreateRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressCustomerResponse>> {
        const result = this.api.customerCreateAddress2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateAddress2(body: CustomerAddressCreateRequest, _options?: Configuration): Promise<CustomerAddressCustomerResponse> {
        const result = this.api.customerCreateAddress2(body, _options);
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
    public customerCreateGroup2WithHttpInfo(body: CustomerCreateGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerCreateGroup2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateGroup2(body: CustomerCreateGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerCreateGroup2(body, _options);
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
    public customerCreateSubscriber2WithHttpInfo(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerCreateSubscriber2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerCreateSubscriber2(body: CustomerCreateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerCreateSubscriber2(body, _options);
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
    public customerDeleteAddress2WithHttpInfo(body: CustomerAddressDeleteRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressDeleteResponse>> {
        const result = this.api.customerDeleteAddress2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteAddress2(body: CustomerAddressDeleteRequest, _options?: Configuration): Promise<CustomerAddressDeleteResponse> {
        const result = this.api.customerDeleteAddress2(body, _options);
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
    public customerDeleteGroup2WithHttpInfo(body: CustomerDeleteGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerDeleteGroupResponse>> {
        const result = this.api.customerDeleteGroup2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerDeleteGroup2(body: CustomerDeleteGroupRequest, _options?: Configuration): Promise<CustomerDeleteGroupResponse> {
        const result = this.api.customerDeleteGroup2(body, _options);
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
    public customerFind2WithHttpInfo(body: CustomerFindManyRequest, _options?: Configuration): Promise<HttpInfo<CustomerFindManyResponse>> {
        const result = this.api.customerFind2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFind2(body: CustomerFindManyRequest, _options?: Configuration): Promise<CustomerFindManyResponse> {
        const result = this.api.customerFind2(body, _options);
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
    public customerFindByEmail2WithHttpInfo(body: CustomerFindByEmailRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerFindByEmail2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindByEmail2(body: CustomerFindByEmailRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerFindByEmail2(body, _options);
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
    public customerFindById2WithHttpInfo(body: CustomerFindByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerFindById2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindById2(body: CustomerFindByIdRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerFindById2(body, _options);
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
    public customerFindSubscriberByEmail2WithHttpInfo(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerFindSubscriberByEmail2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberByEmail2(body: CustomerFindSubscriberByEmailRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerFindSubscriberByEmail2(body, _options);
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
    public customerFindSubscriberById2WithHttpInfo(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerFindSubscriberById2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerFindSubscriberById2(body: CustomerFindSubscriberByIdRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerFindSubscriberById2(body, _options);
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
    public customerGetGroupByCode2WithHttpInfo(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerGetGroupByCode2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupByCode2(body: CustomerGetGroupByCodeRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerGetGroupByCode2(body, _options);
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
     * @param body 
     */
    public customerGetGroupById2WithHttpInfo(body: CustomerGetGroupByIdRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerGetGroupById2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGetGroupById2(body: CustomerGetGroupByIdRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerGetGroupById2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGrantPermissionsWithHttpInfo(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerGrantPermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGrantPermissions(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerGrantPermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGrantPermissions2WithHttpInfo(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerGrantPermissions2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerGrantPermissions2(body: CustomerGrantPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerGrantPermissions2(body, _options);
        return result.toPromise();
    }

    /**
     * ListConsents list all consents of a customer
     * @param body 
     */
    public customerListConsentsWithHttpInfo(body: CustomerListConsentsRequest, _options?: Configuration): Promise<HttpInfo<CustomerListConsentsResponse>> {
        const result = this.api.customerListConsentsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * ListConsents list all consents of a customer
     * @param body 
     */
    public customerListConsents(body: CustomerListConsentsRequest, _options?: Configuration): Promise<CustomerListConsentsResponse> {
        const result = this.api.customerListConsents(body, _options);
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
    public customerListCustomers2WithHttpInfo(body: CustomerListCustomersRequest, _options?: Configuration): Promise<HttpInfo<CustomerListCustomersResponse>> {
        const result = this.api.customerListCustomers2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListCustomers2(body: CustomerListCustomersRequest, _options?: Configuration): Promise<CustomerListCustomersResponse> {
        const result = this.api.customerListCustomers2(body, _options);
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
    public customerListGroups2WithHttpInfo(body: CustomerListGroupsRequest, _options?: Configuration): Promise<HttpInfo<CustomerListGroupsResponse>> {
        const result = this.api.customerListGroups2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerListGroups2(body: CustomerListGroupsRequest, _options?: Configuration): Promise<CustomerListGroupsResponse> {
        const result = this.api.customerListGroups2(body, _options);
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
    public customerRemoveCustomerFromGroup2WithHttpInfo(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerRemoveCustomerFromGroup2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveCustomerFromGroup2(body: CustomerRemoveCustomerFromGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerRemoveCustomerFromGroup2(body, _options);
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
     * @param body 
     */
    public customerRemoveDefaultAddress2WithHttpInfo(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerRemoveDefaultAddress2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRemoveDefaultAddress2(body: CustomerRemoveDefaultAddressRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerRemoveDefaultAddress2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRevokePermissionsWithHttpInfo(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerRevokePermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRevokePermissions(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerRevokePermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRevokePermissions2WithHttpInfo(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerRevokePermissions2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerRevokePermissions2(body: CustomerRevokePermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerRevokePermissions2(body, _options);
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
    public customerSearch2WithHttpInfo(body: CustomerSearchRequest, _options?: Configuration): Promise<HttpInfo<CustomerSearchResponse>> {
        const result = this.api.customerSearch2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSearch2(body: CustomerSearchRequest, _options?: Configuration): Promise<CustomerSearchResponse> {
        const result = this.api.customerSearch2(body, _options);
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
     * @param body 
     */
    public customerSetDefaultAddress2WithHttpInfo(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerSetDefaultAddress2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetDefaultAddress2(body: CustomerSetDefaultAddressRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerSetDefaultAddress2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetPermissionsWithHttpInfo(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerSetPermissionsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetPermissions(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerSetPermissions(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetPermissions2WithHttpInfo(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerSetPermissions2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerSetPermissions2(body: CustomerSetPermissionsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerSetPermissions2(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUnassignAgentWithHttpInfo(body: CustomerUnassignAgentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.customerUnassignAgentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUnassignAgent(body: CustomerUnassignAgentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.customerUnassignAgent(body, _options);
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
    public customerUnsubscribe2WithHttpInfo(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<HttpInfo<CustomerUnsubscribeResponse>> {
        const result = this.api.customerUnsubscribe2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUnsubscribe2(body: CustomerUnsubscribeRequest, _options?: Configuration): Promise<CustomerUnsubscribeResponse> {
        const result = this.api.customerUnsubscribe2(body, _options);
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
    public customerUpdate2WithHttpInfo(body: CustomerUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerCustomerResponse>> {
        const result = this.api.customerUpdate2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdate2(body: CustomerUpdateRequest, _options?: Configuration): Promise<CustomerCustomerResponse> {
        const result = this.api.customerUpdate2(body, _options);
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
    public customerUpdateAddress2WithHttpInfo(body: CustomerAddressUpdateRequest, _options?: Configuration): Promise<HttpInfo<CustomerAddressUpdateResponse>> {
        const result = this.api.customerUpdateAddress2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateAddress2(body: CustomerAddressUpdateRequest, _options?: Configuration): Promise<CustomerAddressUpdateResponse> {
        const result = this.api.customerUpdateAddress2(body, _options);
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
    public customerUpdateGroup2WithHttpInfo(body: CustomerUpdateGroupRequest, _options?: Configuration): Promise<HttpInfo<CustomerGroupResponse>> {
        const result = this.api.customerUpdateGroup2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateGroup2(body: CustomerUpdateGroupRequest, _options?: Configuration): Promise<CustomerGroupResponse> {
        const result = this.api.customerUpdateGroup2(body, _options);
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

    /**
     * @param body 
     */
    public customerUpdateSubscriber2WithHttpInfo(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Promise<HttpInfo<CustomerSubscriberResponse>> {
        const result = this.api.customerUpdateSubscriber2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public customerUpdateSubscriber2(body: CustomerUpdateSubscriberRequest, _options?: Configuration): Promise<CustomerSubscriberResponse> {
        const result = this.api.customerUpdateSubscriber2(body, _options);
        return result.toPromise();
    }


}



