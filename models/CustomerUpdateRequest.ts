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

import { CustomerUpdateRequestPayload } from '../models/CustomerUpdateRequestPayload';
import { HttpFile } from '../http/http';

export class CustomerUpdateRequest {
    'tenantId'?: string;
    'customerId'?: string;
    'payload'?: CustomerUpdateRequestPayload;
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
            "name": "customerId",
            "baseName": "customerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "CustomerUpdateRequestPayload",
            "format": ""
        },
        {
            "name": "fieldMask",
            "baseName": "fieldMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

