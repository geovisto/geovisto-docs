**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ITimelineToolDefaults

# Interface: ITimelineToolDefaults

This interface provides functions which return the default state values.

## Author

Krystof Rykala

## Extends

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

## Methods

### getChartAggregationFn()

> **getChartAggregationFn**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L36)

***

### getChartEnabled()

> **getChartEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L32)

***

### getChartValuePath()

> **getChartValuePath**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L34)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getConfig`](ILayerToolDefaults.md#getconfig)

#### Source

[model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L14)

***

### getDimensions()

> **getDimensions**(`map`?): `object`

It returns the map of layer dimensions.

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`object`

##### chartAggregationFn

> **chartAggregationFn**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

##### chartEnabled

> **chartEnabled**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### chartValuePath

> **chartValuePath**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### granularity

> **granularity**: [`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\>

##### realTimeEnabled

> **realTimeEnabled**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### stepTimeLength

> **stepTimeLength**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

##### story

> **story**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

##### storyEnabled

> **storyEnabled**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

##### timePath

> **timePath**: [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

##### transitionDuration

> **transitionDuration**: [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Overrides

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getDimensions`](ILayerToolDefaults.md#getdimensions)

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L16)

***

### getGranularity()

> **getGranularity**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L30)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getIcon`](ILayerToolDefaults.md#geticon)

#### Source

[model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L36)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getId`](ILayerToolDefaults.md#getid)

#### Source

[model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L32)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getLabel`](ILayerToolDefaults.md#getlabel)

#### Source

[model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L31)

***

### getLayerName()

> **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getLayerName`](ILayerToolDefaults.md#getlayername)

#### Source

[model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/layer/ILayerToolDefaults.ts#L15)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getProps`](ILayerToolDefaults.md#getprops)

#### Source

[model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L17)

***

### getRealTimeEnabled()

> **getRealTimeEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L28)

***

### getStepTimeLength()

> **getStepTimeLength**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L20)

***

### getStory()

> **getStory**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L26)

***

### getStoryEnabled()

> **getStoryEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L24)

***

### getTimePathDimension()

> **getTimePathDimension**(`map`?): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

• **map?**: [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L18)

***

### getTransitionDuration()

> **getTransitionDuration**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Source

[tools/timeline/model/types/tool/ITimelineToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L22)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`getType`](ILayerToolDefaults.md#gettype)

#### Source

[model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectDefaults.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`isEnabled`](ILayerToolDefaults.md#isenabled)

#### Source

[model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L26)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`ILayerToolDefaults`](ILayerToolDefaults.md).[`isSingleton`](ILayerToolDefaults.md#issingleton)

#### Source

[model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolDefaults.ts#L19)
