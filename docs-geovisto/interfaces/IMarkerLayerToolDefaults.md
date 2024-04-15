[geovisto-map](../README.md) / [Exports](../modules.md) / IMarkerLayerToolDefaults

# Interface: IMarkerLayerToolDefaults

This interface provides functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳ **`IMarkerLayerToolDefaults`**

## Implemented by

- [`MarkerLayerToolDefaults`](../classes/MarkerLayerToolDefaults.md)

## Table of contents

### Methods

- [getAggregationDimension](IMarkerLayerToolDefaults.md#getaggregationdimension)
- [getCategoryDimension](IMarkerLayerToolDefaults.md#getcategorydimension)
- [getConfig](IMarkerLayerToolDefaults.md#getconfig)
- [getDimensions](IMarkerLayerToolDefaults.md#getdimensions)
- [getGeoData](IMarkerLayerToolDefaults.md#getgeodata)
- [getGeoDataDimension](IMarkerLayerToolDefaults.md#getgeodatadimension)
- [getGeoIdDimension](IMarkerLayerToolDefaults.md#getgeoiddimension)
- [getIcon](IMarkerLayerToolDefaults.md#geticon)
- [getId](IMarkerLayerToolDefaults.md#getid)
- [getLabel](IMarkerLayerToolDefaults.md#getlabel)
- [getLayerName](IMarkerLayerToolDefaults.md#getlayername)
- [getMarker](IMarkerLayerToolDefaults.md#getmarker)
- [getMarkerIcon](IMarkerLayerToolDefaults.md#getmarkericon)
- [getProps](IMarkerLayerToolDefaults.md#getprops)
- [getRoundDimension](IMarkerLayerToolDefaults.md#getrounddimension)
- [getType](IMarkerLayerToolDefaults.md#gettype)
- [getUnitsDescDimension](IMarkerLayerToolDefaults.md#getunitsdescdimension)
- [getUnitsDimension](IMarkerLayerToolDefaults.md#getunitsdimension)
- [getUnitsEnabledDimension](IMarkerLayerToolDefaults.md#getunitsenableddimension)
- [getValueDimension](IMarkerLayerToolDefaults.md#getvaluedimension)
- [isEnabled](IMarkerLayerToolDefaults.md#isenabled)
- [isSingleton](IMarkerLayerToolDefaults.md#issingleton)

## Methods

### getAggregationDimension

▸ **getAggregationDimension**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

It returns the default aggregation function dimension.

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L52)

___

### getCategoryDimension

▸ **getCategoryDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

It returns the default category dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L57)

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
| `category` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `geoData` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IGeoData`](IGeoData.md)\> |
| `geoId` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `round` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `units` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `unitsDesc` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `unitsEnabled` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `value` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |

#### Overrides

[ILayerToolDefaults](ILayerToolDefaults.md).[getDimensions](ILayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L32)

___

### getGeoData

▸ **getGeoData**(): [`IGeoData`](IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](IGeoData.md)[]

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L82)

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

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L37)

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

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L42)

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

### getMarker

▸ **getMarker**(`latlng`, `options?`): [`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

It returns new marker for the given options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLngExpression` |
| `options?` | [`IMarkerOptions`](../modules.md#imarkeroptions) |

#### Returns

[`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L90)

___

### getMarkerIcon

▸ **getMarkerIcon**(`options`): [`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

It returns new icon for the given options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IMarkerIconOptions`](../modules.md#imarkericonoptions) |

#### Returns

[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L97)

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

### getRoundDimension

▸ **getRoundDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L77)

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

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L67)

___

### getUnitsDimension

▸ **getUnitsDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L62)

___

### getUnitsEnabledDimension

▸ **getUnitsEnabledDimension**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:72](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L72)

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

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolDefaults.ts#L47)

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
