[geovisto-map](../README.md) / [Exports](../modules.md) / MapDomainManagerFactory

# Class: MapDomainManagerFactory

This class provides a factory for map domain managers.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](MapDomainManagerFactory.md#constructor)

### Methods

- [array](MapDomainManagerFactory.md#array)

## Constructors

### constructor

• **new MapDomainManagerFactory**(): [`MapDomainManagerFactory`](MapDomainManagerFactory.md)

#### Returns

[`MapDomainManagerFactory`](MapDomainManagerFactory.md)

## Methods

### array

▸ **array**\<`T`\>(`domains`): [`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

It creates the map arary domain mananger.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `domains` | `undefined` \| `T`[] |

#### Returns

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

#### Defined in

[src/model/internal/domain/MapDomainManagerFactory.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/MapDomainManagerFactory.ts#L15)
