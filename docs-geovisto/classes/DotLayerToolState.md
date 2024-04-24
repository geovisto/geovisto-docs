**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DotLayerToolState

# Class: DotLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Vladimir Korencik

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)

## Constructors

### new DotLayerToolState()

> **new DotLayerToolState**(`tool`): [`DotLayerToolState`](DotLayerToolState.md)

#### Parameters

• **tool**: [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Returns

[`DotLayerToolState`](DotLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L38)

## Properties

### categoryColorRules

> `private` **categoryColorRules**: `ICategoryColorRules`[]

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L33)

***

### latlngs

> `private` **latlngs**: `any`[]

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L34)

***

### layer?

> `private` `optional` **layer**: `any`

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L31)

***

### manager

> `private` **manager**: [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L35)

***

### markers

> `private` **markers**: `CircleMarker`[]

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L32)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`deserialize`](../interfaces/IDotLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L91)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.category?**: `string`

• **dimensionsConfig.categoryColor?**: `string`

• **dimensionsConfig.categoryColorOp?**: `string`

• **dimensionsConfig.categoryColorValue?**: `string`

• **dimensionsConfig.color?**: `string`

• **dimensionsConfig.latitude?**: `string`

• **dimensionsConfig.longitude?**: `string`

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`deserializeDimensions`](../interfaces/IDotLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L118)

***

### getCategoryColorRules()

> **getCategoryColorRules**(): `ICategoryColorRules`[]

#### Returns

`ICategoryColorRules`[]

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getCategoryColorRules`](../interfaces/IDotLayerToolState.md#getcategorycolorrules)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:226](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L226)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the layer dimensions property of the tool state.

#### Returns

`object`

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

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getDimensions`](../interfaces/IDotLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:198](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L198)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getFiltersManager`](../interfaces/IDotLayerToolState.md#getfiltersmanager)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:190](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L190)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getIcon`](../interfaces/IDotLayerToolState.md#geticon)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getId`](../interfaces/IDotLayerToolState.md#getid)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getLabel`](../interfaces/IDotLayerToolState.md#getlabel)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getLayer`](../interfaces/IDotLayerToolState.md#getlayer)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:206](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L206)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getLayerItems`](../interfaces/IDotLayerToolState.md#getlayeritems)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getLayerName`](../interfaces/IDotLayerToolState.md#getlayername)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getMap`](../interfaces/IDotLayerToolState.md#getmap)

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

> **getMarkers**(): `CircleMarker`[]

#### Returns

`CircleMarker`[]

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getMarkers`](../interfaces/IDotLayerToolState.md#getmarkers)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:214](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L214)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getType`](../interfaces/IDotLayerToolState.md#gettype)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`getWorkData`](../interfaces/IDotLayerToolState.md#getworkdata)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:234](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L234)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

• **props**: [`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`initialize`](../interfaces/IDotLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L46)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`isEnabled`](../interfaces/IDotLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

#### Returns

[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`serialize`](../interfaces/IDotLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:159](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L159)

***

### setCategoryColorRules()

> **setCategoryColorRules**(`rules`): `void`

#### Parameters

• **rules**: `ICategoryColorRules`[]

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setCategoryColorRules`](../interfaces/IDotLayerToolState.md#setcategorycolorrules)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:222](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L222)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.categoryColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.categoryColorOp**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)\>

• **dimensions.categoryColorValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.latitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.longitude**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setDimensions`](../interfaces/IDotLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:202](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L202)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setEnabled`](../interfaces/IDotLayerToolState.md#setenabled)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setFiltersManager`](../interfaces/IDotLayerToolState.md#setfiltersmanager)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:194](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L194)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setIcon`](../interfaces/IDotLayerToolState.md#seticon)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setId`](../interfaces/IDotLayerToolState.md#setid)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setLabel`](../interfaces/IDotLayerToolState.md#setlabel)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setLayer`](../interfaces/IDotLayerToolState.md#setlayer)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:210](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L210)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setLayerItems`](../interfaces/IDotLayerToolState.md#setlayeritems)

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

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setLayerName`](../interfaces/IDotLayerToolState.md#setlayername)

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

• **markers**: `CircleMarker`[]

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setMarkers`](../interfaces/IDotLayerToolState.md#setmarkers)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:218](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L218)

***

### setWorkData()

> **setWorkData**(`latlngs`): `void`

#### Parameters

• **latlngs**: `any`[]

#### Returns

`void`

#### Implementation of

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md).[`setWorkData`](../interfaces/IDotLayerToolState.md#setworkdata)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerToolState.ts:230](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerToolState.ts#L230)
