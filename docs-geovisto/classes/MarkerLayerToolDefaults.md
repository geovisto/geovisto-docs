[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerLayerToolDefaults

# Class: MarkerLayerToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`MarkerLayerToolDefaults`**

## Implements

- [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

## Table of contents

### Constructors

- [constructor](MarkerLayerToolDefaults.md#constructor)

### Properties

- [idString](MarkerLayerToolDefaults.md#idstring)
- [TYPE](MarkerLayerToolDefaults.md#type)
- [id](MarkerLayerToolDefaults.md#id)

### Methods

- [generateId](MarkerLayerToolDefaults.md#generateid)
- [getAggregationDimension](MarkerLayerToolDefaults.md#getaggregationdimension)
- [getCategoryDimension](MarkerLayerToolDefaults.md#getcategorydimension)
- [getConfig](MarkerLayerToolDefaults.md#getconfig)
- [getDataManager](MarkerLayerToolDefaults.md#getdatamanager)
- [getDimensions](MarkerLayerToolDefaults.md#getdimensions)
- [getGeoData](MarkerLayerToolDefaults.md#getgeodata)
- [getGeoDataDimension](MarkerLayerToolDefaults.md#getgeodatadimension)
- [getGeoDataManager](MarkerLayerToolDefaults.md#getgeodatamanager)
- [getGeoIdDimension](MarkerLayerToolDefaults.md#getgeoiddimension)
- [getIcon](MarkerLayerToolDefaults.md#geticon)
- [getId](MarkerLayerToolDefaults.md#getid)
- [getLabel](MarkerLayerToolDefaults.md#getlabel)
- [getLayerName](MarkerLayerToolDefaults.md#getlayername)
- [getMarker](MarkerLayerToolDefaults.md#getmarker)
- [getMarkerIcon](MarkerLayerToolDefaults.md#getmarkericon)
- [getProps](MarkerLayerToolDefaults.md#getprops)
- [getRoundDimension](MarkerLayerToolDefaults.md#getrounddimension)
- [getType](MarkerLayerToolDefaults.md#gettype)
- [getUnitsDescDimension](MarkerLayerToolDefaults.md#getunitsdescdimension)
- [getUnitsDimension](MarkerLayerToolDefaults.md#getunitsdimension)
- [getUnitsEnabledDimension](MarkerLayerToolDefaults.md#getunitsenableddimension)
- [getValueDimension](MarkerLayerToolDefaults.md#getvaluedimension)
- [isEnabled](MarkerLayerToolDefaults.md#isenabled)
- [isSingleton](MarkerLayerToolDefaults.md#issingleton)

## Constructors

### constructor

• **new MarkerLayerToolDefaults**(): [`MarkerLayerToolDefaults`](MarkerLayerToolDefaults.md)

#### Returns

[`MarkerLayerToolDefaults`](MarkerLayerToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-marker"`

Static tool type constant.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L45)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getAggregationDimension](../interfaces/IMarkerLayerToolDefaults.md#getaggregationdimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:128](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L128)

___

### getCategoryDimension

▸ **getCategoryDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default category dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getCategoryDimension](../interfaces/IMarkerLayerToolDefaults.md#getcategorydimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:146](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L146)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getConfig](../interfaces/IMarkerLayerToolDefaults.md#getconfig)

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
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getDimensions](../interfaces/IMarkerLayerToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L78)

___

### getGeoData

▸ **getGeoData**(): [`IGeoData`](../interfaces/IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getGeoData](../interfaces/IMarkerLayerToolDefaults.md#getgeodata)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:201](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L201)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getGeoDataDimension](../interfaces/IMarkerLayerToolDefaults.md#getgeodatadimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L95)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getGeoIdDimension](../interfaces/IMarkerLayerToolDefaults.md#getgeoiddimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L106)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getIcon](../interfaces/IMarkerLayerToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L71)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getId](../interfaces/IMarkerLayerToolDefaults.md#getid)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getLabel](../interfaces/IMarkerLayerToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L64)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getLayerName](../interfaces/IMarkerLayerToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L57)

___

### getMarker

▸ **getMarker**(`latlng`, `options?`): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

It returns new marker for the given options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLngExpression` |
| `options?` | [`IMarkerOptions`](../modules.md#imarkeroptions) |

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getMarker](../interfaces/IMarkerLayerToolDefaults.md#getmarker)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:213](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L213)

___

### getMarkerIcon

▸ **getMarkerIcon**(`options`): [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

It returns new icon for the given options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IMarkerIconOptions`](../modules.md#imarkericonoptions) |

#### Returns

[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getMarkerIcon](../interfaces/IMarkerLayerToolDefaults.md#getmarkericon)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:222](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L222)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getProps](../interfaces/IMarkerLayerToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getRoundDimension

▸ **getRoundDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getRoundDimension](../interfaces/IMarkerLayerToolDefaults.md#getrounddimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:190](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L190)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getType](../interfaces/IMarkerLayerToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L50)

___

### getUnitsDescDimension

▸ **getUnitsDescDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getUnitsDescDimension](../interfaces/IMarkerLayerToolDefaults.md#getunitsdescdimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:168](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L168)

___

### getUnitsDimension

▸ **getUnitsDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getUnitsDimension](../interfaces/IMarkerLayerToolDefaults.md#getunitsdimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:157](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L157)

___

### getUnitsEnabledDimension

▸ **getUnitsEnabledDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getUnitsEnabledDimension](../interfaces/IMarkerLayerToolDefaults.md#getunitsenableddimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:179](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L179)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[getValueDimension](../interfaces/IMarkerLayerToolDefaults.md#getvaluedimension)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L117)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[isEnabled](../interfaces/IMarkerLayerToolDefaults.md#isenabled)

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

[IMarkerLayerToolDefaults](../interfaces/IMarkerLayerToolDefaults.md).[isSingleton](../interfaces/IMarkerLayerToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
