**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ChoroplethLayerToolDefaults

# Class: ChoroplethLayerToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

## Constructors

### new ChoroplethLayerToolDefaults()

> **new ChoroplethLayerToolDefaults**(): [`ChoroplethLayerToolDefaults`](ChoroplethLayerToolDefaults.md)

#### Returns

[`ChoroplethLayerToolDefaults`](ChoroplethLayerToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-layer-choropleth"`

Static tool type constant.

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`TYPE`](LayerToolDefaults.md#type)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L41)

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

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getAggregationDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getaggregationdimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L130)

***

### getColorDimension()

> **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the color dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getColorDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getcolordimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:159](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L159)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getConfig`](../interfaces/IChoroplethLayerToolDefaults.md#getconfig)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getConfig`](LayerToolDefaults.md#getconfig)

#### Source

[model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L34)

***

### getCustomColorDimension()

> **getCustomColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the animate direction dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getCustomColorDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getcustomcolordimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:148](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L148)

***

### getCustomMinMaxDimension()

> **getCustomMinMaxDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the custom min-max dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getCustomMinMaxDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getcustomminmaxdimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:201](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L201)

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

##### color

> **color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### customColor

> **customColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### customMinMax

> **customMinMax**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### maxValue

> **maxValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### minValue

> **minValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### range

> **range**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

##### round

> **round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### scaling

> **scaling**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

##### units

> **units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getDimensions`](../interfaces/IChoroplethLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L74)

***

### getGeoData()

> **getGeoData**(): [`IGeoData`](../interfaces/IGeoData.md)[]

It returns the default geo data.

#### Returns

[`IGeoData`](../interfaces/IGeoData.md)[]

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getGeoData`](../interfaces/IChoroplethLayerToolDefaults.md#getgeodata)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:278](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L278)

***

### getGeoDataDimension()

> **getGeoDataDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

It returns the default geo ID dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getGeoDataDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getgeodatadimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L97)

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

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getGeoIdDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getgeoiddimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L108)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getIcon`](../interfaces/IChoroplethLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L67)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getId`](../interfaces/IChoroplethLayerToolDefaults.md#getid)

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

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getLabel`](../interfaces/IChoroplethLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L60)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getLayerName`](../interfaces/IChoroplethLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L53)

***

### getMaxValueDimension()

> **getMaxValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the max value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getMaxValueDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getmaxvaluedimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:223](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L223)

***

### getMinValueDimension()

> **getMinValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the min value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getMinValueDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getminvaluedimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:212](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L212)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getProps`](../interfaces/IChoroplethLayerToolDefaults.md#getprops)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getProps`](LayerToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getRangeDimension()

> **getRangeDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

It returns the range dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getRangeDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getrangedimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:170](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L170)

***

### getRoundDimension()

> **getRoundDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

It returns the round dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getRoundDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getrounddimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:267](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L267)

***

### getScalingDimension()

> **getScalingDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

It returns the scaling dimension.

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getScalingDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getscalingdimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:181](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L181)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getType`](../interfaces/IChoroplethLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L46)

***

### getUnitsDescDimension()

> **getUnitsDescDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units description value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getUnitsDescDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getunitsdescdimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:245](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L245)

***

### getUnitsDimension()

> **getUnitsDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

It returns the units dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getUnitsDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getunitsdimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:234](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L234)

***

### getUnitsEnabledDimension()

> **getUnitsEnabledDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

It returns the units state value dimension.

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getUnitsEnabledDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getunitsenableddimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:256](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L256)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

It returns the default value dimension.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getValueDimension`](../interfaces/IChoroplethLayerToolDefaults.md#getvaluedimension)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:119](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L119)

***

### getZIndex()

> **getZIndex**(): `number`

It returns preferred z index for the choropoleth layer.

#### Returns

`number`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`getZIndex`](../interfaces/IChoroplethLayerToolDefaults.md#getzindex)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts:287](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolDefaults.ts#L287)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`isEnabled`](../interfaces/IChoroplethLayerToolDefaults.md#isenabled)

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

[`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md).[`isSingleton`](../interfaces/IChoroplethLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
