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
 * @interface CustomerAddressEntity
 */
export interface CustomerAddressEntity {
    /**
     * 
     * @type {CustomerEMFields}
     * @memberof CustomerAddressEntity
     */
    'em'?: CustomerEMFields;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'surname'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'street'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'number'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'zip'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'province'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'fiscalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'vatNumber'?: string;
    /**
     * 
     * @type {CustomerAddressEntityKind}
     * @memberof CustomerAddressEntity
     */
    'kind'?: CustomerAddressEntityKind;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerAddressEntity
     */
    'default'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerAddressEntity
     */
    'country'?: string;
    /**
     * 
     * @type {{ [key: string]: ProtobufAny; }}
     * @memberof CustomerAddressEntity
     */
    'attributes'?: { [key: string]: ProtobufAny; };
}
