[geovisto-map](../README.md) / [Exports](../modules.md) / MapTool

# Class: MapTool

This class provides basic tools API.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObject`](MapObject.md)

  ↳ **`MapTool`**

  ↳↳ [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳↳ [`FiltersTool`](FiltersTool.md)

  ↳↳ [`GeoDownloaderTool`](GeoDownloaderTool.md)

  ↳↳ [`HierarchyTool`](HierarchyTool.md)

  ↳↳ [`InfoTool`](InfoTool.md)

  ↳↳ [`LegendTool`](LegendTool.md)

  ↳↳ [`SelectionTool`](SelectionTool.md)

  ↳↳ [`DummyTabTool`](DummyTabTool.md)

  ↳↳ [`SidebarTool`](SidebarTool.md)

  ↳↳ [`ThemesTool`](ThemesTool.md)

## Implements

- [`IMapTool`](../interfaces/IMapTool.md)
- [`IMapEventListener`](../interfaces/IMapEventListener.md)

## Table of contents

### Constructors

- [constructor](MapTool.md#constructor)

### Methods

- [copy](MapTool.md#copy)
- [create](MapTool.md#create)
- [createDefaults](MapTool.md#createdefaults)
- [createState](MapTool.md#createstate)
- [getAPIGetter](MapTool.md#getapigetter)
- [getDefaults](MapTool.md#getdefaults)
- [getId](MapTool.md#getid)
- [getMap](MapTool.md#getmap)
- [getProps](MapTool.md#getprops)
- [getState](MapTool.md#getstate)
- [getType](MapTool.md#gettype)
- [handleEvent](MapTool.md#handleevent)
- [initialize](MapTool.md#initialize)
- [isEnabled](MapTool.md#isenabled)
- [isSingleton](MapTool.md#issingleton)
- [setEnabled](MapTool.md#setenabled)
- [setProps](MapTool.md#setprops)
- [switchEnabled](MapTool.md#switchenabled)

## Constructors

### constructor

• **new MapTool**(`props?`): [`MapTool`](MapTool.md)

It initializes the tool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapToolProps`](../modules.md#imaptoolprops) |

#### Returns

[`MapTool`](MapTool.md)

#### Overrides

[MapObject](MapObject.md).[constructor](MapObject.md#constructor)

#### Defined in

[src/model/internal/tool/MapTool.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L25)

## Methods

### copy

▸ **copy**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It creates copy of the uninitialized tool.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[copy](../interfaces/IMapTool.md#copy)

#### Defined in

[src/model/internal/tool/MapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L32)

___

### create

▸ **create**(): `this`

It creates a tool.

Override this function.

#### Returns

`this`

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[create](../interfaces/IMapTool.md#create)

#### Defined in

[src/model/internal/tool/MapTool.ts:121](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L121)

___

### createDefaults

▸ **createDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Overrides

[MapObject](MapObject.md).[createDefaults](MapObject.md#createdefaults)

#### Defined in

[src/model/internal/tool/MapTool.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L53)

___

### createState

▸ **createState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

It creates new defaults of the tool.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

#### Overrides

[MapObject](MapObject.md).[createState](MapObject.md#createstate)

#### Defined in

[src/model/internal/tool/MapTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L67)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getAPIGetter](../interfaces/IMapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getDefaults](../interfaces/IMapTool.md#getdefaults)

#### Overrides

[MapObject](MapObject.md).[getDefaults](MapObject.md#getdefaults)

#### Defined in

[src/model/internal/tool/MapTool.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L46)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getId](../interfaces/IMapTool.md#getid)

#### Inherited from

[MapObject](MapObject.md).[getId](MapObject.md#getid)

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

[IMapTool](../interfaces/IMapTool.md).[getMap](../interfaces/IMapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getProps](../interfaces/IMapTool.md#getprops)

#### Overrides

[MapObject](MapObject.md).[getProps](MapObject.md#getprops)

#### Defined in

[src/model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L39)

___

### getState

▸ **getState**(): [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

It returns the map tool state.

#### Returns

[`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getState](../interfaces/IMapTool.md#getstate)

#### Overrides

[MapObject](MapObject.md).[getState](MapObject.md#getstate)

#### Defined in

[src/model/internal/tool/MapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L60)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[getType](../interfaces/IMapTool.md#gettype)

#### Inherited from

[MapObject](MapObject.md).[getType](MapObject.md#gettype)

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

#### Implementation of

[IMapEventListener](../interfaces/IMapEventListener.md).[handleEvent](../interfaces/IMapEventListener.md#handleevent)

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

[IMapTool](../interfaces/IMapTool.md).[initialize](../interfaces/IMapTool.md#initialize)

#### Overrides

[MapObject](MapObject.md).[initialize](MapObject.md#initialize)

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

[IMapTool](../interfaces/IMapTool.md).[isEnabled](../interfaces/IMapTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IMapTool](../interfaces/IMapTool.md).[isSingleton](../interfaces/IMapTool.md#issingleton)

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

[IMapTool](../interfaces/IMapTool.md).[setEnabled](../interfaces/IMapTool.md#setenabled)

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

[MapObject](MapObject.md).[setProps](MapObject.md#setprops)

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

[IMapTool](../interfaces/IMapTool.md).[switchEnabled](../interfaces/IMapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
