**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ConnectionLayerToolState

# Class: ConnectionLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Jiri Hynek

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)

## Constructors

### new ConnectionLayerToolState()

> **new ConnectionLayerToolState**(`tool`): [`ConnectionLayerToolState`](ConnectionLayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`ConnectionLayerToolState`](ConnectionLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L28)

## Properties

### bucketData

> `private` **bucketData**: `object`

#### connections

> **connections**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### nodes

> **nodes**: `Set`\<`string`\>

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L23)

***

### svgLayer?

> `private` `optional` **svgLayer**: `any`

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L22)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`deserialize`](../interfaces/IConnectionLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:70](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L70)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.direction?**: `boolean`

• **dimensionsConfig.from?**: `string`

• **dimensionsConfig.geoData?**: `string`

• **dimensionsConfig.to?**: `string`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`deserializeDimensions`](../interfaces/IConnectionLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L80)

***

### getBucketData()

> **getBucketData**(): `object`

It returns work data for the force layout algorithm.

#### Returns

`object`

##### connections

> **connections**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

##### nodes

> **nodes**: `Set`\<`string`\>

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getBucketData`](../interfaces/IConnectionLayerToolState.md#getbucketdata)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L143)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the map layer dimensions property of the tool state.

#### Returns

`object`

##### direction

> **direction**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### from

> **from**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

##### to

> **to**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getDimensions`](../interfaces/IConnectionLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L111)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getIcon`](../interfaces/IConnectionLayerToolState.md#geticon)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getId`](../interfaces/IConnectionLayerToolState.md#getid)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getLabel`](../interfaces/IConnectionLayerToolState.md#getlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getLabel`](LayerToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getLayerItems()

> **getLayerItems**(): `undefined` \| `Layer`[]

It returns the layer items property of the tool state.

#### Returns

`undefined` \| `Layer`[]

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getLayerItems`](../interfaces/IConnectionLayerToolState.md#getlayeritems)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getLayerName`](../interfaces/IConnectionLayerToolState.md#getlayername)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getMap`](../interfaces/IConnectionLayerToolState.md#getmap)

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

### getSVGLayer()

> **getSVGLayer**(): `any`

It returns a Leaflet SVG layer.

#### Returns

`any`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getSVGLayer`](../interfaces/IConnectionLayerToolState.md#getsvglayer)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L127)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`getType`](../interfaces/IConnectionLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

• **props**: [`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`initialize`](../interfaces/IConnectionLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L39)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`isEnabled`](../interfaces/IConnectionLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

#### Returns

[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`serialize`](../interfaces/IConnectionLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L93)

***

### setBucketData()

> **setBucketData**(`bucketData`): `void`

It sets the work data for the force layout algorithm.

#### Parameters

• **bucketData**

• **bucketData.connections**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

• **bucketData.nodes**: `Set`\<`string`\>

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setBucketData`](../interfaces/IConnectionLayerToolState.md#setbucketdata)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:152](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L152)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.direction**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.from**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.to**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setDimensions`](../interfaces/IConnectionLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L120)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setEnabled`](../interfaces/IConnectionLayerToolState.md#setenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setIcon`](../interfaces/IConnectionLayerToolState.md#seticon)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setId`](../interfaces/IConnectionLayerToolState.md#setid)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setLabel`](../interfaces/IConnectionLayerToolState.md#setlabel)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setLabel`](LayerToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setLayerItems()

> **setLayerItems**(`layerItems`): `void`

It sets the layer items property of tool state.

#### Parameters

• **layerItems**: `Layer`[]

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setLayerItems`](../interfaces/IConnectionLayerToolState.md#setlayeritems)

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

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setLayerName`](../interfaces/IConnectionLayerToolState.md#setlayername)

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

### setSVGLayer()

> **setSVGLayer**(`svgLayer`): `void`

It sets a Leaflet SVG layer.

#### Parameters

• **svgLayer**: `SVG`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md).[`setSVGLayer`](../interfaces/IConnectionLayerToolState.md#setsvglayer)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerToolState.ts#L136)
