[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarTool

# Class: SidebarTool

This class provides the sidebar tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`SidebarTool`**

## Implements

- [`ISidebarTool`](../interfaces/ISidebarTool.md)

## Table of contents

### Constructors

- [constructor](SidebarTool.md#constructor)

### Properties

- [themeChangeAdapter](SidebarTool.md#themechangeadapter)

### Methods

- [copy](SidebarTool.md#copy)
- [create](SidebarTool.md#create)
- [createDefaults](SidebarTool.md#createdefaults)
- [createSidebar](SidebarTool.md#createsidebar)
- [createSidebarTab](SidebarTool.md#createsidebartab)
- [createState](SidebarTool.md#createstate)
- [createTabs](SidebarTool.md#createtabs)
- [getAPIGetter](SidebarTool.md#getapigetter)
- [getDefaults](SidebarTool.md#getdefaults)
- [getId](SidebarTool.md#getid)
- [getMap](SidebarTool.md#getmap)
- [getProps](SidebarTool.md#getprops)
- [getPropsSidebarTab](SidebarTool.md#getpropssidebartab)
- [getSidebarStructure](SidebarTool.md#getsidebarstructure)
- [getState](SidebarTool.md#getstate)
- [getTabs](SidebarTool.md#gettabs)
- [getThemeChangeAdapter](SidebarTool.md#getthemechangeadapter)
- [getType](SidebarTool.md#gettype)
- [handleEvent](SidebarTool.md#handleevent)
- [initialize](SidebarTool.md#initialize)
- [isEnabled](SidebarTool.md#isenabled)
- [isSingleton](SidebarTool.md#issingleton)
- [setEnabled](SidebarTool.md#setenabled)
- [setProps](SidebarTool.md#setprops)
- [switchEnabled](SidebarTool.md#switchenabled)

## Constructors

### constructor

• **new SidebarTool**(`props?`): [`SidebarTool`](SidebarTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ISidebarToolProps`](../modules.md#isidebartoolprops) |

#### Returns

[`SidebarTool`](SidebarTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L48)

## Properties

### themeChangeAdapter

• `Private` **themeChangeAdapter**: [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L41)

## Methods

### copy

▸ **copy**(): [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[copy](../interfaces/ISidebarTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L55)

___

### create

▸ **create**(): `this`

It creates sidebar.

#### Returns

`this`

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[create](../interfaces/ISidebarTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:116](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L116)

___

### createDefaults

▸ **createDefaults**(): [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L76)

___

### createSidebar

▸ **createSidebar**(): `void`

It creates a sidebar tool and its parts (leaflet sidebar and sidebar tabs).

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L126)

___

### createSidebarTab

▸ **createSidebarTab**(`tool`, `config`, `propsSidebarTab`): `void`

Help function which initializes and creates sidebar tab for a tool with respect to a given config.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | `undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |
| `config` | `undefined` \| [`ISidebarTabConfig`](../modules.md#isidebartabconfig) |
| `propsSidebarTab` | `undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:219](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L219)

___

### createState

▸ **createState**(): [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>

It returns default tool state.

#### Returns

[`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L90)

___

### createTabs

▸ **createTabs**(): `void`

It returns sidebar tabs.

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L163)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getAPIGetter](../interfaces/ISidebarTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

It returns default values of the sidebar tool.

#### Returns

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getDefaults](../interfaces/ISidebarTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L69)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getId](../interfaces/ISidebarTool.md#getid)

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

[ISidebarTool](../interfaces/ISidebarTool.md).[getMap](../interfaces/ISidebarTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getProps

▸ **getProps**(): [`ISidebarToolProps`](../modules.md#isidebartoolprops)

It returns the props given by the programmer.

#### Returns

[`ISidebarToolProps`](../modules.md#isidebartoolprops)

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getProps](../interfaces/ISidebarTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L62)

___

### getPropsSidebarTab

▸ **getPropsSidebarTab**(`toolId`): `undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

Help function which loops up a sidebar tab in props

#### Parameters

| Name | Type |
| :------ | :------ |
| `toolId` | `string` |

#### Returns

`undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:202](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L202)

___

### getSidebarStructure

▸ **getSidebarStructure**(): `SidebarOptions`

It returns structure of sidebar defined with respect to the leaflet-sidebar-v2 plugin specification.

See: https://github.com/noerw/leaflet-sidebar-v2

#### Returns

`SidebarOptions`

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:144](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L144)

___

### getState

▸ **getState**(): [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>

It returns the sidebar tool state.

#### Returns

[`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getState](../interfaces/ISidebarTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L83)

___

### getTabs

▸ **getTabs**(): [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>[]

Help function which returns sidebar tabs.

#### Returns

[`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>[]

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getTabs](../interfaces/ISidebarTool.md#gettabs)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:156](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L156)

___

### getThemeChangeAdapter

▸ **getThemeChangeAdapter**(): [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

It returns theme change adapter.

#### Returns

[`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L97)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[getType](../interfaces/ISidebarTool.md#gettype)

#### Inherited from

[MapTool](MapTool.md).[getType](MapTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Overrides

[MapTool](MapTool.md).[handleEvent](MapTool.md#handleevent)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:243](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L243)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[initialize](../interfaces/ISidebarTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarTool.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L109)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ISidebarTool](../interfaces/ISidebarTool.md).[isEnabled](../interfaces/ISidebarTool.md#isenabled)

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

[ISidebarTool](../interfaces/ISidebarTool.md).[isSingleton](../interfaces/ISidebarTool.md#issingleton)

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

[ISidebarTool](../interfaces/ISidebarTool.md).[setEnabled](../interfaces/ISidebarTool.md#setenabled)

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

[ISidebarTool](../interfaces/ISidebarTool.md).[switchEnabled](../interfaces/ISidebarTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
