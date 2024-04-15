[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarToolState

# Class: SidebarToolState

This class provide sidebar tool model.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`SidebarToolState`**

## Implements

- [`ISidebarToolState`](../interfaces/ISidebarToolState.md)

## Table of contents

### Constructors

- [constructor](SidebarToolState.md#constructor)

### Properties

- [sidebar](SidebarToolState.md#sidebar)
- [tabs](SidebarToolState.md#tabs)
- [tabsConfigs](SidebarToolState.md#tabsconfigs)

### Methods

- [addTab](SidebarToolState.md#addtab)
- [deserialize](SidebarToolState.md#deserialize)
- [getIcon](SidebarToolState.md#geticon)
- [getId](SidebarToolState.md#getid)
- [getLabel](SidebarToolState.md#getlabel)
- [getMap](SidebarToolState.md#getmap)
- [getMapObject](SidebarToolState.md#getmapobject)
- [getSidebar](SidebarToolState.md#getsidebar)
- [getTabs](SidebarToolState.md#gettabs)
- [getTabsConfigs](SidebarToolState.md#gettabsconfigs)
- [getType](SidebarToolState.md#gettype)
- [initialize](SidebarToolState.md#initialize)
- [isEnabled](SidebarToolState.md#isenabled)
- [removeTab](SidebarToolState.md#removetab)
- [serialize](SidebarToolState.md#serialize)
- [setEnabled](SidebarToolState.md#setenabled)
- [setIcon](SidebarToolState.md#seticon)
- [setId](SidebarToolState.md#setid)
- [setLabel](SidebarToolState.md#setlabel)
- [setMap](SidebarToolState.md#setmap)
- [setSidebar](SidebarToolState.md#setsidebar)

## Constructors

### constructor

• **new SidebarToolState**(`tool`): [`SidebarToolState`](SidebarToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\> |

#### Returns

[`SidebarToolState`](SidebarToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L37)

## Properties

### sidebar

• `Private` **sidebar**: ``null`` \| `Sidebar`

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L32)

___

### tabs

• `Private` **tabs**: [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>[]

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L30)

___

### tabsConfigs

• `Private` `Optional` **tabsConfigs**: [`ISidebarTabConfig`](../modules.md#isidebartabconfig)[]

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L28)

## Methods

### addTab

▸ **addTab**(`tab`): `void`

It sets the tabs property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[addTab](../interfaces/ISidebarToolState.md#addtab)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:125](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L125)

___

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISidebarToolConfig`](../modules.md#isidebartoolconfig) |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[deserialize](../interfaces/ISidebarToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L65)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getIcon](../interfaces/ISidebarToolState.md#geticon)

#### Inherited from

[MapToolState](MapToolState.md).[getIcon](MapToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getId](../interfaces/ISidebarToolState.md#getid)

#### Inherited from

[MapToolState](MapToolState.md).[getId](MapToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getLabel](../interfaces/ISidebarToolState.md#getlabel)

#### Inherited from

[MapToolState](MapToolState.md).[getLabel](MapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getMap](../interfaces/ISidebarToolState.md#getmap)

#### Inherited from

[MapToolState](MapToolState.md).[getMap](MapToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapToolState](MapToolState.md).[getMapObject](MapToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getSidebar

▸ **getSidebar**(): ``null`` \| `Sidebar`

It returns the sidebar.

#### Returns

``null`` \| `Sidebar`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getSidebar](../interfaces/ISidebarToolState.md#getsidebar)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:100](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L100)

___

### getTabs

▸ **getTabs**(): [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>[]

It returns the tabs controls.

#### Returns

[`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\>[]

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getTabs](../interfaces/ISidebarToolState.md#gettabs)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:116](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L116)

___

### getTabsConfigs

▸ **getTabsConfigs**(): `undefined` \| [`ISidebarTabConfig`](../modules.md#isidebartabconfig)[]

It returns the tabs configs.

#### Returns

`undefined` \| [`ISidebarTabConfig`](../modules.md#isidebartabconfig)[]

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getTabsConfigs](../interfaces/ISidebarToolState.md#gettabsconfigs)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L93)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[getType](../interfaces/ISidebarToolState.md#gettype)

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md) |
| `props` | [`ISidebarToolProps`](../modules.md#isidebartoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\> |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[initialize](../interfaces/ISidebarToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L53)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[isEnabled](../interfaces/ISidebarToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### removeTab

▸ **removeTab**(`tab`): `void`

It removes tab from the list of tabs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tab` | [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../modules.md#isidebartabprops), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>, [`ISidebarTabConfig`](../modules.md#isidebartabconfig), [`ISidebarTabInitProps`](../modules.md#isidebartabinitprops)\<[`ISidebarTabConfig`](../modules.md#isidebartabconfig)\>\> |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[removeTab](../interfaces/ISidebarToolState.md#removetab)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:134](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L134)

___

### serialize

▸ **serialize**(`defaults`): [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)

The method serializes the tool configuration. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`SidebarToolDefaults`](SidebarToolDefaults.md) |

#### Returns

[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[serialize](../interfaces/ISidebarToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L77)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[setEnabled](../interfaces/ISidebarToolState.md#setenabled)

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[setIcon](../interfaces/ISidebarToolState.md#seticon)

#### Inherited from

[MapToolState](MapToolState.md).[setIcon](MapToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

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

[ISidebarToolState](../interfaces/ISidebarToolState.md).[setId](../interfaces/ISidebarToolState.md#setid)

#### Inherited from

[MapToolState](MapToolState.md).[setId](MapToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[setLabel](../interfaces/ISidebarToolState.md#setlabel)

#### Inherited from

[MapToolState](MapToolState.md).[setLabel](MapToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[MapToolState](MapToolState.md).[setMap](MapToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)

___

### setSidebar

▸ **setSidebar**(`sidebar`): `void`

It sets sidebar.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidebar` | `Sidebar` |

#### Returns

`void`

#### Implementation of

[ISidebarToolState](../interfaces/ISidebarToolState.md).[setSidebar](../interfaces/ISidebarToolState.md#setsidebar)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolState.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolState.ts#L109)
