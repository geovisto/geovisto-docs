**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DotLayerTool

# Class: DotLayerTool

This class represents Heat layer tool. It works with leaflet CircleMarker
to create dots

## Author

Vladimir Korencik

## Author

Petr Kaspar

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`IDotLayerTool`](../interfaces/IDotLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new DotLayerTool()

> **new DotLayerTool**(`props`?): [`DotLayerTool`](DotLayerTool.md)

#### Parameters

• **props?**: [`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md)

#### Returns

[`DotLayerTool`](DotLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L57)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L53)

***

### radius

> `private` **radius**: `number`

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L55)

***

### selectionToolAPI

> `private` **selectionToolAPI**: `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L52)

## Methods

### calculateRadius()

> `private` **calculateRadius**(): `void`

#### Returns

`void`

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:272](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L272)

***

### copy()

> **copy**(): [`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IDotLayerTool`](../interfaces/IDotLayerTool.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>, [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>\>

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`copy`](../interfaces/IDotLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L63)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`create`](../interfaces/IDotLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L79)

***

### createDot()

> `protected` **createDot**(`data`, `renderer`): `any`

#### Parameters

• **data**: `any`

• **renderer**: `Canvas`

#### Returns

`any`

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:207](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L207)

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

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L114)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L106)

***

### createMarkers()

> `protected` **createMarkers**(): `void`

#### Returns

`void`

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:297](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L297)

***

### createState()

> `protected` **createState**(): [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>

It creates new defaults of the layer tool.

#### Returns

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L83)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getAPIGetter`](../interfaces/IDotLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md)

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getDefaults`](../interfaces/IDotLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L71)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getId`](../interfaces/IDotLayerTool.md#getid)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getLayerItems`](../interfaces/IDotLayerTool.md#getlayeritems)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getMap`](../interfaces/IDotLayerTool.md#getmap)

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

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L99)

***

### getProps()

> **getProps**(): [`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md)

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getProps`](../interfaces/IDotLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L67)

***

### getSelectionTool()

> `private` **getSelectionTool**(): `undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Returns

`undefined` \| [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L87)

***

### getState()

> **getState**(): [`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>

It returns the map object state.

#### Returns

[`IDotLayerToolState`](../interfaces/IDotLayerToolState.md)\<[`IDotLayerToolProps`](../type-aliases/IDotLayerToolProps.md), [`IDotLayerToolDefaults`](../interfaces/IDotLayerToolDefaults.md), [`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getState`](../interfaces/IDotLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L75)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`getType`](../interfaces/IDotLayerTool.md#gettype)

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

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:318](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L318)

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

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IDotLayerToolConfig`](../type-aliases/IDotLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`initialize`](../interfaces/IDotLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L110)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`isEnabled`](../interfaces/IDotLayerTool.md#isenabled)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`isSingleton`](../interfaces/IDotLayerTool.md#issingleton)

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

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L130)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`render`](../interfaces/IDotLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:227](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L227)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`setEnabled`](../interfaces/IDotLayerTool.md#setenabled)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`switchEnabled`](../interfaces/IDotLayerTool.md#switchenabled)

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

[`IDotLayerTool`](../interfaces/IDotLayerTool.md).[`updateDimension`](../interfaces/IDotLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/dot/model/internal/tool/DotLayerTool.ts:249](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/dot/model/internal/tool/DotLayerTool.ts#L249)
