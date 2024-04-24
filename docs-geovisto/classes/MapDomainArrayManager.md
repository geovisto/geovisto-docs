**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapDomainArrayManager

# Class: MapDomainArrayManager\<T\>

This class provide functions for using map domains which can be identified by uniquie string.

## Author

Jiri Hynek

## Extended by

- [`MapFiltersManager`](MapFiltersManager.md)
- [`GeoDataManager`](GeoDataManager.md)
- [`InfoDataManager`](InfoDataManager.md)
- [`MapThemesManager`](MapThemesManager.md)

## Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

## Implements

- [`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md)\<`T`\>

## Constructors

### new MapDomainArrayManager()

> **new MapDomainArrayManager**\<`T`\>(`domains`): [`MapDomainArrayManager`](MapDomainArrayManager.md)\<`T`\>

It initializes a map domain manager.

#### Parameters

• **domains**: `undefined` \| `T`[]

#### Returns

[`MapDomainArrayManager`](MapDomainArrayManager.md)\<`T`\>

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L16)

## Properties

### domains

> `private` **domains**: `T`[]

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L11)

## Methods

### add()

> **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

• **domains**: `T`

#### Returns

`void`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`add`](../interfaces/IMapDomainArrayManager.md#add)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

***

### getDefault()

> **getDefault**(): `undefined` \| `T`

The function returns the first domain of the array.

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`getDefault`](../interfaces/IMapDomainArrayManager.md#getdefault)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L30)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| `T`

The function returns map domains of given type.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`getDomain`](../interfaces/IMapDomainArrayManager.md#getdomain)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`getDomainNames`](../interfaces/IMapDomainArrayManager.md#getdomainnames)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

***

### getDomains()

> **getDomains**(): `T`[]

The function returns available map domains.

#### Returns

`T`[]

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`getDomains`](../interfaces/IMapDomainArrayManager.md#getdomains)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`isEmpty`](../interfaces/IMapDomainArrayManager.md#isempty)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

***

### remove()

> **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domains**: `T`

#### Returns

`void`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`remove`](../interfaces/IMapDomainArrayManager.md#remove)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L65)

***

### removeByName()

> **removeByName**(`id`): `void`

It removes a domain from the list of domains.

Override this function.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`removeByName`](../interfaces/IMapDomainArrayManager.md#removebyname)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

***

### size()

> **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

[`IMapDomainArrayManager`](../interfaces/IMapDomainArrayManager.md).[`size`](../interfaces/IMapDomainArrayManager.md#size)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
