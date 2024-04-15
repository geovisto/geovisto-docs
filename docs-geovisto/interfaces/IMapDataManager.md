[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDataManager

# Interface: IMapDataManager

The interface declares map data domain manager which and data wrapper.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomainManager`](IMapDomainManager.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

  ↳ **`IMapDataManager`**

## Implemented by

- [`AbstractMapDataManager`](../classes/AbstractMapDataManager.md)
- [`JsonMapDataManager`](../classes/JsonMapDataManager.md)

## Table of contents

### Methods

- [getDataRecordValues](IMapDataManager.md#getdatarecordvalues)
- [getDataRecords](IMapDataManager.md#getdatarecords)
- [getDataRecordsValues](IMapDataManager.md#getdatarecordsvalues)
- [getDomain](IMapDataManager.md#getdomain)
- [getDomainNames](IMapDataManager.md#getdomainnames)
- [getDomains](IMapDataManager.md#getdomains)
- [getOriginalData](IMapDataManager.md#getoriginaldata)
- [getValues](IMapDataManager.md#getvalues)

## Methods

### getDataRecordValues

▸ **getDataRecordValues**(`dataDomain`, `dataRecord`): `unknown`[]

It returns values stored of the selected data domain stored in the given data record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](IMapDataDomain.md) |
| `dataRecord` | [`IMapDataRecord`](../modules.md#imapdatarecord) |

#### Returns

`unknown`[]

#### Defined in

[src/model/types/data/IMapDataManager.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataManager.ts#L44)

___

### getDataRecords

▸ **getDataRecords**(): [`IMapData`](../modules.md#imapdata)

It returns the preprocessed data as a list of data reconds of the *same* object type.

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Defined in

[src/model/types/data/IMapDataManager.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataManager.ts#L21)

___

### getDataRecordsValues

▸ **getDataRecordsValues**(`dataDomain`, `dataRecords`): `unknown`[]

It returns list of all values of the selected data domain stored in the given data records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](IMapDataDomain.md) |
| `dataRecords` | [`IMapData`](../modules.md#imapdata) |

#### Returns

`unknown`[]

#### Defined in

[src/model/types/data/IMapDataManager.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataManager.ts#L36)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IMapDataDomain`](IMapDataDomain.md)

The function returns map domains of given name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IMapDataDomain`](IMapDataDomain.md)

#### Inherited from

[IMapDomainManager](IMapDomainManager.md).[getDomain](IMapDomainManager.md#getdomain)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L27)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[IMapDomainManager](IMapDomainManager.md).[getDomainNames](IMapDomainManager.md#getdomainnames)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L20)

___

### getDomains

▸ **getDomains**(): `undefined` \| [`IMapDataDomain`](IMapDataDomain.md)[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| [`IMapDataDomain`](IMapDataDomain.md)[]

#### Inherited from

[IMapDomainManager](IMapDomainManager.md).[getDomains](IMapDomainManager.md#getdomains)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L13)

___

### getOriginalData

▸ **getOriginalData**(): `unknown`

It returns the original input data.

#### Returns

`unknown`

#### Defined in

[src/model/types/data/IMapDataManager.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataManager.ts#L16)

___

### getValues

▸ **getValues**(`dataDomain`): `unknown`[]

It returns list of all values of the selected data domain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](IMapDataDomain.md) |

#### Returns

`unknown`[]

#### Defined in

[src/model/types/data/IMapDataManager.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataManager.ts#L28)
