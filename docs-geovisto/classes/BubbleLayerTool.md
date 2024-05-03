**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BubbleLayerTool

# Class: BubbleLayerTool

This class represents Heat layer tool. It works with d3 to create bubble icons and Leaflet MarkerCluster
Icons are created BubbleIcon

## Author

Vladimir Korencik

## Author

Petr Kaspar

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new BubbleLayerTool()

> **new BubbleLayerTool**(`props`?): [`BubbleLayerTool`](BubbleLayerTool.md)

#### Parameters

• **props?**: [`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md)

#### Returns

[`BubbleLayerTool`](BubbleLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L65)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L62)

***

### max

> `private` **max**: `number`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L63)

***

### selectionToolAPI

> `private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L61)

## Methods

### aggregateValues()

> `private` **aggregateValues**(`dataItem`, `aggregationDimension`, `foundValue`): `void`

#### Parameters

• **dataItem**: `any`

• **aggregationDimension**: [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

• **foundValue**: `number`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:307](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L307)

***

### copy()

> **copy**(): [`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>, [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>\>

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`copy`](../interfaces/IBubbleLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L71)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`create`](../interfaces/IBubbleLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L87)

***

### createLayerItems()

> `protected` **createLayerItems**(): `MarkerClusterGroup`[]

It creates layer items.

Override this function.

#### Returns

`MarkerClusterGroup`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:124](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L124)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L114)

***

### createMarker()

> `protected` **createMarker**(`data`): `any`

#### Parameters

• **data**: `any`

#### Returns

`any`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:397](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L397)

***

### createMarkers()

> `protected` **createMarkers**(): `void`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:380](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L380)

***

### createPopupMessage()

> `protected` **createPopupMessage**(`data`): `string`

#### Parameters

• **data**: `IBubbleIconValues`

#### Returns

`string`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:454](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L454)

***

### createState()

> `protected` **createState**(): [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>

It creates new defaults of the layer tool.

#### Returns

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L91)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getAPIGetter`](../interfaces/IBubbleLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getClusterValues()

> `protected` **getClusterValues**(`childMarkers`): `IBubbleIconValues`

#### Parameters

• **childMarkers**: `Marker`[]

#### Returns

`IBubbleIconValues`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:426](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L426)

***

### getDefaults()

> **getDefaults**(): [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md)

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getDefaults`](../interfaces/IBubbleLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L79)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getId`](../interfaces/IBubbleLayerTool.md#getid)

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

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getLayerItems`](../interfaces/IBubbleLayerTool.md#getlayeritems)

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

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getMap`](../interfaces/IBubbleLayerTool.md#getmap)

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

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L107)

***

### getProps()

> **getProps**(): [`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md)

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getProps`](../interfaces/IBubbleLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L75)

***

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:95](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L95)

***

### getState()

> **getState**(): [`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>

It returns the map object state.

#### Returns

[`IBubbleLayerToolState`](../interfaces/IBubbleLayerToolState.md)\<[`IBubbleLayerToolProps`](../type-aliases/IBubbleLayerToolProps.md), [`IBubbleLayerToolDefaults`](../interfaces/IBubbleLayerToolDefaults.md), [`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getState`](../interfaces/IBubbleLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L83)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`getType`](../interfaces/IBubbleLayerTool.md#gettype)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

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

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:501](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L501)

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

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IBubbleLayerToolConfig`](../type-aliases/IBubbleLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`initialize`](../interfaces/IBubbleLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L118)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`isEnabled`](../interfaces/IBubbleLayerTool.md#isenabled)

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

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`isSingleton`](../interfaces/IBubbleLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### prepareMapData()

> `protected` **prepareMapData**(): `void`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:178](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L178)

***

### render()

> **render**(`type`): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

• **type**: `number`

#### Returns

`void`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`render`](../interfaces/IBubbleLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:357](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L357)

***

### setCategoryColor()

> `private` **setCategoryColor**(`dataItem`, `category`, `value`): `void`

#### Parameters

• **dataItem**: `any`

• **category**: `string`

• **value**: `number`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:287](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L287)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`setEnabled`](../interfaces/IBubbleLayerTool.md#setenabled)

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

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`switchEnabled`](../interfaces/IBubbleLayerTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

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

[`IBubbleLayerTool`](../interfaces/IBubbleLayerTool.md).[`updateDimension`](../interfaces/IBubbleLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:476](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L476)

***

### updateStyle()

> `protected` **updateStyle**(): `void`

#### Returns

`void`

#### Source

[tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts:333](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/bubble/model/internal/tool/BubbleLayerTool.ts#L333)
