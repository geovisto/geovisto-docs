[geovisto-map](../README.md) / [Exports](../modules.md) / IMarkerLayerToolState

# Interface: IMarkerLayerToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops) = [`IMarkerLayerToolProps`](../modules.md#imarkerlayertoolprops) |
| `TDefaults` | extends [`IMarkerLayerToolDefaults`](IMarkerLayerToolDefaults.md) = [`IMarkerLayerToolDefaults`](IMarkerLayerToolDefaults.md) |
| `TConfig` | extends [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig) = [`IMarkerLayerToolConfig`](../modules.md#imarkerlayertoolconfig) |
| `TDimensionsConfig` | extends [`IMarkerLayerToolDimensionsConfig`](../modules.md#imarkerlayertooldimensionsconfig) = [`IMarkerLayerToolDimensionsConfig`](../modules.md#imarkerlayertooldimensionsconfig) |
| `TDimensions` | extends [`IMarkerLayerToolDimensions`](../modules.md#imarkerlayertooldimensions) = [`IMarkerLayerToolDimensions`](../modules.md#imarkerlayertooldimensions) |

## Hierarchy

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

  ↳ **`IMarkerLayerToolState`**

## Implemented by

- [`MarkerLayerToolState`](../classes/MarkerLayerToolState.md)

## Table of contents

### Methods

- [deserialize](IMarkerLayerToolState.md#deserialize)
- [deserializeDimensions](IMarkerLayerToolState.md#deserializedimensions)
- [getBucketData](IMarkerLayerToolState.md#getbucketdata)
- [getCurrentDataCategories](IMarkerLayerToolState.md#getcurrentdatacategories)
- [getDimensions](IMarkerLayerToolState.md#getdimensions)
- [getIcon](IMarkerLayerToolState.md#geticon)
- [getId](IMarkerLayerToolState.md#getid)
- [getLabel](IMarkerLayerToolState.md#getlabel)
- [getLayerItems](IMarkerLayerToolState.md#getlayeritems)
- [getLayerName](IMarkerLayerToolState.md#getlayername)
- [getMap](IMarkerLayerToolState.md#getmap)
- [getMarkerLayerGroup](IMarkerLayerToolState.md#getmarkerlayergroup)
- [getMarkers](IMarkerLayerToolState.md#getmarkers)
- [getType](IMarkerLayerToolState.md#gettype)
- [initialize](IMarkerLayerToolState.md#initialize)
- [isEnabled](IMarkerLayerToolState.md#isenabled)
- [serialize](IMarkerLayerToolState.md#serialize)
- [setBucketData](IMarkerLayerToolState.md#setbucketdata)
- [setCurrentDataCategories](IMarkerLayerToolState.md#setcurrentdatacategories)
- [setDimensions](IMarkerLayerToolState.md#setdimensions)
- [setEnabled](IMarkerLayerToolState.md#setenabled)
- [setIcon](IMarkerLayerToolState.md#seticon)
- [setId](IMarkerLayerToolState.md#setid)
- [setLabel](IMarkerLayerToolState.md#setlabel)
- [setLayerItems](IMarkerLayerToolState.md#setlayeritems)
- [setLayerName](IMarkerLayerToolState.md#setlayername)
- [setMarkerLayerGroup](IMarkerLayerToolState.md#setmarkerlayergroup)
- [setMarkers](IMarkerLayerToolState.md#setmarkers)

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

▸ **getBucketData**(): `Map`\<`string`, `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](IMapAggregationBucket.md)\>\>

It returns the bucket data.

#### Returns

`Map`\<`string`, `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](IMapAggregationBucket.md)\>\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L71)

___

### getCurrentDataCategories

▸ **getCurrentDataCategories**(): `string`[]

It returns the current data categories.

#### Returns

`string`[]

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L57)

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

### getMarkerLayerGroup

▸ **getMarkerLayerGroup**(): `undefined` \| `LayerGroup`\<`any`\>

It returns a Leaflet layer group.

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L31)

___

### getMarkers

▸ **getMarkers**(): [`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

It returns the markers.

#### Returns

[`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[]

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L43)

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
| `bucketData` | `Map`\<`string`, `Map`\<`string`, ``null`` \| [`IMapAggregationBucket`](IMapAggregationBucket.md)\>\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L78)

___

### setCurrentDataCategories

▸ **setCurrentDataCategories**(`allCategories`): `void`

It sets the current data categories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `allCategories` | `string`[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L64)

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

### setMarkerLayerGroup

▸ **setMarkerLayerGroup**(`layerGroup`): `void`

It sets a Leaflet layer group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerGroup` | `LayerGroup`\<`any`\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L38)

___

### setMarkers

▸ **setMarkers**(`markers`): `void`

It sets the markers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | [`IMarker`](IMarker.md)\<[`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>\>[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/tool/IMarkerLayerToolState.ts#L50)
