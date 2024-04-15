[geovisto-map](../README.md) / [Exports](../modules.md) / DotLayerToolState

# Class: DotLayerToolState

This class provide functions for using the state of the layer tool.

**`Author`**

Vladimir Korencik

## Hierarchy

- [`LayerToolState`](LayerToolState.md)

  ↳ **`DotLayerToolState`**

## Implements

- [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)

## Table of contents

### Constructors

- [constructor](DotLayerToolState.md#constructor)

### Properties

- [categoryColorRules](DotLayerToolState.md#categorycolorrules)
- [latlngs](DotLayerToolState.md#latlngs)
- [layer](DotLayerToolState.md#layer)
- [manager](DotLayerToolState.md#manager)
- [markers](DotLayerToolState.md#markers)

### Methods

- [deserialize](DotLayerToolState.md#deserialize)
- [deserializeDimensions](DotLayerToolState.md#deserializedimensions)
- [getCategoryColorRules](DotLayerToolState.md#getcategorycolorrules)
- [getDimensions](DotLayerToolState.md#getdimensions)
- [getFiltersManager](DotLayerToolState.md#getfiltersmanager)
- [getIcon](DotLayerToolState.md#geticon)
- [getId](DotLayerToolState.md#getid)
- [getLabel](DotLayerToolState.md#getlabel)
- [getLayer](DotLayerToolState.md#getlayer)
- [getLayerItems](DotLayerToolState.md#getlayeritems)
- [getLayerName](DotLayerToolState.md#getlayername)
- [getMap](DotLayerToolState.md#getmap)
- [getMapObject](DotLayerToolState.md#getmapobject)
- [getMarkers](DotLayerToolState.md#getmarkers)
- [getType](DotLayerToolState.md#gettype)
- [getWorkData](DotLayerToolState.md#getworkdata)
- [initialize](DotLayerToolState.md#initialize)
- [isEnabled](DotLayerToolState.md#isenabled)
- [serialize](DotLayerToolState.md#serialize)
- [setCategoryColorRules](DotLayerToolState.md#setcategorycolorrules)
- [setDimensions](DotLayerToolState.md#setdimensions)
- [setEnabled](DotLayerToolState.md#setenabled)
- [setFiltersManager](DotLayerToolState.md#setfiltersmanager)
- [setIcon](DotLayerToolState.md#seticon)
- [setId](DotLayerToolState.md#setid)
- [setLabel](DotLayerToolState.md#setlabel)
- [setLayer](DotLayerToolState.md#setlayer)
- [setLayerItems](DotLayerToolState.md#setlayeritems)
- [setLayerName](DotLayerToolState.md#setlayername)
- [setMap](DotLayerToolState.md#setmap)
- [setMarkers](DotLayerToolState.md#setmarkers)
- [setWorkData](DotLayerToolState.md#setworkdata)

## Constructors

### constructor

• **new DotLayerToolState**(`tool`): [`DotLayerToolState`](DotLayerToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../modules.md#idotlayertoolprops), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), \{ `category?`: `string` ; `categoryColor?`: `string` ; `categoryColorOp?`: `string` ; `categoryColorValue?`: `string` ; `color?`: `string` ; `latitude?`: `string` ; `longitude?`: `string`  }, \{ `category`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `categoryColor`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `categoryColorOp`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> ; `categoryColorValue`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `color`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `latitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `longitude`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\>\> |

#### Returns

[`DotLayerToolState`](DotLayerToolState.md)

#### Overrides

[LayerToolState](LayerToolState.md).[constructor](LayerToolState.md#constructor)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L38)

## Properties

### categoryColorRules

• `Private` **categoryColorRules**: `ICategoryColorRules`[]

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L33)

___

### latlngs

• `Private` **latlngs**: `IWorkData`[]

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L34)

___

### layer

• `Private` `Optional` **layer**: `LayerGroup`\<`any`\>

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L31)

___

### manager

• `Private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L35)

___

### markers

• `Private` **markers**: `CircleMarker`\<`any`\>[]

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L32)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig) |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[deserialize](../interfaces/IDotLayerToolState.md#deserialize)

#### Overrides

[LayerToolState](LayerToolState.md).[deserialize](LayerToolState.md#deserialize)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L91)

___

### deserializeDimensions

▸ **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensionsConfig` | `Object` |
| `dimensionsConfig.category?` | `string` |
| `dimensionsConfig.categoryColor?` | `string` |
| `dimensionsConfig.categoryColorOp?` | `string` |
| `dimensionsConfig.categoryColorValue?` | `string` |
| `dimensionsConfig.color?` | `string` |
| `dimensionsConfig.latitude?` | `string` |
| `dimensionsConfig.longitude?` | `string` |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[deserializeDimensions](../interfaces/IDotLayerToolState.md#deserializedimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[deserializeDimensions](LayerToolState.md#deserializedimensions)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L118)

___

### getCategoryColorRules

▸ **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getCategoryColorRules](../interfaces/IDotLayerToolState.md#getcategorycolorrules)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:226](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L226)

___

### getDimensions

▸ **getDimensions**(): `Object`

It returns the layer dimensions property of the tool state.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getDimensions](../interfaces/IDotLayerToolState.md#getdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[getDimensions](LayerToolState.md#getdimensions)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:198](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L198)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getFiltersManager](../interfaces/IDotLayerToolState.md#getfiltersmanager)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:190](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L190)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getIcon](../interfaces/IDotLayerToolState.md#geticon)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getId](../interfaces/IDotLayerToolState.md#getid)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getLabel](../interfaces/IDotLayerToolState.md#getlabel)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getLayer](../interfaces/IDotLayerToolState.md#getlayer)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:206](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L206)

___

### getLayerItems

▸ **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getLayerItems](../interfaces/IDotLayerToolState.md#getlayeritems)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getLayerName](../interfaces/IDotLayerToolState.md#getlayername)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getMap](../interfaces/IDotLayerToolState.md#getmap)

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

▸ **getMarkers**(): `CircleMarker`\<`any`\>[]

#### Returns

`CircleMarker`\<`any`\>[]

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getMarkers](../interfaces/IDotLayerToolState.md#getmarkers)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:214](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L214)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getType](../interfaces/IDotLayerToolState.md#gettype)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[getWorkData](../interfaces/IDotLayerToolState.md#getworkdata)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:234](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L234)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md) |
| `props` | [`IDotLayerToolProps`](../modules.md#idotlayertoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)\> |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[initialize](../interfaces/IDotLayerToolState.md#initialize)

#### Overrides

[LayerToolState](LayerToolState.md).[initialize](LayerToolState.md#initialize)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L46)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[isEnabled](../interfaces/IDotLayerToolState.md#isenabled)

#### Inherited from

[LayerToolState](LayerToolState.md).[isEnabled](LayerToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md) |

#### Returns

[`IDotLayerToolConfig`](../modules.md#idotlayertoolconfig)

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[serialize](../interfaces/IDotLayerToolState.md#serialize)

#### Overrides

[LayerToolState](LayerToolState.md).[serialize](LayerToolState.md#serialize)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:159](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L159)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setCategoryColorRules](../interfaces/IDotLayerToolState.md#setcategorycolorrules)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:222](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L222)

___

### setDimensions

▸ **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `Object` |
| `dimensions.category` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.categoryColor` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.categoryColorOp` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\> |
| `dimensions.categoryColorValue` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.color` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `dimensions.latitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `dimensions.longitude` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setDimensions](../interfaces/IDotLayerToolState.md#setdimensions)

#### Overrides

[LayerToolState](LayerToolState.md).[setDimensions](LayerToolState.md#setdimensions)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:202](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L202)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setEnabled](../interfaces/IDotLayerToolState.md#setenabled)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setFiltersManager](../interfaces/IDotLayerToolState.md#setfiltersmanager)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:194](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L194)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setIcon](../interfaces/IDotLayerToolState.md#seticon)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setId](../interfaces/IDotLayerToolState.md#setid)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setLabel](../interfaces/IDotLayerToolState.md#setlabel)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setLayer](../interfaces/IDotLayerToolState.md#setlayer)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:210](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L210)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setLayerItems](../interfaces/IDotLayerToolState.md#setlayeritems)

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

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setLayerName](../interfaces/IDotLayerToolState.md#setlayername)

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
| `markers` | `CircleMarker`\<`any`\>[] |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setMarkers](../interfaces/IDotLayerToolState.md#setmarkers)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:218](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L218)

___

### setWorkData

▸ **setWorkData**(`latlngs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlngs` | `IWorkData`[] |

#### Returns

`void`

#### Implementation of

[IDotLayerToolState](../interfaces/IDotLayerToolState.md).[setWorkData](../interfaces/IDotLayerToolState.md#setworkdata)

#### Defined in

[src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts:230](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L230)
