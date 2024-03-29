/**
 * CDP Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CustomerCreateConsentRequest } from '../models/CustomerCreateConsentRequest';
import { CustomerEMFields } from '../models/CustomerEMFields';
import { CustomerNewsletterRequest } from '../models/CustomerNewsletterRequest';
import { HttpFile } from '../http/http';

export class CustomerSubscriberRequest {
    'name'?: string;
    'lastname'?: string;
    'email'?: string;
    'country'?: string;
    'gender'?: string;
    'birthdate'?: Date;
    'nationality'?: string;
    'em'?: CustomerEMFields;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'newsletters'?: Array<CustomerNewsletterRequest>;
    'market'?: string;
    'preferredLocale'?: string;
    'consent'?: CustomerCreateConsentRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastname",
            "baseName": "lastname",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthdate",
            "baseName": "birthdate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string",
            "format": ""
        },
        {
            "name": "em",
            "baseName": "em",
            "type": "CustomerEMFields",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "newsletters",
            "baseName": "newsletters",
            "type": "Array<CustomerNewsletterRequest>",
            "format": ""
        },
        {
            "name": "market",
            "baseName": "market",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredLocale",
            "baseName": "preferredLocale",
            "type": "string",
            "format": ""
        },
        {
            "name": "consent",
            "baseName": "consent",
            "type": "CustomerCreateConsentRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerSubscriberRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

