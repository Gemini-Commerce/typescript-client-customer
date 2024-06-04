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

import { BulkUpdateRequestAction } from '../models/BulkUpdateRequestAction';
import { HttpFile } from '../http/http';

export class CustomerBulkUpdateRequest {
    'tenantId'?: string;
    'customerIds'?: Array<string>;
    'action'?: BulkUpdateRequestAction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerIds",
            "baseName": "customerIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "BulkUpdateRequestAction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerBulkUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


