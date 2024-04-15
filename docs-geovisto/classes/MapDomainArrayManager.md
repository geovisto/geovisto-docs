[geovisto-map](../README.md) / [Exports](../modules.md) / MapDomainArrayManager

# Class: MapDomainArrayManager\<T\>

This class provide functions for using map domains which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

## Hierarchy

- **`MapDomainArrayManager`**

  ↳ [`MapFiltersManager`](MapFiltersManager.md)

  ↳ [`GeoDataManager`](GeoDataManager.md)

  ↳ [`InfoDataManager`](InfoDataManager.md)

  ↳ [`MapThemesManager`](MapThemesManager.md)

## Implements

- [`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](MapDomainArrayManager.md#constructor)

### Properties

- [domains](MapDomainArrayManager.md#domains)

### Methods

- [add](MapDomainArrayManager.md#add)
- [getDefault](MapDomainArrayManager.md#getdefault)
- [getDomain](MapDomainArrayManager.md#getdomain)
- [getDomainNames](MapDomainArrayManager.md#getdomainnames)
- [getDomains](MapDomainArrayManager.md#getdomains)
- [isEmpty](MapDomainArrayManager.md#isempty)
- [remove](MapDomainArrayManager.md#remove)
- [removeByName](MapDomainArrayManager.md#removebyname)
- [size](MapDomainArrayManager.md#size)

## Constructors

### constructor

• **new MapDomainArrayManager**\<`T`\>(`domains`): [`MapDomainArrayManager`](MapDomainArrayManager.md)\<`T`\>

It initializes a map domain manager.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | `undefined` \| `T`[] |

#### Returns

[`MapDomainArrayManager`](MapDomainArrayManager.md)\<`T`\>

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L16)

## Properties

### domains

• `Private` **domains**: `T`[]

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L11)

## Methods

### add

▸ **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | `T` |

#### Returns

`void`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[add](../interfaces/IMapDomainArrayManager.md#add)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

___

### getDefault

▸ **getDefault**(): `undefined` \| `T`

The function returns the first domain of the array.

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[getDefault](../interfaces/IMapDomainArrayManager.md#getdefault)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[getDomain](../interfaces/IMapDomainArrayManager.md#getdomain)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[getDomainNames](../interfaces/IMapDomainArrayManager.md#getdomainnames)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

___

### getDomains

▸ **getDomains**(): `T`[]

The function returns available map domains.

#### Returns

`T`[]

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[getDomains](../interfaces/IMapDomainArrayManager.md#getdomains)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[isEmpty](../interfaces/IMapDomainArrayManager.md#isempty)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

___

### remove

▸ **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | `T` |

#### Returns

`void`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[remove](../interfaces/IMapDomainArrayManager.md#remove)

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

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[removeByName](../interfaces/IMapDomainArrayManager.md#removebyname)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

___

### size

▸ **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

[IMapDomainArrayManager](../interfaces/IMapDomainArrayManager.md).[size](../interfaces/IMapDomainArrayManager.md#size)

#### Defined in

[src/model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
