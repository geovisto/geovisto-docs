**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerLayerToolDefaults

# Class: MarkerLayerToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

## Constructors

### new MarkerLayerToolDefaults()

> **new MarkerLayerToolDefaults**(): [`MarkerLayerToolDefaults`](MarkerLayerToolDefaults.md)

#### Returns

[`MarkerLayerToolDefaults`](MarkerLayerToolDefaults.md)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`constructor`](LayerToolDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`idString`](LayerToolDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### TYPE

> `static` **TYPE**: `string` = `"geovisto-tool-layer-marker"`

Static tool type constant.

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`TYPE`](LayerToolDefaults.md#type)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L45)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`id`](LayerToolDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`generateId`](LayerToolDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getAggregationDimension()

> **getAggregationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

It returns the default aggregation function dimension.

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getAggregationDimension`](../interfaces/IMarkerLayerToolDefaults.md#getaggregationdimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:128](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L128)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default category dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getCategoryDimension`](../interfaces/IMarkerLayerToolDefaults.md#getcategorydimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:146](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L146)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getConfig`](../interfaces/IMarkerLayerToolDefaults.md#getconfig)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getConfig`](LayerToolDefaults.md#getconfig)

#### Source

[model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L34)

***

### getDataManager()

> **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDataManager`](LayerToolDefaults.md#getdatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L20)

***

### getDimensions()

> **getDimensions**(`map`?): `object`

It returns the map of layer dimensions.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### category

> **category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### round

> **round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### units

> **units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getDimensions`](../interfaces/IMarkerLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L78)

***

### getGeoData()

> **getGeoData**(): [`IGeoData`](../interfaces/IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getGeoData`](../interfaces/IMarkerLayerToolDefaults.md#getgeodata)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:201](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L201)

***

### getGeoDataDimension()

> **getGeoDataDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

It returns the default geo ID dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getGeoDataDimension`](../interfaces/IMarkerLayerToolDefaults.md#getgeodatadimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:95](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L95)

***

### getGeoDataManager()

> **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns default geo data manager.

#### Parameters

• **geoDataArray**: `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[]

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getGeoDataManager`](LayerToolDefaults.md#getgeodatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L27)

***

### getGeoIdDimension()

> **getGeoIdDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default geo ID dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getGeoIdDimension`](../interfaces/IMarkerLayerToolDefaults.md#getgeoiddimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L106)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getIcon`](../interfaces/IMarkerLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L71)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getId`](../interfaces/IMarkerLayerToolDefaults.md#getid)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getId`](LayerToolDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getLabel`](../interfaces/IMarkerLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L64)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getLayerName`](../interfaces/IMarkerLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L57)

***

### getMarker()

> **getMarker**(`latlng`, `options`?): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>

It returns new marker for the given options.

#### Parameters

• **latlng**: `LatLngExpression`

• **options?**: `any`

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getMarker`](../interfaces/IMarkerLayerToolDefaults.md#getmarker)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:213](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L213)

***

### getMarkerIcon()

> **getMarkerIcon**(`options`): [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>

It returns new icon for the given options.

#### Parameters

• **options**: `any`

#### Returns

[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getMarkerIcon`](../interfaces/IMarkerLayerToolDefaults.md#getmarkericon)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:222](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L222)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getProps`](../interfaces/IMarkerLayerToolDefaults.md#getprops)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getProps`](LayerToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getRoundDimension()

> **getRoundDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getRoundDimension`](../interfaces/IMarkerLayerToolDefaults.md#getrounddimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:190](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L190)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getType`](../interfaces/IMarkerLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L50)

***

### getUnitsDescDimension()

> **getUnitsDescDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getUnitsDescDimension`](../interfaces/IMarkerLayerToolDefaults.md#getunitsdescdimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:168](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L168)

***

### getUnitsDimension()

> **getUnitsDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getUnitsDimension`](../interfaces/IMarkerLayerToolDefaults.md#getunitsdimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:157](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L157)

***

### getUnitsEnabledDimension()

> **getUnitsEnabledDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getUnitsEnabledDimension`](../interfaces/IMarkerLayerToolDefaults.md#getunitsenableddimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:179](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L179)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`getValueDimension`](../interfaces/IMarkerLayerToolDefaults.md#getvaluedimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolDefaults.ts#L117)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`isEnabled`](../interfaces/IMarkerLayerToolDefaults.md#isenabled)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isEnabled`](LayerToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md).[`isSingleton`](../interfaces/IMarkerLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
