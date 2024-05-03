**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ITimelineToolState

# Interface: ITimelineToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

## Author

Krystof Rykala

## Extends

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

## Type parameters

• **TProps** *extends* [`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md) = [`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md)

• **TDefaults** *extends* [`ITimelineToolDefaults`](ITimelineToolDefaults.md) = [`ITimelineToolDefaults`](ITimelineToolDefaults.md)

• **TConfig** *extends* [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md) = [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)

• **TDimensionsConfig** *extends* [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md) = [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md)

• **TDimensions** *extends* [`ITimelineToolDimensions`](../type-aliases/ITimelineToolDimensions.md) = [`ITimelineToolDimensions`](../type-aliases/ITimelineToolDimensions.md)

## Methods

### createStory()

> **createStory**(`name`): `void`

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[tools/timeline/model/types/tool/ITimelineToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolState.ts#L29)

***

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`deserialize`](ILayerToolState.md#deserialize)

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**: `TDimensionsConfig`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`deserializeDimensions`](ILayerToolState.md#deserializedimensions)

#### Source

[model/types/layer/ILayerToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L25)

***

### getDimensions()

> **getDimensions**(): `TDimensions`

It returns the layer dimensions property of the tool state.

#### Returns

`TDimensions`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getDimensions`](ILayerToolState.md#getdimensions)

#### Source

[model/types/layer/ILayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L30)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getIcon`](ILayerToolState.md#geticon)

#### Source

[model/types/tool/IMapToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L61)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getId`](ILayerToolState.md#getid)

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getLabel`](ILayerToolState.md#getlabel)

#### Source

[model/types/tool/IMapToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L49)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getLayerItems`](ILayerToolState.md#getlayeritems)

#### Source

[model/types/layer/ILayerToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L54)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getLayerName`](ILayerToolState.md#getlayername)

#### Source

[model/types/layer/ILayerToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L42)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getMap`](ILayerToolState.md#getmap)

#### Source

[model/types/tool/IMapToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L44)

***

### getStories()

> **getStories**(): `TimelineStoryConfig`[]

#### Returns

`TimelineStoryConfig`[]

#### Source

[tools/timeline/model/types/tool/ITimelineToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolState.ts#L21)

***

### getStoryByName()

> **getStoryByName**(`name`): `undefined` \| `null` \| `TimelineStoryConfig`

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `null` \| `TimelineStoryConfig`

#### Source

[tools/timeline/model/types/tool/ITimelineToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolState.ts#L27)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`getType`](ILayerToolState.md#gettype)

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\>

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`initialize`](ILayerToolState.md#initialize)

#### Source

[model/types/tool/IMapToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`isEnabled`](ILayerToolState.md#isenabled)

#### Source

[model/types/tool/IMapToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L32)

***

### saveStory()

> **saveStory**(`story`): `void`

#### Parameters

• **story**: `TimelineStoryConfig`

#### Returns

`void`

#### Source

[tools/timeline/model/types/tool/ITimelineToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolState.ts#L25)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`serialize`](ILayerToolState.md#serialize)

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

• **dimensions**: `TDimensions`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setDimensions`](ILayerToolState.md#setdimensions)

#### Source

[model/types/layer/ILayerToolState.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L37)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setEnabled`](ILayerToolState.md#setenabled)

#### Source

[model/types/tool/IMapToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L39)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setIcon`](ILayerToolState.md#seticon)

#### Source

[model/types/tool/IMapToolState.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L68)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setId`](ILayerToolState.md#setid)

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setLabel`](ILayerToolState.md#setlabel)

#### Source

[model/types/tool/IMapToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L56)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setLayerItems`](ILayerToolState.md#setlayeritems)

#### Source

[model/types/layer/ILayerToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L61)

***

### setLayerName()

> **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

• **layerName**: `string`

#### Returns

`void`

#### Inherited from

[`ILayerToolState`](ILayerToolState.md).[`setLayerName`](ILayerToolState.md#setlayername)

#### Source

[model/types/layer/ILayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolState.ts#L49)

***

### setStories()

> **setStories**(`stories`): `void`

#### Parameters

• **stories**: `TimelineStoryConfig`[]

#### Returns

`void`

#### Source

[tools/timeline/model/types/tool/ITimelineToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolState.ts#L23)
