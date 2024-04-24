**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapDomain

# Class: `abstract` MapDomain

The generic implementation of map domain which overrides toString function.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapDomain`](../interfaces/IMapDomain.md)

## Constructors

### new MapDomain()

> **new MapDomain**(`name`): [`MapDomain`](MapDomain.md)

#### Parameters

• **name**: `string`

#### Returns

[`MapDomain`](MapDomain.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/domain/generic/MapDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L13)

## Properties

### name

> `private` **name**: `string`

#### Source

[model/internal/domain/generic/MapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L11)

## Methods

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IMapDomain`](../interfaces/IMapDomain.md).[`getName`](../interfaces/IMapDomain.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L21)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDomain`](AbstractMapDomain.md).[`toString`](AbstractMapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
