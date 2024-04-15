[geovisto-map](../README.md) / [Exports](../modules.md) / InfoDataManager

# Class: InfoDataManager

The class provides a basic implemention info data manager.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IInfoData`](../interfaces/IInfoData.md)\>

  ↳ **`InfoDataManager`**

## Implements

- [`IInfoDataManager`](../modules.md#iinfodatamanager)

## Table of contents

### Constructors

- [constructor](InfoDataManager.md#constructor)

### Methods

- [add](InfoDataManager.md#add)
- [getDefault](InfoDataManager.md#getdefault)
- [getDomain](InfoDataManager.md#getdomain)
- [getDomainNames](InfoDataManager.md#getdomainnames)
- [getDomains](InfoDataManager.md#getdomains)
- [isEmpty](InfoDataManager.md#isempty)
- [remove](InfoDataManager.md#remove)
- [removeByName](InfoDataManager.md#removebyname)
- [size](InfoDataManager.md#size)

## Constructors

### constructor

• **new InfoDataManager**(`infoDataArray`): [`InfoDataManager`](InfoDataManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `infoDataArray` | [`IInfoData`](../interfaces/IInfoData.md)[] |

#### Returns

[`InfoDataManager`](InfoDataManager.md)

#### Overrides

[MapDomainArrayManager](MapDomainArrayManager.md).[constructor](MapDomainArrayManager.md#constructor)

#### Defined in

[src/tools/info/model/internal/infodata/InfoDataManager.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/infodata/InfoDataManager.ts#L17)

## Methods

### add

▸ **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | [`IInfoData`](../interfaces/IInfoData.md) |

#### Returns

`void`

#### Implementation of

IInfoDataManager.add

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[add](MapDomainArrayManager.md#add)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

___

### getDefault

▸ **getDefault**(): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

The function returns the first domain of the array.

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

IInfoDataManager.getDefault

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDefault](MapDomainArrayManager.md#getdefault)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

The function returns map domains of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

IInfoDataManager.getDomain

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomain](MapDomainArrayManager.md#getdomain)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

IInfoDataManager.getDomainNames

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomainNames](MapDomainArrayManager.md#getdomainnames)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

___

### getDomains

▸ **getDomains**(): [`IInfoData`](../interfaces/IInfoData.md)[]

The function returns available map domains.

#### Returns

[`IInfoData`](../interfaces/IInfoData.md)[]

#### Implementation of

IInfoDataManager.getDomains

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[getDomains](MapDomainArrayManager.md#getdomains)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

IInfoDataManager.isEmpty

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[isEmpty](MapDomainArrayManager.md#isempty)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

___

### remove

▸ **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | [`IInfoData`](../interfaces/IInfoData.md) |

#### Returns

`void`

#### Implementation of

IInfoDataManager.remove

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[remove](MapDomainArrayManager.md#remove)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L65)

___

### removeByName

▸ **removeByName**(`id`): `void`

It removes a domain from the list of domains.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

IInfoDataManager.removeByName

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[removeByName](MapDomainArrayManager.md#removebyname)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

___

### size

▸ **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

IInfoDataManager.size

#### Inherited from

[MapDomainArrayManager](MapDomainArrayManager.md).[size](MapDomainArrayManager.md#size)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
