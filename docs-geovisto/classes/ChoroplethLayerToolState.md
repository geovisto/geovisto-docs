**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ChoroplethLayerToolState

# Class: ChoroplethLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Jiri Hynek

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)

## Constructors

### new ChoroplethLayerToolState()

> **new ChoroplethLayerToolState**(`tool`): [`ChoroplethLayerToolState`](ChoroplethLayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

[`ChoroplethLayerToolState`](ChoroplethLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L30)

## Properties

### bucketData

> `private` **bucketData**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L23)

***

### geoJSONlayer?

> `private` `optional` **geoJSONlayer**: `any`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L24)

***

### hoveredItem?

> `private` `optional` **hoveredItem**: `string`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L25)

***

### zindex

> `private` **zindex**: `number`

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L22)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`deserialize`](../interfaces/IChoroplethLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L77)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.aggregation?**: `string`

• **dimensionsConfig.color?**: `string`

• **dimensionsConfig.customColor?**: `boolean`

• **dimensionsConfig.customMinMax?**: `boolean`

• **dimensionsConfig.geoData?**: `string`

• **dimensionsConfig.geoId?**: `string`

• **dimensionsConfig.maxValue?**: `number`

• **dimensionsConfig.minValue?**: `number`

• **dimensionsConfig.range?**: `number`

• **dimensionsConfig.round?**: `number`

• **dimensionsConfig.scaling?**: `string`

• **dimensionsConfig.units?**: `string`

• **dimensionsConfig.unitsDesc?**: `string`

• **dimensionsConfig.unitsEnabled?**: `boolean`

• **dimensionsConfig.value?**: `string`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`deserializeDimensions`](../interfaces/IChoroplethLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L86)

***

### getBucketData()

> **getBucketData**(): `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

It returns the bucket data.

#### Returns

`Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getBucketData`](../interfaces/IChoroplethLayerToolState.md#getbucketdata)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:206](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L206)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the map layer dimensions property of the tool state.

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### color

> **color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### customColor

> **customColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### customMinMax

> **customMinMax**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### maxValue

> **maxValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### minValue

> **minValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### range

> **range**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

##### round

> **round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### scaling

> **scaling**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

##### units

> **units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getDimensions`](../interfaces/IChoroplethLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:140](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L140)

***

### getGeoJSONLayer()

> **getGeoJSONLayer**(): `any`

It returns a Leaflet geoJSON layer.

#### Returns

`any`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getGeoJSONLayer`](../interfaces/IChoroplethLayerToolState.md#getgeojsonlayer)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:156](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L156)

***

### getHoveredItem()

> **getHoveredItem**(): `undefined` \| `string`

It returns the hovered item.

#### Returns

`undefined` \| `string`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getHoveredItem`](../interfaces/IChoroplethLayerToolState.md#gethovereditem)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:172](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L172)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getIcon`](../interfaces/IChoroplethLayerToolState.md#geticon)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getId`](../interfaces/IChoroplethLayerToolState.md#getid)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getLabel`](../interfaces/IChoroplethLayerToolState.md#getlabel)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getLayerItems`](../interfaces/IChoroplethLayerToolState.md#getlayeritems)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getLayerName`](../interfaces/IChoroplethLayerToolState.md#getlayername)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getMap`](../interfaces/IChoroplethLayerToolState.md#getmap)

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

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getType`](../interfaces/IChoroplethLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### getZIndex()

> **getZIndex**(): `number`

It returns the z index.

#### Returns

`number`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`getZIndex`](../interfaces/IChoroplethLayerToolState.md#getzindex)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:188](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L188)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

• **props**: [`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`initialize`](../interfaces/IChoroplethLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L41)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`isEnabled`](../interfaces/IChoroplethLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md)

#### Returns

[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`serialize`](../interfaces/IChoroplethLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L111)

***

### setBucketData()

> **setBucketData**(`bucketData`): `void`

It sets the bucket data.

#### Parameters

• **bucketData**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setBucketData`](../interfaces/IChoroplethLayerToolState.md#setbucketdata)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:215](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L215)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.color**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.customColor**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.customMinMax**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.maxValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.minValue**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.range**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)\>

• **dimensions.round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.scaling**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IScale`](../interfaces/IScale.md)\>

• **dimensions.units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setDimensions`](../interfaces/IChoroplethLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:149](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L149)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setEnabled`](../interfaces/IChoroplethLayerToolState.md#setenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`setEnabled`](LayerToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setGeoJSONLayer()

> **setGeoJSONLayer**(`geoJSONlayer`): `void`

It sets a Leaflet geoJSON layer.

#### Parameters

• **geoJSONlayer**: `GeoJSON`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setGeoJSONLayer`](../interfaces/IChoroplethLayerToolState.md#setgeojsonlayer)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:165](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L165)

***

### setHoveredItem()

> **setHoveredItem**(`hoveredItem`): `void`

It sets the hovered item.

#### Parameters

• **hoveredItem**: `undefined` \| `string`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setHoveredItem`](../interfaces/IChoroplethLayerToolState.md#sethovereditem)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:181](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L181)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setIcon`](../interfaces/IChoroplethLayerToolState.md#seticon)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setId`](../interfaces/IChoroplethLayerToolState.md#setid)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setLabel`](../interfaces/IChoroplethLayerToolState.md#setlabel)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setLayerItems`](../interfaces/IChoroplethLayerToolState.md#setlayeritems)

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

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setLayerName`](../interfaces/IChoroplethLayerToolState.md#setlayername)

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

### setZIndex()

> **setZIndex**(`zindex`): `void`

It sets the z index.

#### Parameters

• **zindex**: `number`

#### Returns

`void`

#### Implementation of

[`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md).[`setZIndex`](../interfaces/IChoroplethLayerToolState.md#setzindex)

#### Source

[tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts:197](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/tool/ChoroplethLayerToolState.ts#L197)
