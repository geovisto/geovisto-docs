[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDomainManagerFactory

# Interface: IMapDomainManagerFactory

This interface declares a factory for map domain managers.

**`Author`**

Jiri Hynek

## Table of contents

### Methods

- [array](IMapDomainManagerFactory.md#array)

## Methods

### array

▸ **array**\<`T`\>(`domains`): [`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<`T`\>

It creates the map arary domain mananger.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](IMapDomain.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | `undefined` \| `T`[] |

#### Returns

[`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<`T`\>

#### Defined in

[src/model/types/domain/IMapDomainManagerFactory.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManagerFactory.ts#L14)
