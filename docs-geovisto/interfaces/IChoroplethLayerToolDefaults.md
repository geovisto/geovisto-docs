[geovisto-map](../README.md) / [Exports](../modules.md) / IChoroplethLayerToolDefaults

# Interface: IChoroplethLayerToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳ **`IChoroplethLayerToolDefaults`**

## Implemented by

- [`ChoroplethLayerToolDefaults`](../classes/ChoroplethLayerToolDefaults.md)

## Table of contents

### Methods

- [getAggregationDimension](IChoroplethLayerToolDefaults.md#getaggregationdimension)
- [getColorDimension](IChoroplethLayerToolDefaults.md#getcolordimension)
- [getConfig](IChoroplethLayerToolDefaults.md#getconfig)
- [getCustomColorDimension](IChoroplethLayerToolDefaults.md#getcustomcolordimension)
- [getCustomMinMaxDimension](IChoroplethLayerToolDefaults.md#getcustomminmaxdimension)
- [getDimensions](IChoroplethLayerToolDefaults.md#getdimensions)
- [getGeoData](IChoroplethLayerToolDefaults.md#getgeodata)
- [getGeoDataDimension](IChoroplethLayerToolDefaults.md#getgeodatadimension)
- [getGeoIdDimension](IChoroplethLayerToolDefaults.md#getgeoiddimension)
- [getIcon](IChoroplethLayerToolDefaults.md#geticon)
- [getId](IChoroplethLayerToolDefaults.md#getid)
- [getLabel](IChoroplethLayerToolDefaults.md#getlabel)
- [getLayerName](IChoroplethLayerToolDefaults.md#getlayername)
- [getMaxValueDimension](IChoroplethLayerToolDefaults.md#getmaxvaluedimension)
- [getMinValueDimension](IChoroplethLayerToolDefaults.md#getminvaluedimension)
- [getProps](IChoroplethLayerToolDefaults.md#getprops)
- [getRangeDimension](IChoroplethLayerToolDefaults.md#getrangedimension)
- [getRoundDimension](IChoroplethLayerToolDefaults.md#getrounddimension)
- [getScalingDimension](IChoroplethLayerToolDefaults.md#getscalingdimension)
- [getType](IChoroplethLayerToolDefaults.md#gettype)
- [getUnitsDescDimension](IChoroplethLayerToolDefaults.md#getunitsdescdimension)
- [getUnitsDimension](IChoroplethLayerToolDefaults.md#getunitsdimension)
- [getUnitsEnabledDimension](IChoroplethLayerToolDefaults.md#getunitsenableddimension)
- [getValueDimension](IChoroplethLayerToolDefaults.md#getvaluedimension)
- [getZIndex](IChoroplethLayerToolDefaults.md#getzindex)
- [isEnabled](IChoroplethLayerToolDefaults.md#isenabled)
- [isSingleton](IChoroplethLayerToolDefaults.md#issingleton)

## Methods

### getAggregationDimension

▸ **getAggregationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

It returns the default aggregation function dimension.

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L46)

___

### getColorDimension

▸ **getColorDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the color dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L56)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getConfig](ILayerToolDefaults.md#getconfig)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L14)

___

### getCustomColorDimension

▸ **getCustomColorDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L51)

___

### getCustomMinMaxDimension

▸ **getCustomMinMaxDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the custom min-max dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L71)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns the map of layer dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\> |
| `color` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `customColor` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `customMinMax` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `geoData` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\> |
| `geoId` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `maxValue` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `minValue` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `range` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\> |
| `round` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `scaling` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\> |
| `units` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `unitsDesc` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `unitsEnabled` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `value` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |

#### Overrides

[ILayerToolDefaults](ILayerToolDefaults.md).[getDimensions](ILayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L26)

___

### getGeoData

▸ **getGeoData**(): [`IGeoData`](IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](IGeoData.md)[]

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L106)

___

### getGeoDataDimension

▸ **getGeoDataDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

It returns the default geo data dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L31)

___

### getGeoIdDimension

▸ **getGeoIdDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default geo ID dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L36)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getIcon](ILayerToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getId](ILayerToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLabel](ILayerToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLayerName](ILayerToolDefaults.md#getlayername)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L15)

___

### getMaxValueDimension

▸ **getMaxValueDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L81)

___

### getMinValueDimension

▸ **getMinValueDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the min value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L76)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getProps](ILayerToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getRangeDimension

▸ **getRangeDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\>

It returns the range dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](IIntegerRangeManager.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L61)

___

### getRoundDimension

▸ **getRoundDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:101](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L101)

___

### getScalingDimension

▸ **getScalingDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\>

It returns the scaling dimension.

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IScale`](IScale.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L66)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getType](ILayerToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### getUnitsDescDimension

▸ **getUnitsDescDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L91)

___

### getUnitsDimension

▸ **getUnitsDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L86)

___

### getUnitsEnabledDimension

▸ **getUnitsEnabledDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L96)

___

### getValueDimension

▸ **getValueDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L41)

___

### getZIndex

▸ **getZIndex**(): `number`

It returns preferred z index for the choropoleth layer

#### Returns

`number`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolDefaults.ts#L111)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isEnabled](ILayerToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isSingleton](ILayerToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
