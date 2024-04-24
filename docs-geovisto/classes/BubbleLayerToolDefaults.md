**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BubbleLayerToolDefaults

# Class: BubbleLayerToolDefaults

This class provide functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

## Constructors

### new BubbleLayerToolDefaults()

> **new BubbleLayerToolDefaults**(): [`BubbleLayerToolDefaults`](BubbleLayerToolDefaults.md)

#### Returns

[`BubbleLayerToolDefaults`](BubbleLayerToolDefaults.md)

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

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L37)

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getAggregationDimension`](../interfaces/IBubbleLayerToolDefaults.md#getaggregationdimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L113)

***

### getBubbleSizeDimension()

> **getBubbleSizeDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getBubbleSizeDimension`](../interfaces/IBubbleLayerToolDefaults.md#getbubblesizedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:134](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L134)

***

### getCategoryColorDimension()

> **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getCategoryColorDimension`](../interfaces/IBubbleLayerToolDefaults.md#getcategorycolordimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L163)

***

### getCategoryColorOperationDimension()

> **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getCategoryColorOperationDimension`](../interfaces/IBubbleLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L145)

***

### getCategoryColorValueDimension()

> **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getCategoryColorValueDimension`](../interfaces/IBubbleLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:159](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L159)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getCategoryDimension`](../interfaces/IBubbleLayerToolDefaults.md#getcategorydimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L97)

***

### getColorDimension()

> **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getColorDimension`](../interfaces/IBubbleLayerToolDefaults.md#getcolordimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L126)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getConfig`](../interfaces/IBubbleLayerToolDefaults.md#getconfig)

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

##### bubbleSize

> **bubbleSize**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getDimensions`](../interfaces/IBubbleLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L64)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getFiltersManager`](../interfaces/IBubbleLayerToolDefaults.md#getfiltersmanager)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L55)

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getIcon`](../interfaces/IBubbleLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L51)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getId`](../interfaces/IBubbleLayerToolDefaults.md#getid)

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getLabel`](../interfaces/IBubbleLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L47)

***

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getLatitudeDimension`](../interfaces/IBubbleLayerToolDefaults.md#getlatitudedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L79)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getLayerName`](../interfaces/IBubbleLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L43)

***

### getLongitudeDimension()

> **getLongitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getLongitudeDimension`](../interfaces/IBubbleLayerToolDefaults.md#getlongitudedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L87)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getProps`](../interfaces/IBubbleLayerToolDefaults.md#getprops)

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getType`](../interfaces/IBubbleLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L39)

***

### getValueDimension()

> **getValueDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`getValueDimension`](../interfaces/IBubbleLayerToolDefaults.md#getvaluedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolDefaults.ts#L105)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`isEnabled`](../interfaces/IBubbleLayerToolDefaults.md#isenabled)

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

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md).[`isSingleton`](../interfaces/IBubbleLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
