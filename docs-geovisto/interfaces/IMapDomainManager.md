[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDomainManager

# Interface: IMapDomainManager\<T\>

This interface declares functions for using a map domains

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](IMapDomain.md) |

## Hierarchy

- **`IMapDomainManager`**

  ↳ [`IMapDataManager`](IMapDataManager.md)

  ↳ [`IMapDomainArrayManager`](IMapDomainArrayManager.md)

## Table of contents

### Methods

- [getDomain](IMapDomainManager.md#getdomain)
- [getDomainNames](IMapDomainManager.md#getdomainnames)
- [getDomains](IMapDomainManager.md#getdomains)

## Methods

### getDomain

▸ **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L27)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L20)

___

### getDomains

▸ **getDomains**(): `undefined` \| `T`[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| `T`[]

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L13)
