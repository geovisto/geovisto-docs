**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDomainManagerFactory

# Interface: IMapDomainManagerFactory

This interface declares a factory for map domain managers.

## Author

Jiri Hynek

## Methods

### array()

> **array**\<`T`\>(`domains`): [`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<`T`\>

It creates the map arary domain mananger.

#### Type parameters

• **T** *extends* [`IMapDomain`](IMapDomain.md)

#### Parameters

• **domains**: `undefined` \| `T`[]

#### Returns

[`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<`T`\>

#### Source

[model/types/domain/IMapDomainManagerFactory.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManagerFactory.ts#L14)
