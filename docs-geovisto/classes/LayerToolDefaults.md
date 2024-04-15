[geovisto-map](../README.md) / [Exports](../modules.md) / LayerToolDefaults

# Class: LayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`LayerToolDefaults`**

  ↳↳ [`BubbleLayerToolDefaults`](BubbleLayerToolDefaults.md)

  ↳↳ [`ConnectionLayerToolDefaults`](ConnectionLayerToolDefaults.md)

  ↳↳ [`DotLayerToolDefaults`](DotLayerToolDefaults.md)

  ↳↳ [`DrawingLayerToolDefaults`](DrawingLayerToolDefaults.md)

  ↳↳ [`HeatLayerToaolDefaults`](HeatLayerToaolDefaults.md)

  ↳↳ [`ChoroplethLayerToolDefaults`](ChoroplethLayerToolDefaults.md)

  ↳↳ [`MarkerLayerToolDefaults`](MarkerLayerToolDefaults.md)

  ↳↳ [`SpikeLayerToolDefaults`](SpikeLayerToolDefaults.md)

  ↳↳ [`TilesLayerToolDefaults`](TilesLayerToolDefaults.md)

  ↳↳ [`TimelineToolDefaults`](TimelineToolDefaults.md)

## Implements

- [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](LayerToolDefaults.md#constructor)

### Properties

- [idString](LayerToolDefaults.md#idstring)
- [TYPE](LayerToolDefaults.md#type)
- [id](LayerToolDefaults.md#id)

### Methods

- [generateId](LayerToolDefaults.md#generateid)
- [getConfig](LayerToolDefaults.md#getconfig)
- [getDataManager](LayerToolDefaults.md#getdatamanager)
- [getDimensions](LayerToolDefaults.md#getdimensions)
- [getGeoDataManager](LayerToolDefaults.md#getgeodatamanager)
- [getIcon](LayerToolDefaults.md#geticon)
- [getId](LayerToolDefaults.md#getid)
- [getLabel](LayerToolDefaults.md#getlabel)
- [getLayerName](LayerToolDefaults.md#getlayername)
- [getProps](LayerToolDefaults.md#getprops)
- [getType](LayerToolDefaults.md#gettype)
- [isEnabled](LayerToolDefaults.md#isenabled)
- [isSingleton](LayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new LayerToolDefaults**(): [`LayerToolDefaults`](LayerToolDefaults.md)

#### Returns

[`LayerToolDefaults`](LayerToolDefaults.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[constructor](MapToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[idString](MapToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-abstract"`

A unique string of the tool type.

#### Defined in

[src/model/internal/layer/LayerToolDefaults.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolDefaults.ts#L16)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[id](MapToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[generateId](MapToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getConfig](../interfaces/ILayerToolDefaults.md#getconfig)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getDataManager](MapToolDefaults.md#getdatamanager)

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

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getDimensions](../interfaces/ILayerToolDefaults.md#getdimensions)

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

[MapToolDefaults](MapToolDefaults.md).[getGeoDataManager](MapToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getIcon](../interfaces/ILayerToolDefaults.md#geticon)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getId](../interfaces/ILayerToolDefaults.md#getid)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getId](MapToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getLabel](../interfaces/ILayerToolDefaults.md#getlabel)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L57)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getLayerName](../interfaces/ILayerToolDefaults.md#getlayername)

#### Defined in

[src/model/internal/layer/LayerToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolDefaults.ts#L28)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getProps](../interfaces/ILayerToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[getType](../interfaces/ILayerToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/model/internal/layer/LayerToolDefaults.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolDefaults.ts#L21)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[isEnabled](../interfaces/ILayerToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[ILayerToolDefaults](../interfaces/ILayerToolDefaults.md).[isSingleton](../interfaces/ILayerToolDefaults.md#issingleton)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
