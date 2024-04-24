**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerLayerToolState

# Class: MarkerLayerToolState

This class provide functions for using the state of the layer tool.

## Author

Jiri Hynek

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)

## Constructors

### new MarkerLayerToolState()

> **new MarkerLayerToolState**(`tool`): [`MarkerLayerToolState`](MarkerLayerToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

[`MarkerLayerToolState`](MarkerLayerToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L34)

## Properties

### bucketData

> `private` **bucketData**: `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L28)

***

### currentDataCategories

> `private` **currentDataCategories**: `string`[]

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L27)

***

### layerGroup?

> `private` `optional` **layerGroup**: `any`

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L29)

***

### markers

> `private` **markers**: [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L26)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`deserialize`](../interfaces/IMarkerLayerToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L89)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**

• **dimensionsConfig.aggregation?**: `string`

• **dimensionsConfig.category?**: `string`

• **dimensionsConfig.geoData?**: `string`

• **dimensionsConfig.geoId?**: `string`

• **dimensionsConfig.round?**: `number`

• **dimensionsConfig.units?**: `string`

• **dimensionsConfig.unitsDesc?**: `string`

• **dimensionsConfig.unitsEnabled?**: `boolean`

• **dimensionsConfig.value?**: `string`

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`deserializeDimensions`](../interfaces/IMarkerLayerToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L101)

***

### getBucketData()

> **getBucketData**(): `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

It returns the bucket data.

#### Returns

`Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getBucketData`](../interfaces/IMarkerLayerToolState.md#getbucketdata)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:210](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L210)

***

### getCurrentDataCategories()

> **getCurrentDataCategories**(): `string`[]

It returns the current data categories.

#### Returns

`string`[]

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getCurrentDataCategories`](../interfaces/IMarkerLayerToolState.md#getcurrentdatacategories)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:192](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L192)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the map layer dimensions property of the tool state.

#### Returns

`object`

##### aggregation

> **aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### category

> **category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### geoData

> **geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

##### geoId

> **geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### round

> **round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### units

> **units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsDesc

> **unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### unitsEnabled

> **unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### value

> **value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getDimensions`](../interfaces/IMarkerLayerToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L142)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getIcon`](../interfaces/IMarkerLayerToolState.md#geticon)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getId`](../interfaces/IMarkerLayerToolState.md#getid)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getLabel`](../interfaces/IMarkerLayerToolState.md#getlabel)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getLayerItems`](../interfaces/IMarkerLayerToolState.md#getlayeritems)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getLayerName`](../interfaces/IMarkerLayerToolState.md#getlayername)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getMap`](../interfaces/IMarkerLayerToolState.md#getmap)

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

### getMarkerLayerGroup()

> **getMarkerLayerGroup**(): `any`

It returns a Leaflet layer group.

#### Returns

`any`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getMarkerLayerGroup`](../interfaces/IMarkerLayerToolState.md#getmarkerlayergroup)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L158)

***

### getMarkers()

> **getMarkers**(): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

It returns the markers.

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getMarkers`](../interfaces/IMarkerLayerToolState.md#getmarkers)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:174](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L174)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`getType`](../interfaces/IMarkerLayerToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

• **props**: [`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`initialize`](../interfaces/IMarkerLayerToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L45)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`isEnabled`](../interfaces/IMarkerLayerToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

#### Returns

[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`serialize`](../interfaces/IMarkerLayerToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:119](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L119)

***

### setBucketData()

> **setBucketData**(`bucketData`): `void`

It sets the bucket data.

#### Parameters

• **bucketData**: `Map`\<`string`, `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setBucketData`](../interfaces/IMarkerLayerToolState.md#setbucketdata)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:219](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L219)

***

### setCurrentDataCategories()

> **setCurrentDataCategories**(`currentDataCategories`): `void`

It sets the current data categories.

#### Parameters

• **currentDataCategories**: `string`[]

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setCurrentDataCategories`](../interfaces/IMarkerLayerToolState.md#setcurrentdatacategories)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:201](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L201)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.aggregation**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.category**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.geoData**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\>

• **dimensions.geoId**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.round**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.units**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsDesc**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.unitsEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.value**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setDimensions`](../interfaces/IMarkerLayerToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:151](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L151)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setEnabled`](../interfaces/IMarkerLayerToolState.md#setenabled)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setIcon`](../interfaces/IMarkerLayerToolState.md#seticon)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setId`](../interfaces/IMarkerLayerToolState.md#setid)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setLabel`](../interfaces/IMarkerLayerToolState.md#setlabel)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setLayerItems`](../interfaces/IMarkerLayerToolState.md#setlayeritems)

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

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setLayerName`](../interfaces/IMarkerLayerToolState.md#setlayername)

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

### setMarkerLayerGroup()

> **setMarkerLayerGroup**(`layerGroup`): `void`

It sets a Leaflet layer group.

#### Parameters

• **layerGroup**: `LayerGroup`

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setMarkerLayerGroup`](../interfaces/IMarkerLayerToolState.md#setmarkerlayergroup)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:167](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L167)

***

### setMarkers()

> **setMarkers**(`markers`): `void`

It sets the markers.

#### Parameters

• **markers**: [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

#### Returns

`void`

#### Implementation of

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md).[`setMarkers`](../interfaces/IMarkerLayerToolState.md#setmarkers)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts:183](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerToolState.ts#L183)
