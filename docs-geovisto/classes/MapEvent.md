**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapEvent

# Class: MapEvent\<TSource\>

This class provides generic map event object.

## Author

Jiri Hynek

## Extended by

- [`MapChangeEvent`](MapChangeEvent.md)
- [`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)

## Type parameters

• **TSource** *extends* [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IMapEvent`](../interfaces/IMapEvent.md)

## Constructors

### new MapEvent()

> **new MapEvent**\<`TSource`\>(`type`, `source`): [`MapEvent`](MapEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **type**: `string`

• **source**: `TSource`

#### Returns

[`MapEvent`](MapEvent.md)\<`TSource`\>

#### Source

[model/internal/event/generic/MapEvent.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L17)

## Properties

### source

> `private` **source**: `TSource`

#### Source

[model/internal/event/generic/MapEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L12)

***

### type

> `private` **type**: `string`

#### Source

[model/internal/event/generic/MapEvent.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L11)

## Methods

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

[`IMapEvent`](../interfaces/IMapEvent.md).[`getSource`](../interfaces/IMapEvent.md#getsource)

#### Source

[model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

[`IMapEvent`](../interfaces/IMapEvent.md).[`getType`](../interfaces/IMapEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)
