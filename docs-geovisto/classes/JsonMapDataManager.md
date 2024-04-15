[geovisto-map](../README.md) / [Exports](../modules.md) / JsonMapDataManager

# Class: JsonMapDataManager

A data wrapper which provides a basic flattening of JSON data structure.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDataManager`](AbstractMapDataManager.md)

  ↳ **`JsonMapDataManager`**

## Implements

- [`IMapDataManager`](../interfaces/IMapDataManager.md)

## Table of contents

### Constructors

- [constructor](JsonMapDataManager.md#constructor)

### Properties

- [dataDomains](JsonMapDataManager.md#datadomains)
- [dataRecords](JsonMapDataManager.md#datarecords)

### Methods

- [createDataDomains](JsonMapDataManager.md#createdatadomains)
- [createDataRecords](JsonMapDataManager.md#createdatarecords)
- [getDataRecordValues](JsonMapDataManager.md#getdatarecordvalues)
- [getDataRecords](JsonMapDataManager.md#getdatarecords)
- [getDataRecordsValues](JsonMapDataManager.md#getdatarecordsvalues)
- [getDomain](JsonMapDataManager.md#getdomain)
- [getDomainNames](JsonMapDataManager.md#getdomainnames)
- [getDomains](JsonMapDataManager.md#getdomains)
- [getOriginalData](JsonMapDataManager.md#getoriginaldata)
- [getValues](JsonMapDataManager.md#getvalues)
- [processDataDomainDescription](JsonMapDataManager.md#processdatadomaindescription)

## Constructors

### constructor

• **new JsonMapDataManager**(`data`): [`JsonMapDataManager`](JsonMapDataManager.md)

It creates JSON data manager

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`JsonMapDataManager`](JsonMapDataManager.md)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[constructor](AbstractMapDataManager.md#constructor)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L34)

## Properties

### dataDomains

• `Private` `Optional` **dataDomains**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

The list is initialized when required.

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L27)

___

### dataRecords

• `Private` `Optional` **dataRecords**: [`IMapData`](../modules.md#imapdata)

The list is initialized when required.

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L22)

## Methods

### createDataDomains

▸ **createDataDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

Help function which analyzes data and creates its metedata description.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:140](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L140)

___

### createDataRecords

▸ **createDataRecords**(`data`): [`IMapData`](../modules.md#imapdata)

Help function which converts data to the flat structure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:202](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L202)

___

### getDataRecordValues

▸ **getDataRecordValues**(`dataDomain`, `dataRecord`): `unknown`[]

It returns values stored of the selected data domain stored in the given data record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](../interfaces/IMapDataDomain.md) |
| `dataRecord` | [`IMapDataRecord`](../modules.md#imapdatarecord) |

#### Returns

`unknown`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDataRecordValues](../interfaces/IMapDataManager.md#getdatarecordvalues)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getDataRecordValues](AbstractMapDataManager.md#getdatarecordvalues)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L127)

___

### getDataRecords

▸ **getDataRecords**(): [`IMapData`](../modules.md#imapdata)

It returns preprocessed flattened data.

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDataRecords](../interfaces/IMapDataManager.md#getdatarecords)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getDataRecords](AbstractMapDataManager.md#getdatarecords)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L48)

___

### getDataRecordsValues

▸ **getDataRecordsValues**(`dataDomain`, `dataRecords`): `unknown`[]

It returns list of all values of the selected data domain
for the given subset of data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](../interfaces/IMapDataDomain.md) |
| `dataRecords` | [`IMapData`](../modules.md#imapdata) |

#### Returns

`unknown`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDataRecordsValues](../interfaces/IMapDataManager.md#getdatarecordsvalues)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getDataRecordsValues](AbstractMapDataManager.md#getdatarecordsvalues)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L102)

___

### getDomain

▸ **getDomain**(`name`): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the data domain which corresponds to the given string.

If data domain does not exists it creates a new one (to avoid undefined return value)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomain](../interfaces/IMapDataManager.md#getdomain)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getDomain](AbstractMapDataManager.md#getdomain)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L81)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

Help function which returns the list of data domain string name.

#### Returns

`string`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomainNames](../interfaces/IMapDataManager.md#getdomainnames)

#### Inherited from

[AbstractMapDataManager](AbstractMapDataManager.md).[getDomainNames](AbstractMapDataManager.md#getdomainnames)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L51)

___

### getDomains

▸ **getDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

It returns list of data domains (IMapDataDomain) representing data dimensions e. g.:
[
  [ 'value' ],
  [ 'source', 'ip' ],
  [ 'source', 'country' ],
  [ 'target', 'ip' ],
  [ 'target', 'country' ]
]

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomains](../interfaces/IMapDataManager.md#getdomains)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getDomains](AbstractMapDataManager.md#getdomains)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L66)

___

### getOriginalData

▸ **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getOriginalData](../interfaces/IMapDataManager.md#getoriginaldata)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getOriginalData](AbstractMapDataManager.md#getoriginaldata)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L41)

___

### getValues

▸ **getValues**(`dataDomain`): `unknown`[]

It returns list of all values of the selected data domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](../interfaces/IMapDataDomain.md) |

#### Returns

`unknown`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getValues](../interfaces/IMapDataManager.md#getvalues)

#### Overrides

[AbstractMapDataManager](AbstractMapDataManager.md).[getValues](AbstractMapDataManager.md#getvalues)

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L91)

___

### processDataDomainDescription

▸ **processDataDomainDescription**(`result`, `actRecord`, `domainDescription`, `i`): `void`

Static help function represents a step of recursive data processing searching data items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown`[] |
| `actRecord` | [`IMapDataRecordItem`](../modules.md#imapdatarecorditem) |
| `domainDescription` | `string`[] |
| `i` | `number` |

#### Returns

`void`

#### Defined in

[src/model/internal/data/json/JsonMapDataManager.ts:287](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataManager.ts#L287)
