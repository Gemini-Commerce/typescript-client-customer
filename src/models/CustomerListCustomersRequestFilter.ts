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
 * @interface CustomerListCustomersRequestFilter
 */
export interface CustomerListCustomersRequestFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomerListCustomersRequestFilter
     */
    'genders'?: Array<string>;
    /**
     * 
     * @type {Array<ListCustomersRequestFilterDate>}
     * @memberof CustomerListCustomersRequestFilter
     */
    'createdAt'?: Array<ListCustomersRequestFilterDate>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomerListCustomersRequestFilter
     */
    'countries'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomerListCustomersRequestFilter
     */
    'agentGrn'?: string;
}
