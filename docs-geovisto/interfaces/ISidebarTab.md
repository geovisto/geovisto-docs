[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarTab

# Interface: ISidebarTab\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares functions for the sidebar tab.
It contains enable button which enables the sidebar and tool.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`ISidebarTabProps`](../modules.md#isidebartabprops) = [`ISidebarTabProps`](../modules.md#isidebartabprops) |
| `TDefaults` | extends [`ISidebarTabDefaults`](ISidebarTabDefaults.md) = [`ISidebarTabDefaults`](ISidebarTabDefaults.md) |
| `TState` | extends [`ISidebarTabState`](ISidebarTabState.md) = [`ISidebarTabState`](ISidebarTabState.md) |
| `TConfig` | extends [`ISidebarTabConfig`](../modules.md#isidebartabconfig) = [`ISidebarTabConfig`](../modules.md#isidebartabconfig) |
| `TInitProps` | extends [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<`TConfig`\> = [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<`TConfig`\> |

## Hierarchy

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

  ↳ **`ISidebarTab`**

## Implemented by

- [`SidebarTab`](../classes/SidebarTab.md)

## Table of contents

### Methods

- [create](ISidebarTab.md#create)
- [getDefaults](ISidebarTab.md#getdefaults)
- [getFragments](ISidebarTab.md#getfragments)
- [getId](ISidebarTab.md#getid)
- [getProps](ISidebarTab.md#getprops)
- [getState](ISidebarTab.md#getstate)
- [getTool](ISidebarTab.md#gettool)
- [getType](ISidebarTab.md#gettype)
- [initialize](ISidebarTab.md#initialize)
- [redraw](ISidebarTab.md#redraw)
- [setChecked](ISidebarTab.md#setchecked)

## Methods

### create

▸ **create**(): `this`

It creates the sidebar tab

#### Returns

`this`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTab.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L46)

___

### getDefaults

▸ **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[IMapObject](IMapObject.md).[getDefaults](IMapObject.md#getdefaults)

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getFragments

▸ **getFragments**(): `undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTab.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L41)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[IMapObject](IMapObject.md).[getId](IMapObject.md#getid)

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getProps

▸ **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[IMapObject](IMapObject.md).[getProps](IMapObject.md#getprops)

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getState

▸ **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[IMapObject](IMapObject.md).[getState](IMapObject.md#getstate)

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getTool

▸ **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

Help function which returns the tool from the state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTab.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L29)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[IMapObject](IMapObject.md).[getType](IMapObject.md#gettype)

#### Defined in

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | `TInitProps` |

#### Returns

`this`

#### Inherited from

[IMapObject](IMapObject.md).[initialize](IMapObject.md#initialize)

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)

___

### redraw

▸ **redraw**(): `void`

It redraws the content of the sidebar tab.

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTab.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L51)

___

### setChecked

▸ **setChecked**(`checked`): `void`

Functions changes layer state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTab.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L36)
