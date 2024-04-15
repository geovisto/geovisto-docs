[geovisto-map](../README.md) / [Exports](../modules.md) / ConnectionLayerToolThemeChangeAdapter

# Class: ConnectionLayerToolThemeChangeAdapter

This class provides Theme tool change event adapter.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](ConnectionLayerToolThemeChangeAdapter.md#constructor)

### Properties

- [themesToolAPI](ConnectionLayerToolThemeChangeAdapter.md#themestoolapi)
- [tool](ConnectionLayerToolThemeChangeAdapter.md#tool)

### Methods

- [getThemesTool](ConnectionLayerToolThemeChangeAdapter.md#getthemestool)
- [handleEvent](ConnectionLayerToolThemeChangeAdapter.md#handleevent)

## Constructors

### constructor

• **new ConnectionLayerToolThemeChangeAdapter**(`tool`): [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\> |

#### Returns

[`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L27)

## Properties

### themesToolAPI

• `Private` `Optional` **themesToolAPI**: [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L23)

___

### tool

• `Private` **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L25)

## Methods

### getThemesTool

▸ **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L34)

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

[src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/adapters/ThemeChangeAdapter.ts#L49)
