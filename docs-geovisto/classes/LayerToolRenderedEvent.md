**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LayerToolRenderedEvent

# Class: LayerToolRenderedEvent\<TSource\>

This class provides the layer tool rendered event.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<`number`, `TSource`\>

## Type parameters

• **TSource** *extends* [`ILayerTool`](../interfaces/ILayerTool.md) = [`ILayerTool`](../interfaces/ILayerTool.md)

## Implements

- [`ILayerToolRenderedEvent`](../type-aliases/ILayerToolRenderedEvent.md)

## Constructors

### new LayerToolRenderedEvent()

> **new LayerToolRenderedEvent**\<`TSource`\>(`source`, `renderType`): [`LayerToolRenderedEvent`](LayerToolRenderedEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

• **renderType**: `number`

#### Returns

[`LayerToolRenderedEvent`](LayerToolRenderedEvent.md)\<`TSource`\>

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[model/internal/event/tool/LayerToolRenderedEvent.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/LayerToolRenderedEvent.ts#L15)

## Methods

### getChangedObject()

> **getChangedObject**(): `number`

Return the changed object.

#### Returns

`number`

#### Implementation of

`ILayerToolRenderedEvent.getChangedObject`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

`ILayerToolRenderedEvent.getSource`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getSource`](MapChangeEvent.md#getsource)

#### Source

[model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

`ILayerToolRenderedEvent.getType`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getType`](MapChangeEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> `static` **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[model/internal/event/tool/LayerToolRenderedEvent.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/tool/LayerToolRenderedEvent.ts#L22)
