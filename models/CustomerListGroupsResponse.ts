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

import { CustomerGroupResponse } from '../models/CustomerGroupResponse';
import { HttpFile } from '../http/http';

export class CustomerListGroupsResponse {
    'groups'?: Array<CustomerGroupResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<CustomerGroupResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerListGroupsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

