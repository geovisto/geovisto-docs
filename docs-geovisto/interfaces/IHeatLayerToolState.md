[geovisto-map](../README.md) / [Exports](../modules.md) / IHeatLayerToolState

# Interface: IHeatLayerToolState\<TProps, TDefaults, TConfig, TDimensionsConfig, TDimensions\>

This interface declares functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops) = [`IHeatLayerToolProps`](../modules.md#iheatlayertoolprops) |
| `TDefaults` | extends [`IHeatLayerToolDefaults`](IHeatLayerToolDefaults.md) = [`IHeatLayerToolDefaults`](IHeatLayerToolDefaults.md) |
| `TConfig` | extends [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig) = [`IHeatLayerToolConfig`](../modules.md#iheatlayertoolconfig) |
| `TDimensionsConfig` | extends [`IHeatLayerToolDimensionsConfig`](../modules.md#iheatlayertooldimensionsconfig) = [`IHeatLayerToolDimensionsConfig`](../modules.md#iheatlayertooldimensionsconfig) |
| `TDimensions` | extends [`IHeatLayerToolDimensions`](../modules.md#iheatlayertooldimensions) = [`IHeatLayerToolDimensions`](../modules.md#iheatlayertooldimensions) |

## Hierarchy

- [`ILayerToolState`](ILayerToolState.md)\<`TProps`, `TDefaults`, `TConfig`, `TDimensionsConfig`, `TDimensions`\>

  ↳ **`IHeatLayerToolState`**

## Implemented by

- [`HeatLayerToolState`](../classes/HeatLayerToolState.md)

## Table of contents

### Methods

- [deserialize](IHeatLayerToolState.md#deserialize)
- [deserializeDimensions](IHeatLayerToolState.md#deserializedimensions)
- [getDimensions](IHeatLayerToolState.md#getdimensions)
- [getFiltersManager](IHeatLayerToolState.md#getfiltersmanager)
- [getIcon](IHeatLayerToolState.md#geticon)
- [getId](IHeatLayerToolState.md#getid)
- [getLabel](IHeatLayerToolState.md#getlabel)
- [getLatlngsData](IHeatLayerToolState.md#getlatlngsdata)
- [getLayer](IHeatLayerToolState.md#getlayer)
- [getLayerItems](IHeatLayerToolState.md#getlayeritems)
- [getLayerName](IHeatLayerToolState.md#getlayername)
- [getLayers](IHeatLayerToolState.md#getlayers)
- [getMap](IHeatLayerToolState.md#getmap)
- [getOptions](IHeatLayerToolState.md#getoptions)
- [getReactiveRadiusRules](IHeatLayerToolState.md#getreactiveradiusrules)
- [getType](IHeatLayerToolState.md#gettype)
- [initialize](IHeatLayerToolState.md#initialize)
- [isEnabled](IHeatLayerToolState.md#isenabled)
- [serialize](IHeatLayerToolState.md#serialize)
- [setDimensions](IHeatLayerToolState.md#setdimensions)
- [setEnabled](IHeatLayerToolState.md#setenabled)
- [setFiltersManager](IHeatLayerToolState.md#setfiltersmanager)
- [setIcon](IHeatLayerToolState.md#seticon)
- [setId](IHeatLayerToolState.md#setid)
- [setLabel](IHeatLayerToolState.md#setlabel)
- [setLatlngsData](IHeatLayerToolState.md#setlatlngsdata)
- [setLayer](IHeatLayerToolState.md#setlayer)
- [setLayerItems](IHeatLayerToolState.md#setlayeritems)
- [setLayerName](IHeatLayerToolState.md#setlayername)
- [setLayers](IHeatLayerToolState.md#setlayers)
- [setOptions](IHeatLayerToolState.md#setoptions)
- [setReactiveRadiusRules](IHeatLayerToolState.md#setreactiveradiusrules)

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

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L34)

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

### getLatlngsData

▸ **getLatlngsData**(): (`LatLng` \| `HeatLatLngTuple`)[]

#### Returns

(`LatLng` \| `HeatLatLngTuple`)[]

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L52)

___

### getLayer

▸ **getLayer**(): `undefined` \| `LayerGroup`\<`any`\>

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L40)

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

### getLayers

▸ **getLayers**(): `HeatLayer`[]

#### Returns

`HeatLayer`[]

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L42)

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

### getOptions

▸ **getOptions**(): `HeatMapOptions`

#### Returns

`HeatMapOptions`

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L56)

___

### getReactiveRadiusRules

▸ **getReactiveRadiusRules**(): `IReactiveRadiusRules`[]

#### Returns

`IReactiveRadiusRules`[]

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L48)

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

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L36)

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

### setLatlngsData

▸ **setLatlngsData**(`latlngs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlngs` | (`LatLng` \| `HeatLatLngTuple`)[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L50)

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

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L38)

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

### setLayers

▸ **setLayers**(`layers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layers` | `HeatLayer`[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L44)

___

### setOptions

▸ **setOptions**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `HeatMapOptions` |

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L54)

___

### setReactiveRadiusRules

▸ **setReactiveRadiusRules**(`rules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rules` | `IReactiveRadiusRules`[] |

#### Returns

`void`

#### Defined in

[src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/heat/model/types/tool/IHeatLayerToolState.ts#L46)
