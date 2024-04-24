**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ConnectionLayerToolThemeChangeAdapter

# Class: ConnectionLayerToolThemeChangeAdapter

This class provides Theme tool change event adapter.

## Author

Jiri Hynek

## Constructors

### new ConnectionLayerToolThemeChangeAdapter()

> **new ConnectionLayerToolThemeChangeAdapter**(`tool`): [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Parameters

• **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Returns

[`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L27)

## Properties

### themesToolAPI?

> `private` `optional` **themesToolAPI**: [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L23)

***

### tool

> `private` **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Source

[tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L25)

## Methods

### getThemesTool()

> `private` **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L34)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L49)
