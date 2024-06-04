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
 * @interface CustomerCreateRequest
 */
export interface CustomerCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {CustomerEMFields}
     * @memberof CustomerCreateRequest
     */
    'em'?: CustomerEMFields;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'surname'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'email'?: string;
    /**
     * 
     * @type {Date}
     * @memberof CustomerCreateRequest
     */
    'birthdate'?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'gender'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerCreateRequest
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'source'?: string;
    /**
     * 
     * @type {Array<CustomerAddressEntity>}
     * @memberof CustomerCreateRequest
     */
    'addresses'?: Array<CustomerAddressEntity>;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'nationality'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomerCreateRequest
     */
    'groups'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerCreateRequest
     */
    'deleted'?: boolean;
    /**
     * 
     * @type {Array<CustomerNewsletterRequest>}
     * @memberof CustomerCreateRequest
     */
    'newsletters'?: Array<CustomerNewsletterRequest>;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerCreateRequest
     */
    'doNotNotify'?: boolean;
    /**
     * 
     * @type {{ [key: string]: ProtobufAny; }}
     * @memberof CustomerCreateRequest
     */
    'attributes'?: { [key: string]: ProtobufAny; };
    /**
     * 
     * @type {CustomerPassword}
     * @memberof CustomerCreateRequest
     */
    'migratedPassword'?: CustomerPassword;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'market'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'preferredLocale'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'taxCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'certifiedEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'sdiCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'fiscalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'companyName'?: string;
    /**
     * 
     * @type {object}
     * @memberof CustomerCreateRequest
     */
    'additionalInfo'?: object;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CustomerCreateRequest
     */
    'externalIds'?: { [key: string]: string; };
    /**
     * 
     * @type {CustomerCreateConsentRequest}
     * @memberof CustomerCreateRequest
     */
    'consent'?: CustomerCreateConsentRequest;
    /**
     * 
     * @type {string}
     * @memberof CustomerCreateRequest
     */
    'aggregationId'?: string;
}