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
 * @interface CustomerListGroupsRequest
 */
export interface CustomerListGroupsRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerListGroupsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerListGroupsRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerListGroupsRequest
     */
    'pageToken'?: string;
    /**
     * 
     * @type {CustomerListGroupsRequestFilter}
     * @memberof CustomerListGroupsRequest
     */
    'filter'?: CustomerListGroupsRequestFilter;
    /**
     * 
     * @type {string}
     * @memberof CustomerListGroupsRequest
     */
    'filtersMask'?: string;
}
