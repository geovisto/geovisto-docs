**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarToolThemeChangeAdapter

# Class: SidebarToolThemeChangeAdapter

This class provides Theme change event adapter.

## Author

Jiri Hynek

## Constructors

### new SidebarToolThemeChangeAdapter()

> **new SidebarToolThemeChangeAdapter**(`tool`): [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Parameters

• **tool**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Returns

[`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Source

[tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L27)

## Properties

### themesToolAPI?

> `private` `optional` **themesToolAPI**: [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L23)

***

### tool

> `private` **tool**: [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Source

[tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L25)

## Methods

### getThemesTool()

> `private` **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L34)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/adapters/ThemeChangeAdapter.ts#L49)
