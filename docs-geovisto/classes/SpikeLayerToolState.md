**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SpikeLayerToolState

# Class: SpikeLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Vladimir Korencik

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)

## Constructors

### new SpikeLayerToolState()

> **new SpikeLayerToolState**(`tool`): [`SpikeLayerToolState`](SpikeLayerToolState.md)

#### Parameters

• **tool**: [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Returns

[`SpikeLayerToolState`](SpikeLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L35)

## Properties

### categoryColorRules

> `private` **categoryColorRules**: `ICategoryColorRules`[]

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L32)

***

### layer?

> `private` `optional` **layer**: `any`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L29)

***

### manager

> `private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L33)

***

### markers

> `private` **markers**: `Marker`[]

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L30)

***

### workData

> `private` **workData**: `any`[]

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L31)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`deserialize`](../interfaces/ISpikeLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L96)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.aggregation?**: `string`

• **dimensionsConfig.category?**: `string`

• **dimensionsConfig.categoryColor?**: `string`

• **dimensionsConfig.categoryColorOp?**: `string`

• **dimensionsConfig.categoryColorValue?**: `string`

• **dimensionsConfig.color?**: `string`

• **dimensionsConfig.latitude?**: `string`

• **dimensionsConfig.longitude?**: `string`

• **dimensionsConfig.value?**: `string`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`deserializeDimensions`](../interfaces/ISpikeLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L123)

***

### getCategoryColorRules()

> **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getCategoryColorRules`](../interfaces/ISpikeLayerToolState.md#getcategorycolorrules)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:244](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L244)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the layer dimensions property of the tool state.

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### category

> **category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### categoryColor

> **categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### categoryColorOp

> **categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

##### categoryColorValue

> **categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### color

> **color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### latitude

> **latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### longitude

> **longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getDimensions`](../interfaces/ISpikeLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:216](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L216)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getFiltersManager`](../interfaces/ISpikeLayerToolState.md#getfiltersmanager)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L207)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getIcon`](../interfaces/ISpikeLayerToolState.md#geticon)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getIcon`](LayerToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getId`](../interfaces/ISpikeLayerToolState.md#getid)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getId`](LayerToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getLabel`](../interfaces/ISpikeLayerToolState.md#getlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLabel`](LayerToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLayer()

> **getLayer**(): `any`

#### Returns

`any`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getLayer`](../interfaces/ISpikeLayerToolState.md#getlayer)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:224](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L224)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getLayerItems`](../interfaces/ISpikeLayerToolState.md#getlayeritems)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerItems`](LayerToolState.md#getlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L104)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getLayerName`](../interfaces/ISpikeLayerToolState.md#getlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLayerName`](LayerToolState.md#getlayername)

#### Source

[model/internal/layer/LayerToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L88)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getMap`](../interfaces/ISpikeLayerToolState.md#getmap)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMap`](LayerToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getMapObject`](LayerToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getMarkers()

> **getMarkers**(): `Marker`[]

#### Returns

`Marker`[]

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getMarkers`](../interfaces/ISpikeLayerToolState.md#getmarkers)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:232](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L232)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getType`](../interfaces/ISpikeLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### getWorkData()

> **getWorkData**(): `any`[]

#### Returns

`any`[]

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`getWorkData`](../interfaces/ISpikeLayerToolState.md#getworkdata)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:252](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L252)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

• **props**: [`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`initialize`](../interfaces/ISpikeLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L43)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`isEnabled`](../interfaces/ISpikeLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

#### Returns

[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`serialize`](../interfaces/ISpikeLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:174](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L174)

***

### setCategoryColorRules()

> **setCategoryColorRules**(`rules`): `void`

#### Parameters

• **rules**: `ICategoryColorRules`[]

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setCategoryColorRules`](../interfaces/ISpikeLayerToolState.md#setcategorycolorrules)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:240](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L240)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setDimensions`](../interfaces/ISpikeLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:220](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L220)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setEnabled`](../interfaces/ISpikeLayerToolState.md#setenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setFiltersManager()

> **setFiltersManager**(`manager`): `void`

#### Parameters

• **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setFiltersManager`](../interfaces/ISpikeLayerToolState.md#setfiltersmanager)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:211](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L211)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setIcon`](../interfaces/ISpikeLayerToolState.md#seticon)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setIcon`](LayerToolState.md#seticon)

#### Source

[model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L129)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setId`](../interfaces/ISpikeLayerToolState.md#setid)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setId`](LayerToolState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setLabel`](../interfaces/ISpikeLayerToolState.md#setlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLabel`](LayerToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setLayer()

> **setLayer**(`layer`): `void`

#### Parameters

• **layer**: `LayerGroup`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setLayer`](../interfaces/ISpikeLayerToolState.md#setlayer)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:228](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L228)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setLayerItems`](../interfaces/ISpikeLayerToolState.md#setlayeritems)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerItems`](LayerToolState.md#setlayeritems)

#### Source

[model/internal/layer/LayerToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L113)

***

### setLayerName()

> **setLayerName**(`layerName`): `void`

It sets the layer name property of the tool state.

#### Parameters

• **layerName**: `string`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setLayerName`](../interfaces/ISpikeLayerToolState.md#setlayername)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLayerName`](LayerToolState.md#setlayername)

#### Source

[model/internal/layer/LayerToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/LayerToolState.ts#L97)

***

### setMap()

> `protected` **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`void`

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setMap`](LayerToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)

***

### setMarkers()

> **setMarkers**(`markers`): `void`

#### Parameters

• **markers**: `Marker`[]

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setMarkers`](../interfaces/ISpikeLayerToolState.md#setmarkers)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:236](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L236)

***

### setWorkData()

> **setWorkData**(`workData`): `void`

#### Parameters

• **workData**: `any`[]

#### Returns

`void`

#### Implementation of

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md).[`setWorkData`](../interfaces/ISpikeLayerToolState.md#setworkdata)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts:248](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerToolState.ts#L248)
