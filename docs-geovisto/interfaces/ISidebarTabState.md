[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarTabState

# Interface: ISidebarTabState\<TProps, TDefaults, TConfig\>

This interface declares the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`ISidebarTabProps`](../modules.md#isidebartabprops) = [`ISidebarTabProps`](../modules.md#isidebartabprops) |
| `TDefaults` | extends [`ISidebarTabDefaults`](ISidebarTabDefaults.md) = [`ISidebarTabDefaults`](ISidebarTabDefaults.md) |
| `TConfig` | extends [`ISidebarTabConfig`](../modules.md#isidebartabconfig) = [`ISidebarTabConfig`](../modules.md#isidebartabconfig) |

## Hierarchy

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

  ↳ **`ISidebarTabState`**

## Implemented by

- [`SidebarTabState`](../classes/SidebarTabState.md)

## Table of contents

### Methods

- [deserialize](ISidebarTabState.md#deserialize)
- [getContent](ISidebarTabState.md#getcontent)
- [getFragments](ISidebarTabState.md#getfragments)
- [getIcon](ISidebarTabState.md#geticon)
- [getId](ISidebarTabState.md#getid)
- [getName](ISidebarTabState.md#getname)
- [getSidebarTool](ISidebarTabState.md#getsidebartool)
- [getTool](ISidebarTabState.md#gettool)
- [getType](ISidebarTabState.md#gettype)
- [hasCheckButton](ISidebarTabState.md#hascheckbutton)
- [initialize](ISidebarTabState.md#initialize)
- [isEnabled](ISidebarTabState.md#isenabled)
- [serialize](ISidebarTabState.md#serialize)
- [setCheckButton](ISidebarTabState.md#setcheckbutton)
- [setContent](ISidebarTabState.md#setcontent)
- [setEnabled](ISidebarTabState.md#setenabled)
- [setFragments](ISidebarTabState.md#setfragments)
- [setIcon](ISidebarTabState.md#seticon)
- [setId](ISidebarTabState.md#setid)
- [setName](ISidebarTabState.md#setname)
- [setSidebarTool](ISidebarTabState.md#setsidebartool)
- [setTool](ISidebarTabState.md#settool)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `TConfig` |

#### Returns

`void`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[deserialize](IMapObjectState.md#deserialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L32)

___

### getContent

▸ **getContent**(): ``null`` \| `HTMLElement`

It returns the tabPane property of the sidebar tab state.

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:100](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L100)

___

### getFragments

▸ **getFragments**(): `undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L112)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the sidebar tab state.

#### Returns

`string`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[getId](IMapObjectState.md#getid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L49)

___

### getName

▸ **getName**(): `string`

It returns the name property of the sidebar tab state.

#### Returns

`string`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L52)

___

### getSidebarTool

▸ **getSidebarTool**(): [`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

It returns the sidebar property of the sidebar tab state.

#### Returns

[`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L88)

___

### getTool

▸ **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool property of the sidebar tab state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L28)

___

### getType

▸ **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[getType](IMapObjectState.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L44)

___

### hasCheckButton

▸ **hasCheckButton**(): `boolean`

It returns the checkButton property of the sidebar tab state.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L76)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `TDefaults` |
| `props` | `TProps` |
| `initProps` | [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<`TConfig`\> |

#### Returns

`void`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[initialize](IMapObjectState.md#initialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L25)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the sidebar tab state.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L40)

___

### serialize

▸ **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| `TDefaults` |

#### Returns

`TConfig`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[serialize](IMapObjectState.md#serialize)

#### Defined in

[src/model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L39)

___

### setCheckButton

▸ **setCheckButton**(`checkButton`): `void`

It sets the checkButton property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkButton` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L83)

___

### setContent

▸ **setContent**(`content`): `void`

It sets the tabPane property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L107)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L47)

___

### setFragments

▸ **setFragments**(`fragments`): `void`

It sets the fragments property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragments` | [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[] |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:119](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L119)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L71)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Inherited from

[IMapObjectState](IMapObjectState.md).[setId](IMapObjectState.md#setid)

#### Defined in

[src/model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectState.ts#L57)

___

### setName

▸ **setName**(`name`): `void`

It sets the name property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L59)

___

### setSidebarTool

▸ **setSidebarTool**(`sidebar`): `void`

It sets the sidebar property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebar` | [`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\> |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L95)

___

### setTool

▸ **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L35)
