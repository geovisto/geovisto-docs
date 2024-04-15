[geovisto-map](../README.md) / [Exports](../modules.md) / TilesLayerToolDefaults

# Class: TilesLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`TilesLayerToolDefaults`**

## Implements

- [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](TilesLayerToolDefaults.md#constructor)

### Properties

- [idString](TilesLayerToolDefaults.md#idstring)
- [TYPE](TilesLayerToolDefaults.md#type)
- [id](TilesLayerToolDefaults.md#id)

### Methods

- [generateId](TilesLayerToolDefaults.md#generateid)
- [getBaseMap](TilesLayerToolDefaults.md#getbasemap)
- [getConfig](TilesLayerToolDefaults.md#getconfig)
- [getDataManager](TilesLayerToolDefaults.md#getdatamanager)
- [getDimensions](TilesLayerToolDefaults.md#getdimensions)
- [getGeoDataManager](TilesLayerToolDefaults.md#getgeodatamanager)
- [getIcon](TilesLayerToolDefaults.md#geticon)
- [getId](TilesLayerToolDefaults.md#getid)
- [getLabel](TilesLayerToolDefaults.md#getlabel)
- [getLayerName](TilesLayerToolDefaults.md#getlayername)
- [getProps](TilesLayerToolDefaults.md#getprops)
- [getType](TilesLayerToolDefaults.md#gettype)
- [isEnabled](TilesLayerToolDefaults.md#isenabled)
- [isSingleton](TilesLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new TilesLayerToolDefaults**(): [`TilesLayerToolDefaults`](TilesLayerToolDefaults.md)

#### Returns

[`TilesLayerToolDefaults`](TilesLayerToolDefaults.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[constructor](LayerToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[idString](LayerToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-tiles"`

Static tool type constant.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L19)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[id](LayerToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[generateId](LayerToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getBaseMap](../interfaces/ITilesLayerToolDefaults.md#getbasemap)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L52)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getConfig](../interfaces/ITilesLayerToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getDataManager](LayerToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getDimensions

▸ **getDimensions**(`map?`): [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

It returns the default layer tool dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getDimensions](../interfaces/ITilesLayerToolDefaults.md#getdimensions)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/model/internal/layer/LayerToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolDefaults.ts#L36)

___

### getGeoDataManager

▸ **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns default geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getGeoDataManager](LayerToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getIcon](../interfaces/ITilesLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L45)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getId](../interfaces/ITilesLayerToolDefaults.md#getid)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getId](LayerToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getLabel](../interfaces/ITilesLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L38)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getLayerName](../interfaces/ITilesLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L31)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getProps](../interfaces/ITilesLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[getType](../interfaces/ITilesLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerToolDefaults.ts#L24)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[isEnabled](../interfaces/ITilesLayerToolDefaults.md#isenabled)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isEnabled](LayerToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[ITilesLayerToolDefaults](../interfaces/ITilesLayerToolDefaults.md).[isSingleton](../interfaces/ITilesLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
