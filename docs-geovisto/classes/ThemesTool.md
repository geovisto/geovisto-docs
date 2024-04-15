[geovisto-map](../README.md) / [Exports](../modules.md) / ThemesTool

# Class: ThemesTool

This class provides the themes tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`ThemesTool`**

## Implements

- [`IThemesTool`](../interfaces/IThemesTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](ThemesTool.md#constructor)

### Properties

- [mapForm](ThemesTool.md#mapform)
- [api](ThemesTool.md#api)

### Methods

- [copy](ThemesTool.md#copy)
- [create](ThemesTool.md#create)
- [createDefaults](ThemesTool.md#createdefaults)
- [createMapForm](ThemesTool.md#createmapform)
- [createState](ThemesTool.md#createstate)
- [getAPIGetter](ThemesTool.md#getapigetter)
- [getDefaults](ThemesTool.md#getdefaults)
- [getId](ThemesTool.md#getid)
- [getMap](ThemesTool.md#getmap)
- [getMapForm](ThemesTool.md#getmapform)
- [getProps](ThemesTool.md#getprops)
- [getState](ThemesTool.md#getstate)
- [getType](ThemesTool.md#gettype)
- [handleEvent](ThemesTool.md#handleevent)
- [initialize](ThemesTool.md#initialize)
- [initializeAPI](ThemesTool.md#initializeapi)
- [isEnabled](ThemesTool.md#isenabled)
- [isSingleton](ThemesTool.md#issingleton)
- [setEnabled](ThemesTool.md#setenabled)
- [setProps](ThemesTool.md#setprops)
- [setTheme](ThemesTool.md#settheme)
- [switchEnabled](ThemesTool.md#switchenabled)
- [updateGlobalStyles](ThemesTool.md#updateglobalstyles)

## Constructors

### constructor

• **new ThemesTool**(`props?`): [`ThemesTool`](ThemesTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IThemesToolProps`](../modules.md#ithemestoolprops) |

#### Returns

[`ThemesTool`](ThemesTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L49)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the tool state.

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L42)

___

### api

▪ `Static` `Private` **api**: [`IThemesToolAPI`](../modules.md#ithemestoolapi) = `ThemesToolAPI`

tool api

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L37)

## Methods

### copy

▸ **copy**(): [`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IThemesTool`](../interfaces/IThemesTool.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>, [`IThemesToolConfig`](../modules.md#ithemestoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>\>

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[copy](../interfaces/IThemesTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L56)

___

### create

▸ **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[create](../interfaces/IThemesTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L126)

___

### createDefaults

▸ **createDefaults**(): [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L77)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab fragment.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:186](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L186)

___

### createState

▸ **createState**(): [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>

It returns the tool state.

#### Returns

[`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L91)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IThemesToolAPIGetter`](../modules.md#ithemestoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IThemesToolAPIGetter`](../modules.md#ithemestoolapigetter)

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getAPIGetter](../interfaces/IThemesTool.md#getapigetter)

#### Overrides

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L98)

___

### getDefaults

▸ **getDefaults**(): [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

It returns default values of the themes tool.

#### Returns

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getDefaults](../interfaces/IThemesTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L70)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getId](../interfaces/IThemesTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getMap](../interfaces/IThemesTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns tab control with respect to the configuration

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:176](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L176)

___

### getProps

▸ **getProps**(): [`IThemesToolProps`](../modules.md#ithemestoolprops)

It returns the props given by the programmer.

#### Returns

[`IThemesToolProps`](../modules.md#ithemestoolprops)

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getProps](../interfaces/IThemesTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L63)

___

### getState

▸ **getState**(): [`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>

It returns the themes tool state.

#### Returns

[`IThemesToolState`](../interfaces/IThemesToolState.md)\<[`IThemesToolProps`](../modules.md#ithemestoolprops), [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md), [`IThemesToolConfig`](../modules.md#ithemestoolconfig)\>

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getState](../interfaces/IThemesTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:84](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L84)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[getType](../interfaces/IThemesTool.md#gettype)

#### Inherited from

[MapTool](MapTool.md).[getType](MapTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

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

#### Inherited from

[MapTool](MapTool.md).[handleEvent](MapTool.md#handleevent)

#### Defined in

[src/model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L171)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IThemesToolConfig`](../modules.md#ithemestoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[initialize](../interfaces/IThemesTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L109)

___

### initializeAPI

▸ **initializeAPI**(): `void`

Help method which initializes the API.

#### Returns

`void`

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L117)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[isEnabled](../interfaces/IThemesTool.md#isenabled)

#### Inherited from

[MapTool](MapTool.md).[isEnabled](MapTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[isSingleton](../interfaces/IThemesTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[setEnabled](../interfaces/IThemesTool.md#setenabled)

#### Inherited from

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L142)

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

[MapTool](MapTool.md).[setProps](MapTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### setTheme

▸ **setTheme**(`theme`): `void`

It updates the theme and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

`void`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[setTheme](../interfaces/IThemesTool.md#settheme)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:141](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L141)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[IThemesTool](../interfaces/IThemesTool.md).[switchEnabled](../interfaces/IThemesTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateGlobalStyles

▸ **updateGlobalStyles**(`theme`): `void`

This function updates the global styles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

`void`

#### Defined in

[src/tools/themes/model/internal/tool/ThemesTool.ts:169](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesTool.ts#L169)
