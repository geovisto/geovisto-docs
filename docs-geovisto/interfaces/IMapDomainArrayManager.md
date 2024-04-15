[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDomainArrayManager

# Interface: IMapDomainArrayManager\<T\>

This interface declares functions for using map domains which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](IMapDomain.md) |

## Hierarchy

- [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

  ↳ **`IMapDomainArrayManager`**

  ↳↳ [`IMapFilterManager`](IMapFilterManager.md)

  ↳↳ [`IMapThemesManager`](IMapThemesManager.md)

## Implemented by

- [`MapDomainArrayManager`](../classes/MapDomainArrayManager.md)

## Table of contents

### Methods

- [add](IMapDomainArrayManager.md#add)
- [getDefault](IMapDomainArrayManager.md#getdefault)
- [getDomain](IMapDomainArrayManager.md#getdomain)
- [getDomainNames](IMapDomainArrayManager.md#getdomainnames)
- [getDomains](IMapDomainArrayManager.md#getdomains)
- [isEmpty](IMapDomainArrayManager.md#isempty)
- [remove](IMapDomainArrayManager.md#remove)
- [removeByName](IMapDomainArrayManager.md#removebyname)
- [size](IMapDomainArrayManager.md#size)

## Methods

### add

▸ **add**(`domain`): `void`

It adds a domain to the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `T` |

#### Returns

`void`

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L31)

___

### getDefault

▸ **getDefault**(): `undefined` \| `T`

The function returns the default map domain.

#### Returns

`undefined` \| `T`

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L14)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `T`

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

▸ **getDomains**(): `undefined` \| `T`[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| `T`[]

#### Inherited from

[IMapDomainManager](IMapDomainManager.md).[getDomains](IMapDomainManager.md#getdomains)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L13)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L24)

___

### remove

▸ **remove**(`domain`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `T` |

#### Returns

`void`

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

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L45)

___

### size

▸ **size**(): `number`

The function returns the number of domains.

#### Returns

`number`

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L19)
