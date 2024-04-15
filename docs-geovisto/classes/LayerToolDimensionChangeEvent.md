[geovisto-map](../README.md) / [Exports](../modules.md) / LayerToolDimensionChangeEvent

# Class: LayerToolDimensionChangeEvent\<TSource\>

This class provides the layer tool dimension change event object.

**`Author`**

Tomas Koscielniak

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`ILayerTool`](../interfaces/ILayerTool.md) = [`ILayerTool`](../interfaces/ILayerTool.md) |

## Hierarchy

- [`MapEvent`](MapEvent.md)\<`TSource`\>

  ↳ **`LayerToolDimensionChangeEvent`**

## Table of contents

### Constructors

- [constructor](LayerToolDimensionChangeEvent.md#constructor)

### Methods

- [getSource](LayerToolDimensionChangeEvent.md#getsource)
- [getType](LayerToolDimensionChangeEvent.md#gettype)
- [TYPE](LayerToolDimensionChangeEvent.md#type)

## Constructors

### constructor

• **new LayerToolDimensionChangeEvent**\<`TSource`\>(`source`): [`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> = [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `TSource` |

#### Returns

[`LayerToolDimensionChangeEvent`](LayerToolDimensionChangeEvent.md)\<`TSource`\>

#### Overrides

[MapEvent](MapEvent.md).[constructor](MapEvent.md#constructor)

#### Defined in

[src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L16)

## Methods

### getSource

▸ **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Inherited from

[MapEvent](MapEvent.md).[getSource](MapEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[MapEvent](MapEvent.md).[getType](MapEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

___

### TYPE

▸ **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Defined in

[src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolDimensionChangedEvent.ts#L23)
