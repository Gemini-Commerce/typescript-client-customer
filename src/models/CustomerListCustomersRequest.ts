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
 * @interface CustomerListCustomersRequest
 */
export interface CustomerListCustomersRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerListCustomersRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerListCustomersRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerListCustomersRequest
     */
    'pageToken'?: string;
    /**
     * 
     * @type {CustomerListCustomersRequestFilter}
     * @memberof CustomerListCustomersRequest
     */
    'filters'?: CustomerListCustomersRequestFilter;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomerListCustomersRequest
     */
    'filterMask'?: Array<string>;
}
