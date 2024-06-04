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
export const PasswordPasswordType = {
    Unknown: 'PASSWORD_TYPE_UNKNOWN',
    Magento1: 'PASSWORD_TYPE_MAGENTO1',
    Sylius: 'PASSWORD_TYPE_SYLIUS',
    Magento2: 'PASSWORD_TYPE_MAGENTO2'
} as const;
export type PasswordPasswordType = typeof PasswordPasswordType[keyof typeof PasswordPasswordType];


export function PasswordPasswordTypeFromJSON(json: any): PasswordPasswordType {
    return PasswordPasswordTypeFromJSONTyped(json, false);
}

export function PasswordPasswordTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PasswordPasswordType {
    return json as PasswordPasswordType;
}

export function PasswordPasswordTypeToJSON(value?: PasswordPasswordType | null): any {
    return value as any;
}
