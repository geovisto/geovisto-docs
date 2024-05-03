**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapDomainManagerFactory

# Class: MapDomainManagerFactory

This class provides a factory for map domain managers.

## Author

Jiri Hynek

## Constructors

### new MapDomainManagerFactory()

> **new MapDomainManagerFactory**(): [`MapDomainManagerFactory`](MapDomainManagerFactory.md)

#### Returns

[`MapDomainManagerFactory`](MapDomainManagerFactory.md)

## Methods

### array()

> **array**\<`T`\>(`domains`): [`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

It creates the map arary domain mananger.

#### Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

#### Parameters

• **domains**: `undefined` \| `T`[]

#### Returns

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

#### Source

[model/internal/domain/MapDomainManagerFactory.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/MapDomainManagerFactory.ts#L15)
