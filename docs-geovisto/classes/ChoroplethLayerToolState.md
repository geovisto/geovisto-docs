[geovisto-map](../README.md) / [Exports](../modules.md) / ChoroplethLayerToolState

# Class: ChoroplethLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`ChoroplethLayerToolState`**

## Implements

- [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)

## Table of contents

### Constructors

- [constructor](ChoroplethLayerToolState.md#constructor)

### Properties

- [bucketData](ChoroplethLayerToolState.md#bucketdata)
- [geoJSONlayer](ChoroplethLayerToolState.md#geojsonlayer)
- [hoveredItem](ChoroplethLayerToolState.md#hovereditem)
- [zindex](ChoroplethLayerToolState.md#zindex)

### Methods

- [deserialize](ChoroplethLayerToolState.md#deserialize)
- [deserializeDimensions](ChoroplethLayerToolState.md#deserializedimensions)
- [getBucketData](ChoroplethLayerToolState.md#getbucketdata)
- [getDimensions](ChoroplethLayerToolState.md#getdimensions)
- [getGeoJSONLayer](ChoroplethLayerToolState.md#getgeojsonlayer)
- [getHoveredItem](ChoroplethLayerToolState.md#gethovereditem)
- [getIcon](ChoroplethLayerToolState.md#geticon)
- [getId](ChoroplethLayerToolState.md#getid)
- [getLabel](ChoroplethLayerToolState.md#getlabel)
- [getLayerItems](ChoroplethLayerToolState.md#getlayeritems)
- [getLayerName](ChoroplethLayerToolState.md#getlayername)
- [getMap](ChoroplethLayerToolState.md#getmap)
- [getMapObject](ChoroplethLayerToolState.md#getmapobject)
- [getType](ChoroplethLayerToolState.md#gettype)
- [getZIndex](ChoroplethLayerToolState.md#getzindex)
- [initialize](ChoroplethLayerToolState.md#initialize)
- [isEnabled](ChoroplethLayerToolState.md#isenabled)
- [serialize](ChoroplethLayerToolState.md#serialize)
- [setBucketData](ChoroplethLayerToolState.md#setbucketdata)
- [setDimensions](ChoroplethLayerToolState.md#setdimensions)
- [setEnabled](ChoroplethLayerToolState.md#setenabled)
- [setGeoJSONLayer](ChoroplethLayerToolState.md#setgeojsonlayer)
- [setHoveredItem](ChoroplethLayerToolState.md#sethovereditem)
- [setIcon](ChoroplethLayerToolState.md#seticon)
- [setId](ChoroplethLayerToolState.md#setid)
- [setLabel](ChoroplethLayerToolState.md#setlabel)
- [setLayerItems](ChoroplethLayerToolState.md#setlayeritems)
- [setLayerName](ChoroplethLayerToolState.md#setlayername)
- [setMap](ChoroplethLayerToolState.md#setmap)
- [setZIndex](ChoroplethLayerToolState.md#setzindex)

## Constructors

### constructor

• **new ChoroplethLayerToolState**(`tool`): [`ChoroplethLayerToolState`](ChoroplethLayerToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), \{ `aggregation?`: `string` ; `color?`: `string` ; `customColor?`: `boolean` ; `customMinMax?`: `boolean` ; `geoData?`: `string` ; `geoId?`: `string` ; `maxValue?`: `number` ; `minValue?`: `number` ; `range?`: `number` ; `round?`: `number` ; `scaling?`: `string` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `customColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `customMinMax`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `maxValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `minValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `range`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `scaling`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\>\> |

#### Returns

[`ChoroplethLayerToolState`](ChoroplethLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L30)

## Properties

### bucketData

• `Private` **bucketData**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L23)

___

### geoJSONlayer

• `Private` `Optional` **geoJSONlayer**: `GeoJSON`\<`any`, `Geometry`\>

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L24)

___

### hoveredItem

• `Private` `Optional` **hoveredItem**: `string`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L25)

___

### zindex

• `Private` **zindex**: `number`

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L22)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[deserialize](../interfaces/IChoroplethLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L77)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.aggregation?` | `string` |
| `dimensionsConfig.color?` | `string` |
| `dimensionsConfig.customColor?` | `boolean` |
| `dimensionsConfig.customMinMax?` | `boolean` |
| `dimensionsConfig.geoData?` | `string` |
| `dimensionsConfig.geoId?` | `string` |
| `dimensionsConfig.maxValue?` | `number` |
| `dimensionsConfig.minValue?` | `number` |
| `dimensionsConfig.range?` | `number` |
| `dimensionsConfig.round?` | `number` |
| `dimensionsConfig.scaling?` | `string` |
| `dimensionsConfig.units?` | `string` |
| `dimensionsConfig.unitsDesc?` | `string` |
| `dimensionsConfig.unitsEnabled?` | `boolean` |
| `dimensionsConfig.value?` | `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[deserializeDimensions](../interfaces/IChoroplethLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L86)

___

### getBucketData

▸ **getBucketData**(): `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

It returns the bucket data.

#### Returns

`Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getBucketData](../interfaces/IChoroplethLayerToolState.md#getbucketdata)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:206](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L206)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the map layer dimensions property of the tool state.

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

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getDimensions](../interfaces/IChoroplethLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:140](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L140)

___

### getGeoJSONLayer

▸ **getGeoJSONLayer**(): `undefined` \| `GeoJSON`\<`any`, `Geometry`\>

It returns a Leaflet geoJSON layer.

#### Returns

`undefined` \| `GeoJSON`\<`any`, `Geometry`\>

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getGeoJSONLayer](../interfaces/IChoroplethLayerToolState.md#getgeojsonlayer)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:156](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L156)

___

### getHoveredItem

▸ **getHoveredItem**(): `undefined` \| `string`

It returns the hovered item.

#### Returns

`undefined` \| `string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getHoveredItem](../interfaces/IChoroplethLayerToolState.md#gethovereditem)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:172](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L172)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getIcon](../interfaces/IChoroplethLayerToolState.md#geticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[getIcon](LayerToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getId](../interfaces/IChoroplethLayerToolState.md#getid)

#### Inherited from

[LayerToolState](LayerToolState.md).[getId](LayerToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getLabel](../interfaces/IChoroplethLayerToolState.md#getlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLabel](LayerToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getLayerItems](../interfaces/IChoroplethLayerToolState.md#getlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerItems](LayerToolState.md#getlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L104)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getLayerName](../interfaces/IChoroplethLayerToolState.md#getlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLayerName](LayerToolState.md#getlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L88)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getMap](../interfaces/IChoroplethLayerToolState.md#getmap)

#### Inherited from

[LayerToolState](LayerToolState.md).[getMap](LayerToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[LayerToolState](LayerToolState.md).[getMapObject](LayerToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getType](../interfaces/IChoroplethLayerToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### getZIndex

▸ **getZIndex**(): `number`

It returns the z index.

#### Returns

`number`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[getZIndex](../interfaces/IChoroplethLayerToolState.md#getzindex)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:188](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L188)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md) |
| `props` | [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[initialize](../interfaces/IChoroplethLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L41)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[isEnabled](../interfaces/IChoroplethLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md) |

#### Returns

[`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig)

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[serialize](../interfaces/IChoroplethLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L111)

___

### setBucketData

▸ **setBucketData**(`bucketData`): `void`

It sets the bucket data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketData` | `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\> |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setBucketData](../interfaces/IChoroplethLayerToolState.md#setbucketdata)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:215](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L215)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.customColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.customMinMax` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.maxValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.minValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.range` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `dimensions.round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.scaling` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\> |
| `dimensions.units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setDimensions](../interfaces/IChoroplethLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:149](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L149)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setEnabled](../interfaces/IChoroplethLayerToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setGeoJSONLayer

▸ **setGeoJSONLayer**(`geoJSONlayer`): `void`

It sets a Leaflet geoJSON layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoJSONlayer` | `GeoJSON`\<`any`, `Geometry`\> |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setGeoJSONLayer](../interfaces/IChoroplethLayerToolState.md#setgeojsonlayer)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:165](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L165)

___

### setHoveredItem

▸ **setHoveredItem**(`hoveredItem`): `void`

It sets the hovered item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hoveredItem` | `undefined` \| `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setHoveredItem](../interfaces/IChoroplethLayerToolState.md#sethovereditem)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:181](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L181)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setIcon](../interfaces/IChoroplethLayerToolState.md#seticon)

#### Inherited from

[LayerToolState](LayerToolState.md).[setIcon](LayerToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setId](../interfaces/IChoroplethLayerToolState.md#setid)

#### Inherited from

[LayerToolState](LayerToolState.md).[setId](LayerToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setLabel](../interfaces/IChoroplethLayerToolState.md#setlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLabel](LayerToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setLayerItems

▸ **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerItems` | `Layer`[] |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setLayerItems](../interfaces/IChoroplethLayerToolState.md#setlayeritems)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerItems](LayerToolState.md#setlayeritems)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L113)

___

### setLayerName

▸ **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerName` | `string` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setLayerName](../interfaces/IChoroplethLayerToolState.md#setlayername)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLayerName](LayerToolState.md#setlayername)

#### Defined in

[src/model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/LayerToolState.ts#L97)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[LayerToolState](LayerToolState.md).[setMap](LayerToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)

___

### setZIndex

▸ **setZIndex**(`zindex`): `void`

It sets the z index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `zindex` | `number` |

#### Returns

`void`

#### Implementation of

[IChoroplethLayerToolState](../interfaces/IChoroplethLayerToolState.md).[setZIndex](../interfaces/IChoroplethLayerToolState.md#setzindex)

#### Defined in

[src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:197](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L197)
