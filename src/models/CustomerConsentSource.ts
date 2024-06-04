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
 */
export const CustomerConsentSource = {
    Unknown: 'CONSENT_SOURCE_UNKNOWN',
    Frontend: 'CONSENT_SOURCE_FRONTEND',
    Backoffice: 'CONSENT_SOURCE_BACKOFFICE',
    Backend: 'CONSENT_SOURCE_BACKEND'
} as const;
export type CustomerConsentSource = typeof CustomerConsentSource[keyof typeof CustomerConsentSource];


export function CustomerConsentSourceFromJSON(json: any): CustomerConsentSource {
    return CustomerConsentSourceFromJSONTyped(json, false);
}

export function CustomerConsentSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerConsentSource {
    return json as CustomerConsentSource;
}

export function CustomerConsentSourceToJSON(value?: CustomerConsentSource | null): any {
    return value as any;
}
