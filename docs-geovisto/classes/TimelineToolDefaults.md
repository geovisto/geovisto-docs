[geovisto-map](../README.md) / [Exports](../modules.md) / TimelineToolDefaults

# Class: TimelineToolDefaults

This class provide functions which return the default state values.

**`Author`**

Krystof Rykala

## Hierarchy

- [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳ **`TimelineToolDefaults`**

## Implements

- [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

## Table of contents

### Constructors

- [constructor](TimelineToolDefaults.md#constructor)

### Properties

- [idString](TimelineToolDefaults.md#idstring)
- [TYPE](TimelineToolDefaults.md#type)
- [id](TimelineToolDefaults.md#id)

### Methods

- [generateId](TimelineToolDefaults.md#generateid)
- [getChartAggregationFn](TimelineToolDefaults.md#getchartaggregationfn)
- [getChartEnabled](TimelineToolDefaults.md#getchartenabled)
- [getChartValuePath](TimelineToolDefaults.md#getchartvaluepath)
- [getConfig](TimelineToolDefaults.md#getconfig)
- [getDataManager](TimelineToolDefaults.md#getdatamanager)
- [getDimensions](TimelineToolDefaults.md#getdimensions)
- [getGeoDataManager](TimelineToolDefaults.md#getgeodatamanager)
- [getGranularity](TimelineToolDefaults.md#getgranularity)
- [getIcon](TimelineToolDefaults.md#geticon)
- [getId](TimelineToolDefaults.md#getid)
- [getLabel](TimelineToolDefaults.md#getlabel)
- [getLayerName](TimelineToolDefaults.md#getlayername)
- [getProps](TimelineToolDefaults.md#getprops)
- [getRealTimeEnabled](TimelineToolDefaults.md#getrealtimeenabled)
- [getStepTimeLength](TimelineToolDefaults.md#getsteptimelength)
- [getStory](TimelineToolDefaults.md#getstory)
- [getStoryEnabled](TimelineToolDefaults.md#getstoryenabled)
- [getTimePathDimension](TimelineToolDefaults.md#gettimepathdimension)
- [getTransitionDuration](TimelineToolDefaults.md#gettransitionduration)
- [getType](TimelineToolDefaults.md#gettype)
- [isEnabled](TimelineToolDefaults.md#isenabled)
- [isSingleton](TimelineToolDefaults.md#issingleton)

## Constructors

### constructor

• **new TimelineToolDefaults**(): [`TimelineToolDefaults`](TimelineToolDefaults.md)

#### Returns

[`TimelineToolDefaults`](TimelineToolDefaults.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[constructor](LayerToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[idString](LayerToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-layer-timeline"`

Static tool type constant.

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[TYPE](LayerToolDefaults.md#type)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L34)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[id](LayerToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[generateId](LayerToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getChartAggregationFn

▸ **getChartAggregationFn**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getChartAggregationFn](../interfaces/ITimelineToolDefaults.md#getchartaggregationfn)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L163)

___

### getChartEnabled

▸ **getChartEnabled**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getChartEnabled](../interfaces/ITimelineToolDefaults.md#getchartenabled)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L147)

___

### getChartValuePath

▸ **getChartValuePath**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getChartValuePath](../interfaces/ITimelineToolDefaults.md#getchartvaluepath)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:155](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L155)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getConfig](../interfaces/ITimelineToolDefaults.md#getconfig)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getConfig](LayerToolDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getDataManager](LayerToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getDimensions

▸ **getDimensions**(`map?`): `Object`

It returns the map of layer dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chartAggregationFn` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> |
| `chartEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `chartValuePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `granularity` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> |
| `realTimeEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `stepTimeLength` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |
| `story` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> |
| `storyEnabled` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> |
| `timePath` | [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> |
| `transitionDuration` | [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> |

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getDimensions](../interfaces/ITimelineToolDefaults.md#getdimensions)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getDimensions](LayerToolDefaults.md#getdimensions)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L67)

___

### getGeoDataManager

▸ **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns default geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getGeoDataManager](LayerToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getGranularity

▸ **getGranularity**(): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getGranularity](../interfaces/ITimelineToolDefaults.md#getgranularity)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L130)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tab pane.

#### Returns

`string`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getIcon](../interfaces/ITimelineToolDefaults.md#geticon)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getIcon](LayerToolDefaults.md#geticon)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L53)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getId](../interfaces/ITimelineToolDefaults.md#getid)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getId](LayerToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getLabel](../interfaces/ITimelineToolDefaults.md#getlabel)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLabel](LayerToolDefaults.md#getlabel)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L60)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getLayerName](../interfaces/ITimelineToolDefaults.md#getlayername)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getLayerName](LayerToolDefaults.md#getlayername)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L46)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getProps](../interfaces/ITimelineToolDefaults.md#getprops)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[getProps](LayerToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getRealTimeEnabled

▸ **getRealTimeEnabled**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getRealTimeEnabled](../interfaces/ITimelineToolDefaults.md#getrealtimeenabled)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L122)

___

### getStepTimeLength

▸ **getStepTimeLength**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getStepTimeLength](../interfaces/ITimelineToolDefaults.md#getsteptimelength)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L90)

___

### getStory

▸ **getStory**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getStory](../interfaces/ITimelineToolDefaults.md#getstory)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L114)

___

### getStoryEnabled

▸ **getStoryEnabled**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getStoryEnabled](../interfaces/ITimelineToolDefaults.md#getstoryenabled)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L106)

___

### getTimePathDimension

▸ **getTimePathDimension**(`map?`): [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getTimePathDimension](../interfaces/ITimelineToolDefaults.md#gettimepathdimension)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L82)

___

### getTransitionDuration

▸ **getTransitionDuration**(): [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Returns

[`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getTransitionDuration](../interfaces/ITimelineToolDefaults.md#gettransitionduration)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L98)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool which is based on the layer it wraps.

#### Returns

`string`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[getType](../interfaces/ITimelineToolDefaults.md#gettype)

#### Overrides

[LayerToolDefaults](LayerToolDefaults.md).[getType](LayerToolDefaults.md#gettype)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineToolDefaults.ts#L39)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[isEnabled](../interfaces/ITimelineToolDefaults.md#isenabled)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isEnabled](LayerToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[ITimelineToolDefaults](../interfaces/ITimelineToolDefaults.md).[isSingleton](../interfaces/ITimelineToolDefaults.md#issingleton)

#### Inherited from

[LayerToolDefaults](LayerToolDefaults.md).[isSingleton](LayerToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
