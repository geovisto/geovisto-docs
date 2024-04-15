[geovisto-map](../README.md) / [Exports](../modules.md) / DummyTabTool

# Class: DummyTabTool

This class represents dummy tool which provides empty map form. It provides empty sidebar which can be used be other tools via tab fragments.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`DummyTabTool`**

## Implements

- [`IDummyTabTool`](../modules.md#idummytabtool)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](DummyTabTool.md#constructor)

### Properties

- [sidebarTab](DummyTabTool.md#sidebartab)

### Methods

- [copy](DummyTabTool.md#copy)
- [create](DummyTabTool.md#create)
- [createDefaults](DummyTabTool.md#createdefaults)
- [createMapForm](DummyTabTool.md#createmapform)
- [createState](DummyTabTool.md#createstate)
- [getAPIGetter](DummyTabTool.md#getapigetter)
- [getDefaults](DummyTabTool.md#getdefaults)
- [getId](DummyTabTool.md#getid)
- [getMap](DummyTabTool.md#getmap)
- [getMapForm](DummyTabTool.md#getmapform)
- [getProps](DummyTabTool.md#getprops)
- [getState](DummyTabTool.md#getstate)
- [getType](DummyTabTool.md#gettype)
- [handleEvent](DummyTabTool.md#handleevent)
- [initialize](DummyTabTool.md#initialize)
- [isEnabled](DummyTabTool.md#isenabled)
- [isSingleton](DummyTabTool.md#issingleton)
- [setEnabled](DummyTabTool.md#setenabled)
- [setProps](DummyTabTool.md#setprops)
- [switchEnabled](DummyTabTool.md#switchenabled)

## Constructors

### constructor

• **new DummyTabTool**(`props?`): [`DummyTabTool`](DummyTabTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapToolProps`](../modules.md#imaptoolprops) |

#### Returns

[`DummyTabTool`](DummyTabTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabTool.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L27)

## Properties

### sidebarTab

• `Private` **sidebarTab**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabTool.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L20)

## Methods

### copy

▸ **copy**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It creates a copy of the uninitialized tool.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

IDummyTabTool.copy

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabTool.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L34)

___

### create

▸ **create**(): `this`

It creates a tool.

Override this function.

#### Returns

`this`

#### Implementation of

IDummyTabTool.create

#### Inherited from

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/model/internal/tool/MapTool.ts:121](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L121)

___

### createDefaults

▸ **createDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Inherited from

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/model/internal/tool/MapTool.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L53)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabTool.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L51)

___

### createState

▸ **createState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

It creates new defaults of the tool.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

#### Inherited from

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/model/internal/tool/MapTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L67)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

IDummyTabTool.getAPIGetter

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Implementation of

IDummyTabTool.getDefaults

#### Inherited from

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/model/internal/tool/MapTool.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L46)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

IDummyTabTool.getId

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

IDummyTabTool.getMap

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/sidebar/model/internal/dummy/DummyTabTool.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/dummy/DummyTabTool.ts#L41)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Implementation of

IDummyTabTool.getProps

#### Inherited from

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L39)

___

### getState

▸ **getState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

It returns the map tool state.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

#### Implementation of

IDummyTabTool.getState

#### Inherited from

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/model/internal/tool/MapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L60)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

IDummyTabTool.getType

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

It initializes the tool before it is created.
It processes the serialized config and sets the Geovisto map which manages the tools.

This cannot be done in the tool constructor
since the tool can be created before the Geovisto map is created.

This cannot be done in the tool create function
since there can be possible dependencies between the tools
(the tool might depend on other tools which needs to be initialized).

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\> |

#### Returns

`this`

#### Implementation of

IDummyTabTool.initialize

#### Inherited from

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/model/internal/tool/MapTool.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L98)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

IDummyTabTool.isEnabled

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

IDummyTabTool.isSingleton

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

IDummyTabTool.setEnabled

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

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

IDummyTabTool.switchEnabled

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
