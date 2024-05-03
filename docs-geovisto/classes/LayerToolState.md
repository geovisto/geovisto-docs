**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LayerToolState

# Class: LayerToolState

This class provide functions for using the state of the layer tool.

## Author

Jiri Hynek

## Extends

- [`MapToolState`](MapToolState.md)

## Implements

- [`ILayerToolState`](../interfaces/ILayerToolState.md)

## Constructors

### new LayerToolState()

> **new LayerToolState**(`tool`): [`LayerToolState`](LayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Returns

[`LayerToolState`](LayerToolState.md)

#### Overrides

[`MapToolState`](MapToolState.md).[`constructor`](MapToolState.md#constructors)

#### Source

[model/internal/layer/LayerToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L24)

## Properties

### dimensions

> `private` **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Source

[model/internal/layer/LayerToolState.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L18)

***

### layerItems?

> `private` `optional` **layerItems**: `Layer`[]

#### Source

[model/internal/layer/LayerToolState.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L19)

***

### layerName

> `private` **layerName**: `string`

#### Source

[model/internal/layer/LayerToolState.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L17)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`deserialize`](../interfaces/ILayerToolState.md#deserialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`deserialize`](MapToolState.md#deserialize)

#### Source

[model/internal/layer/LayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L49)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**: [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md)

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`deserializeDimensions`](../interfaces/ILayerToolState.md#deserializedimensions)

#### Source

[model/internal/layer/LayerToolState.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L67)

***

### getDimensions()

> **getDimensions**(): [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

It returns the map layer dimensions property of the tool state.

#### Returns

[`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getDimensions`](../interfaces/ILayerToolState.md#getdimensions)

#### Source

[model/internal/layer/LayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L120)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getIcon`](../interfaces/ILayerToolState.md#geticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getIcon`](MapToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getId`](../interfaces/ILayerToolState.md#getid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getId`](MapToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getLabel`](../interfaces/ILayerToolState.md#getlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getLabel`](MapToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getLayerItems`](../interfaces/ILayerToolState.md#getlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L104)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getLayerName`](../interfaces/ILayerToolState.md#getlayername)

#### Source

[model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L88)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getMap`](../interfaces/ILayerToolState.md#getmap)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMap`](MapToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMapObject`](MapToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`getType`](../interfaces/ILayerToolState.md#gettype)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getType`](MapToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

• **props**: [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`initialize`](../interfaces/ILayerToolState.md#initialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`initialize`](MapToolState.md#initialize)

#### Source

[model/internal/layer/LayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L35)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`isEnabled`](../interfaces/ILayerToolState.md#isenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`isEnabled`](MapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

#### Returns

[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`serialize`](../interfaces/ILayerToolState.md#serialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`serialize`](MapToolState.md#serialize)

#### Source

[model/internal/layer/LayerToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L76)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setDimensions`](../interfaces/ILayerToolState.md#setdimensions)

#### Source

[model/internal/layer/LayerToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L129)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setEnabled`](../interfaces/ILayerToolState.md#setenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setEnabled`](MapToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setIcon`](../interfaces/ILayerToolState.md#seticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setIcon`](MapToolState.md#seticon)

#### Source

[model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L129)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setId`](../interfaces/ILayerToolState.md#setid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setId`](MapToolState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setLabel`](../interfaces/ILayerToolState.md#setlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setLabel`](MapToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setLayerItems`](../interfaces/ILayerToolState.md#setlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L113)

***

### setLayerName()

> **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

• **layerName**: `string`

#### Returns

`void`

#### Implementation of

[`ILayerToolState`](../interfaces/ILayerToolState.md).[`setLayerName`](../interfaces/ILayerToolState.md#setlayername)

#### Source

[model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L97)

***

### setMap()

> `protected` **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`void`

#### Inherited from

[`MapToolState`](MapToolState.md).[`setMap`](MapToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)
