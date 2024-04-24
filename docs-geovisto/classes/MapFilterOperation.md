**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapFilterOperation

# Class: MapFilterOperation

This class wraps a filter operation defined by constructor props.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Constructors

### new MapFilterOperation()

> **new MapFilterOperation**(`label`, `acceptFunction`): [`MapFilterOperation`](MapFilterOperation.md)

It creates a new filter operation.

#### Parameters

• **label**: `string`

• **acceptFunction**

#### Returns

[`MapFilterOperation`](MapFilterOperation.md)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/filter/basic/MapFilterOperation.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterOperation.ts#L27)

## Properties

### label

> `private` **label**: `string`

#### Source

[model/internal/filter/basic/MapFilterOperation.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterOperation.ts#L11)

***

### match()

> **match**: (`value`, `pattern`) => `boolean`

It performs the filter operation which compare a value with a pattern.

#### Parameters

• **value**: `unknown`

• **pattern**: `unknown`

#### Returns

`boolean`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`match`](../interfaces/IMapFilterOperation.md#match)

#### Source

[model/internal/filter/basic/MapFilterOperation.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterOperation.ts#L19)

## Methods

### getName()

> **getName**(): `string`

It returns a unique string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Implementation of

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md).[`getName`](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[model/internal/filter/basic/MapFilterOperation.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterOperation.ts#L36)

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
