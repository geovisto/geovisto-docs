**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / JsonMapDataDomain

# Class: JsonMapDataDomain

The class wraps meta data path used to find data.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDataDomain`](AbstractMapDataDomain.md)

## Constructors

### new JsonMapDataDomain()

> **new JsonMapDataDomain**(`domainDescription`): [`JsonMapDataDomain`](JsonMapDataDomain.md)

#### Parameters

• **domainDescription**: `string`[]

#### Returns

[`JsonMapDataDomain`](JsonMapDataDomain.md)

#### Overrides

[`AbstractMapDataDomain`](AbstractMapDataDomain.md).[`constructor`](AbstractMapDataDomain.md#constructors)

#### Source

[model/internal/data/json/JsonMapDataDomain.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataDomain.ts#L12)

## Properties

### name

> `private` **name**: `string`

#### Source

[model/internal/data/json/JsonMapDataDomain.ts:10](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataDomain.ts#L10)

## Methods

### getName()

> **getName**(): `string`

The function returns the string representation of the map data domain
which is *unique* among the names of other data domains.

It uses dots to delimiter the array items.

#### Returns

`string`

#### Overrides

[`AbstractMapDataDomain`](AbstractMapDataDomain.md).[`getName`](AbstractMapDataDomain.md#getname)

#### Source

[model/internal/data/json/JsonMapDataDomain.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataDomain.ts#L31)

***

### getOriginal()

> **getOriginal**(): `string`[]

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`string`[]

#### Overrides

[`AbstractMapDataDomain`](AbstractMapDataDomain.md).[`getOriginal`](AbstractMapDataDomain.md#getoriginal)

#### Source

[model/internal/data/json/JsonMapDataDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/data/json/JsonMapDataDomain.ts#L21)
