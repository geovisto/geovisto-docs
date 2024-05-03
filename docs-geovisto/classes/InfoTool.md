**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / InfoTool

# Class: InfoTool

This class implements Info Tool

## Author

Jiri Hynek
    IMap,

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IInfoTool`](../interfaces/IInfoTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new InfoTool()

> **new InfoTool**(`props`?): [`InfoTool`](InfoTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IInfoToolProps`](../type-aliases/IInfoToolProps.md)

#### Returns

[`InfoTool`](InfoTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L36)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L29)

## Methods

### copy()

> **copy**(): [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`copy`](../interfaces/IInfoTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L43)

***

### create()

> **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`create`](../interfaces/IInfoTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:94](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L94)

***

### createDefaults()

> **createDefaults**(): [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L64)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L112)

***

### createState()

> **createState**(): [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

It returns default tool state.

#### Returns

[`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L78)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getAPIGetter`](../interfaces/IInfoTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

It returns default values of the filters tool.

#### Returns

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getDefaults`](../interfaces/IInfoTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L57)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getId`](../interfaces/IInfoTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getInfo()

> **getInfo**(): `void`

It creates a new map form.

#### Returns

`void`

#### Source

[tools/info/model/internal/tool/InfoTool.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L120)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getMap`](../interfaces/IInfoTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L102)

***

### getProps()

> **getProps**(): [`IInfoToolProps`](../type-aliases/IInfoToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IInfoToolProps`](../type-aliases/IInfoToolProps.md)

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getProps`](../interfaces/IInfoTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L50)

***

### getState()

> **getState**(): [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

It returns the filters tool state.

#### Returns

[`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getState`](../interfaces/IInfoTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L71)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`getType`](../interfaces/IInfoTool.md#gettype)

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

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`initialize`](../interfaces/IInfoTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/info/model/internal/tool/InfoTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoTool.ts#L87)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IInfoTool`](../interfaces/IInfoTool.md).[`isEnabled`](../interfaces/IInfoTool.md#isenabled)

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

[`IInfoTool`](../interfaces/IInfoTool.md).[`isSingleton`](../interfaces/IInfoTool.md#issingleton)

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

[`IInfoTool`](../interfaces/IInfoTool.md).[`setEnabled`](../interfaces/IInfoTool.md#setenabled)

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

[`IInfoTool`](../interfaces/IInfoTool.md).[`switchEnabled`](../interfaces/IInfoTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
