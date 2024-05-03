**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SpikeLayerToolDefaults

# Class: SpikeLayerToolDefaults

This class provide functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

## Constructors

### new SpikeLayerToolDefaults()

> **new SpikeLayerToolDefaults**(): [`SpikeLayerToolDefaults`](SpikeLayerToolDefaults.md)

#### Returns

[`SpikeLayerToolDefaults`](SpikeLayerToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-layer-bubble"`

A unique string of the tool type.

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`TYPE`](LayerToolDefaults.md#type)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L35)

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

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getAggregationDimension`](../interfaces/ISpikeLayerToolDefaults.md#getaggregationdimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L109)

***

### getCategoryColorDimension()

> **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getCategoryColorDimension`](../interfaces/ISpikeLayerToolDefaults.md#getcategorycolordimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:148](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L148)

***

### getCategoryColorOperationDimension()

> **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getCategoryColorOperationDimension`](../interfaces/ISpikeLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L130)

***

### getCategoryColorValueDimension()

> **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getCategoryColorValueDimension`](../interfaces/ISpikeLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:144](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L144)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getCategoryDimension`](../interfaces/ISpikeLayerToolDefaults.md#getcategorydimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L93)

***

### getColorDimension()

> **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getColorDimension`](../interfaces/ISpikeLayerToolDefaults.md#getcolordimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:122](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L122)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getConfig`](../interfaces/ISpikeLayerToolDefaults.md#getconfig)

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

It returns list of map dimensions.

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### category

> **category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### categoryColor

> **categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### categoryColorOp

> **categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

##### categoryColorValue

> **categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### color

> **color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### latitude

> **latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getDimensions`](../interfaces/ISpikeLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L61)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getFiltersManager`](../interfaces/ISpikeLayerToolDefaults.md#getfiltersmanager)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L53)

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

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getIcon`](../interfaces/ISpikeLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L49)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getId`](../interfaces/ISpikeLayerToolDefaults.md#getid)

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

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getLabel`](../interfaces/ISpikeLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L45)

***

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getLatitudeDimension`](../interfaces/ISpikeLayerToolDefaults.md#getlatitudedimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L75)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getLayerName`](../interfaces/ISpikeLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L41)

***

### getLongitudeDimension()

> **getLongitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getLongitudeDimension`](../interfaces/ISpikeLayerToolDefaults.md#getlongitudedimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L83)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getProps`](../interfaces/ISpikeLayerToolDefaults.md#getprops)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getProps`](LayerToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getType`](../interfaces/ISpikeLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L37)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`getValueDimension`](../interfaces/ISpikeLayerToolDefaults.md#getvaluedimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts:101](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolDefaults.ts#L101)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`isEnabled`](../interfaces/ISpikeLayerToolDefaults.md#isenabled)

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

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md).[`isSingleton`](../interfaces/ISpikeLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
