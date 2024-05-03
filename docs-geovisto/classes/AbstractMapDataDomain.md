**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapDataDomain

# Class: `abstract` AbstractMapDataDomain

The class wraps meta data path used to find data.

## Author

Jiri Hynek

## Extended by

- [`JsonMapDataDomain`](JsonMapDataDomain.md)

## Implements

- [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

## Constructors

### new AbstractMapDataDomain()

> **new AbstractMapDataDomain**(`originalDataDomain`): [`AbstractMapDataDomain`](AbstractMapDataDomain.md)

It initializes the data domain wrapper providing a basic API.

#### Parameters

• **originalDataDomain**: `unknown`

#### Returns

[`AbstractMapDataDomain`](AbstractMapDataDomain.md)

#### Source

[model/internal/data/abstract/AbstractMapDataDomain.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L17)

## Properties

### originalDataDomain

> `private` **originalDataDomain**: `unknown`

#### Source

[model/internal/data/abstract/AbstractMapDataDomain.ts:10](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L10)

## Methods

### getName()

> `abstract` **getName**(): `string`

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`string`

#### Implementation of

[`IMapDataDomain`](../interfaces/IMapDataDomain.md).[`getName`](../interfaces/IMapDataDomain.md#getname)

#### Source

[model/internal/data/abstract/AbstractMapDataDomain.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L33)

***

### getOriginal()

> **getOriginal**(): `unknown`

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`unknown`

#### Implementation of

[`IMapDataDomain`](../interfaces/IMapDataDomain.md).[`getOriginal`](../interfaces/IMapDataDomain.md#getoriginal)

#### Source

[model/internal/data/abstract/AbstractMapDataDomain.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L25)
