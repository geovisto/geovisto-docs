[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapDataManager

# Class: AbstractMapDataManager

The class wraps data used by the map, its metadata and functions to acquire data items.

**`Author`**

Jiri Hynek

## Hierarchy

- **`AbstractMapDataManager`**

  ↳ [`JsonMapDataManager`](JsonMapDataManager.md)

## Implements

- [`IMapDataManager`](../interfaces/IMapDataManager.md)

## Table of contents

### Constructors

- [constructor](AbstractMapDataManager.md#constructor)

### Properties

- [data](AbstractMapDataManager.md#data)

### Methods

- [getDataRecordValues](AbstractMapDataManager.md#getdatarecordvalues)
- [getDataRecords](AbstractMapDataManager.md#getdatarecords)
- [getDataRecordsValues](AbstractMapDataManager.md#getdatarecordsvalues)
- [getDomain](AbstractMapDataManager.md#getdomain)
- [getDomainNames](AbstractMapDataManager.md#getdomainnames)
- [getDomains](AbstractMapDataManager.md#getdomains)
- [getOriginalData](AbstractMapDataManager.md#getoriginaldata)
- [getValues](AbstractMapDataManager.md#getvalues)

## Constructors

### constructor

• **new AbstractMapDataManager**(`data`): [`AbstractMapDataManager`](AbstractMapDataManager.md)

It initializes the data wrapper providing a basic API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

[`AbstractMapDataManager`](AbstractMapDataManager.md)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L20)

## Properties

### data

• `Private` **data**: `unknown`

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L13)

## Methods

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

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L92)

___

### getDataRecords

▸ **getDataRecords**(): [`IMapData`](../modules.md#imapdata)

It returns the preprocessed data as a list of data reconds of the *same* object type.

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDataRecords](../interfaces/IMapDataManager.md#getdatarecords)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L34)

___

### getDataRecordsValues

▸ **getDataRecordsValues**(`dataDomain`, `data`): `unknown`[]

It returns list of all values of the selected data domain stored in the given data records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](../interfaces/IMapDataDomain.md) |
| `data` | [`IMapData`](../modules.md#imapdata) |

#### Returns

`unknown`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDataRecordsValues](../interfaces/IMapDataManager.md#getdatarecordsvalues)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:84](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L84)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the data domain which corresponds to the given string
or creates a new one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomain](../interfaces/IMapDataManager.md#getdomain)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L66)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

Help function which returns the list of data domain string name.

#### Returns

`string`[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomainNames](../interfaces/IMapDataManager.md#getdomainnames)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L51)

___

### getDomains

▸ **getDomains**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

It returns list of data domains.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)[]

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getDomains](../interfaces/IMapDataManager.md#getdomains)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L39)

___

### getOriginalData

▸ **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Implementation of

[IMapDataManager](../interfaces/IMapDataManager.md).[getOriginalData](../interfaces/IMapDataManager.md#getoriginaldata)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L27)

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

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataManager.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataManager.ts#L46)
