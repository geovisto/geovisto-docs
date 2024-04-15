[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarTab

# Class: SidebarTab\<T\>

This class provides controls for a sidebar tab.
It contains enable button which enables the sidebar and tool.

This class is intended to be extended.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md) |

## Hierarchy

- [`MapObject`](MapObject.md)

  ↳ **`SidebarTab`**

## Implements

- [`ISidebarTab`](../interfaces/ISidebarTab.md)

## Table of contents

### Constructors

- [constructor](SidebarTab.md#constructor)

### Methods

- [create](SidebarTab.md#create)
- [createDefaults](SidebarTab.md#createdefaults)
- [createState](SidebarTab.md#createstate)
- [createTabContent](SidebarTab.md#createtabcontent)
- [getDefaults](SidebarTab.md#getdefaults)
- [getFragments](SidebarTab.md#getfragments)
- [getId](SidebarTab.md#getid)
- [getProps](SidebarTab.md#getprops)
- [getState](SidebarTab.md#getstate)
- [getTabStructure](SidebarTab.md#gettabstructure)
- [getTool](SidebarTab.md#gettool)
- [getType](SidebarTab.md#gettype)
- [initialize](SidebarTab.md#initialize)
- [initializeFragments](SidebarTab.md#initializefragments)
- [postCreate](SidebarTab.md#postcreate)
- [redraw](SidebarTab.md#redraw)
- [setChecked](SidebarTab.md#setchecked)
- [setProps](SidebarTab.md#setprops)
- [setTabContentChecked](SidebarTab.md#settabcontentchecked)

## Constructors

### constructor

• **new SidebarTab**\<`T`\>(`props?`): [`SidebarTab`](SidebarTab.md)\<`T`\>

It creates abstract sidebar tab with respect to the given props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> & [`IMapFormControl`](../interfaces/IMapFormControl.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ISidebarTabProps`](../modules.md#isidebartabprops) |

#### Returns

[`SidebarTab`](SidebarTab.md)\<`T`\>

#### Overrides

[MapObject](MapObject.md).[constructor](MapObject.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L50)

## Methods

### create

▸ **create**(): `this`

Creates sidebar tab.

#### Returns

`this`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[create](../interfaces/ISidebarTab.md#create)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:168](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L168)

___

### createDefaults

▸ **createDefaults**(): [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

It creates new defaults of the sidebar tab.

#### Returns

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

#### Overrides

[MapObject](MapObject.md).[createDefaults](MapObject.md#createdefaults)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L71)

___

### createState

▸ **createState**(): [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>

It creates the sidebar tab state.

#### Returns

[`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>

#### Overrides

[MapObject](MapObject.md).[createState](MapObject.md#createstate)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:85](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L85)

___

### createTabContent

▸ **createTabContent**(`tabContent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabContent` | `Element` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:243](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L243)

___

### getDefaults

▸ **getDefaults**(): [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

It returns default values of the sidebar tab.

#### Returns

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getDefaults](../interfaces/ISidebarTab.md#getdefaults)

#### Overrides

[MapObject](MapObject.md).[getDefaults](MapObject.md#getdefaults)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L64)

___

### getFragments

▸ **getFragments**(): `undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

Help function which returns sidebar fragmnets.

#### Returns

`undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getFragments](../interfaces/ISidebarTab.md#getfragments)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L99)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getId](../interfaces/ISidebarTab.md#getid)

#### Inherited from

[MapObject](MapObject.md).[getId](MapObject.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getProps

▸ **getProps**(): [`ISidebarTabProps`](../modules.md#isidebartabprops)

It returns the props given by the programmer.

#### Returns

[`ISidebarTabProps`](../modules.md#isidebartabprops)

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getProps](../interfaces/ISidebarTab.md#getprops)

#### Overrides

[MapObject](MapObject.md).[getProps](MapObject.md#getprops)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L57)

___

### getState

▸ **getState**(): [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>

It returns the sidebar tab state.

#### Returns

[`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getState](../interfaces/ISidebarTab.md#getstate)

#### Overrides

[MapObject](MapObject.md).[getState](MapObject.md#getstate)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L78)

___

### getTabStructure

▸ **getTabStructure**(): `PanelOptions`

It returns the sidebar tab structure defined with respect to the leaflet-sidebar-v2 plug-in.

See: https://github.com/noerw/leaflet-sidebar-v2

#### Returns

`PanelOptions`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:186](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L186)

___

### getTool

▸ **getTool**(): `T`

Help function which returns the tool.

#### Returns

`T`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getTool](../interfaces/ISidebarTab.md#gettool)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L92)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[getType](../interfaces/ISidebarTab.md#gettype)

#### Inherited from

[MapObject](MapObject.md).[getType](MapObject.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the sidebar tab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops) |

#### Returns

`this`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[initialize](../interfaces/ISidebarTab.md#initialize)

#### Overrides

[MapObject](MapObject.md).[initialize](MapObject.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L108)

___

### initializeFragments

▸ **initializeFragments**(`config?`): `void`

The function takes config and deserializes the tab fragments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`ISidebarTabConfig`](../modules.md#isidebartabconfig) |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:121](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L121)

___

### postCreate

▸ **postCreate**(): `void`

It creates the remaining parts of the sidebar tab after the sidebar tab is rendered.

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:200](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L200)

___

### redraw

▸ **redraw**(): `void`

It redraws the content of the sidebar tab.

#### Returns

`void`

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[redraw](../interfaces/ISidebarTab.md#redraw)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:265](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L265)

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

#### Implementation of

[ISidebarTab](../interfaces/ISidebarTab.md).[setChecked](../interfaces/ISidebarTab.md#setchecked)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:289](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L289)

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

### setTabContentChecked

▸ **setTabContentChecked**(`checked`): `void`

Changes the state of the tool which is controled by this sidebar tab.

This function can be extended if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTab.ts:332](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L332)
