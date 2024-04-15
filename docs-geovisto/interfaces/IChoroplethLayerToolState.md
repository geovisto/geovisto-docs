[geovisto-map](../README.md) / [Exports](../modules.md) / IChoroplethLayerToolState

# Interface: IChoroplethLayerToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) = [`IChoroplethLayerToolProps`](../modules.md#ichoroplethlayertoolprops) |
| `TDefaults` | extends [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md) = [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md) |
| `TConfig` | extends [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig) = [`IChoroplethLayerToolConfig`](../modules.md#ichoroplethlayertoolconfig) |
| `TDimensionsConfig` | extends [`IChoroplethLayerToolDimensionsConfig`](../modules.md#ichoroplethlayertooldimensionsconfig) = [`IChoroplethLayerToolDimensionsConfig`](../modules.md#ichoroplethlayertooldimensionsconfig) |
| `TDimensions` | extends [`IChoroplethLayerToolDimensions`](../modules.md#ichoroplethlayertooldimensions) = [`IChoroplethLayerToolDimensions`](../modules.md#ichoroplethlayertooldimensions) |

## Hierarchy

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

  ↳ **`IChoroplethLayerToolState`**

## Implemented by

- [`ChoroplethLayerToolState`](../classes/ChoroplethLayerToolState.md)

## Table of contents

### Methods

- [deserialize](IChoroplethLayerToolState.md#deserialize)
- [deserializeDimensions](IChoroplethLayerToolState.md#deserializedimensions)
- [getBucketData](IChoroplethLayerToolState.md#getbucketdata)
- [getDimensions](IChoroplethLayerToolState.md#getdimensions)
- [getGeoJSONLayer](IChoroplethLayerToolState.md#getgeojsonlayer)
- [getHoveredItem](IChoroplethLayerToolState.md#gethovereditem)
- [getIcon](IChoroplethLayerToolState.md#geticon)
- [getId](IChoroplethLayerToolState.md#getid)
- [getLabel](IChoroplethLayerToolState.md#getlabel)
- [getLayerItems](IChoroplethLayerToolState.md#getlayeritems)
- [getLayerName](IChoroplethLayerToolState.md#getlayername)
- [getMap](IChoroplethLayerToolState.md#getmap)
- [getType](IChoroplethLayerToolState.md#gettype)
- [getZIndex](IChoroplethLayerToolState.md#getzindex)
- [initialize](IChoroplethLayerToolState.md#initialize)
- [isEnabled](IChoroplethLayerToolState.md#isenabled)
- [serialize](IChoroplethLayerToolState.md#serialize)
- [setBucketData](IChoroplethLayerToolState.md#setbucketdata)
- [setDimensions](IChoroplethLayerToolState.md#setdimensions)
- [setEnabled](IChoroplethLayerToolState.md#setenabled)
- [setGeoJSONLayer](IChoroplethLayerToolState.md#setgeojsonlayer)
- [setHoveredItem](IChoroplethLayerToolState.md#sethovereditem)
- [setIcon](IChoroplethLayerToolState.md#seticon)
- [setId](IChoroplethLayerToolState.md#setid)
- [setLabel](IChoroplethLayerToolState.md#setlabel)
- [setLayerItems](IChoroplethLayerToolState.md#setlayeritems)
- [setLayerName](IChoroplethLayerToolState.md#setlayername)
- [setZIndex](IChoroplethLayerToolState.md#setzindex)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`void`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[deserialize](ILayerToolState.md#deserialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L32)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `TDimensionsConfig` |

#### Returns

`void`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[deserializeDimensions](ILayerToolState.md#deserializedimensions)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L25)

___

### getBucketData

▸ **getBucketData**(): `Map`\<`string`, [`IMapAggregationBucket`](IMapAggregationBucket.md)\>

It returns the bucket data.

#### Returns

`Map`\<`string`, [`IMapAggregationBucket`](IMapAggregationBucket.md)\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L66)

___

### getDimensions

▸ **getDimensions**(): `TDimensions`

It returns the layer dimensions property of the tool state.

#### Returns

`TDimensions`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getDimensions](ILayerToolState.md#getdimensions)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L30)

___

### getGeoJSONLayer

▸ **getGeoJSONLayer**(): `undefined` \| `GeoJSON`\<`any`, `Geometry`\>

It returns a Leaflet geoJSON layer.

#### Returns

`undefined` \| `GeoJSON`\<`any`, `Geometry`\>

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L28)

___

### getHoveredItem

▸ **getHoveredItem**(): `undefined` \| `string`

It returns the hovered item.

#### Returns

`undefined` \| `string`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L40)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getIcon](ILayerToolState.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L61)

___

### getId

▸ **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getId](ILayerToolState.md#getid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L49)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getLabel](ILayerToolState.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L49)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getLayerItems](ILayerToolState.md#getlayeritems)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L54)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getLayerName](ILayerToolState.md#getlayername)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L42)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getMap](ILayerToolState.md#getmap)

#### Defined in

[src/model/types/tool/IMapToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L44)

___

### getType

▸ **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[getType](ILayerToolState.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L44)

___

### getZIndex

▸ **getZIndex**(): `number`

It returns the z index.

#### Returns

`number`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L52)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `TDefaults` |
| `props` | `TProps` |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> |

#### Returns

`void`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[initialize](ILayerToolState.md#initialize)

#### Defined in

[src/model/types/tool/IMapToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[isEnabled](ILayerToolState.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L32)

___

### serialize

▸ **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `TDefaults` |

#### Returns

`TConfig`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[serialize](ILayerToolState.md#serialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L39)

___

### setBucketData

▸ **setBucketData**(`bucketData`): `void`

It sets the bucket data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketData` | `Map`\<`string`, [`IMapAggregationBucket`](IMapAggregationBucket.md)\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L73)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `TDimensions` |

#### Returns

`void`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setDimensions](ILayerToolState.md#setdimensions)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L37)

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

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setEnabled](ILayerToolState.md#setenabled)

#### Defined in

[src/model/types/tool/IMapToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L39)

___

### setGeoJSONLayer

▸ **setGeoJSONLayer**(`layer`): `void`

It sets a Leaflet geoJSON layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `GeoJSON`\<`any`, `Geometry`\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L35)

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

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L47)

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

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setIcon](ILayerToolState.md#seticon)

#### Defined in

[src/model/types/tool/IMapToolState.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L68)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setId](ILayerToolState.md#setid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L57)

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

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setLabel](ILayerToolState.md#setlabel)

#### Defined in

[src/model/types/tool/IMapToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolState.ts#L56)

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

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setLayerItems](ILayerToolState.md#setlayeritems)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L61)

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

#### Inherited from

[ILayerToolState](ILayerToolState.md).[setLayerName](ILayerToolState.md#setlayername)

#### Defined in

[src/model/types/layer/ILayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolState.ts#L49)

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

#### Defined in

[src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/tool/IChoroplethLayerToolState.ts#L59)
