[geovisto-map](../README.md) / [Exports](../modules.md) / IDotLayerToolState

# Interface: IDotLayerToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IDotLayerToolProps`](../modules.md#idotlayertoolprops) = [`IDotLayerToolProps`](../modules.md#idotlayertoolprops) |
| `TDefaults` | extends [`IDotLayerToolDefaults`](IDotLayerToolDefaults.md) = [`IDotLayerToolDefaults`](IDotLayerToolDefaults.md) |
| `TConfig` | extends [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig) = [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig) |
| `TDimensionsConfig` | extends [`IDotLayerToolDimensionsConfig`](../modules.md#idotlayertooldimensionsconfig) = [`IDotLayerToolDimensionsConfig`](../modules.md#idotlayertooldimensionsconfig) |
| `TDimensions` | extends [`IDotLayerToolDimensions`](../modules.md#idotlayertooldimensions) = [`IDotLayerToolDimensions`](../modules.md#idotlayertooldimensions) |

## Hierarchy

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

  ↳ **`IDotLayerToolState`**

## Implemented by

- [`DotLayerToolState`](../classes/DotLayerToolState.md)

## Table of contents

### Methods

- [deserialize](IDotLayerToolState.md#deserialize)
- [deserializeDimensions](IDotLayerToolState.md#deserializedimensions)
- [getCategoryColorRules](IDotLayerToolState.md#getcategorycolorrules)
- [getDimensions](IDotLayerToolState.md#getdimensions)
- [getFiltersManager](IDotLayerToolState.md#getfiltersmanager)
- [getIcon](IDotLayerToolState.md#geticon)
- [getId](IDotLayerToolState.md#getid)
- [getLabel](IDotLayerToolState.md#getlabel)
- [getLayer](IDotLayerToolState.md#getlayer)
- [getLayerItems](IDotLayerToolState.md#getlayeritems)
- [getLayerName](IDotLayerToolState.md#getlayername)
- [getMap](IDotLayerToolState.md#getmap)
- [getMarkers](IDotLayerToolState.md#getmarkers)
- [getType](IDotLayerToolState.md#gettype)
- [getWorkData](IDotLayerToolState.md#getworkdata)
- [initialize](IDotLayerToolState.md#initialize)
- [isEnabled](IDotLayerToolState.md#isenabled)
- [serialize](IDotLayerToolState.md#serialize)
- [setCategoryColorRules](IDotLayerToolState.md#setcategorycolorrules)
- [setDimensions](IDotLayerToolState.md#setdimensions)
- [setEnabled](IDotLayerToolState.md#setenabled)
- [setFiltersManager](IDotLayerToolState.md#setfiltersmanager)
- [setIcon](IDotLayerToolState.md#seticon)
- [setId](IDotLayerToolState.md#setid)
- [setLabel](IDotLayerToolState.md#setlabel)
- [setLayer](IDotLayerToolState.md#setlayer)
- [setLayerItems](IDotLayerToolState.md#setlayeritems)
- [setLayerName](IDotLayerToolState.md#setlayername)
- [setMarkers](IDotLayerToolState.md#setmarkers)
- [setWorkData](IDotLayerToolState.md#setworkdata)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L55)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L41)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L47)

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

▸ **getMarkers**(): `CircleMarker`\<`any`\>[]

#### Returns

`CircleMarker`\<`any`\>[]

#### Defined in

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L49)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L59)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L53)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L43)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L45)

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
| `markers` | `CircleMarker`\<`any`\>[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L51)

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

[src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/types/tool/IDotLayerToolState.ts#L57)
