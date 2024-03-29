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

import { CustomerSubscriberResponseWithNewsletterRequest } from '../models/CustomerSubscriberResponseWithNewsletterRequest';
import { HttpFile } from '../http/http';

export class CustomerUpdateSubscriberRequest {
    'tenantId'?: string;
    'subscriber'?: CustomerSubscriberResponseWithNewsletterRequest;
    'fieldMask'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriber",
            "baseName": "subscriber",
            "type": "CustomerSubscriberResponseWithNewsletterRequest",
            "format": ""
        },
        {
            "name": "fieldMask",
            "baseName": "fieldMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerUpdateSubscriberRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

