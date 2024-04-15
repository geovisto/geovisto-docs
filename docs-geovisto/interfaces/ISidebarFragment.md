[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarFragment

# Interface: ISidebarFragment\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares a sidebar fragment for a sidebar tab.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) = [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) |
| `TDefaults` | extends [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) = [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) |
| `TState` | extends [`ISidebarFragmentState`](ISidebarFragmentState.md) = [`ISidebarFragmentState`](ISidebarFragmentState.md) |
| `TConfig` | extends [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig) = [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig) |
| `TInitProps` | extends [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<`TConfig`\> = [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<`TConfig`\> |

## Hierarchy

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

  ↳ **`ISidebarFragment`**

## Implemented by

- [`SidebarFragment`](../classes/SidebarFragment.md)

## Table of contents

### Methods

- [getContent](ISidebarFragment.md#getcontent)
- [getDefaults](ISidebarFragment.md#getdefaults)
- [getId](ISidebarFragment.md#getid)
- [getProps](ISidebarFragment.md#getprops)
- [getState](ISidebarFragment.md#getstate)
- [getType](ISidebarFragment.md#gettype)
- [initialize](ISidebarFragment.md#initialize)
- [postCreate](ISidebarFragment.md#postcreate)
- [setFragmentContentChecked](ISidebarFragment.md#setfragmentcontentchecked)

## Methods

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns the HTML content of the sidebar fragment.

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragment.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L27)

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

### postCreate

▸ **postCreate**(): `this`

This function is called after the sidebar tab is rendered in sidebar.

#### Returns

`this`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragment.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L32)

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

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragment.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L39)
