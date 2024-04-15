[geovisto-map](../README.md) / [Exports](../modules.md) / HeatLayerToaolDefaults

# Class: HeatLayerToaolDefaults

This class provide functions which return the default state values.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`HeatLayerToaolDefaults`**

## Implements

- [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](HeatLayerToaolDefaults.md#constructor)

### Properties

- [idString](HeatLayerToaolDefaults.md#idstring)
- [TYPE](HeatLayerToaolDefaults.md#type)
- [id](HeatLayerToaolDefaults.md#id)

### Methods

- [generateId](HeatLayerToaolDefaults.md#generateid)
- [getBlurDimension](HeatLayerToaolDefaults.md#getblurdimension)
- [getConfig](HeatLayerToaolDefaults.md#getconfig)
- [getCurrentZoomDimension](HeatLayerToaolDefaults.md#getcurrentzoomdimension)
- [getDataManager](HeatLayerToaolDefaults.md#getdatamanager)
- [getDimensions](HeatLayerToaolDefaults.md#getdimensions)
- [getFiltersManager](HeatLayerToaolDefaults.md#getfiltersmanager)
- [getGeoDataManager](HeatLayerToaolDefaults.md#getgeodatamanager)
- [getGradientDimension](HeatLayerToaolDefaults.md#getgradientdimension)
- [getIcon](HeatLayerToaolDefaults.md#geticon)
- [getId](HeatLayerToaolDefaults.md#getid)
- [getIntensityDimension](HeatLayerToaolDefaults.md#getintensitydimension)
- [getLabel](HeatLayerToaolDefaults.md#getlabel)
- [getLatitudeDimension](HeatLayerToaolDefaults.md#getlatitudedimension)
- [getLayerName](HeatLayerToaolDefaults.md#getlayername)
- [getLongitudeDimension](HeatLayerToaolDefaults.md#getlongitudedimension)
- [getProps](HeatLayerToaolDefaults.md#getprops)
- [getRadiusDimension](HeatLayerToaolDefaults.md#getradiusdimension)
- [getReactiveRadiusDimension](HeatLayerToaolDefaults.md#getreactiveradiusdimension)
- [getReactiveRadiusOperationDimension](HeatLayerToaolDefaults.md#getreactiveradiusoperationdimension)
- [getReactiveRadiusZoomDimension](HeatLayerToaolDefaults.md#getreactiveradiuszoomdimension)
- [getType](HeatLayerToaolDefaults.md#gettype)
- [getZoomDimension](HeatLayerToaolDefaults.md#getzoomdimension)
- [isEnabled](HeatLayerToaolDefaults.md#isenabled)
- [isSingleton](HeatLayerToaolDefaults.md#issingleton)

## Constructors

### constructor

• **new HeatLayerToaolDefaults**(): [`HeatLayerToaolDefaults`](HeatLayerToaolDefaults.md)

#### Returns

[`HeatLayerToaolDefaults`](HeatLayerToaolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-heat"`

A unique string of the tool type.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L40)

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

### getBlurDimension

▸ **getBlurDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getBlurDimension](../interfaces/IHeatLayerToolDefaults.md#getblurdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L138)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getConfig](../interfaces/IHeatLayerToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getCurrentZoomDimension

▸ **getCurrentZoomDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getCurrentZoomDimension](../interfaces/IHeatLayerToolDefaults.md#getcurrentzoomdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L158)

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

▸ **getDimensions**(`map?`): `Object`

It returns list of map dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `blur` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `currentZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `gradient` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\> |
| `intensity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `radius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `reactiveOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `reactiveRadius` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `reactiveZoom` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `zoom` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\> |

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getDimensions](../interfaces/IHeatLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L69)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getFiltersManager](../interfaces/IHeatLayerToolDefaults.md#getfiltersmanager)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L58)

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

### getGradientDimension

▸ **getGradientDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getGradientDimension](../interfaces/IHeatLayerToolDefaults.md#getgradientdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L123)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getIcon](../interfaces/IHeatLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L54)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getId](../interfaces/IHeatLayerToolDefaults.md#getid)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getId](LayerToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getIntensityDimension

▸ **getIntensityDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getIntensityDimension](../interfaces/IHeatLayerToolDefaults.md#getintensitydimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L105)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getLabel](../interfaces/IHeatLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L50)

___

### getLatitudeDimension

▸ **getLatitudeDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getLatitudeDimension](../interfaces/IHeatLayerToolDefaults.md#getlatitudedimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:85](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L85)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getLayerName](../interfaces/IHeatLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L46)

___

### getLongitudeDimension

▸ **getLongitudeDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getLongitudeDimension](../interfaces/IHeatLayerToolDefaults.md#getlongitudedimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L95)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getProps](../interfaces/IHeatLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getRadiusDimension

▸ **getRadiusDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getRadiusDimension](../interfaces/IHeatLayerToolDefaults.md#getradiusdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L115)

___

### getReactiveRadiusDimension

▸ **getReactiveRadiusDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getReactiveRadiusDimension](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiusdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:189](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L189)

___

### getReactiveRadiusOperationDimension

▸ **getReactiveRadiusOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getReactiveRadiusOperationDimension](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiusoperationdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:166](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L166)

___

### getReactiveRadiusZoomDimension

▸ **getReactiveRadiusZoomDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getReactiveRadiusZoomDimension](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiuszoomdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:182](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L182)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getType](../interfaces/IHeatLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L42)

___

### getZoomDimension

▸ **getZoomDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[getZoomDimension](../interfaces/IHeatLayerToolDefaults.md#getzoomdimension)

#### Defined in

[src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:146](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L146)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[isEnabled](../interfaces/IHeatLayerToolDefaults.md#isenabled)

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

[IHeatLayerToolDefaults](../interfaces/IHeatLayerToolDefaults.md).[isSingleton](../interfaces/IHeatLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
