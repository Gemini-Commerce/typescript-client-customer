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
 * @interface CustomerAssignAgentRequest
 */
export interface CustomerAssignAgentRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerAssignAgentRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAssignAgentRequest
     */
    'agentGrn'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomerAssignAgentRequest
     */
    'customerIds'?: Array<string>;
}