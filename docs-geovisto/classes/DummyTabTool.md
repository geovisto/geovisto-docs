**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DummyTabTool

# Class: DummyTabTool

This class represents dummy tool which provides empty map form. It provides empty sidebar which can be used be other tools via tab fragments.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IDummyTabTool`](../type-aliases/IDummyTabTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new DummyTabTool()

> **new DummyTabTool**(`props`?): [`DummyTabTool`](DummyTabTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Returns

[`DummyTabTool`](DummyTabTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/sidebar/model/internal/dummy/DummyTabTool.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L27)

## Properties

### sidebarTab

> `private` **sidebarTab**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/sidebar/model/internal/dummy/DummyTabTool.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L20)

## Methods

### copy()

> **copy**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It creates a copy of the uninitialized tool.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

`IDummyTabTool.copy`

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/sidebar/model/internal/dummy/DummyTabTool.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L34)

***

### create()

> **create**(): `this`

It creates a tool.

Override this function.

#### Returns

`this`

#### Implementation of

`IDummyTabTool.create`

#### Inherited from

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[model/internal/tool/MapTool.ts:121](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L121)

***

### createDefaults()

> `protected` **createDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Inherited from

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[model/internal/tool/MapTool.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L53)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/sidebar/model/internal/dummy/DummyTabTool.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L51)

***

### createState()

> `protected` **createState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>

It creates new defaults of the tool.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>

#### Inherited from

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[model/internal/tool/MapTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L67)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

`IDummyTabTool.getAPIGetter`

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Implementation of

`IDummyTabTool.getDefaults`

#### Inherited from

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[model/internal/tool/MapTool.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L46)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

`IDummyTabTool.getId`

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

`IDummyTabTool.getMap`

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

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

[tools/sidebar/model/internal/dummy/DummyTabTool.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L41)

***

### getProps()

> **getProps**(): [`IMapToolProps`](../type-aliases/IMapToolProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Implementation of

`IDummyTabTool.getProps`

#### Inherited from

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L39)

***

### getState()

> **getState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>

It returns the map tool state.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>

#### Implementation of

`IDummyTabTool.getState`

#### Inherited from

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[model/internal/tool/MapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L60)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

`IDummyTabTool.getType`

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

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

#### Inherited from

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L171)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the tool before it is created.
It processes the serialized config and sets the Geovisto map which manages the tools.

This cannot be done in the tool constructor
since the tool can be created before the Geovisto map is created.

This cannot be done in the tool create function
since there can be possible dependencies between the tools
(the tool might depend on other tools which needs to be initialized).

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>

#### Returns

`this`

#### Implementation of

`IDummyTabTool.initialize`

#### Inherited from

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[model/internal/tool/MapTool.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L98)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

`IDummyTabTool.isEnabled`

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

`IDummyTabTool.isSingleton`

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

`IDummyTabTool.setEnabled`

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

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

`IDummyTabTool.switchEnabled`

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
