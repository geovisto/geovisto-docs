**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DotLayerToolDefaults

# Class: DotLayerToolDefaults

This class provide functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

## Constructors

### new DotLayerToolDefaults()

> **new DotLayerToolDefaults**(): [`DotLayerToolDefaults`](DotLayerToolDefaults.md)

#### Returns

[`DotLayerToolDefaults`](DotLayerToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-layer-dot"`

A unique string of the tool type.

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`TYPE`](LayerToolDefaults.md#type)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L33)

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

### getCategoryColorDimension()

> **getCategoryColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getCategoryColorDimension`](../interfaces/IDotLayerToolDefaults.md#getcategorycolordimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:124](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L124)

***

### getCategoryColorOperationDimension()

> **getCategoryColorOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getCategoryColorOperationDimension`](../interfaces/IDotLayerToolDefaults.md#getcategorycoloroperationdimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L106)

***

### getCategoryColorValueDimension()

> **getCategoryColorValueDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getCategoryColorValueDimension`](../interfaces/IDotLayerToolDefaults.md#getcategorycolorvaluedimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L120)

***

### getCategoryDimension()

> **getCategoryDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getCategoryDimension`](../interfaces/IDotLayerToolDefaults.md#getcategorydimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L90)

***

### getColorDimension()

> **getColorDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L98)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getConfig`](../interfaces/IDotLayerToolDefaults.md#getconfig)

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

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getDimensions`](../interfaces/IDotLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L60)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getFiltersManager`](../interfaces/IDotLayerToolDefaults.md#getfiltersmanager)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L51)

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

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getIcon`](../interfaces/IDotLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L47)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getId`](../interfaces/IDotLayerToolDefaults.md#getid)

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

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getLabel`](../interfaces/IDotLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L43)

***

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getLatitudeDimension`](../interfaces/IDotLayerToolDefaults.md#getlatitudedimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:72](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L72)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getLayerName`](../interfaces/IDotLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L39)

***

### getLongitudeDimension()

> **getLongitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getLongitudeDimension`](../interfaces/IDotLayerToolDefaults.md#getlongitudedimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L80)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getProps`](../interfaces/IDotLayerToolDefaults.md#getprops)

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

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`getType`](../interfaces/IDotLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolDefaults.ts#L35)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`isEnabled`](../interfaces/IDotLayerToolDefaults.md#isenabled)

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

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md).[`isSingleton`](../interfaces/IDotLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
