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

import { ListCustomersRequestFilterDate } from '../models/ListCustomersRequestFilterDate';
import { HttpFile } from '../http/http';

export class CustomerListCustomersRequestFilter {
    'genders'?: Array<string>;
    'createdAt'?: Array<ListCustomersRequestFilterDate>;
    'countries'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "genders",
            "baseName": "genders",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Array<ListCustomersRequestFilterDate>",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerListCustomersRequestFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

