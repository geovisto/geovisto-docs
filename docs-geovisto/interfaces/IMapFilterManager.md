[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFilterManager

# Interface: IMapFilterManager

This interface declares functions for using filters.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<[`IMapFilterOperation`](IMapFilterOperation.md)\>

  ↳ **`IMapFilterManager`**

## Implemented by

- [`MapFiltersManager`](../classes/MapFiltersManager.md)

## Table of contents

### Methods

- [add](IMapFilterManager.md#add)
- [createRule](IMapFilterManager.md#createrule)
- [filterData](IMapFilterManager.md#filterdata)
- [getDefault](IMapFilterManager.md#getdefault)
- [getDomain](IMapFilterManager.md#getdomain)
- [getDomainNames](IMapFilterManager.md#getdomainnames)
- [getDomains](IMapFilterManager.md#getdomains)
- [isEmpty](IMapFilterManager.md#isempty)
- [remove](IMapFilterManager.md#remove)
- [removeByName](IMapFilterManager.md#removebyname)
- [size](IMapFilterManager.md#size)

## Methods

### add

▸ **add**(`domain`): `void`

It adds a domain to the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`IMapFilterOperation`](IMapFilterOperation.md) |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[add](IMapDomainArrayManager.md#add)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L31)

___

### createRule

▸ **createRule**(`dataDomain`, `opName`, `pattern`): ``null`` \| [`IMapFilterRule`](IMapFilterRule.md)

The function creates a new filter rule using given operation label.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](IMapDataDomain.md) |
| `opName` | `string` |
| `pattern` | `string` |

#### Returns

``null`` \| [`IMapFilterRule`](IMapFilterRule.md)

#### Defined in

[src/model/types/filter/IMapFilterManager.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterManager.ts#L22)

___

### filterData

▸ **filterData**(`dataManager`, `dataRecords`, `filterRules`): [`IMapData`](../modules.md#imapdata)

Takes a list of data and applies the given filter rules.
Returns a new list of the references to filtered data items.

TODO: define data records type

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataManager` | [`IMapDataManager`](IMapDataManager.md) |
| `dataRecords` | [`IMapData`](../modules.md#imapdata) |
| `filterRules` | [`IMapFilterRule`](IMapFilterRule.md)[] |

#### Returns

[`IMapData`](../modules.md#imapdata)

#### Defined in

[src/model/types/filter/IMapFilterManager.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterManager.ts#L34)

___

### getDefault

▸ **getDefault**(): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

The function returns the default map domain.

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDefault](IMapDomainArrayManager.md#getdefault)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L14)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

The function returns map domains of given name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomain](IMapDomainArrayManager.md#getdomain)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L27)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomainNames](IMapDomainArrayManager.md#getdomainnames)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L20)

___

### getDomains

▸ **getDomains**(): `undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| [`IMapFilterOperation`](IMapFilterOperation.md)[]

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomains](IMapDomainArrayManager.md#getdomains)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L13)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[isEmpty](IMapDomainArrayManager.md#isempty)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L24)

___

### remove

▸ **remove**(`domain`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`IMapFilterOperation`](IMapFilterOperation.md) |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[remove](IMapDomainArrayManager.md#remove)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L38)

___

### removeByName

▸ **removeByName**(`name`): `void`

It removes domain of the given name from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[removeByName](IMapDomainArrayManager.md#removebyname)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L45)

___

### size

▸ **size**(): `number`

The function returns the number of domains.

#### Returns

`number`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[size](IMapDomainArrayManager.md#size)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L19)
