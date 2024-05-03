**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TimelineTool

# Class: TimelineTool

This intreface declares the marker layer.

## Author

Krystof Rykala

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`ITimelineTool`](../interfaces/ITimelineTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new TimelineTool()

> **new TimelineTool**(`props`?): [`TimelineTool`](TimelineTool.md)

#### Parameters

• **props?**: [`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md)

#### Returns

[`TimelineTool`](TimelineTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L36)

## Properties

### data

> `private` **data**: `TimeData`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L26)

***

### initialData

> `private` **initialData**: `undefined` \| [`IMapData`](../type-aliases/IMapData.md)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L27)

***

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L21)

***

### timelineControl

> `private` **timelineControl**: `null` \| `TimelineControl` = `null`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L23)

***

### timelineService?

> `private` `optional` **timelineService**: `TimelineService`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L22)

***

### times

> `private` **times**: `number`[] = `[]`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L25)

## Methods

### calculateTimes()

> `private` **calculateTimes**(`timePath`, `timeGranularity`?): `number`[]

#### Parameters

• **timePath**: `string`

• **timeGranularity?**: `ITimeGranularity`

#### Returns

`number`[]

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L110)

***

### copy()

> **copy**(): [`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ITimelineTool`](../interfaces/ITimelineTool.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>, [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>\>

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`copy`](../interfaces/ITimelineTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L46)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`create`](../interfaces/ITimelineTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createData()

> `private` **createData**(`timePath`, `chartConfig`?): `object`

#### Parameters

• **timePath**: `string`

• **chartConfig?**

• **chartConfig.chartAggregationFn?**: `string`

• **chartConfig.chartValuePath?**: `undefined` \| `string`

#### Returns

`object`

##### charts?

> `optional` **charts**: `object`[]

##### values

> **values**: `Map`\<`number`, `Record`\<`string`, `unknown`\>[]\>

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:153](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L153)

***

### createDefaults()

> `protected` **createDefaults**(): [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L67)

***

### createLayerItems()

> `protected` **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L32)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:95](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L95)

***

### createState()

> `protected` **createState**(): [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>

It returns default tool state.

#### Returns

[`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L81)

***

### destroyTimeline()

> **destroyTimeline**(): `void`

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`destroyTimeline`](../interfaces/ITimelineTool.md#destroytimeline)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:263](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L263)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getAPIGetter`](../interfaces/ITimelineTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md)

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getDefaults`](../interfaces/ITimelineTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L60)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getId`](../interfaces/ITimelineTool.md#getid)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getId`](AbstractLayerTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getLayerItems()

> **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getLayerItems`](../interfaces/ITimelineTool.md#getlayeritems)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getLayerItems`](AbstractLayerTool.md#getlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L163)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getMap`](../interfaces/ITimelineTool.md#getmap)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getMap`](AbstractLayerTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:85](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L85)

***

### getProps()

> **getProps**(): [`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md)

It returns the props given by the programmer.

#### Returns

[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md)

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getProps`](../interfaces/ITimelineTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L53)

***

### getState()

> **getState**(): [`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>

It returns the layer tool state.

#### Returns

[`ITimelineToolState`](../interfaces/ITimelineToolState.md)\<[`ITimelineToolProps`](../type-aliases/ITimelineToolProps.md), [`ITimelineToolDefaults`](../interfaces/ITimelineToolDefaults.md), [`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md), [`ITimelineToolDimensionsConfig`](../type-aliases/ITimelineToolDimensionsConfig.md), `object`\>

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getState`](../interfaces/ITimelineTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L74)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`getType`](../interfaces/ITimelineTool.md#gettype)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleCurrentTimeChange()

> `private` **handleCurrentTimeChange**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.currentTimeIndex**: `number`

• **\_\_namedParameters.story**: `undefined` \| `StoryState`

#### Returns

`void`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:131](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L131)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`handleEvent`](AbstractLayerTool.md#handleevent)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:276](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L276)

***

### handleStoryChange()

> `private` **handleStoryChange**(`storyConfig`): `void`

#### Parameters

• **storyConfig**: `Story`

#### Returns

`void`

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:188](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L188)

***

### hideLayerItems()

> `protected` **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`hideLayerItems`](AbstractLayerTool.md#hidelayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L147)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ITimelineToolConfig`](../type-aliases/ITimelineToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`initialize`](../interfaces/ITimelineTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L104)

***

### initializeTimeline()

> **initializeTimeline**(): `void`

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`initializeTimeline`](../interfaces/ITimelineTool.md#initializetimeline)

#### Source

[tools/timeline/model/internal/tool/TimelineTool.ts:198](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/timeline/model/internal/tool/TimelineTool.ts#L198)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`isEnabled`](../interfaces/ITimelineTool.md#isenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isEnabled`](AbstractLayerTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`isSingleton`](../interfaces/ITimelineTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`render`](../interfaces/ITimelineTool.md#render)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[model/internal/layer/AbstractLayerTool.ts:189](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L189)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`setEnabled`](../interfaces/ITimelineTool.md#setenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setEnabled`](AbstractLayerTool.md#setenabled)

#### Source

[model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L102)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setProps`](AbstractLayerTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### showLayerItems()

> `protected` **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`showLayerItems`](AbstractLayerTool.md#showlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L126)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`switchEnabled`](../interfaces/ITimelineTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\>

• **value**: `string`

• **renderType**: `undefined` \| `number`= `undefined`

#### Returns

`void`

#### Implementation of

[`ITimelineTool`](../interfaces/ITimelineTool.md).[`updateDimension`](../interfaces/ITimelineTool.md#updatedimension)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L205)
