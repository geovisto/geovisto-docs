[geovisto-map](../README.md) / [Exports](../modules.md) / TimelineTool

# Class: TimelineTool

This intreface declares the marker layer.

**`Author`**

Krystof Rykala

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`TimelineTool`**

## Implements

- [`ITimelineTool`](../interfaces/ITimelineTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](TimelineTool.md#constructor)

### Properties

- [data](TimelineTool.md#data)
- [initialData](TimelineTool.md#initialdata)
- [mapForm](TimelineTool.md#mapform)
- [timelineControl](TimelineTool.md#timelinecontrol)
- [timelineService](TimelineTool.md#timelineservice)
- [times](TimelineTool.md#times)

### Methods

- [calculateTimes](TimelineTool.md#calculatetimes)
- [copy](TimelineTool.md#copy)
- [create](TimelineTool.md#create)
- [createData](TimelineTool.md#createdata)
- [createDefaults](TimelineTool.md#createdefaults)
- [createLayerItems](TimelineTool.md#createlayeritems)
- [createMapForm](TimelineTool.md#createmapform)
- [createState](TimelineTool.md#createstate)
- [destroyTimeline](TimelineTool.md#destroytimeline)
- [getAPIGetter](TimelineTool.md#getapigetter)
- [getDefaults](TimelineTool.md#getdefaults)
- [getId](TimelineTool.md#getid)
- [getLayerItems](TimelineTool.md#getlayeritems)
- [getMap](TimelineTool.md#getmap)
- [getMapForm](TimelineTool.md#getmapform)
- [getProps](TimelineTool.md#getprops)
- [getState](TimelineTool.md#getstate)
- [getType](TimelineTool.md#gettype)
- [handleCurrentTimeChange](TimelineTool.md#handlecurrenttimechange)
- [handleEvent](TimelineTool.md#handleevent)
- [handleStoryChange](TimelineTool.md#handlestorychange)
- [hideLayerItems](TimelineTool.md#hidelayeritems)
- [initialize](TimelineTool.md#initialize)
- [initializeTimeline](TimelineTool.md#initializetimeline)
- [isEnabled](TimelineTool.md#isenabled)
- [isSingleton](TimelineTool.md#issingleton)
- [render](TimelineTool.md#render)
- [setEnabled](TimelineTool.md#setenabled)
- [setProps](TimelineTool.md#setprops)
- [showLayerItems](TimelineTool.md#showlayeritems)
- [switchEnabled](TimelineTool.md#switchenabled)
- [updateDimension](TimelineTool.md#updatedimension)

## Constructors

### constructor

• **new TimelineTool**(`props?`): [`TimelineTool`](TimelineTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ITimelineToolProps`](../modules.md#itimelinetoolprops) |

#### Returns

[`TimelineTool`](TimelineTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L36)

## Properties

### data

• `Private` **data**: `TimeData`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L26)

___

### initialData

• `Private` **initialData**: `undefined` \| [`IMapData`](../modules.md#imapdata)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L27)

___

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L21)

___

### timelineControl

• `Private` **timelineControl**: ``null`` \| `TimelineControl` = `null`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L23)

___

### timelineService

• `Private` `Optional` **timelineService**: `TimelineService`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L22)

___

### times

• `Private` **times**: `number`[] = `[]`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L25)

## Methods

### calculateTimes

▸ **calculateTimes**(`timePath`, `timeGranularity?`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `timePath` | `string` |
| `timeGranularity?` | `ITimeGranularity` |

#### Returns

`number`[]

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:110](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L110)

___

### copy

▸ **copy**(): [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>, [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\>\>

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[copy](../interfaces/ITimelineTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L46)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[create](../interfaces/ITimelineTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createData

▸ **createData**(`timePath`, `chartConfig?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timePath` | `string` |
| `chartConfig?` | `Object` |
| `chartConfig.chartAggregationFn` | `string` |
| `chartConfig.chartValuePath` | `undefined` \| `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `charts?` | \{ `aggregationFn`: `string` ; `path`: `string`  }[] |
| `values` | `Map`\<`number`, `Record`\<`string`, `unknown`\>[]\> |

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:153](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L153)

___

### createDefaults

▸ **createDefaults**(): [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L67)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L32)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L95)

___

### createState

▸ **createState**(): [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>

It returns default tool state.

#### Returns

[`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L81)

___

### destroyTimeline

▸ **destroyTimeline**(): `void`

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[destroyTimeline](../interfaces/ITimelineTool.md#destroytimeline)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:263](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L263)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getAPIGetter](../interfaces/ITimelineTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getDefaults](../interfaces/ITimelineTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L60)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getId](../interfaces/ITimelineTool.md#getid)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getId](AbstractLayerTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getLayerItems](../interfaces/ITimelineTool.md#getlayeritems)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getLayerItems](AbstractLayerTool.md#getlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L163)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getMap](../interfaces/ITimelineTool.md#getmap)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:85](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L85)

___

### getProps

▸ **getProps**(): [`ITimelineToolProps`](../modules.md#itimelinetoolprops)

It returns the props given by the programmer.

#### Returns

[`ITimelineToolProps`](../modules.md#itimelinetoolprops)

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getProps](../interfaces/ITimelineTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L53)

___

### getState

▸ **getState**(): [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>

It returns the layer tool state.

#### Returns

[`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../modules.md#itimelinetoolprops), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../modules.md#itimelinetoolconfig), [`ITimelineToolDimensionsConfig`](../modules.md#itimelinetooldimensionsconfig), \{ `chartAggregationFn`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)\> ; `chartEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `chartValuePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `granularity`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`ITimeGranularity`\> ; `realTimeEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `stepTimeLength`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\> ; `story`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`string`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>\> ; `storyEnabled`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `timePath`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `transitionDuration`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`number`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>\>  }\>

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getState](../interfaces/ITimelineTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L74)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[getType](../interfaces/ITimelineTool.md#gettype)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleCurrentTimeChange

▸ **handleCurrentTimeChange**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `currentTimeIndex` | `number` |
| › `story` | `undefined` \| `StoryState` |

#### Returns

`void`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:131](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L131)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:276](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L276)

___

### handleStoryChange

▸ **handleStoryChange**(`storyConfig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `storyConfig` | `Story` |

#### Returns

`void`

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:188](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L188)

___

### hideLayerItems

▸ **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[hideLayerItems](AbstractLayerTool.md#hidelayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L147)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ITimelineToolConfig`](../modules.md#itimelinetoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[initialize](../interfaces/ITimelineTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L104)

___

### initializeTimeline

▸ **initializeTimeline**(): `void`

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[initializeTimeline](../interfaces/ITimelineTool.md#initializetimeline)

#### Defined in

[src/tools/timeline/model/internal/tool/TimelineTool.ts:198](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/timeline/model/internal/tool/TimelineTool.ts#L198)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[isEnabled](../interfaces/ITimelineTool.md#isenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isEnabled](AbstractLayerTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[isSingleton](../interfaces/ITimelineTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### render

▸ **render**(`type`, `animateOptions?`): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[render](../interfaces/ITimelineTool.md#render)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:189](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L189)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[setEnabled](../interfaces/ITimelineTool.md#setenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setEnabled](AbstractLayerTool.md#setenabled)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L102)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setProps](AbstractLayerTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### showLayerItems

▸ **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[showLayerItems](AbstractLayerTool.md#showlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L126)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[switchEnabled](../interfaces/ITimelineTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateDimension

▸ **updateDimension**(`dimension`, `value`, `renderType?`): `void`

It updates the dimension.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dimension` | [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\> | `undefined` |
| `value` | `string` | `undefined` |
| `renderType` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Implementation of

[ITimelineTool](../interfaces/ITimelineTool.md).[updateDimension](../interfaces/ITimelineTool.md#updatedimension)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L205)
