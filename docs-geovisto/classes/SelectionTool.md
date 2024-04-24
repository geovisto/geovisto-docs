**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SelectionTool

# Class: SelectionTool

This class provides the selection tool.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`ISelectionTool`](../interfaces/ISelectionTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new SelectionTool()

> **new SelectionTool**(`props`?): [`SelectionTool`](SelectionTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md)

#### Returns

[`SelectionTool`](SelectionTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Paramps

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L49)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the tool state.

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L42)

***

### api

> `static` `private` **api**: [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md) = `SelectionToolAPI`

tool api

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L37)

## Methods

### copy()

> **copy**(): [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`copy`](../interfaces/ISelectionTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L56)

***

### create()

> **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`create`](../interfaces/ISelectionTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:127](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L127)

***

### createDefaults()

> **createDefaults**(): [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L77)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:162](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L162)

***

### createState()

> **createState**(): [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

It creates the tool state.

#### Returns

[`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L91)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`ISelectionToolAPIGetter`](../type-aliases/ISelectionToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`ISelectionToolAPIGetter`](../type-aliases/ISelectionToolAPIGetter.md)

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getAPIGetter`](../interfaces/ISelectionTool.md#getapigetter)

#### Overrides

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L98)

***

### getDefaults()

> **getDefaults**(): [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

It returns default values of the selection tool.

#### Returns

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getDefaults`](../interfaces/ISelectionTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:70](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L70)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getId`](../interfaces/ISelectionTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getMap`](../interfaces/ISelectionTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a tab fragment.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:152](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L152)

***

### getProps()

> **getProps**(): [`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md)

It returns the props given by the programmer.

#### Returns

[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md)

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getProps`](../interfaces/ISelectionTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L63)

***

### getState()

> **getState**(): [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

It returns the selection tool state.

#### Returns

[`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getState`](../interfaces/ISelectionTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:84](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L84)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`getType`](../interfaces/ISelectionTool.md#gettype)

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

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

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L171)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`initialize`](../interfaces/ISelectionTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L109)

***

### initializeAPI()

> `protected` **initializeAPI**(): `void`

Help method which initializes the API.

#### Returns

`void`

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L117)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`isEnabled`](../interfaces/ISelectionTool.md#isenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`isEnabled`](MapTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`isSingleton`](../interfaces/ISelectionTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`setEnabled`](../interfaces/ISelectionTool.md#setenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L142)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### setSelection()

> **setSelection**(`selection`): `void`

#### Parameters

• **selection**: `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Returns

`void`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`setSelection`](../interfaces/ISelectionTool.md#setselection)

#### Paramection

#### Source

[tools/selection/model/internal/tool/SelectionTool.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionTool.ts#L138)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`ISelectionTool`](../interfaces/ISelectionTool.md).[`switchEnabled`](../interfaces/ISelectionTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
