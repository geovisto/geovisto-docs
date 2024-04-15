[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarFragmentState

# Interface: ISidebarFragmentState\<TProps, TDefaults, TConfig\>

This interface declares the state of the sidebar fragment.
It wraps the state since the sidebar fragment can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) = [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) |
| `TDefaults` | extends [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) = [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) |
| `TConfig` | extends [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig) = [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig) |

## Hierarchy

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

  ↳ **`ISidebarFragmentState`**

## Implemented by

- [`SidebarFragmentState`](../classes/SidebarFragmentState.md)

## Table of contents

### Methods

- [deserialize](ISidebarFragmentState.md#deserialize)
- [getContent](ISidebarFragmentState.md#getcontent)
- [getId](ISidebarFragmentState.md#getid)
- [getSidebarTab](ISidebarFragmentState.md#getsidebartab)
- [getTool](ISidebarFragmentState.md#gettool)
- [getType](ISidebarFragmentState.md#gettype)
- [initialize](ISidebarFragmentState.md#initialize)
- [isEnabled](ISidebarFragmentState.md#isenabled)
- [serialize](ISidebarFragmentState.md#serialize)
- [setContent](ISidebarFragmentState.md#setcontent)
- [setEnabled](ISidebarFragmentState.md#setenabled)
- [setId](ISidebarFragmentState.md#setid)
- [setSidebarTab](ISidebarFragmentState.md#setsidebartab)

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

It returns the content property of the sidebar tab framgent state.

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L56)

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

### getSidebarTab

▸ **getSidebarTab**(): [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

It returns the sidenar tab property of the sidebar fragment state.

#### Returns

[`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L44)

___

### getTool

▸ **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool property of the sidebar tab fragment state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L27)

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

It returns the enabled property of the sidebar tab fragment state.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L32)

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

### setContent

▸ **setContent**(`content`): `void`

It sets the content property of the sidebar fragmemt tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L63)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar tab fragment state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L39)

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

### setSidebarTab

▸ **setSidebarTab**(`sidebarTab`): `void`

It sets the sidebar tab property of the sidebar tab contrfragmentol state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebarTab` | [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L51)
