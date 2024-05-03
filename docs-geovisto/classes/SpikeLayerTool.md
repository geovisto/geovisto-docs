**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SpikeLayerTool

# Class: SpikeLayerTool

This class represents Heat layer tool. It works with d3 to create spike icons
Icons are created SpikeIcon

## Author

Vladimir Korencik

## Author

Petr Kaspar

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new SpikeLayerTool()

> **new SpikeLayerTool**(`props`?): [`SpikeLayerTool`](SpikeLayerTool.md)

#### Parameters

• **props?**: [`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md)

#### Returns

[`SpikeLayerTool`](SpikeLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L61)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L58)

***

### max

> `private` **max**: `number`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L59)

***

### selectionToolAPI

> `private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L57)

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

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:253](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L253)

***

### calculateHeight()

> `private` **calculateHeight**(`height`): `number`

#### Parameters

• **height**: `number`

#### Returns

`number`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:322](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L322)

***

### copy()

> **copy**(): [`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>, [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>\>

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`copy`](../interfaces/ISpikeLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L67)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`create`](../interfaces/ISpikeLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L83)

***

### createLayerItems()

> `protected` **createLayerItems**(): `LayerGroup`[]

It creates layer items.

Override this function.

#### Returns

`LayerGroup`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L118)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L110)

***

### createMarker()

> `protected` **createMarker**(`data`): `any`

#### Parameters

• **data**: `any`

#### Returns

`any`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:296](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L296)

***

### createMarkers()

> `protected` **createMarkers**(): `void`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:278](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L278)

***

### createState()

> `protected` **createState**(): [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>

It creates new defaults of the layer tool.

#### Returns

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L87)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getAPIGetter`](../interfaces/ISpikeLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md)

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getDefaults`](../interfaces/ISpikeLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L75)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getId`](../interfaces/ISpikeLayerTool.md#getid)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getLayerItems`](../interfaces/ISpikeLayerTool.md#getlayeritems)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getMap`](../interfaces/ISpikeLayerTool.md#getmap)

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

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:103](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L103)

***

### getProps()

> **getProps**(): [`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md)

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getProps`](../interfaces/ISpikeLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L71)

***

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L91)

***

### getState()

> **getState**(): [`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>

It returns the map object state.

#### Returns

[`ISpikeLayerToolState`](../interfaces/ISpikeLayerToolState.md)\<[`ISpikeLayerToolProps`](../type-aliases/ISpikeLayerToolProps.md), [`ISpikeLayerToolDefaults`](../interfaces/ISpikeLayerToolDefaults.md), [`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getState`](../interfaces/ISpikeLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L79)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`getType`](../interfaces/ISpikeLayerTool.md#gettype)

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

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:373](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L373)

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

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISpikeLayerToolConfig`](../type-aliases/ISpikeLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`initialize`](../interfaces/ISpikeLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L114)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`isEnabled`](../interfaces/ISpikeLayerTool.md#isenabled)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`isSingleton`](../interfaces/ISpikeLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`render`](../interfaces/ISpikeLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:328](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L328)

***

### setCategoryColor()

> `private` **setCategoryColor**(`dataItem`, `category`): `void`

#### Parameters

• **dataItem**: `any`

• **category**: `string`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:240](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L240)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`setEnabled`](../interfaces/ISpikeLayerTool.md#setenabled)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`switchEnabled`](../interfaces/ISpikeLayerTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateData()

> `protected` **updateData**(): `void`

#### Returns

`void`

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:133](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L133)

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

[`ISpikeLayerTool`](../interfaces/ISpikeLayerTool.md).[`updateDimension`](../interfaces/ISpikeLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/spike/model/internal/tool/SpikeLayerTool.ts:348](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/spike/model/internal/tool/SpikeLayerTool.ts#L348)
