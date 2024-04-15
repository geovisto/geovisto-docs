[geovisto-map](../README.md) / [Exports](../modules.md) / TilesLayerToolState

# Class: TilesLayerToolState

This class provide functions for using the state of the tiles layer tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`TilesLayerToolState`**

## Implements

- [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)

## Table of contents

### Constructors

- [constructor](TilesLayerToolState.md#constructor)

### Properties

- [layer](TilesLayerToolState.md#layer)
- [tilesModel](TilesLayerToolState.md#tilesmodel)

### Methods

- [deserialize](TilesLayerToolState.md#deserialize)
- [deserializeDimensions](TilesLayerToolState.md#deserializedimensions)
- [getBaseMap](TilesLayerToolState.md#getbasemap)
- [getDimensions](TilesLayerToolState.md#getdimensions)
- [getIcon](TilesLayerToolState.md#geticon)
- [getId](TilesLayerToolState.md#getid)
- [getLabel](TilesLayerToolState.md#getlabel)
- [getLayerItems](TilesLayerToolState.md#getlayeritems)
- [getLayerName](TilesLayerToolState.md#getlayername)
- [getMap](TilesLayerToolState.md#getmap)
- [getMapObject](TilesLayerToolState.md#getmapobject)
- [getTileLayer](TilesLayerToolState.md#gettilelayer)
- [getType](TilesLayerToolState.md#gettype)
- [initialize](TilesLayerToolState.md#initialize)
- [isEnabled](TilesLayerToolState.md#isenabled)
- [serialize](TilesLayerToolState.md#serialize)
- [setBaseMap](TilesLayerToolState.md#setbasemap)
- [setDimensions](TilesLayerToolState.md#setdimensions)
- [setEnabled](TilesLayerToolState.md#setenabled)
- [setIcon](TilesLayerToolState.md#seticon)
- [setId](TilesLayerToolState.md#setid)
- [setLabel](TilesLayerToolState.md#setlabel)
- [setLayerItems](TilesLayerToolState.md#setlayeritems)
- [setLayerName](TilesLayerToolState.md#setlayername)
- [setMap](TilesLayerToolState.md#setmap)
- [setTileLayer](TilesLayerToolState.md#settilelayer)

## Constructors

### constructor

• **new TilesLayerToolState**(`tool`): [`TilesLayerToolState`](TilesLayerToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> |

#### Returns

[`TilesLayerToolState`](TilesLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L27)

## Properties

### layer

• `Private` `Optional` **layer**: `TileLayer`

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L22)

___

### tilesModel

• `Private` **tilesModel**: [`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L21)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILayerToolConfig`](../modules.md#ilayertoolconfig) |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[deserialize](../interfaces/ITilesLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L47)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig) |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[deserializeDimensions](../interfaces/ITilesLayerToolState.md#deserializedimensions)

#### Inherited from

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L67)

___

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns a base map ID.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getBaseMap](../interfaces/ITilesLayerToolState.md#getbasemap)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L71)

___

### getDimensions

▸ **getDimensions**(): [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

It returns the map layer dimensions property of the tool state.

#### Returns

[`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getDimensions](../interfaces/ITilesLayerToolState.md#getdimensions)

#### Inherited from

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L120)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getIcon](../interfaces/ITilesLayerToolState.md#geticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[getIcon](LayerToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getId](../interfaces/ITilesLayerToolState.md#getid)

#### Inherited from

[LayerToolState](LayerToolState.md).[getId](LayerToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getLabel](../interfaces/ITilesLayerToolState.md#getlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLabel](LayerToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getLayerItems](../interfaces/ITilesLayerToolState.md#getlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerItems](LayerToolState.md#getlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L104)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getLayerName](../interfaces/ITilesLayerToolState.md#getlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerName](LayerToolState.md#getlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L88)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getMap](../interfaces/ITilesLayerToolState.md#getmap)

#### Inherited from

[LayerToolState](LayerToolState.md).[getMap](LayerToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[LayerToolState](LayerToolState.md).[getMapObject](LayerToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getTileLayer

▸ **getTileLayer**(): `undefined` \| `TileLayer`

It returns a Leaflet tile layer.

#### Returns

`undefined` \| `TileLayer`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getTileLayer](../interfaces/ITilesLayerToolState.md#gettilelayer)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L87)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[getType](../interfaces/ITilesLayerToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md) |
| `props` | [`ITilesLayerToolProps`](../modules.md#itileslayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[initialize](../interfaces/ITilesLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L34)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[isEnabled](../interfaces/ITilesLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`ILayerToolConfig`](../modules.md#ilayertoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md) |

#### Returns

[`ILayerToolConfig`](../modules.md#ilayertoolconfig)

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[serialize](../interfaces/ITilesLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L59)

___

### setBaseMap

▸ **setBaseMap**(`baseMap`): `void`

It sets a base map ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseMap` | [`IMapTilesModel`](../modules.md#imaptilesmodel) |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setBaseMap](../interfaces/ITilesLayerToolState.md#setbasemap)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L80)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | [`ILayerToolDimensions`](../modules.md#ilayertooldimensions) |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setDimensions](../interfaces/ITilesLayerToolState.md#setdimensions)

#### Inherited from

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L129)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setEnabled](../interfaces/ITilesLayerToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setIcon](../interfaces/ITilesLayerToolState.md#seticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[setIcon](LayerToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setId](../interfaces/ITilesLayerToolState.md#setid)

#### Inherited from

[LayerToolState](LayerToolState.md).[setId](LayerToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setLabel](../interfaces/ITilesLayerToolState.md#setlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLabel](LayerToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setLayerItems

▸ **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerItems` | `Layer`[] |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setLayerItems](../interfaces/ITilesLayerToolState.md#setlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerItems](LayerToolState.md#setlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L113)

___

### setLayerName

▸ **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerName` | `string` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setLayerName](../interfaces/ITilesLayerToolState.md#setlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerName](LayerToolState.md#setlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L97)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[LayerToolState](LayerToolState.md).[setMap](LayerToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)

___

### setTileLayer

▸ **setTileLayer**(`layer`): `void`

It sets a Leaflet tile layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `TileLayer` |

#### Returns

`void`

#### Implementation of

[ITilesLayerToolState](../interfaces/ITilesLayerToolState.md).[setTileLayer](../interfaces/ITilesLayerToolState.md#settilelayer)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolState.ts#L96)
