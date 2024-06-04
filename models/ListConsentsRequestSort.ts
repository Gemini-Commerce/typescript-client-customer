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

import { SortSortField } from '../models/SortSortField';
import { SortSortOrder } from '../models/SortSortOrder';
import { HttpFile } from '../http/http';

export class ListConsentsRequestSort {
    'field'?: SortSortField;
    'order'?: SortSortOrder;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "SortSortField",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortSortOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListConsentsRequestSort.attributeTypeMap;
    }

    public constructor() {
    }
}



