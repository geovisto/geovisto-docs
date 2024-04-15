[geovisto-map](../README.md) / [Exports](../modules.md) / ChoroplethLayerToolDefaults

# Class: ChoroplethLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`ChoroplethLayerToolDefaults`**

## Implements

- [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](ChoroplethLayerToolDefaults.md#constructor)

### Properties

- [idString](ChoroplethLayerToolDefaults.md#idstring)
- [TYPE](ChoroplethLayerToolDefaults.md#type)
- [id](ChoroplethLayerToolDefaults.md#id)

### Methods

- [generateId](ChoroplethLayerToolDefaults.md#generateid)
- [getAggregationDimension](ChoroplethLayerToolDefaults.md#getaggregationdimension)
- [getColorDimension](ChoroplethLayerToolDefaults.md#getcolordimension)
- [getConfig](ChoroplethLayerToolDefaults.md#getconfig)
- [getCustomColorDimension](ChoroplethLayerToolDefaults.md#getcustomcolordimension)
- [getCustomMinMaxDimension](ChoroplethLayerToolDefaults.md#getcustomminmaxdimension)
- [getDataManager](ChoroplethLayerToolDefaults.md#getdatamanager)
- [getDimensions](ChoroplethLayerToolDefaults.md#getdimensions)
- [getGeoData](ChoroplethLayerToolDefaults.md#getgeodata)
- [getGeoDataDimension](ChoroplethLayerToolDefaults.md#getgeodatadimension)
- [getGeoDataManager](ChoroplethLayerToolDefaults.md#getgeodatamanager)
- [getGeoIdDimension](ChoroplethLayerToolDefaults.md#getgeoiddimension)
- [getIcon](ChoroplethLayerToolDefaults.md#geticon)
- [getId](ChoroplethLayerToolDefaults.md#getid)
- [getLabel](ChoroplethLayerToolDefaults.md#getlabel)
- [getLayerName](ChoroplethLayerToolDefaults.md#getlayername)
- [getMaxValueDimension](ChoroplethLayerToolDefaults.md#getmaxvaluedimension)
- [getMinValueDimension](ChoroplethLayerToolDefaults.md#getminvaluedimension)
- [getProps](ChoroplethLayerToolDefaults.md#getprops)
- [getRangeDimension](ChoroplethLayerToolDefaults.md#getrangedimension)
- [getRoundDimension](ChoroplethLayerToolDefaults.md#getrounddimension)
- [getScalingDimension](ChoroplethLayerToolDefaults.md#getscalingdimension)
- [getType](ChoroplethLayerToolDefaults.md#gettype)
- [getUnitsDescDimension](ChoroplethLayerToolDefaults.md#getunitsdescdimension)
- [getUnitsDimension](ChoroplethLayerToolDefaults.md#getunitsdimension)
- [getUnitsEnabledDimension](ChoroplethLayerToolDefaults.md#getunitsenableddimension)
- [getValueDimension](ChoroplethLayerToolDefaults.md#getvaluedimension)
- [getZIndex](ChoroplethLayerToolDefaults.md#getzindex)
- [isEnabled](ChoroplethLayerToolDefaults.md#isenabled)
- [isSingleton](ChoroplethLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new ChoroplethLayerToolDefaults**(): [`ChoroplethLayerToolDefaults`](ChoroplethLayerToolDefaults.md)

#### Returns

[`ChoroplethLayerToolDefaults`](ChoroplethLayerToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-choropleth"`

Static tool type constant.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L41)

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

### getAggregationDimension

▸ **getAggregationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

It returns the default aggregation function dimension.

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getAggregationDimension](../interfaces/IChoroplethLayerToolDefaults.md#getaggregationdimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L130)

___

### getColorDimension

▸ **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the color dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getColorDimension](../interfaces/IChoroplethLayerToolDefaults.md#getcolordimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:159](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L159)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getConfig](../interfaces/IChoroplethLayerToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getCustomColorDimension

▸ **getCustomColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getCustomColorDimension](../interfaces/IChoroplethLayerToolDefaults.md#getcustomcolordimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:148](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L148)

___

### getCustomMinMaxDimension

▸ **getCustomMinMaxDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the custom min-max dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getCustomMinMaxDimension](../interfaces/IChoroplethLayerToolDefaults.md#getcustomminmaxdimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:201](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L201)

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

It returns the map of layer dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `customColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `customMinMax` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `maxValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `minValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `range` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `scaling` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> |
| `units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getDimensions](../interfaces/IChoroplethLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L74)

___

### getGeoData

▸ **getGeoData**(): [`IGeoData`](../interfaces/IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getGeoData](../interfaces/IChoroplethLayerToolDefaults.md#getgeodata)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:278](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L278)

___

### getGeoDataDimension

▸ **getGeoDataDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

It returns the default geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getGeoDataDimension](../interfaces/IChoroplethLayerToolDefaults.md#getgeodatadimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L97)

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

### getGeoIdDimension

▸ **getGeoIdDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getGeoIdDimension](../interfaces/IChoroplethLayerToolDefaults.md#getgeoiddimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L108)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getIcon](../interfaces/IChoroplethLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L67)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getId](../interfaces/IChoroplethLayerToolDefaults.md#getid)

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

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getLabel](../interfaces/IChoroplethLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L60)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getLayerName](../interfaces/IChoroplethLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L53)

___

### getMaxValueDimension

▸ **getMaxValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getMaxValueDimension](../interfaces/IChoroplethLayerToolDefaults.md#getmaxvaluedimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:223](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L223)

___

### getMinValueDimension

▸ **getMinValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the min value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getMinValueDimension](../interfaces/IChoroplethLayerToolDefaults.md#getminvaluedimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:212](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L212)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getProps](../interfaces/IChoroplethLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getRangeDimension

▸ **getRangeDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

It returns the range dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getRangeDimension](../interfaces/IChoroplethLayerToolDefaults.md#getrangedimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:170](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L170)

___

### getRoundDimension

▸ **getRoundDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getRoundDimension](../interfaces/IChoroplethLayerToolDefaults.md#getrounddimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:267](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L267)

___

### getScalingDimension

▸ **getScalingDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

It returns the scaling dimension.

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getScalingDimension](../interfaces/IChoroplethLayerToolDefaults.md#getscalingdimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:181](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L181)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getType](../interfaces/IChoroplethLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L46)

___

### getUnitsDescDimension

▸ **getUnitsDescDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getUnitsDescDimension](../interfaces/IChoroplethLayerToolDefaults.md#getunitsdescdimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:245](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L245)

___

### getUnitsDimension

▸ **getUnitsDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getUnitsDimension](../interfaces/IChoroplethLayerToolDefaults.md#getunitsdimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:234](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L234)

___

### getUnitsEnabledDimension

▸ **getUnitsEnabledDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getUnitsEnabledDimension](../interfaces/IChoroplethLayerToolDefaults.md#getunitsenableddimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:256](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L256)

___

### getValueDimension

▸ **getValueDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getValueDimension](../interfaces/IChoroplethLayerToolDefaults.md#getvaluedimension)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:119](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L119)

___

### getZIndex

▸ **getZIndex**(): `number`

It returns preferred z index for the choropoleth layer.

#### Returns

`number`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[getZIndex](../interfaces/IChoroplethLayerToolDefaults.md#getzindex)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:287](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L287)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[isEnabled](../interfaces/IChoroplethLayerToolDefaults.md#isenabled)

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

[IChoroplethLayerToolDefaults](../interfaces/IChoroplethLayerToolDefaults.md).[isSingleton](../interfaces/IChoroplethLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
