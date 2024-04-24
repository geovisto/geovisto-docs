**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BubbleLayerToolState

# Class: BubbleLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Vladimir Korencik

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)

## Constructors

### new BubbleLayerToolState()

> **new BubbleLayerToolState**(`tool`): [`BubbleLayerToolState`](BubbleLayerToolState.md)

#### Parameters

• **tool**: [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Returns

[`BubbleLayerToolState`](BubbleLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L36)

## Properties

### categoryColorRules

> `private` **categoryColorRules**: `ICategoryColorRules`[]

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L33)

***

### layer?

> `private` `optional` **layer**: `any`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L30)

***

### manager

> `private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L34)

***

### markers

> `private` **markers**: `Marker`[]

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L31)

***

### workData

> `private` **workData**: `any`[]

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L32)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`deserialize`](../interfaces/IBubbleLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L101)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.aggregation?**: `string`

• **dimensionsConfig.bubbleSize?**: `number`

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`deserializeDimensions`](../interfaces/IBubbleLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:128](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L128)

***

### getCategoryColorRules()

> **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getCategoryColorRules`](../interfaces/IBubbleLayerToolState.md#getcategorycolorrules)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:253](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L253)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the layer dimensions property of the tool state.

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### bubbleSize

> **bubbleSize**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getDimensions`](../interfaces/IBubbleLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:225](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L225)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getFiltersManager`](../interfaces/IBubbleLayerToolState.md#getfiltersmanager)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:215](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L215)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getIcon`](../interfaces/IBubbleLayerToolState.md#geticon)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getId`](../interfaces/IBubbleLayerToolState.md#getid)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getLabel`](../interfaces/IBubbleLayerToolState.md#getlabel)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getLayer`](../interfaces/IBubbleLayerToolState.md#getlayer)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:233](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L233)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getLayerItems`](../interfaces/IBubbleLayerToolState.md#getlayeritems)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getLayerName`](../interfaces/IBubbleLayerToolState.md#getlayername)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getMap`](../interfaces/IBubbleLayerToolState.md#getmap)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getMarkers`](../interfaces/IBubbleLayerToolState.md#getmarkers)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:241](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L241)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getType`](../interfaces/IBubbleLayerToolState.md#gettype)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`getWorkData`](../interfaces/IBubbleLayerToolState.md#getworkdata)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:261](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L261)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

• **props**: [`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`initialize`](../interfaces/IBubbleLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L44)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`isEnabled`](../interfaces/IBubbleLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

#### Returns

[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`serialize`](../interfaces/IBubbleLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:180](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L180)

***

### setCategoryColorRules()

> **setCategoryColorRules**(`rules`): `void`

#### Parameters

• **rules**: `ICategoryColorRules`[]

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setCategoryColorRules`](../interfaces/IBubbleLayerToolState.md#setcategorycolorrules)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:249](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L249)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.bubbleSize**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setDimensions`](../interfaces/IBubbleLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:229](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L229)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setEnabled`](../interfaces/IBubbleLayerToolState.md#setenabled)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setFiltersManager`](../interfaces/IBubbleLayerToolState.md#setfiltersmanager)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:220](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L220)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setIcon`](../interfaces/IBubbleLayerToolState.md#seticon)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setId`](../interfaces/IBubbleLayerToolState.md#setid)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setLabel`](../interfaces/IBubbleLayerToolState.md#setlabel)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setLayer`](../interfaces/IBubbleLayerToolState.md#setlayer)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:237](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L237)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setLayerItems`](../interfaces/IBubbleLayerToolState.md#setlayeritems)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setLayerName`](../interfaces/IBubbleLayerToolState.md#setlayername)

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

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setMarkers`](../interfaces/IBubbleLayerToolState.md#setmarkers)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:245](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L245)

***

### setWorkData()

> **setWorkData**(`workData`): `void`

#### Parameters

• **workData**: `any`[]

#### Returns

`void`

#### Implementation of

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md).[`setWorkData`](../interfaces/IBubbleLayerToolState.md#setworkdata)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts:257](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerToolState.ts#L257)
