[geovisto-map](../README.md) / [Exports](../modules.md) / ISpikeLayerToolState

# Interface: ISpikeLayerToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops) = [`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops) |
| `TDefaults` | extends [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md) = [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md) |
| `TConfig` | extends [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig) = [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig) |
| `TDimensionsConfig` | extends [`ISpikeLayerToolDimensionsConfig`](../modules.md#ispikelayertooldimensionsconfig) = [`ISpikeLayerToolDimensionsConfig`](../modules.md#ispikelayertooldimensionsconfig) |
| `TDimensions` | extends [`ISpikeLayerToolDimensions`](../modules.md#ispikelayertooldimensions) = [`ISpikeLayerToolDimensions`](../modules.md#ispikelayertooldimensions) |

## Hierarchy

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

  ↳ **`ISpikeLayerToolState`**

## Implemented by

- [`SpikeLayerToolState`](../classes/SpikeLayerToolState.md)

## Table of contents

### Methods

- [deserialize](ISpikeLayerToolState.md#deserialize)
- [deserializeDimensions](ISpikeLayerToolState.md#deserializedimensions)
- [getCategoryColorRules](ISpikeLayerToolState.md#getcategorycolorrules)
- [getDimensions](ISpikeLayerToolState.md#getdimensions)
- [getFiltersManager](ISpikeLayerToolState.md#getfiltersmanager)
- [getIcon](ISpikeLayerToolState.md#geticon)
- [getId](ISpikeLayerToolState.md#getid)
- [getLabel](ISpikeLayerToolState.md#getlabel)
- [getLayer](ISpikeLayerToolState.md#getlayer)
- [getLayerItems](ISpikeLayerToolState.md#getlayeritems)
- [getLayerName](ISpikeLayerToolState.md#getlayername)
- [getMap](ISpikeLayerToolState.md#getmap)
- [getMarkers](ISpikeLayerToolState.md#getmarkers)
- [getType](ISpikeLayerToolState.md#gettype)
- [getWorkData](ISpikeLayerToolState.md#getworkdata)
- [initialize](ISpikeLayerToolState.md#initialize)
- [isEnabled](ISpikeLayerToolState.md#isenabled)
- [serialize](ISpikeLayerToolState.md#serialize)
- [setCategoryColorRules](ISpikeLayerToolState.md#setcategorycolorrules)
- [setDimensions](ISpikeLayerToolState.md#setdimensions)
- [setEnabled](ISpikeLayerToolState.md#setenabled)
- [setFiltersManager](ISpikeLayerToolState.md#setfiltersmanager)
- [setIcon](ISpikeLayerToolState.md#seticon)
- [setId](ISpikeLayerToolState.md#setid)
- [setLabel](ISpikeLayerToolState.md#setlabel)
- [setLayer](ISpikeLayerToolState.md#setlayer)
- [setLayerItems](ISpikeLayerToolState.md#setlayeritems)
- [setLayerName](ISpikeLayerToolState.md#setlayername)
- [setMarkers](ISpikeLayerToolState.md#setmarkers)
- [setWorkData](ISpikeLayerToolState.md#setworkdata)

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

### getCategoryColorRules

▸ **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L56)

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

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](IMapFilterManager.md)

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L42)

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

### getLayer

▸ **getLayer**(): `undefined` \| `LayerGroup`\<`any`\>

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L48)

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

### getMarkers

▸ **getMarkers**(): `Marker`\<`any`\>[]

#### Returns

`Marker`\<`any`\>[]

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L50)

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

### getWorkData

▸ **getWorkData**(): `IWorkData`[]

#### Returns

`IWorkData`[]

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L60)

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

### setCategoryColorRules

▸ **setCategoryColorRules**(`rules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rules` | `ICategoryColorRules`[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L54)

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

### setFiltersManager

▸ **setFiltersManager**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapFilterManager`](IMapFilterManager.md) |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L44)

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

### setLayer

▸ **setLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerGroup`\<`any`\> |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L46)

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

### setMarkers

▸ **setMarkers**(`markers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | `Marker`\<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L52)

___

### setWorkData

▸ **setWorkData**(`workData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workData` | `IWorkData`[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/types/tool/ISpikeLayerToolState.ts#L58)
