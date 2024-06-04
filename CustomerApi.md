# .CustomerApi

All URIs are relative to *https://cdp.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customerAcquireSubscriber**](CustomerApi.md#customerAcquireSubscriber) | **POST** /customer.Customer/AcquireSubscriber | 
[**customerAcquireUnsubscriber**](CustomerApi.md#customerAcquireUnsubscriber) | **POST** /customer.Customer/AcquireUnsubscriber | 
[**customerAddCustomerToGroup**](CustomerApi.md#customerAddCustomerToGroup) | **POST** /customer.Customer/AddCustomerToGroup | 
[**customerBulkUpdate**](CustomerApi.md#customerBulkUpdate) | **POST** /customer.Customer/BulkUpdate | 
[**customerCreate**](CustomerApi.md#customerCreate) | **POST** /customer.Customer/Create | 
[**customerCreateAddress**](CustomerApi.md#customerCreateAddress) | **POST** /customer.Customer/CreateAddress | 
[**customerCreateGroup**](CustomerApi.md#customerCreateGroup) | **POST** /customer.Customer/CreateGroup | 
[**customerCreateSubscriber**](CustomerApi.md#customerCreateSubscriber) | **POST** /customer.Customer/CreateSubscriber | 
[**customerDeleteAddress**](CustomerApi.md#customerDeleteAddress) | **POST** /customer.Customer/DeleteAddress | 
[**customerDeleteGroup**](CustomerApi.md#customerDeleteGroup) | **POST** /customer.Customer/DeleteGroup | 
[**customerFind**](CustomerApi.md#customerFind) | **POST** /customer.Customer/Find | 
[**customerFindByEmail**](CustomerApi.md#customerFindByEmail) | **POST** /customer.Customer/FindByEmail | 
[**customerFindById**](CustomerApi.md#customerFindById) | **POST** /customer.Customer/FindById | 
[**customerFindSubscriberByEmail**](CustomerApi.md#customerFindSubscriberByEmail) | **POST** /customer.Customer/FindSubscriberByEmail | 
[**customerFindSubscriberById**](CustomerApi.md#customerFindSubscriberById) | **POST** /customer.Customer/FindSubscriberById | 
[**customerGetGroupByCode**](CustomerApi.md#customerGetGroupByCode) | **POST** /customer.Customer/GetGroupByCode | 
[**customerGetGroupById**](CustomerApi.md#customerGetGroupById) | **POST** /customer.Customer/GetGroupById | 
[**customerGrantPermissions**](CustomerApi.md#customerGrantPermissions) | **POST** /customer.Customer/GrantPermissions | GrantPermissions add permissions to a customer
[**customerListCustomers**](CustomerApi.md#customerListCustomers) | **POST** /customer.Customer/ListCustomers | 
[**customerListGroups**](CustomerApi.md#customerListGroups) | **POST** /customer.Customer/ListGroups | 
[**customerRemoveCustomerFromGroup**](CustomerApi.md#customerRemoveCustomerFromGroup) | **POST** /customer.Customer/RemoveCustomerFromGroup | 
[**customerRemoveDefaultAddress**](CustomerApi.md#customerRemoveDefaultAddress) | **POST** /customer.Customer/RemoveDefaultAddress | 
[**customerRevokePermissions**](CustomerApi.md#customerRevokePermissions) | **POST** /customer.Customer/RevokePermissions | RevokePermissions remove permissions from a customer
[**customerSearch**](CustomerApi.md#customerSearch) | **POST** /customer.Customer/Search | 
[**customerSetDefaultAddress**](CustomerApi.md#customerSetDefaultAddress) | **POST** /customer.Customer/SetDefaultAddress | 
[**customerSetPermissions**](CustomerApi.md#customerSetPermissions) | **POST** /customer.Customer/SetPermissions | SetPermissions set permissions to a customer
[**customerUnsubscribe**](CustomerApi.md#customerUnsubscribe) | **POST** /customer.Customer/Unsubscribe | 
[**customerUpdate**](CustomerApi.md#customerUpdate) | **POST** /customer.Customer/Update | 
[**customerUpdateAddress**](CustomerApi.md#customerUpdateAddress) | **POST** /customer.Customer/UpdateAddress | 
[**customerUpdateGroup**](CustomerApi.md#customerUpdateGroup) | **POST** /customer.Customer/UpdateGroup | 
[**customerUpdateSubscriber**](CustomerApi.md#customerUpdateSubscriber) | **POST** /customer.Customer/UpdateSubscriber | 


# **customerAcquireSubscriber**
> CustomerSubscriberResponse customerAcquireSubscriber(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerAcquireSubscriberRequest = {
  // CustomerCreateSubscriberRequest
  body: {
    tenantId: "tenantId_example",
    subscriber: {
      name: "name_example",
      lastname: "lastname_example",
      email: "email_example",
      country: "country_example",
      gender: "gender_example",
      birthdate: new Date('1970-01-01T00:00:00.00Z'),
      nationality: "nationality_example",
      em: {
        tenantId: "tenantId_example",
        entityType: "entityType_example",
        entityCode: "entityCode_example",
      },
      createdAt: new Date('1970-01-01T00:00:00.00Z'),
      updatedAt: new Date('1970-01-01T00:00:00.00Z'),
      newsletters: [
        {
          newsletterGrn: "newsletterGrn_example",
          name: "name_example",
          subscribed: true,
        },
      ],
      market: "market_example",
      preferredLocale: "preferredLocale_example",
    },
  },
};

apiInstance.customerAcquireSubscriber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerCreateSubscriberRequest**|  |


### Return type

**CustomerSubscriberResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerAcquireUnsubscriber**
> CustomerUnsubscribeResponse customerAcquireUnsubscriber(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerAcquireUnsubscriberRequest = {
  // CustomerUnsubscribeRequest
  body: {
    tenantId: "tenantId_example",
    email: "email_example",
    newsletterGrn: [
      "newsletterGrn_example",
    ],
  },
};

apiInstance.customerAcquireUnsubscriber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerUnsubscribeRequest**|  |


### Return type

**CustomerUnsubscribeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerAddCustomerToGroup**
> CustomerGroupResponse customerAddCustomerToGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerAddCustomerToGroupRequest = {
  // CustomerAddCustomerToGroupRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
    customerId: "customerId_example",
  },
};

apiInstance.customerAddCustomerToGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerAddCustomerToGroupRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerBulkUpdate**
> CustomerBulkUpdateResponse customerBulkUpdate(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerBulkUpdateRequest = {
  // CustomerBulkUpdateRequest
  body: {
    tenantId: "tenantId_example",
    customerIds: [
      "customerIds_example",
    ],
    action: "ENABLE",
  },
};

apiInstance.customerBulkUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerBulkUpdateRequest**|  |


### Return type

**CustomerBulkUpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerCreate**
> CustomerCustomerResponse customerCreate(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerCreateRequest = {
  // CustomerCreateRequest
  body: {
    tenantId: "tenantId_example",
    em: {
      tenantId: "tenantId_example",
      entityType: "entityType_example",
      entityCode: "entityCode_example",
    },
    name: "name_example",
    surname: "surname_example",
    email: "email_example",
    birthdate: new Date('1970-01-01T00:00:00.00Z'),
    gender: "gender_example",
    enabled: true,
    source: "source_example",
    addresses: [
      {
        em: {
          tenantId: "tenantId_example",
          entityType: "entityType_example",
          entityCode: "entityCode_example",
        },
        name: "name_example",
        surname: "surname_example",
        street: "street_example",
        number: "number_example",
        zip: "zip_example",
        city: "city_example",
        province: "province_example",
        phoneNumber: "phoneNumber_example",
        fiscalCode: "fiscalCode_example",
        vatNumber: "vatNumber_example",
        kind: "SHIPPING",
        _default: true,
        country: "country_example",
        attributes: {
          "key": {
            type: "type_example",
            value: 'YQ==',
          },
        },
      },
    ],
    phoneNumber: "phoneNumber_example",
    nationality: "nationality_example",
    groups: [
      "groups_example",
    ],
    deleted: true,
    newsletters: [
      {
        newsletterGrn: "newsletterGrn_example",
        name: "name_example",
        subscribed: true,
      },
    ],
    doNotNotify: true,
    attributes: {
      "key": {
        type: "type_example",
        value: 'YQ==',
      },
    },
    migratedPassword: {
      data: {
        "key": "key_example",
      },
      enabled: true,
      type: "PASSWORD_TYPE_UNKNOWN",
    },
    market: "market_example",
    preferredLocale: "preferredLocale_example",
    taxCode: "taxCode_example",
    certifiedEmail: "certifiedEmail_example",
    externalIds: {
      "key": "key_example",
    },
  },
};

apiInstance.customerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerCreateRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerCreateAddress**
> CustomerAddressCustomerResponse customerCreateAddress(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerCreateAddressRequest = {
  // CustomerAddressCreateRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    em: {
      tenantId: "tenantId_example",
      entityType: "entityType_example",
      entityCode: "entityCode_example",
    },
    name: "name_example",
    surname: "surname_example",
    street: "street_example",
    number: "number_example",
    zip: "zip_example",
    city: "city_example",
    province: "province_example",
    phoneNumber: "phoneNumber_example",
    fiscalCode: "fiscalCode_example",
    vatNumber: "vatNumber_example",
    kind: "SHIPPING",
    _default: true,
    country: "country_example",
    attributes: {
      "key": {
        type: "type_example",
        value: 'YQ==',
      },
    },
  },
};

apiInstance.customerCreateAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerAddressCreateRequest**|  |


### Return type

**CustomerAddressCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerCreateGroup**
> CustomerGroupResponse customerCreateGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerCreateGroupRequest = {
  // CustomerCreateGroupRequest
  body: {
    name: "name_example",
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.customerCreateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerCreateGroupRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerCreateSubscriber**
> CustomerSubscriberResponse customerCreateSubscriber(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerCreateSubscriberRequest = {
  // CustomerCreateSubscriberRequest
  body: {
    tenantId: "tenantId_example",
    subscriber: {
      name: "name_example",
      lastname: "lastname_example",
      email: "email_example",
      country: "country_example",
      gender: "gender_example",
      birthdate: new Date('1970-01-01T00:00:00.00Z'),
      nationality: "nationality_example",
      em: {
        tenantId: "tenantId_example",
        entityType: "entityType_example",
        entityCode: "entityCode_example",
      },
      createdAt: new Date('1970-01-01T00:00:00.00Z'),
      updatedAt: new Date('1970-01-01T00:00:00.00Z'),
      newsletters: [
        {
          newsletterGrn: "newsletterGrn_example",
          name: "name_example",
          subscribed: true,
        },
      ],
      market: "market_example",
      preferredLocale: "preferredLocale_example",
    },
  },
};

apiInstance.customerCreateSubscriber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerCreateSubscriberRequest**|  |


### Return type

**CustomerSubscriberResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerDeleteAddress**
> CustomerAddressDeleteResponse customerDeleteAddress(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerDeleteAddressRequest = {
  // CustomerAddressDeleteRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    addressId: "addressId_example",
  },
};

apiInstance.customerDeleteAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerAddressDeleteRequest**|  |


### Return type

**CustomerAddressDeleteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerDeleteGroup**
> CustomerDeleteGroupResponse customerDeleteGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerDeleteGroupRequest = {
  // CustomerDeleteGroupRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
  },
};

apiInstance.customerDeleteGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerDeleteGroupRequest**|  |


### Return type

**CustomerDeleteGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerFind**
> CustomerFindManyResponse customerFind(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerFindRequest = {
  // CustomerFindManyRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    filter: {
      newsletter: true,
    },
    filterMask: [
      "filterMask_example",
    ],
  },
};

apiInstance.customerFind(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerFindManyRequest**|  |


### Return type

**CustomerFindManyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerFindByEmail**
> CustomerCustomerResponse customerFindByEmail(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerFindByEmailRequest = {
  // CustomerFindByEmailRequest
  body: {
    tenantId: "tenantId_example",
    email: "email_example",
  },
};

apiInstance.customerFindByEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerFindByEmailRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerFindById**
> CustomerCustomerResponse customerFindById(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerFindByIdRequest = {
  // CustomerFindByIdRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.customerFindById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerFindByIdRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerFindSubscriberByEmail**
> CustomerSubscriberResponse customerFindSubscriberByEmail(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerFindSubscriberByEmailRequest = {
  // CustomerFindSubscriberByEmailRequest
  body: {
    tenantId: "tenantId_example",
    subscriberEmail: "subscriberEmail_example",
  },
};

apiInstance.customerFindSubscriberByEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerFindSubscriberByEmailRequest**|  |


### Return type

**CustomerSubscriberResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerFindSubscriberById**
> CustomerSubscriberResponse customerFindSubscriberById(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerFindSubscriberByIdRequest = {
  // CustomerFindSubscriberByIdRequest
  body: {
    tenantId: "tenantId_example",
    subscriberId: "subscriberId_example",
  },
};

apiInstance.customerFindSubscriberById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerFindSubscriberByIdRequest**|  |


### Return type

**CustomerSubscriberResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerGetGroupByCode**
> CustomerGroupResponse customerGetGroupByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerGetGroupByCodeRequest = {
  // CustomerGetGroupByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.customerGetGroupByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerGetGroupByCodeRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerGetGroupById**
> CustomerGroupResponse customerGetGroupById(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerGetGroupByIdRequest = {
  // CustomerGetGroupByIdRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
  },
};

apiInstance.customerGetGroupById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerGetGroupByIdRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerGrantPermissions**
> any customerGrantPermissions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerGrantPermissionsRequest = {
  // CustomerGrantPermissionsRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    permissions: [
      "PERMISSION_UNKNOWN",
    ],
  },
};

apiInstance.customerGrantPermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerGrantPermissionsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerListCustomers**
> CustomerListCustomersResponse customerListCustomers(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerListCustomersRequest = {
  // CustomerListCustomersRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    filters: {
      genders: [
        "genders_example",
      ],
      createdAt: [
        {
          _from: new Date('1970-01-01T00:00:00.00Z'),
          to: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      countries: [
        "countries_example",
      ],
    },
    filterMask: [
      "filterMask_example",
    ],
  },
};

apiInstance.customerListCustomers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerListCustomersRequest**|  |


### Return type

**CustomerListCustomersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerListGroups**
> CustomerListGroupsResponse customerListGroups(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerListGroupsRequest = {
  // CustomerListGroupsRequest
  body: {
    tenantId: "tenantId_example",
  },
};

apiInstance.customerListGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerListGroupsRequest**|  |


### Return type

**CustomerListGroupsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerRemoveCustomerFromGroup**
> CustomerGroupResponse customerRemoveCustomerFromGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerRemoveCustomerFromGroupRequest = {
  // CustomerRemoveCustomerFromGroupRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
    customerId: "customerId_example",
  },
};

apiInstance.customerRemoveCustomerFromGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerRemoveCustomerFromGroupRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerRemoveDefaultAddress**
> CustomerCustomerResponse customerRemoveDefaultAddress(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerRemoveDefaultAddressRequest = {
  // CustomerRemoveDefaultAddressRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    addressId: "addressId_example",
  },
};

apiInstance.customerRemoveDefaultAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerRemoveDefaultAddressRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerRevokePermissions**
> any customerRevokePermissions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerRevokePermissionsRequest = {
  // CustomerRevokePermissionsRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    permissions: [
      "PERMISSION_UNKNOWN",
    ],
  },
};

apiInstance.customerRevokePermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerRevokePermissionsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerSearch**
> CustomerSearchResponse customerSearch(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerSearchRequest = {
  // CustomerSearchRequest
  body: {
    tenantId: "tenantId_example",
    query: "query_example",
    groupId: "groupId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    filter: {
      newsletter: true,
    },
    filterMask: [
      "filterMask_example",
    ],
  },
};

apiInstance.customerSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerSearchRequest**|  |


### Return type

**CustomerSearchResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerSetDefaultAddress**
> CustomerCustomerResponse customerSetDefaultAddress(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerSetDefaultAddressRequest = {
  // CustomerSetDefaultAddressRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    addressId: "addressId_example",
  },
};

apiInstance.customerSetDefaultAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerSetDefaultAddressRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerSetPermissions**
> any customerSetPermissions(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerSetPermissionsRequest = {
  // CustomerSetPermissionsRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    permissions: [
      "PERMISSION_UNKNOWN",
    ],
  },
};

apiInstance.customerSetPermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerSetPermissionsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerUnsubscribe**
> CustomerUnsubscribeResponse customerUnsubscribe(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerUnsubscribeRequest = {
  // CustomerUnsubscribeRequest
  body: {
    tenantId: "tenantId_example",
    email: "email_example",
    newsletterGrn: [
      "newsletterGrn_example",
    ],
  },
};

apiInstance.customerUnsubscribe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerUnsubscribeRequest**|  |


### Return type

**CustomerUnsubscribeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerUpdate**
> CustomerCustomerResponse customerUpdate(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerUpdateRequest = {
  // CustomerUpdateRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    payload: {
      em: {
        tenantId: "tenantId_example",
        entityType: "entityType_example",
        entityCode: "entityCode_example",
      },
      name: "name_example",
      surname: "surname_example",
      email: "email_example",
      birthdate: new Date('1970-01-01T00:00:00.00Z'),
      gender: "gender_example",
      enabled: true,
      source: "source_example",
      addresses: [
        {
          em: {
            tenantId: "tenantId_example",
            entityType: "entityType_example",
            entityCode: "entityCode_example",
          },
          name: "name_example",
          surname: "surname_example",
          street: "street_example",
          number: "number_example",
          zip: "zip_example",
          city: "city_example",
          province: "province_example",
          phoneNumber: "phoneNumber_example",
          fiscalCode: "fiscalCode_example",
          vatNumber: "vatNumber_example",
          kind: "SHIPPING",
          _default: true,
          country: "country_example",
          attributes: {
            "key": {
              type: "type_example",
              value: 'YQ==',
            },
          },
        },
      ],
      defaultBillingAddressId: "defaultBillingAddressId_example",
      defaultShippingAddressId: "defaultShippingAddressId_example",
      phoneNumber: "phoneNumber_example",
      nationality: "nationality_example",
      groups: [
        "groups_example",
      ],
      deleted: true,
      newsletters: [
        {
          newsletterGrn: "newsletterGrn_example",
          name: "name_example",
          subscribed: true,
        },
      ],
      attributes: {
        "key": {
          type: "type_example",
          value: 'YQ==',
        },
      },
      migratedPassword: {
        data: {
          "key": "key_example",
        },
        enabled: true,
        type: "PASSWORD_TYPE_UNKNOWN",
      },
      preferredLocale: "preferredLocale_example",
      taxCode: "taxCode_example",
      certifiedEmail: "certifiedEmail_example",
      market: "market_example",
      externalIds: {
        "key": "key_example",
      },
    },
    fieldMask: [
      "fieldMask_example",
    ],
  },
};

apiInstance.customerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerUpdateRequest**|  |


### Return type

**CustomerCustomerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerUpdateAddress**
> CustomerAddressUpdateResponse customerUpdateAddress(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerUpdateAddressRequest = {
  // CustomerAddressUpdateRequest
  body: {
    tenantId: "tenantId_example",
    customerId: "customerId_example",
    id: "id_example",
    address: {
      em: {
        tenantId: "tenantId_example",
        entityType: "entityType_example",
        entityCode: "entityCode_example",
      },
      name: "name_example",
      surname: "surname_example",
      street: "street_example",
      number: "number_example",
      zip: "zip_example",
      city: "city_example",
      province: "province_example",
      phoneNumber: "phoneNumber_example",
      fiscalCode: "fiscalCode_example",
      vatNumber: "vatNumber_example",
      kind: "SHIPPING",
      _default: true,
      country: "country_example",
      attributes: {
        "key": {
          type: "type_example",
          value: 'YQ==',
        },
      },
    },
    fieldMask: [
      "fieldMask_example",
    ],
  },
};

apiInstance.customerUpdateAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerAddressUpdateRequest**|  |


### Return type

**CustomerAddressUpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerUpdateGroup**
> CustomerGroupResponse customerUpdateGroup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerUpdateGroupRequest = {
  // CustomerUpdateGroupRequest
  body: {
    tenantId: "tenantId_example",
    groupId: "groupId_example",
    payload: {
      name: "name_example",
    },
    fieldMask: [
      "fieldMask_example",
    ],
  },
};

apiInstance.customerUpdateGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerUpdateGroupRequest**|  |


### Return type

**CustomerGroupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **customerUpdateSubscriber**
> CustomerSubscriberResponse customerUpdateSubscriber(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerApi(configuration);

let body:.CustomerApiCustomerUpdateSubscriberRequest = {
  // CustomerUpdateSubscriberRequest
  body: {
    tenantId: "tenantId_example",
    subscriber: {
      id: "id_example",
      name: "name_example",
      lastname: "lastname_example",
      email: "email_example",
      country: "country_example",
      gender: "gender_example",
      birthdate: new Date('1970-01-01T00:00:00.00Z'),
      nationality: "nationality_example",
      em: {
        tenantId: "tenantId_example",
        entityType: "entityType_example",
        entityCode: "entityCode_example",
      },
      preferredLocale: "preferredLocale_example",
      createdAt: new Date('1970-01-01T00:00:00.00Z'),
      updatedAt: new Date('1970-01-01T00:00:00.00Z'),
      newsletters: [
        {
          newsletterGrn: "newsletterGrn_example",
          name: "name_example",
          subscribed: true,
        },
      ],
    },
    fieldMask: [
      "fieldMask_example",
    ],
  },
};

apiInstance.customerUpdateSubscriber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CustomerUpdateSubscriberRequest**|  |


### Return type

**CustomerSubscriberResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


