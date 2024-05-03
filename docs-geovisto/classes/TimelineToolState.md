**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TimelineToolState

# Class: TimelineToolState

This class provide functions for using the state of the layer tool.

## Author

Krystof Rykala

## Extends

- [`LayerToolState`](LayerToolState.md)

## Implements

- [`ITimelineToolState`](../interfaces/ITimelineToolState.md)

## Constructors

### new TimelineToolState()

> **new TimelineToolState**(`tool`): [`TimelineToolState`](TimelineToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

#### Returns

[`TimelineToolState`](TimelineToolState.md)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`constructor`](LayerToolState.md#constructors)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L21)

## Properties

### stories

> `private` **stories**: `TimelineStoryConfig`[] = `[]`

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L16)

## Methods

### createStory()

> **createStory**(`name`): `void`

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`createStory`](../interfaces/ITimelineToolState.md#createstory)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:192](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L192)

***

### deserialize()

> **deserialize**(`config`): `void`

The method takes config and deserializes the values.

#### Parameters

• **config**: [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`deserialize`](../interfaces/ITimelineToolState.md#deserialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserialize`](LayerToolState.md#deserialize)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L106)

***

### deserializeDimensions()

> **deserializeDimensions**(`dimensionsConfig`): `void`

It sets the marker layer dimensions property of tool state.

#### Parameters

• **dimensionsConfig**: [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md)

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`deserializeDimensions`](../interfaces/ITimelineToolState.md#deserializedimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`deserializeDimensions`](LayerToolState.md#deserializedimensions)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L60)

***

### getDimensions()

> **getDimensions**(): `object`

It returns the map layer dimensions property of the tool state.

#### Returns

`object`

##### chartAggregationFn

> **chartAggregationFn**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

##### chartEnabled

> **chartEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### chartValuePath

> **chartValuePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### granularity

> **granularity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

##### realTimeEnabled

> **realTimeEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### stepTimeLength

> **stepTimeLength**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

##### story

> **story**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

##### storyEnabled

> **storyEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

##### timePath

> **timePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

##### transitionDuration

> **transitionDuration**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getDimensions`](../interfaces/ITimelineToolState.md#getdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`getDimensions`](LayerToolState.md#getdimensions)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L158)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getIcon`](../interfaces/ITimelineToolState.md#geticon)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getId`](../interfaces/ITimelineToolState.md#getid)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getLabel`](../interfaces/ITimelineToolState.md#getlabel)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getLayerItems`](../interfaces/ITimelineToolState.md#getlayeritems)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getLayerName`](../interfaces/ITimelineToolState.md#getlayername)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getMap`](../interfaces/ITimelineToolState.md#getmap)

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

### getStories()

> **getStories**(): `TimelineStoryConfig`[]

#### Returns

`TimelineStoryConfig`[]

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getStories`](../interfaces/ITimelineToolState.md#getstories)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L171)

***

### getStoryByName()

> **getStoryByName**(`name`): `undefined` \| `null` \| `TimelineStoryConfig`

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `null` \| `TimelineStoryConfig`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getStoryByName`](../interfaces/ITimelineToolState.md#getstorybyname)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:186](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L186)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`getType`](../interfaces/ITimelineToolState.md#gettype)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`getType`](LayerToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

• **props**: [`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`initialize`](../interfaces/ITimelineToolState.md#initialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`initialize`](LayerToolState.md#initialize)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L32)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`isEnabled`](../interfaces/ITimelineToolState.md#isenabled)

#### Inherited from

[`LayerToolState`](LayerToolState.md).[`isEnabled`](LayerToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### saveStory()

> **saveStory**(`story`): `void`

#### Parameters

• **story**: `TimelineStoryConfig`

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`saveStory`](../interfaces/ITimelineToolState.md#savestory)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:179](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L179)

***

### serialize()

> **serialize**(`defaults`?): [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is
undefined.

#### Parameters

• **defaults?**: [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

#### Returns

[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`serialize`](../interfaces/ITimelineToolState.md#serialize)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`serialize`](LayerToolState.md#serialize)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L126)

***

### setDimensions()

> **setDimensions**(`dimensions`): `void`

It sets the map layer dimensions property of tool state.

#### Parameters

• **dimensions**

• **dimensions.chartAggregationFn**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

• **dimensions.chartEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.chartValuePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.granularity**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

• **dimensions.realTimeEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.stepTimeLength**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

• **dimensions.story**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

• **dimensions.storyEnabled**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

• **dimensions.timePath**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

• **dimensions.transitionDuration**: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setDimensions`](../interfaces/ITimelineToolState.md#setdimensions)

#### Overrides

[`LayerToolState`](LayerToolState.md).[`setDimensions`](LayerToolState.md#setdimensions)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:167](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L167)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setEnabled`](../interfaces/ITimelineToolState.md#setenabled)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setIcon`](../interfaces/ITimelineToolState.md#seticon)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setId`](../interfaces/ITimelineToolState.md#setid)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setLabel`](../interfaces/ITimelineToolState.md#setlabel)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setLayerItems`](../interfaces/ITimelineToolState.md#setlayeritems)

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

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setLayerName`](../interfaces/ITimelineToolState.md#setlayername)

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

### setStories()

> **setStories**(`stories`): `void`

#### Parameters

• **stories**: `TimelineStoryConfig`[]

#### Returns

`void`

#### Implementation of

[`ITimelineToolState`](../interfaces/ITimelineToolState.md).[`setStories`](../interfaces/ITimelineToolState.md#setstories)

#### Source

[tools/timeline/model/internal/tool/TimelineToolState.ts:175](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineToolState.ts#L175)
