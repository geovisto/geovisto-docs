**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDomainArrayManager

# Interface: IMapDomainArrayManager\<T\>

This interface declares functions for using map domains which can be identified by uniquie string.

## Author

Jiri Hynek

## Extends

- [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

## Type parameters

• **T** *extends* [`IMapDomain`](IMapDomain.md)

## Methods

### add()

> **add**(`domain`): `void`

It adds a domain to the list of domains.

#### Parameters

• **domain**: `T`

#### Returns

`void`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L31)

***

### getDefault()

> **getDefault**(): `undefined` \| `T`

The function returns the default map domain.

#### Returns

`undefined` \| `T`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L14)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given name.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomain`](IMapDomainManager.md#getdomain)

#### Source

[model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L27)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomainNames`](IMapDomainManager.md#getdomainnames)

#### Source

[model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L20)

***

### getDomains()

> **getDomains**(): `undefined` \| `T`[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| `T`[]

#### Inherited from

[`IMapDomainManager`](IMapDomainManager.md).[`getDomains`](IMapDomainManager.md#getdomains)

#### Source

[model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainManager.ts#L13)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L24)

***

### remove()

> **remove**(`domain`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domain**: `T`

#### Returns

`void`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L38)

***

### removeByName()

> **removeByName**(`name`): `void`

It removes domain of the given name from the list of domains.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L45)

***

### size()

> **size**(): `number`

The function returns the number of domains.

#### Returns

`number`

#### Source

[model/types/domain/IMapDomainArrayManager.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomainArrayManager.ts#L19)
