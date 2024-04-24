**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerLayerTool

# Class: MarkerLayerTool

This class represents Marker layer tool. It works with geojson polygons representing countries.

## Author

Jiri Hynek

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IMapLegendControl`](../interfaces/IMapLegendControl.md)

## Constructors

### new MarkerLayerTool()

> **new MarkerLayerTool**(`props`?): [`MarkerLayerTool`](MarkerLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md)

#### Returns

[`MarkerLayerTool`](MarkerLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L96)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L88)

***

### mapLegend

> `private` **mapLegend**: [`IMapLegend`](../interfaces/IMapLegend.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L89)

***

### selectionToolAPI

> `private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L86)

***

### themesToolAPI

> `private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L87)

## Methods

### copy()

> **copy**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`copy`](../interfaces/IMarkerLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L103)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`create`](../interfaces/IMarkerLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L124)

***

### createLayerItems()

> `protected` **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:214](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L214)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:191](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L191)

***

### createMapLegend()

> `protected` **createMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It creates new legend control.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:198](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L198)

***

### createMarker()

> `protected` **createMarker**(`pointFeature`, `bucketMap`): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>

It creates one marker with respect to the given GeoJSON point feature and data.

#### Parameters

• **pointFeature**: `Feature`

• **bucketMap**: `Map`\<`string`, `null` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:457](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L457)

***

### createMarkers()

> `protected` **createMarkers**(): [`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

It creates markers using bucket data

#### Returns

[`IMarker`](../interfaces/IMarker.md)\<[`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<`any`\>\>[]

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:401](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L401)

***

### createState()

> `protected` **createState**(): [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>

It returns default tool state.

#### Returns

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L138)

***

### deleteLayerItems()

> `protected` **deleteLayerItems**(): `void`

It deletes layer items.

#### Returns

`void`

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:252](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L252)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getAPIGetter`](../interfaces/IMarkerLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md)

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getDefaults`](../interfaces/IMarkerLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L117)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getId`](../interfaces/IMarkerLayerTool.md#getid)

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

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getLayerItems`](../interfaces/IMarkerLayerTool.md#getlayeritems)

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

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getMap`](../interfaces/IMarkerLayerTool.md#getmap)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getMap`](AbstractLayerTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L171)

***

### getMapLegend()

> **getMapLegend**(): [`IMapLegend`](../interfaces/IMapLegend.md)

It returns a legend with respect to the configuration.

#### Returns

[`IMapLegend`](../interfaces/IMapLegend.md)

#### Implementation of

[`IMapLegendControl`](../interfaces/IMapLegendControl.md).[`getMapLegend`](../interfaces/IMapLegendControl.md#getmaplegend)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:181](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L181)

***

### getProps()

> **getProps**(): [`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md)

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getProps`](../interfaces/IMarkerLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L110)

***

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

Help function which acquires and returns the selection tool if available.

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L145)

***

### getState()

> **getState**(): [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>

It returns the layer tool state.

#### Returns

[`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getState`](../interfaces/IMarkerLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:131](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L131)

***

### getThemesTool()

> `private` **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L158)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`getType`](../interfaces/IMarkerLayerTool.md#gettype)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`handleEvent`](AbstractLayerTool.md#handleevent)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:611](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L611)

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

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`initialize`](../interfaces/IMarkerLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L207)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`isEnabled`](../interfaces/IMarkerLayerTool.md#isenabled)

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

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`isSingleton`](../interfaces/IMarkerLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer.

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`render`](../interfaces/IMarkerLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:557](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L557)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`setEnabled`](../interfaces/IMarkerLayerTool.md#setenabled)

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

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`switchEnabled`](../interfaces/IMarkerLayerTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateCategoryValues()

> `protected` **updateCategoryValues**(): `void`

Help function which updates the current category values based on map current data.

This should be called only when animated render is not required.

#### Returns

`void`

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:593](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L593)

***

### updateData()

> `protected` **updateData**(): `Map`\<`string`, `Map`\<`string`, `null` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

It prepares data for markers.

#### Returns

`Map`\<`string`, `Map`\<`string`, `null` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>\>

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:265](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L265)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `redraw`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDomain`](../interfaces/IMapDomain.md)\>

• **value**: `string`

• **redraw**: `undefined` \| `number`

#### Returns

`void`

#### Implementation of

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md).[`updateDimension`](../interfaces/IMarkerLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:533](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L533)

***

### updateMarkers()

> `protected` **updateMarkers**(`animateOptions`): `void`

Help method which updates existing markers and applies animation options

#### Parameters

• **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:489](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L489)

***

### updateTheme()

> `protected` **updateTheme**(`theme`): `void`

Help function which updates theme with respect to the Themes Tool API.

TODO: move to adapter

#### Parameters

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Source

[tools/layers/marker/model/internal/tool/MarkerLayerTool.ts:644](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/tool/MarkerLayerTool.ts#L644)
