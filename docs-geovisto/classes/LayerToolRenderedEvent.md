[geovisto-map](../README.md) / [Exports](../modules.md) / LayerToolRenderedEvent

# Class: LayerToolRenderedEvent\<TSource\>

This class provides the layer tool rendered event.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`ILayerTool`](../interfaces/ILayerTool.md) = [`ILayerTool`](../interfaces/ILayerTool.md) |

## Hierarchy

- [`MapChangeEvent`](MapChangeEvent.md)\<`number`, `TSource`\>

  ↳ **`LayerToolRenderedEvent`**

## Implements

- [`ILayerToolRenderedEvent`](../modules.md#ilayertoolrenderedevent)

## Table of contents

### Constructors

- [constructor](LayerToolRenderedEvent.md#constructor)

### Methods

- [getChangedObject](LayerToolRenderedEvent.md#getchangedobject)
- [getSource](LayerToolRenderedEvent.md#getsource)
- [getType](LayerToolRenderedEvent.md#gettype)
- [TYPE](LayerToolRenderedEvent.md#type)

## Constructors

### constructor

• **new LayerToolRenderedEvent**\<`TSource`\>(`source`, `renderType`): [`LayerToolRenderedEvent`](LayerToolRenderedEvent.md)\<`TSource`\>

It initializes event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> = [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `TSource` |
| `renderType` | `number` |

#### Returns

[`LayerToolRenderedEvent`](LayerToolRenderedEvent.md)\<`TSource`\>

#### Overrides

[MapChangeEvent](MapChangeEvent.md).[constructor](MapChangeEvent.md#constructor)

#### Defined in

[src/model/internal/event/tool/LayerToolRenderedEvent.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolRenderedEvent.ts#L15)

## Methods

### getChangedObject

▸ **getChangedObject**(): `number`

Return the changed object.

#### Returns

`number`

#### Implementation of

ILayerToolRenderedEvent.getChangedObject

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getChangedObject](MapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

___

### getSource

▸ **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

ILayerToolRenderedEvent.getSource

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getSource](MapChangeEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

ILayerToolRenderedEvent.getType

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getType](MapChangeEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

___

### TYPE

▸ **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Defined in

[src/model/internal/event/tool/LayerToolRenderedEvent.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/tool/LayerToolRenderedEvent.ts#L22)
