[geovisto-map](../README.md) / [Exports](../modules.md) / SpikeLayerToolState

# Class: SpikeLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`SpikeLayerToolState`**

## Implements

- [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)

## Table of contents

### Constructors

- [constructor](SpikeLayerToolState.md#constructor)

### Properties

- [categoryColorRules](SpikeLayerToolState.md#categorycolorrules)
- [layer](SpikeLayerToolState.md#layer)
- [manager](SpikeLayerToolState.md#manager)
- [markers](SpikeLayerToolState.md#markers)
- [workData](SpikeLayerToolState.md#workdata)

### Methods

- [deserialize](SpikeLayerToolState.md#deserialize)
- [deserializeDimensions](SpikeLayerToolState.md#deserializedimensions)
- [getCategoryColorRules](SpikeLayerToolState.md#getcategorycolorrules)
- [getDimensions](SpikeLayerToolState.md#getdimensions)
- [getFiltersManager](SpikeLayerToolState.md#getfiltersmanager)
- [getIcon](SpikeLayerToolState.md#geticon)
- [getId](SpikeLayerToolState.md#getid)
- [getLabel](SpikeLayerToolState.md#getlabel)
- [getLayer](SpikeLayerToolState.md#getlayer)
- [getLayerItems](SpikeLayerToolState.md#getlayeritems)
- [getLayerName](SpikeLayerToolState.md#getlayername)
- [getMap](SpikeLayerToolState.md#getmap)
- [getMapObject](SpikeLayerToolState.md#getmapobject)
- [getMarkers](SpikeLayerToolState.md#getmarkers)
- [getType](SpikeLayerToolState.md#gettype)
- [getWorkData](SpikeLayerToolState.md#getworkdata)
- [initialize](SpikeLayerToolState.md#initialize)
- [isEnabled](SpikeLayerToolState.md#isenabled)
- [serialize](SpikeLayerToolState.md#serialize)
- [setCategoryColorRules](SpikeLayerToolState.md#setcategorycolorrules)
- [setDimensions](SpikeLayerToolState.md#setdimensions)
- [setEnabled](SpikeLayerToolState.md#setenabled)
- [setFiltersManager](SpikeLayerToolState.md#setfiltersmanager)
- [setIcon](SpikeLayerToolState.md#seticon)
- [setId](SpikeLayerToolState.md#setid)
- [setLabel](SpikeLayerToolState.md#setlabel)
- [setLayer](SpikeLayerToolState.md#setlayer)
- [setLayerItems](SpikeLayerToolState.md#setlayeritems)
- [setLayerName](SpikeLayerToolState.md#setlayername)
- [setMap](SpikeLayerToolState.md#setmap)
- [setMarkers](SpikeLayerToolState.md#setmarkers)
- [setWorkData](SpikeLayerToolState.md#setworkdata)

## Constructors

### constructor

• **new SpikeLayerToolState**(`tool`): [`SpikeLayerToolState`](SpikeLayerToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), \{ `aggregation?`: `string` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)\>\> |

#### Returns

[`SpikeLayerToolState`](SpikeLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L35)

## Properties

### categoryColorRules

• `Private` **categoryColorRules**: `ICategoryColorRules`[]

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L32)

___

### layer

• `Private` `Optional` **layer**: `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L29)

___

### manager

• `Private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L33)

___

### markers

• `Private` **markers**: `Marker`\<`any`\>[]

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L30)

___

### workData

• `Private` **workData**: `IWorkData`[]

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L31)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig) |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[deserialize](../interfaces/ISpikeLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L96)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.aggregation?` | `string` |
| `dimensionsConfig.category?` | `string` |
| `dimensionsConfig.categoryColor?` | `string` |
| `dimensionsConfig.categoryColorOp?` | `string` |
| `dimensionsConfig.categoryColorValue?` | `string` |
| `dimensionsConfig.color?` | `string` |
| `dimensionsConfig.latitude?` | `string` |
| `dimensionsConfig.longitude?` | `string` |
| `dimensionsConfig.value?` | `string` |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[deserializeDimensions](../interfaces/ISpikeLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L123)

___

### getCategoryColorRules

▸ **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getCategoryColorRules](../interfaces/ISpikeLayerToolState.md#getcategorycolorrules)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:244](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L244)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getDimensions](../interfaces/ISpikeLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:216](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L216)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getFiltersManager](../interfaces/ISpikeLayerToolState.md#getfiltersmanager)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L207)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getIcon](../interfaces/ISpikeLayerToolState.md#geticon)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getId](../interfaces/ISpikeLayerToolState.md#getid)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getLabel](../interfaces/ISpikeLayerToolState.md#getlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[getLabel](LayerToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLayer

▸ **getLayer**(): `undefined` \| `LayerGroup`\<`any`\>

#### Returns

`undefined` \| `LayerGroup`\<`any`\>

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getLayer](../interfaces/ISpikeLayerToolState.md#getlayer)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:224](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L224)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getLayerItems](../interfaces/ISpikeLayerToolState.md#getlayeritems)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getLayerName](../interfaces/ISpikeLayerToolState.md#getlayername)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getMap](../interfaces/ISpikeLayerToolState.md#getmap)

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

### getMarkers

▸ **getMarkers**(): `Marker`\<`any`\>[]

#### Returns

`Marker`\<`any`\>[]

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getMarkers](../interfaces/ISpikeLayerToolState.md#getmarkers)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:232](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L232)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getType](../interfaces/ISpikeLayerToolState.md#gettype)

#### Inherited from

[LayerToolState](LayerToolState.md).[getType](LayerToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### getWorkData

▸ **getWorkData**(): `IWorkData`[]

#### Returns

`IWorkData`[]

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[getWorkData](../interfaces/ISpikeLayerToolState.md#getworkdata)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:252](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L252)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md) |
| `props` | [`ISpikeLayerToolProps`](../modules.md#ispikelayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[initialize](../interfaces/ISpikeLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L43)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[isEnabled](../interfaces/ISpikeLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md) |

#### Returns

[`ISpikeLayerToolConfig`](../modules.md#ispikelayertoolconfig)

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[serialize](../interfaces/ISpikeLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:174](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L174)

___

### setCategoryColorRules

▸ **setCategoryColorRules**(`rules`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rules` | `ICategoryColorRules`[] |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setCategoryColorRules](../interfaces/ISpikeLayerToolState.md#setcategorycolorrules)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:240](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L240)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setDimensions](../interfaces/ISpikeLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:220](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L220)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setEnabled](../interfaces/ISpikeLayerToolState.md#setenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[setEnabled](LayerToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setFiltersManager

▸ **setFiltersManager**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`IMapFilterManager`](../interfaces/IMapFilterManager.md) |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setFiltersManager](../interfaces/ISpikeLayerToolState.md#setfiltersmanager)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:211](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L211)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setIcon](../interfaces/ISpikeLayerToolState.md#seticon)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setId](../interfaces/ISpikeLayerToolState.md#setid)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setLabel](../interfaces/ISpikeLayerToolState.md#setlabel)

#### Inherited from

[LayerToolState](LayerToolState.md).[setLabel](LayerToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setLayer

▸ **setLayer**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `LayerGroup`\<`any`\> |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setLayer](../interfaces/ISpikeLayerToolState.md#setlayer)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:228](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L228)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setLayerItems](../interfaces/ISpikeLayerToolState.md#setlayeritems)

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

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setLayerName](../interfaces/ISpikeLayerToolState.md#setlayername)

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

### setMarkers

▸ **setMarkers**(`markers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | `Marker`\<`any`\>[] |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setMarkers](../interfaces/ISpikeLayerToolState.md#setmarkers)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:236](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L236)

___

### setWorkData

▸ **setWorkData**(`workData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `workData` | `IWorkData`[] |

#### Returns

`void`

#### Implementation of

[ISpikeLayerToolState](../interfaces/ISpikeLayerToolState.md).[setWorkData](../interfaces/ISpikeLayerToolState.md#setworkdata)

#### Defined in

[src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:248](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L248)
