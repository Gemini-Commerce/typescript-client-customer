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
 * @interface CustomerRevokePermissionsRequest
 */
export interface CustomerRevokePermissionsRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerRevokePermissionsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerRevokePermissionsRequest
     */
    'customerId'?: string;
    /**
     * 
     * @type {Array<CustomerPermission>}
     * @memberof CustomerRevokePermissionsRequest
     */
    'permissions'?: Array<CustomerPermission>;
}
