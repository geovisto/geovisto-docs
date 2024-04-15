[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerLayerToolState

# Class: MarkerLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`MarkerLayerToolState`**

## Implements

- [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)

## Table of contents

### Constructors

- [constructor](MarkerLayerToolState.md#constructor)

### Properties

- [bucketData](MarkerLayerToolState.md#bucketdata)
- [currentDataCategories](MarkerLayerToolState.md#currentdatacategories)
- [layerGroup](MarkerLayerToolState.md#layergroup)
- [markers](MarkerLayerToolState.md#markers)

### Methods

- [deserialize](MarkerLayerToolState.md#deserialize)
- [deserializeDimensions](MarkerLayerToolState.md#deserializedimensions)
- [getBucketData](MarkerLayerToolState.md#getbucketdata)
- [getCurrentDataCategories](MarkerLayerToolState.md#getcurrentdatacategories)
- [getDimensions](MarkerLayerToolState.md#getdimensions)
- [getIcon](MarkerLayerToolState.md#geticon)
- [getId](MarkerLayerToolState.md#getid)
- [getLabel](MarkerLayerToolState.md#getlabel)
- [getLayerItems](MarkerLayerToolState.md#getlayeritems)
- [getLayerName](MarkerLayerToolState.md#getlayername)
- [getMap](MarkerLayerToolState.md#getmap)
- [getMapObject](MarkerLayerToolState.md#getmapobject)
- [getMarkerLayerGroup](MarkerLayerToolState.md#getmarkerlayergroup)
- [getMarkers](MarkerLayerToolState.md#getmarkers)
- [getType](MarkerLayerToolState.md#gettype)
- [initialize](MarkerLayerToolState.md#initialize)
- [isEnabled](MarkerLayerToolState.md#isenabled)
- [serialize](MarkerLayerToolState.md#serialize)
- [setBucketData](MarkerLayerToolState.md#setbucketdata)
- [setCurrentDataCategories](MarkerLayerToolState.md#setcurrentdatacategories)
- [setDimensions](MarkerLayerToolState.md#setdimensions)
- [setEnabled](MarkerLayerToolState.md#setenabled)
- [setIcon](MarkerLayerToolState.md#seticon)
- [setId](MarkerLayerToolState.md#setid)
- [setLabel](MarkerLayerToolState.md#setlabel)
- [setLayerItems](MarkerLayerToolState.md#setlayeritems)
- [setLayerName](MarkerLayerToolState.md#setlayername)
- [setMap](MarkerLayerToolState.md#setmap)
- [setMarkerLayerGroup](MarkerLayerToolState.md#setmarkerlayergroup)
- [setMarkers](MarkerLayerToolState.md#setmarkers)

## Constructors

### constructor

• **new MarkerLayerToolState**(`tool`): [`MarkerLayerToolState`](MarkerLayerToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `geoData?`: `string` ; `geoId?`: `string` ; `round?`: `number` ; `units?`: `string` ; `unitsDesc?`: `string` ; `unitsEnabled?`: `boolean` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `geoId`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `round`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `units`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsDesc`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `unitsEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\>\> |

#### Returns

[`MarkerLayerToolState`](MarkerLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L34)

## Properties

### bucketData

• `Private` **bucketData**: `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L28)

___

### currentDataCategories

• `Private` **currentDataCategories**: `string`[]

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L27)

___

### layerGroup

• `Private` `Optional` **layerGroup**: `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L29)

___

### markers

• `Private` **markers**: [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L26)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[deserialize](../interfaces/IMarkerLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L89)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.aggregation?` | `string` |
| `dimensionsConfig.category?` | `string` |
| `dimensionsConfig.geoData?` | `string` |
| `dimensionsConfig.geoId?` | `string` |
| `dimensionsConfig.round?` | `number` |
| `dimensionsConfig.units?` | `string` |
| `dimensionsConfig.unitsDesc?` | `string` |
| `dimensionsConfig.unitsEnabled?` | `boolean` |
| `dimensionsConfig.value?` | `string` |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[deserializeDimensions](../interfaces/IMarkerLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L101)

___

### getBucketData

▸ **getBucketData**(): `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

It returns the bucket data.

#### Returns

`Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getBucketData](../interfaces/IMarkerLayerToolState.md#getbucketdata)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:210](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L210)

___

### getCurrentDataCategories

▸ **getCurrentDataCategories**(): `string`[]

It returns the current data categories.

#### Returns

`string`[]

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getCurrentDataCategories](../interfaces/IMarkerLayerToolState.md#getcurrentdatacategories)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:192](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L192)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the map layer dimensions property of the tool state.

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getDimensions](../interfaces/IMarkerLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L142)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getIcon](../interfaces/IMarkerLayerToolState.md#geticon)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getId](../interfaces/IMarkerLayerToolState.md#getid)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getLabel](../interfaces/IMarkerLayerToolState.md#getlabel)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getLayerItems](../interfaces/IMarkerLayerToolState.md#getlayeritems)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getLayerName](../interfaces/IMarkerLayerToolState.md#getlayername)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getMap](../interfaces/IMarkerLayerToolState.md#getmap)

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

### getMarkerLayerGroup

▸ **getMarkerLayerGroup**(): `undefined` \| `LayerGroup`\<`any`\>

It returns a Leaflet layer group.

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getMarkerLayerGroup](../interfaces/IMarkerLayerToolState.md#getmarkerlayergroup)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L158)

___

### getMarkers

▸ **getMarkers**(): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

It returns the markers.

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getMarkers](../interfaces/IMarkerLayerToolState.md#getmarkers)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:174](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L174)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[getType](../interfaces/IMarkerLayerToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md) |
| `props` | [`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[initialize](../interfaces/IMarkerLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L45)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[isEnabled](../interfaces/IMarkerLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md) |

#### Returns

[`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig)

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[serialize](../interfaces/IMarkerLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:119](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L119)

___

### setBucketData

▸ **setBucketData**(`bucketData`): `void`

It sets the bucket data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketData` | `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\> |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setBucketData](../interfaces/IMarkerLayerToolState.md#setbucketdata)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:219](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L219)

___

### setCurrentDataCategories

▸ **setCurrentDataCategories**(`currentDataCategories`): `void`

It sets the current data categories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentDataCategories` | `string`[] |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setCurrentDataCategories](../interfaces/IMarkerLayerToolState.md#setcurrentdatacategories)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:201](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L201)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.geoData` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> |
| `dimensions.geoId` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.round` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `dimensions.units` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsDesc` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.unitsEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setDimensions](../interfaces/IMarkerLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:151](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L151)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setEnabled](../interfaces/IMarkerLayerToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setIcon](../interfaces/IMarkerLayerToolState.md#seticon)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setId](../interfaces/IMarkerLayerToolState.md#setid)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setLabel](../interfaces/IMarkerLayerToolState.md#setlabel)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setLayerItems](../interfaces/IMarkerLayerToolState.md#setlayeritems)

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

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setLayerName](../interfaces/IMarkerLayerToolState.md#setlayername)

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

### setMarkerLayerGroup

▸ **setMarkerLayerGroup**(`layerGroup`): `void`

It sets a Leaflet layer group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerGroup` | `LayerGroup`\<`any`\> |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setMarkerLayerGroup](../interfaces/IMarkerLayerToolState.md#setmarkerlayergroup)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:167](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L167)

___

### setMarkers

▸ **setMarkers**(`markers`): `void`

It sets the markers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[] |

#### Returns

`void`

#### Implementation of

[IMarkerLayerToolState](../interfaces/IMarkerLayerToolState.md).[setMarkers](../interfaces/IMarkerLayerToolState.md#setmarkers)

#### Defined in

[src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:183](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L183)
