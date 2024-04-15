[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarToolThemeChangeAdapter

# Class: SidebarToolThemeChangeAdapter

This class provides Theme change event adapter.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](SidebarToolThemeChangeAdapter.md#constructor)

### Properties

- [themesToolAPI](SidebarToolThemeChangeAdapter.md#themestoolapi)
- [tool](SidebarToolThemeChangeAdapter.md#tool)

### Methods

- [getThemesTool](SidebarToolThemeChangeAdapter.md#getthemestool)
- [handleEvent](SidebarToolThemeChangeAdapter.md#handleevent)

## Constructors

### constructor

• **new SidebarToolThemeChangeAdapter**(`tool`): [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\> |

#### Returns

[`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Defined in

[src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L27)

## Properties

### themesToolAPI

• `Private` `Optional` **themesToolAPI**: [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L23)

___

### tool

• `Private` **tool**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../modules.md#isidebartoolprops), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>, [`ISidebarToolConfig`](../modules.md#isidebartoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)\>\>

#### Defined in

[src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L25)

## Methods

### getThemesTool

▸ **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L34)

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

#### Defined in

[src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L49)
