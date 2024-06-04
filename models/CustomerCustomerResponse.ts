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

import { CustomerAddressCustomerResponse } from '../models/CustomerAddressCustomerResponse';
import { CustomerEMFields } from '../models/CustomerEMFields';
import { CustomerNewsletterResponse } from '../models/CustomerNewsletterResponse';
import { CustomerPassword } from '../models/CustomerPassword';
import { CustomerPermission } from '../models/CustomerPermission';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class CustomerCustomerResponse {
    'em'?: CustomerEMFields;
    'grn'?: string;
    'id'?: string;
    'name'?: string;
    'surname'?: string;
    'email'?: string;
    'birthdate'?: Date;
    'gender'?: string;
    'enabled'?: boolean;
    'source'?: string;
    'addresses'?: Array<CustomerAddressCustomerResponse>;
    'defaultBillingAddressId'?: string;
    'defaultShippingAddressId'?: string;
    'phoneNumber'?: string;
    'nationality'?: string;
    'preferredLocale'?: string;
    'groups'?: Array<string>;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'deleted'?: boolean;
    'deletedAt'?: Date;
    'newsletters'?: Array<CustomerNewsletterResponse>;
    'migratedPassword'?: CustomerPassword;
    'attributes'?: { [key: string]: ProtobufAny; };
    'taxCode'?: string;
    'certifiedEmail'?: string;
    'market'?: string;
    'permissions'?: Array<CustomerPermission>;
    'externalIds'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "em",
            "baseName": "em",
            "type": "CustomerEMFields",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
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
            "name": "email",
            "baseName": "email",
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
            "name": "gender",
            "baseName": "gender",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<CustomerAddressCustomerResponse>",
            "format": ""
        },
        {
            "name": "defaultBillingAddressId",
            "baseName": "defaultBillingAddressId",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultShippingAddressId",
            "baseName": "defaultShippingAddressId",
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
            "name": "nationality",
            "baseName": "nationality",
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
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
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
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "newsletters",
            "baseName": "newsletters",
            "type": "Array<CustomerNewsletterResponse>",
            "format": ""
        },
        {
            "name": "migratedPassword",
            "baseName": "migratedPassword",
            "type": "CustomerPassword",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: ProtobufAny; }",
            "format": ""
        },
        {
            "name": "taxCode",
            "baseName": "taxCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "certifiedEmail",
            "baseName": "certifiedEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "market",
            "baseName": "market",
            "type": "string",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<CustomerPermission>",
            "format": ""
        },
        {
            "name": "externalIds",
            "baseName": "externalIds",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerCustomerResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

