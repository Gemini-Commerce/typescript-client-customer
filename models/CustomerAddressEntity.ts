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

import { CustomerAddressEntityKind } from '../models/CustomerAddressEntityKind';
import { CustomerEMFields } from '../models/CustomerEMFields';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class CustomerAddressEntity {
    'em'?: CustomerEMFields;
    'name'?: string;
    'surname'?: string;
    'street'?: string;
    'number'?: string;
    'zip'?: string;
    'city'?: string;
    'province'?: string;
    'phoneNumber'?: string;
    'fiscalCode'?: string;
    'vatNumber'?: string;
    'kind'?: CustomerAddressEntityKind;
    '_default'?: boolean;
    'country'?: string;
    'attributes'?: { [key: string]: ProtobufAny; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "em",
            "baseName": "em",
            "type": "CustomerEMFields",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "surname",
            "baseName": "surname",
            "type": "string",
            "format": ""
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "province",
            "baseName": "province",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "fiscalCode",
            "baseName": "fiscalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CustomerAddressEntityKind",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: ProtobufAny; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerAddressEntity.attributeTypeMap;
    }

    public constructor() {
    }
}



