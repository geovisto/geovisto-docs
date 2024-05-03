**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HeatLayerToaolDefaults

# Class: HeatLayerToaolDefaults

This class provide functions which return the default state values.

## Author

Vladimir Korencik

## Extends

- [`LayerToolDefaults`](LayerToolDefaults.md)

## Implements

- [`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md)

## Constructors

### new HeatLayerToaolDefaults()

> **new HeatLayerToaolDefaults**(): [`HeatLayerToaolDefaults`](HeatLayerToaolDefaults.md)

#### Returns

[`HeatLayerToaolDefaults`](HeatLayerToaolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-layer-heat"`

A unique string of the tool type.

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`TYPE`](LayerToolDefaults.md#type)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L40)

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

### getBlurDimension()

> **getBlurDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getBlurDimension`](../interfaces/IHeatLayerToolDefaults.md#getblurdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L138)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getConfig`](../interfaces/IHeatLayerToolDefaults.md#getconfig)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getConfig`](LayerToolDefaults.md#getconfig)

#### Source

[model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L34)

***

### getCurrentZoomDimension()

> **getCurrentZoomDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getCurrentZoomDimension`](../interfaces/IHeatLayerToolDefaults.md#getcurrentzoomdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L158)

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

##### blur

> **blur**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### currentZoom

> **currentZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### gradient

> **gradient**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

##### intensity

> **intensity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### latitude

> **latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### radius

> **radius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### reactiveOp

> **reactiveOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

##### reactiveRadius

> **reactiveRadius**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### reactiveZoom

> **reactiveZoom**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### zoom

> **zoom**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getDimensions`](../interfaces/IHeatLayerToolDefaults.md#getdimensions)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getDimensions`](LayerToolDefaults.md#getdimensions)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L69)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getFiltersManager`](../interfaces/IHeatLayerToolDefaults.md#getfiltersmanager)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L58)

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

### getGradientDimension()

> **getGradientDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IGradient`\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getGradientDimension`](../interfaces/IHeatLayerToolDefaults.md#getgradientdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L123)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getIcon`](../interfaces/IHeatLayerToolDefaults.md#geticon)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getIcon`](LayerToolDefaults.md#geticon)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L54)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getId`](../interfaces/IHeatLayerToolDefaults.md#getid)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getId`](LayerToolDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getIntensityDimension()

> **getIntensityDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getIntensityDimension`](../interfaces/IHeatLayerToolDefaults.md#getintensitydimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L105)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getLabel`](../interfaces/IHeatLayerToolDefaults.md#getlabel)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLabel`](LayerToolDefaults.md#getlabel)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L50)

***

### getLatitudeDimension()

> **getLatitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getLatitudeDimension`](../interfaces/IHeatLayerToolDefaults.md#getlatitudedimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:85](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L85)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getLayerName`](../interfaces/IHeatLayerToolDefaults.md#getlayername)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getLayerName`](LayerToolDefaults.md#getlayername)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L46)

***

### getLongitudeDimension()

> **getLongitudeDimension**(`map`?): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getLongitudeDimension`](../interfaces/IHeatLayerToolDefaults.md#getlongitudedimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:95](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L95)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getProps`](../interfaces/IHeatLayerToolDefaults.md#getprops)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`getProps`](LayerToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getRadiusDimension()

> **getRadiusDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getRadiusDimension`](../interfaces/IHeatLayerToolDefaults.md#getradiusdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:115](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L115)

***

### getReactiveRadiusDimension()

> **getReactiveRadiusDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getReactiveRadiusDimension`](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiusdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:189](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L189)

***

### getReactiveRadiusOperationDimension()

> **getReactiveRadiusOperationDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getReactiveRadiusOperationDimension`](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiusoperationdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:166](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L166)

***

### getReactiveRadiusZoomDimension()

> **getReactiveRadiusZoomDimension**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getReactiveRadiusZoomDimension`](../interfaces/IHeatLayerToolDefaults.md#getreactiveradiuszoomdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:182](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L182)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getType`](../interfaces/IHeatLayerToolDefaults.md#gettype)

#### Overrides

[`LayerToolDefaults`](LayerToolDefaults.md).[`getType`](LayerToolDefaults.md#gettype)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L42)

***

### getZoomDimension()

> **getZoomDimension**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`IZoomLevel`\>

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`getZoomDimension`](../interfaces/IHeatLayerToolDefaults.md#getzoomdimension)

#### Source

[tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts:146](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/heat/model/internal/tool/HeatLayerToolDefaults.ts#L146)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`isEnabled`](../interfaces/IHeatLayerToolDefaults.md#isenabled)

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

[`IHeatLayerToolDefaults`](../interfaces/IHeatLayerToolDefaults.md).[`isSingleton`](../interfaces/IHeatLayerToolDefaults.md#issingleton)

#### Inherited from

[`LayerToolDefaults`](LayerToolDefaults.md).[`isSingleton`](LayerToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
