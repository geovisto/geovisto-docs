**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ThemesTool

# Class: ThemesTool

This class provides the themes tool.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IThemesTool`](../interfaces/IThemesTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new ThemesTool()

> **new ThemesTool**(`props`?): [`ThemesTool`](ThemesTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IThemesToolProps`](../type-aliases/IThemesToolProps.md)

#### Returns

[`ThemesTool`](ThemesTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L49)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the tool state.

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L42)

***

### api

> `static` `private` **api**: [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md) = `ThemesToolAPI`

tool api

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L37)

## Methods

### copy()

> **copy**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>, [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>\>

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`copy`](../interfaces/IThemesTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L56)

***

### create()

> **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`create`](../interfaces/IThemesTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L126)

***

### createDefaults()

> `protected` **createDefaults**(): [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L77)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab fragment.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:186](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L186)

***

### createState()

> `protected` **createState**(): [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>

It returns the tool state.

#### Returns

[`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L91)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IThemesToolAPIGetter`](../type-aliases/IThemesToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IThemesToolAPIGetter`](../type-aliases/IThemesToolAPIGetter.md)

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getAPIGetter`](../interfaces/IThemesTool.md#getapigetter)

#### Overrides

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L98)

***

### getDefaults()

> **getDefaults**(): [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

It returns default values of the themes tool.

#### Returns

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getDefaults`](../interfaces/IThemesTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:70](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L70)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getId`](../interfaces/IThemesTool.md#getid)

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

[`IThemesTool`](../interfaces/IThemesTool.md).[`getMap`](../interfaces/IThemesTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns tab control with respect to the configuration

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:176](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L176)

***

### getProps()

> **getProps**(): [`IThemesToolProps`](../type-aliases/IThemesToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IThemesToolProps`](../type-aliases/IThemesToolProps.md)

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getProps`](../interfaces/IThemesTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L63)

***

### getState()

> **getState**(): [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>

It returns the themes tool state.

#### Returns

[`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../type-aliases/IThemesToolProps.md), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getState`](../interfaces/IThemesTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:84](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L84)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`getType`](../interfaces/IThemesTool.md#gettype)

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

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`initialize`](../interfaces/IThemesTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L109)

***

### initializeAPI()

> `protected` **initializeAPI**(): `void`

Help method which initializes the API.

#### Returns

`void`

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L117)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`isEnabled`](../interfaces/IThemesTool.md#isenabled)

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

[`IThemesTool`](../interfaces/IThemesTool.md).[`isSingleton`](../interfaces/IThemesTool.md#issingleton)

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

[`IThemesTool`](../interfaces/IThemesTool.md).[`setEnabled`](../interfaces/IThemesTool.md#setenabled)

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

### setTheme()

> **setTheme**(`theme`): `void`

It updates the theme and notifies listeners.

#### Parameters

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`setTheme`](../interfaces/IThemesTool.md#settheme)

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:141](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L141)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`IThemesTool`](../interfaces/IThemesTool.md).[`switchEnabled`](../interfaces/IThemesTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateGlobalStyles()

> `protected` **updateGlobalStyles**(`theme`): `void`

This function updates the global styles.

#### Parameters

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Source

[tools/themes/model/internal/tool/ThemesTool.ts:169](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesTool.ts#L169)
