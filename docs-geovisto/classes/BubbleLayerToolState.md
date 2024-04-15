[geovisto-map](../README.md) / [Exports](../modules.md) / BubbleLayerToolState

# Class: BubbleLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`BubbleLayerToolState`**

## Implements

- [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)

## Table of contents

### Constructors

- [constructor](BubbleLayerToolState.md#constructor)

### Properties

- [categoryColorRules](BubbleLayerToolState.md#categorycolorrules)
- [layer](BubbleLayerToolState.md#layer)
- [manager](BubbleLayerToolState.md#manager)
- [markers](BubbleLayerToolState.md#markers)
- [workData](BubbleLayerToolState.md#workdata)

### Methods

- [deserialize](BubbleLayerToolState.md#deserialize)
- [deserializeDimensions](BubbleLayerToolState.md#deserializedimensions)
- [getCategoryColorRules](BubbleLayerToolState.md#getcategorycolorrules)
- [getDimensions](BubbleLayerToolState.md#getdimensions)
- [getFiltersManager](BubbleLayerToolState.md#getfiltersmanager)
- [getIcon](BubbleLayerToolState.md#geticon)
- [getId](BubbleLayerToolState.md#getid)
- [getLabel](BubbleLayerToolState.md#getlabel)
- [getLayer](BubbleLayerToolState.md#getlayer)
- [getLayerItems](BubbleLayerToolState.md#getlayeritems)
- [getLayerName](BubbleLayerToolState.md#getlayername)
- [getMap](BubbleLayerToolState.md#getmap)
- [getMapObject](BubbleLayerToolState.md#getmapobject)
- [getMarkers](BubbleLayerToolState.md#getmarkers)
- [getType](BubbleLayerToolState.md#gettype)
- [getWorkData](BubbleLayerToolState.md#getworkdata)
- [initialize](BubbleLayerToolState.md#initialize)
- [isEnabled](BubbleLayerToolState.md#isenabled)
- [serialize](BubbleLayerToolState.md#serialize)
- [setCategoryColorRules](BubbleLayerToolState.md#setcategorycolorrules)
- [setDimensions](BubbleLayerToolState.md#setdimensions)
- [setEnabled](BubbleLayerToolState.md#setenabled)
- [setFiltersManager](BubbleLayerToolState.md#setfiltersmanager)
- [setIcon](BubbleLayerToolState.md#seticon)
- [setId](BubbleLayerToolState.md#setid)
- [setLabel](BubbleLayerToolState.md#setlabel)
- [setLayer](BubbleLayerToolState.md#setlayer)
- [setLayerItems](BubbleLayerToolState.md#setlayeritems)
- [setLayerName](BubbleLayerToolState.md#setlayername)
- [setMap](BubbleLayerToolState.md#setmap)
- [setMarkers](BubbleLayerToolState.md#setmarkers)
- [setWorkData](BubbleLayerToolState.md#setworkdata)

## Constructors

### constructor

• **new BubbleLayerToolState**(`tool`): [`BubbleLayerToolState`](BubbleLayerToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), \{ `aggregation?`: `string` ; `bubbleSize?`: `number` ; `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string` ; `value?`: `string`  }, \{ `aggregation`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `bubbleSize`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> ; `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `value`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\>\> |

#### Returns

[`BubbleLayerToolState`](BubbleLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L36)

## Properties

### categoryColorRules

• `Private` **categoryColorRules**: `ICategoryColorRules`[]

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L33)

___

### layer

• `Private` `Optional` **layer**: `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L30)

___

### manager

• `Private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L34)

___

### markers

• `Private` **markers**: `Marker`\<`any`\>[]

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L31)

___

### workData

• `Private` **workData**: `IWorkData`[]

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L32)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[deserialize](../interfaces/IBubbleLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L101)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.aggregation?` | `string` |
| `dimensionsConfig.bubbleSize?` | `number` |
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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[deserializeDimensions](../interfaces/IBubbleLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:128](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L128)

___

### getCategoryColorRules

▸ **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getCategoryColorRules](../interfaces/IBubbleLayerToolState.md#getcategorycolorrules)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:253](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L253)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `bubbleSize` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `value` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getDimensions](../interfaces/IBubbleLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:225](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L225)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getFiltersManager](../interfaces/IBubbleLayerToolState.md#getfiltersmanager)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:215](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L215)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getIcon](../interfaces/IBubbleLayerToolState.md#geticon)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getId](../interfaces/IBubbleLayerToolState.md#getid)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getLabel](../interfaces/IBubbleLayerToolState.md#getlabel)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getLayer](../interfaces/IBubbleLayerToolState.md#getlayer)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:233](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L233)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getLayerItems](../interfaces/IBubbleLayerToolState.md#getlayeritems)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getLayerName](../interfaces/IBubbleLayerToolState.md#getlayername)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getMap](../interfaces/IBubbleLayerToolState.md#getmap)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getMarkers](../interfaces/IBubbleLayerToolState.md#getmarkers)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:241](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L241)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getType](../interfaces/IBubbleLayerToolState.md#gettype)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[getWorkData](../interfaces/IBubbleLayerToolState.md#getworkdata)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:261](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L261)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md) |
| `props` | [`IBubbleLayerToolProps`](../modules.md#ibubblelayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[initialize](../interfaces/IBubbleLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L44)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[isEnabled](../interfaces/IBubbleLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md) |

#### Returns

[`IBubbleLayerToolConfig`](../modules.md#ibubblelayertoolconfig)

#### Implementation of

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[serialize](../interfaces/IBubbleLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:180](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L180)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setCategoryColorRules](../interfaces/IBubbleLayerToolState.md#setcategorycolorrules)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:249](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L249)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.aggregation` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `dimensions.bubbleSize` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\> |
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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setDimensions](../interfaces/IBubbleLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:229](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L229)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setEnabled](../interfaces/IBubbleLayerToolState.md#setenabled)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setFiltersManager](../interfaces/IBubbleLayerToolState.md#setfiltersmanager)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:220](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L220)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setIcon](../interfaces/IBubbleLayerToolState.md#seticon)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setId](../interfaces/IBubbleLayerToolState.md#setid)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setLabel](../interfaces/IBubbleLayerToolState.md#setlabel)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setLayer](../interfaces/IBubbleLayerToolState.md#setlayer)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:237](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L237)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setLayerItems](../interfaces/IBubbleLayerToolState.md#setlayeritems)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setLayerName](../interfaces/IBubbleLayerToolState.md#setlayername)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setMarkers](../interfaces/IBubbleLayerToolState.md#setmarkers)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:245](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L245)

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

[IBubbleLayerToolState](../interfaces/IBubbleLayerToolState.md).[setWorkData](../interfaces/IBubbleLayerToolState.md#setworkdata)

#### Defined in

[src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L257)
