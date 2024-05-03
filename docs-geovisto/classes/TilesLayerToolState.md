**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TilesLayerToolState

# Class: TilesLayerToolState

This class provide functions for using the state of the tiles layer tool.

## Author

Jiri Hynek

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)

## Constructors

### new TilesLayerToolState()

> **new TilesLayerToolState**(`tool`): [`TilesLayerToolState`](TilesLayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Returns

[`TilesLayerToolState`](TilesLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L27)

## Properties

### layer?

> `private` `optional` **layer**: `any`

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L22)

***

### tilesModel

> `private` **tilesModel**: [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L21)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`deserialize`](../interfaces/ITilesLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L47)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**: [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md)

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`deserializeDimensions`](../interfaces/ITilesLayerToolState.md#deserializedimensions)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[model/internal/layer/LayerToolState.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L67)

***

### getBaseMap()

> **getBaseMap**(): [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

It returns a base map ID.

#### Returns

[`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getBaseMap`](../interfaces/ITilesLayerToolState.md#getbasemap)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L71)

***

### getDimensions()

> **getDimensions**(): [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

It returns the map layer dimensions property of the tool state.

#### Returns

[`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getDimensions`](../interfaces/ITilesLayerToolState.md#getdimensions)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[model/internal/layer/LayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L120)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getIcon`](../interfaces/ITilesLayerToolState.md#geticon)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getIcon`](LayerToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getId`](../interfaces/ITilesLayerToolState.md#getid)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getId`](LayerToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getLabel`](../interfaces/ITilesLayerToolState.md#getlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLabel`](LayerToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getLayerItems`](../interfaces/ITilesLayerToolState.md#getlayeritems)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerItems`](LayerToolState.md#getlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L104)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getLayerName`](../interfaces/ITilesLayerToolState.md#getlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerName`](LayerToolState.md#getlayername)

#### Source

[model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L88)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getMap`](../interfaces/ITilesLayerToolState.md#getmap)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMap`](LayerToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMapObject`](LayerToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getTileLayer()

> **getTileLayer**(): `any`

It returns a Leaflet tile layer.

#### Returns

`any`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getTileLayer`](../interfaces/ITilesLayerToolState.md#gettilelayer)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L87)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`getType`](../interfaces/ITilesLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

• **props**: [`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`initialize`](../interfaces/ITilesLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L34)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`isEnabled`](../interfaces/ITilesLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

#### Returns

[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`serialize`](../interfaces/ITilesLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L59)

***

### setBaseMap()

> **setBaseMap**(`baseMap`): `void`

It sets a base map ID.

#### Parameters

• **baseMap**: [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setBaseMap`](../interfaces/ITilesLayerToolState.md#setbasemap)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L80)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**: [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setDimensions`](../interfaces/ITilesLayerToolState.md#setdimensions)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setEnabled`](../interfaces/ITilesLayerToolState.md#setenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setIcon`](../interfaces/ITilesLayerToolState.md#seticon)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setIcon`](LayerToolState.md#seticon)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setId`](../interfaces/ITilesLayerToolState.md#setid)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setId`](LayerToolState.md#setid)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setLabel`](../interfaces/ITilesLayerToolState.md#setlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLabel`](LayerToolState.md#setlabel)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setLayerItems`](../interfaces/ITilesLayerToolState.md#setlayeritems)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerItems`](LayerToolState.md#setlayeritems)

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

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setLayerName`](../interfaces/ITilesLayerToolState.md#setlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerName`](LayerToolState.md#setlayername)

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

[`LayerToolState`](LayerToolState.md).[`setMap`](LayerToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)

***

### setTileLayer()

> **setTileLayer**(`layer`): `void`

It sets a Leaflet tile layer.

#### Parameters

• **layer**: `TileLayer`

#### Returns

`void`

#### Implementation of

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md).[`setTileLayer`](../interfaces/ITilesLayerToolState.md#settilelayer)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L96)
