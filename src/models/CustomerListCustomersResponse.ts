/* tslint:disable */
/* eslint-disable */
/**
 * CDP Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface CustomerListCustomersResponse
 */
export interface CustomerListCustomersResponse {
    /**
     * 
     * @type {Array<CustomerCustomerResponse>}
     * @memberof CustomerListCustomersResponse
     */
    'customers'?: Array<CustomerCustomerResponse>;
    /**
     * 
     * @type {string}
     * @memberof CustomerListCustomersResponse
     */
    'nextPageToken'?: string;
}
