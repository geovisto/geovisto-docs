[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarFragment

# Class: SidebarFragment\<T\>

This class provides tab fragment for a sidebar tab.

This class is intended to be extended.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md) |

## Hierarchy

- [`MapObject`](MapObject.md)

  ↳ **`SidebarFragment`**

## Implements

- [`ISidebarFragment`](../interfaces/ISidebarFragment.md)

## Table of contents

### Constructors

- [constructor](SidebarFragment.md#constructor)

### Methods

- [createDefaults](SidebarFragment.md#createdefaults)
- [createState](SidebarFragment.md#createstate)
- [getContent](SidebarFragment.md#getcontent)
- [getDefaults](SidebarFragment.md#getdefaults)
- [getId](SidebarFragment.md#getid)
- [getProps](SidebarFragment.md#getprops)
- [getState](SidebarFragment.md#getstate)
- [getTool](SidebarFragment.md#gettool)
- [getType](SidebarFragment.md#gettype)
- [initialize](SidebarFragment.md#initialize)
- [postCreate](SidebarFragment.md#postcreate)
- [setFragmentContentChecked](SidebarFragment.md#setfragmentcontentchecked)
- [setProps](SidebarFragment.md#setprops)

## Constructors

### constructor

• **new SidebarFragment**\<`T`\>(`props?`): [`SidebarFragment`](SidebarFragment.md)\<`T`\>

It creates abstract sidebar fragment with respect to the given props.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> & [`IMapFormControl`](../interfaces/IMapFormControl.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) |

#### Returns

[`SidebarFragment`](SidebarFragment.md)\<`T`\>

#### Overrides

[MapObject](MapObject.md).[constructor](MapObject.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L29)

## Methods

### createDefaults

▸ **createDefaults**(): [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

It creates new defaults of the sidebar fragment.

#### Returns

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

#### Overrides

[MapObject](MapObject.md).[createDefaults](MapObject.md#createdefaults)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L50)

___

### createState

▸ **createState**(): [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>

It creates the sidebar fragment state.

#### Returns

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>

#### Overrides

[MapObject](MapObject.md).[createState](MapObject.md#createstate)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L64)

___

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns the HTML content of the sidebar fragment.

#### Returns

`HTMLDivElement`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getContent](../interfaces/ISidebarFragment.md#getcontent)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L87)

___

### getDefaults

▸ **getDefaults**(): [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

It returns default values of the sidebar fragment.

#### Returns

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getDefaults](../interfaces/ISidebarFragment.md#getdefaults)

#### Overrides

[MapObject](MapObject.md).[getDefaults](MapObject.md#getdefaults)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L43)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getId](../interfaces/ISidebarFragment.md#getid)

#### Inherited from

[MapObject](MapObject.md).[getId](MapObject.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getProps

▸ **getProps**(): [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops)

It returns the props given by the programmer.

#### Returns

[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops)

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getProps](../interfaces/ISidebarFragment.md#getprops)

#### Overrides

[MapObject](MapObject.md).[getProps](MapObject.md#getprops)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L36)

___

### getState

▸ **getState**(): [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>

It returns the sidebar fragment state.

#### Returns

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getState](../interfaces/ISidebarFragment.md#getstate)

#### Overrides

[MapObject](MapObject.md).[getState](MapObject.md#getstate)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L57)

___

### getTool

▸ **getTool**(): `T`

Help function which returns the tool.

#### Returns

`T`

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L71)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[getType](../interfaces/ISidebarFragment.md#gettype)

#### Inherited from

[MapObject](MapObject.md).[getType](MapObject.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), `T`\> |

#### Returns

`this`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[initialize](../interfaces/ISidebarFragment.md#initialize)

#### Overrides

[MapObject](MapObject.md).[initialize](MapObject.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L80)

___

### postCreate

▸ **postCreate**(): `this`

This function is called after the sidebar tab is rendered in sidebar.

#### Returns

`this`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[postCreate](../interfaces/ISidebarFragment.md#postcreate)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:94](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L94)

___

### setFragmentContentChecked

▸ **setFragmentContentChecked**(`checked`): `void`

Changes the state of the tool which is controled by this sidebar tab.

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISidebarFragment](../interfaces/ISidebarFragment.md).[setFragmentContentChecked](../interfaces/ISidebarFragment.md#setfragmentcontentchecked)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragment.ts:103](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L103)

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
