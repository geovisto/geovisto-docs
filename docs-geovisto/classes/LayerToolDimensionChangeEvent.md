**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LayerToolDimensionChangeEvent

# Class: LayerToolDimensionChangeEvent\<TSource\>

This class provides the layer tool dimension change event object.

## Author

Tomas Koscielniak

## Author

Jiri Hynek

## Extends

- [`MapEvent`](MapEvent.md)\<`TSource`\>

## Type parameters

• **TSource** *extends* [`ILayerTool`](../interfaces/ILayerTool.md) = [`ILayerTool`](../interfaces/ILayerTool.md)

## Constructors

### new LayerToolDimensionChangeEvent()

> **new LayerToolDimensionChangeEvent**\<`TSource`\>(`source`): [`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

#### Returns

[`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

#### Overrides

[`MapEvent`](MapEvent.md).[`constructor`](MapEvent.md#constructors)

#### Source

[model/internal/event/tool/LayerToolDimensionChangedEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L16)

## Methods

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Inherited from

[`MapEvent`](MapEvent.md).[`getSource`](MapEvent.md#getsource)

#### Source

[model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[`MapEvent`](MapEvent.md).[`getType`](MapEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> `static` **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[model/internal/event/tool/LayerToolDimensionChangedEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L23)
