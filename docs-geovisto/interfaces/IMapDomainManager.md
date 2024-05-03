**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDomainManager

# Interface: IMapDomainManager\<T\>

This interface declares functions for using a map domains

## Author

Jiri Hynek

## Extended by

- [`IMapDataManager`](IMapDataManager.md)
- [`IMapDomainArrayManager`](IMapDomainArrayManager.md)

## Type parameters

• **T** *extends* [`IMapDomain`](IMapDomain.md)

## Methods

### getDomain()

> **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given name.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `T`

#### Source

[model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L27)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Source

[model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L20)

***

### getDomains()

> **getDomains**(): `undefined` \| `T`[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| `T`[]

#### Source

[model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L13)
