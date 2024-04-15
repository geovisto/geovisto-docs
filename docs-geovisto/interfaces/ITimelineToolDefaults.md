[geovisto-map](../README.md) / [Exports](../modules.md) / ITimelineToolDefaults

# Interface: ITimelineToolDefaults

This interface provides functions which return the default state values.

**`Author`**

Krystof Rykala

## Hierarchy

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳ **`ITimelineToolDefaults`**

## Implemented by

- [`TimelineToolDefaults`](../classes/TimelineToolDefaults.md)

## Table of contents

### Methods

- [getChartAggregationFn](ITimelineToolDefaults.md#getchartaggregationfn)
- [getChartEnabled](ITimelineToolDefaults.md#getchartenabled)
- [getChartValuePath](ITimelineToolDefaults.md#getchartvaluepath)
- [getConfig](ITimelineToolDefaults.md#getconfig)
- [getDimensions](ITimelineToolDefaults.md#getdimensions)
- [getGranularity](ITimelineToolDefaults.md#getgranularity)
- [getIcon](ITimelineToolDefaults.md#geticon)
- [getId](ITimelineToolDefaults.md#getid)
- [getLabel](ITimelineToolDefaults.md#getlabel)
- [getLayerName](ITimelineToolDefaults.md#getlayername)
- [getProps](ITimelineToolDefaults.md#getprops)
- [getRealTimeEnabled](ITimelineToolDefaults.md#getrealtimeenabled)
- [getStepTimeLength](ITimelineToolDefaults.md#getsteptimelength)
- [getStory](ITimelineToolDefaults.md#getstory)
- [getStoryEnabled](ITimelineToolDefaults.md#getstoryenabled)
- [getTimePathDimension](ITimelineToolDefaults.md#gettimepathdimension)
- [getTransitionDuration](ITimelineToolDefaults.md#gettransitionduration)
- [getType](ITimelineToolDefaults.md#gettype)
- [isEnabled](ITimelineToolDefaults.md#isenabled)
- [isSingleton](ITimelineToolDefaults.md#issingleton)

## Methods

### getChartAggregationFn

▸ **getChartAggregationFn**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L36)

___

### getChartEnabled

▸ **getChartEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L32)

___

### getChartValuePath

▸ **getChartValuePath**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L34)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getConfig](ILayerToolDefaults.md#getconfig)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L14)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns the map of layer dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chartAggregationFn` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapAggregationFunction`](IMapAggregationFunction.md)\> |
| `chartEnabled` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `chartValuePath` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `granularity` | [`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\> |
| `realTimeEnabled` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `stepTimeLength` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |
| `story` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\> |
| `storyEnabled` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\> |
| `timePath` | [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\> |
| `transitionDuration` | [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\> |

#### Overrides

[ILayerToolDefaults](ILayerToolDefaults.md).[getDimensions](ILayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L16)

___

### getGranularity

▸ **getGranularity**(): [`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L30)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getIcon](ILayerToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getId](ILayerToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLabel](ILayerToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLayerName](ILayerToolDefaults.md#getlayername)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L15)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getProps](ILayerToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getRealTimeEnabled

▸ **getRealTimeEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L28)

___

### getStepTimeLength

▸ **getStepTimeLength**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L20)

___

### getStory

▸ **getStory**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`string`, [`ITypeManager`](ITypeManager.md)\<`string`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L26)

___

### getStoryEnabled

▸ **getStoryEnabled**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](ITypeManager.md)\<`boolean`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L24)

___

### getTimePathDimension

▸ **getTimePathDimension**(`map?`): [`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](IMapDomainDimension.md)\<[`IMapDataDomain`](IMapDataDomain.md)\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L18)

___

### getTransitionDuration

▸ **getTransitionDuration**(): [`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](IMapTypeDimension.md)\<`number`, [`ITypeManager`](ITypeManager.md)\<`number`\>\>

#### Defined in

[src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/types/tool/ITimelineToolDefaults.ts#L22)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getType](ILayerToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isEnabled](ILayerToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isSingleton](ILayerToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
