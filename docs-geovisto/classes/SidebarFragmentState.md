[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarFragmentState

# Class: SidebarFragmentState

This class manages the state of the sidebar fragment.
It wraps the state since the sidebar fragment can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectState`](MapObjectState.md)

  ↳ **`SidebarFragmentState`**

## Implements

- [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)

## Table of contents

### Constructors

- [constructor](SidebarFragmentState.md#constructor)

### Properties

- [content](SidebarFragmentState.md#content)
- [enabled](SidebarFragmentState.md#enabled)
- [sidebarTab](SidebarFragmentState.md#sidebartab)
- [tool](SidebarFragmentState.md#tool)

### Methods

- [deserialize](SidebarFragmentState.md#deserialize)
- [getContent](SidebarFragmentState.md#getcontent)
- [getId](SidebarFragmentState.md#getid)
- [getMapObject](SidebarFragmentState.md#getmapobject)
- [getSidebarTab](SidebarFragmentState.md#getsidebartab)
- [getTool](SidebarFragmentState.md#gettool)
- [getType](SidebarFragmentState.md#gettype)
- [initialize](SidebarFragmentState.md#initialize)
- [isEnabled](SidebarFragmentState.md#isenabled)
- [serialize](SidebarFragmentState.md#serialize)
- [setContent](SidebarFragmentState.md#setcontent)
- [setEnabled](SidebarFragmentState.md#setenabled)
- [setId](SidebarFragmentState.md#setid)
- [setSidebarTab](SidebarFragmentState.md#setsidebartab)
- [setTool](SidebarFragmentState.md#settool)

## Constructors

### constructor

• **new SidebarFragmentState**(`sidebarFragment`): [`SidebarFragmentState`](SidebarFragmentState.md)

It creates a sidebar fragment state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebarFragment` | [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\> |

#### Returns

[`SidebarFragmentState`](SidebarFragmentState.md)

#### Overrides

[MapObjectState](MapObjectState.md).[constructor](MapObjectState.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L34)

## Properties

### content

• `Private` **content**: ``null`` \| `HTMLElement`

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L27)

___

### enabled

• `Private` **enabled**: `boolean`

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L21)

___

### sidebarTab

• `Private` **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L25)

___

### tool

• `Private` **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L23)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig) |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[deserialize](../interfaces/ISidebarFragmentState.md#deserialize)

#### Overrides

[MapObjectState](MapObjectState.md).[deserialize](MapObjectState.md#deserialize)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L61)

___

### getContent

▸ **getContent**(): ``null`` \| `HTMLElement`

It returns the content property of the sidebar fragment state.

#### Returns

``null`` \| `HTMLElement`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[getContent](../interfaces/ISidebarFragmentState.md#getcontent)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:131](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L131)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[getId](../interfaces/ISidebarFragmentState.md#getid)

#### Inherited from

[MapObjectState](MapObjectState.md).[getId](MapObjectState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapObjectState](MapObjectState.md).[getMapObject](MapObjectState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getSidebarTab

▸ **getSidebarTab**(): [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

It returns the sidebar tab property of the sidebar fragment control state.

#### Returns

[`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[getSidebarTab](../interfaces/ISidebarFragmentState.md#getsidebartab)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L115)

___

### getTool

▸ **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool property of the sidebar tab fragment state.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[getTool](../interfaces/ISidebarFragmentState.md#gettool)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L83)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[getType](../interfaces/ISidebarFragmentState.md#gettype)

#### Inherited from

[MapObjectState](MapObjectState.md).[getType](MapObjectState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md) |
| `props` | [`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops) |
| `initProps` | [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\> |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[initialize](../interfaces/ISidebarFragmentState.md#initialize)

#### Overrides

[MapObjectState](MapObjectState.md).[initialize](MapObjectState.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L43)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the sidebar fragment state.

#### Returns

`boolean`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[isEnabled](../interfaces/ISidebarFragmentState.md#isenabled)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L99)

___

### serialize

▸ **serialize**(`defaults`): [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

The method serializes the sidebar tab fragment configuration.
Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md) |

#### Returns

[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[serialize](../interfaces/ISidebarFragmentState.md#serialize)

#### Overrides

[MapObjectState](MapObjectState.md).[serialize](MapObjectState.md#serialize)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L71)

___

### setContent

▸ **setContent**(`content`): `void`

It sets the content property of the sidebar tab control state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `HTMLElement` |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[setContent](../interfaces/ISidebarFragmentState.md#setcontent)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:140](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L140)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar fragment state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[setEnabled](../interfaces/ISidebarFragmentState.md#setenabled)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L108)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[setId](../interfaces/ISidebarFragmentState.md#setid)

#### Inherited from

[MapObjectState](MapObjectState.md).[setId](MapObjectState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setSidebarTab

▸ **setSidebarTab**(`sidebarTab`): `void`

It sets the sidebar tab property of the sidebar fragment state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebarTab` | [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

`void`

#### Implementation of

[ISidebarFragmentState](../interfaces/ISidebarFragmentState.md).[setSidebarTab](../interfaces/ISidebarFragmentState.md#setsidebartab)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:124](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L124)

___

### setTool

▸ **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab fragment state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentState.ts#L92)
