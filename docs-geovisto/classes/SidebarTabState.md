[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarTabState

# Class: SidebarTabState

This class manages the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectState`](MapObjectState.md)

  ↳ **`SidebarTabState`**

## Implements

- [`ISidebarTabState`](../interfaces/ISidebarTabState.md)

## Table of contents

### Constructors

- [constructor](SidebarTabState.md#constructor)

### Properties

- [checkButton](SidebarTabState.md#checkbutton)
- [content](SidebarTabState.md#content)
- [enabled](SidebarTabState.md#enabled)
- [fragments](SidebarTabState.md#fragments)
- [icon](SidebarTabState.md#icon)
- [name](SidebarTabState.md#name)
- [sidebar](SidebarTabState.md#sidebar)
- [tool](SidebarTabState.md#tool)

### Methods

- [deserialize](SidebarTabState.md#deserialize)
- [getContent](SidebarTabState.md#getcontent)
- [getFragments](SidebarTabState.md#getfragments)
- [getIcon](SidebarTabState.md#geticon)
- [getId](SidebarTabState.md#getid)
- [getMapObject](SidebarTabState.md#getmapobject)
- [getName](SidebarTabState.md#getname)
- [getSidebarTool](SidebarTabState.md#getsidebartool)
- [getTool](SidebarTabState.md#gettool)
- [getType](SidebarTabState.md#gettype)
- [hasCheckButton](SidebarTabState.md#hascheckbutton)
- [initialize](SidebarTabState.md#initialize)
- [isEnabled](SidebarTabState.md#isenabled)
- [serialize](SidebarTabState.md#serialize)
- [setCheckButton](SidebarTabState.md#setcheckbutton)
- [setContent](SidebarTabState.md#setcontent)
- [setEnabled](SidebarTabState.md#setenabled)
- [setFragments](SidebarTabState.md#setfragments)
- [setIcon](SidebarTabState.md#seticon)
- [setId](SidebarTabState.md#setid)
- [setName](SidebarTabState.md#setname)
- [setSidebarTool](SidebarTabState.md#setsidebartool)
- [setTool](SidebarTabState.md#settool)

## Constructors

### constructor

• **new SidebarTabState**(`sidebarTab`): [`SidebarTabState`](SidebarTabState.md)

It creates a sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebarTab` | [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

[`SidebarTabState`](SidebarTabState.md)

#### Overrides

[MapObjectState](MapObjectState.md).[constructor](MapObjectState.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L45)

## Properties

### checkButton

• `Private` **checkButton**: `boolean`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L32)

___

### content

• `Private` **content**: ``null`` \| `HTMLElement`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L38)

___

### enabled

• `Private` **enabled**: `boolean`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L26)

___

### fragments

• `Private` `Optional` **fragments**: [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L36)

___

### icon

• `Private` **icon**: `string`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L30)

___

### name

• `Private` **name**: `string`

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L28)

___

### sidebar

• `Private` **sidebar**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L34)

___

### tool

• `Private` **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L24)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The function takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISidebarTabConfig`](../modules.md#isidebartabconfig) |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[deserialize](../interfaces/ISidebarTabState.md#deserialize)

#### Overrides

[MapObjectState](MapObjectState.md).[deserialize](MapObjectState.md#deserialize)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L76)

___

### getContent

▸ **getContent**(): ``null`` \| `HTMLElement`

It returns the HTML content property of the sidebar tab state.

#### Returns

``null`` \| `HTMLElement`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getContent](../interfaces/ISidebarTabState.md#getcontent)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:214](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L214)

___

### getFragments

▸ **getFragments**(): `undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[]

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getFragments](../interfaces/ISidebarTabState.md#getfragments)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:230](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L230)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the sidebar tab state.

#### Returns

`string`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getIcon](../interfaces/ISidebarTabState.md#geticon)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:166](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L166)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getId](../interfaces/ISidebarTabState.md#getid)

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

### getName

▸ **getName**(): `string`

It returns the name property of the sidebar tab state.

#### Returns

`string`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getName](../interfaces/ISidebarTabState.md#getname)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:150](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L150)

___

### getSidebarTool

▸ **getSidebarTool**(): [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

It returns the sidebar property of the sidebar tab state.

#### Returns

[`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getSidebarTool](../interfaces/ISidebarTabState.md#getsidebartool)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:198](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L198)

___

### getTool

▸ **getTool**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool property of the sidebar tab state.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getTool](../interfaces/ISidebarTabState.md#gettool)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L118)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[getType](../interfaces/ISidebarTabState.md#gettype)

#### Inherited from

[MapObjectState](MapObjectState.md).[getType](MapObjectState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### hasCheckButton

▸ **hasCheckButton**(): `boolean`

It returns the checkButton property of the sidebar tab state.

#### Returns

`boolean`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[hasCheckButton](../interfaces/ISidebarTabState.md#hascheckbutton)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:182](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L182)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md) |
| `props` | [`ISidebarTabProps`](../modules.md#isidebartabprops) |
| `initProps` | [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\> |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[initialize](../interfaces/ISidebarTabState.md#initialize)

#### Overrides

[MapObjectState](MapObjectState.md).[initialize](MapObjectState.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L54)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the sidebar tab state.

#### Returns

`boolean`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[isEnabled](../interfaces/ISidebarTabState.md#isenabled)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:134](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L134)

___

### serialize

▸ **serialize**(`defaults`): [`ISidebarTabConfig`](../modules.md#isidebartabconfig)

The method serializes the sidebar tab control configuration.
Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md) |

#### Returns

[`ISidebarTabConfig`](../modules.md#isidebartabconfig)

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[serialize](../interfaces/ISidebarTabState.md#serialize)

#### Overrides

[MapObjectState](MapObjectState.md).[serialize](MapObjectState.md#serialize)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L89)

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

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setCheckButton](../interfaces/ISidebarTabState.md#setcheckbutton)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:191](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L191)

___

### setContent

▸ **setContent**(`content`): `void`

It sets the HTML content property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `HTMLElement` |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setContent](../interfaces/ISidebarTabState.md#setcontent)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:223](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L223)

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

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setEnabled](../interfaces/ISidebarTabState.md#setenabled)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L143)

___

### setFragments

▸ **setFragments**(`fragments`): `void`

It sets the fragments property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragments` | [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../modules.md#isidebarfragmentprops), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>, [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig), [`ISidebarFragmentInitProps`](../modules.md#isidebarfragmentinitprops)\<[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)\>\>[] |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setFragments](../interfaces/ISidebarTabState.md#setfragments)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:239](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L239)

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

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setIcon](../interfaces/ISidebarTabState.md#seticon)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:175](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L175)

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

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setId](../interfaces/ISidebarTabState.md#setid)

#### Inherited from

[MapObjectState](MapObjectState.md).[setId](MapObjectState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

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

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setName](../interfaces/ISidebarTabState.md#setname)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:159](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L159)

___

### setSidebarTool

▸ **setSidebarTool**(`sidebar`): `void`

It sets the sidebar property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebar` | [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\> |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setSidebarTool](../interfaces/ISidebarTabState.md#setsidebartool)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:207](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L207)

___

### setTool

▸ **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`void`

#### Implementation of

[ISidebarTabState](../interfaces/ISidebarTabState.md).[setTool](../interfaces/ISidebarTabState.md#settool)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabState.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabState.ts#L127)
