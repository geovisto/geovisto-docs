[geovisto-map](../README.md) / [Exports](../modules.md) / ThemesToolDefaults

# Class: ThemesToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`ThemesToolDefaults`**

## Implements

- [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

## Table of contents

### Constructors

- [constructor](ThemesToolDefaults.md#constructor)

### Properties

- [idString](ThemesToolDefaults.md#idstring)
- [TYPE](ThemesToolDefaults.md#type)
- [id](ThemesToolDefaults.md#id)

### Methods

- [generateId](ThemesToolDefaults.md#generateid)
- [getConfig](ThemesToolDefaults.md#getconfig)
- [getDataManager](ThemesToolDefaults.md#getdatamanager)
- [getGeoDataManager](ThemesToolDefaults.md#getgeodatamanager)
- [getIcon](ThemesToolDefaults.md#geticon)
- [getId](ThemesToolDefaults.md#getid)
- [getLabel](ThemesToolDefaults.md#getlabel)
- [getProps](ThemesToolDefaults.md#getprops)
- [getTheme](ThemesToolDefaults.md#gettheme)
- [getThemesManager](ThemesToolDefaults.md#getthemesmanager)
- [getType](ThemesToolDefaults.md#gettype)
- [isEnabled](ThemesToolDefaults.md#isenabled)
- [isSingleton](ThemesToolDefaults.md#issingleton)

## Constructors

### constructor

• **new ThemesToolDefaults**(): [`ThemesToolDefaults`](ThemesToolDefaults.md)

#### Returns

[`ThemesToolDefaults`](ThemesToolDefaults.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[constructor](MapToolDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[idString](MapToolDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-tool-themes"`

Static tool type constant.

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L45)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[id](MapToolDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[generateId](MapToolDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`IThemesToolConfig`](../modules.md#ithemestoolconfig)

It returns the default config.

#### Returns

[`IThemesToolConfig`](../modules.md#ithemestoolconfig)

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getConfig](../interfaces/IThemesToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L29)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getDataManager](MapToolDefaults.md#getdatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L20)

___

### getGeoDataManager

▸ **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns default geo data manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataArray` | `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[] |

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getGeoDataManager](MapToolDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getIcon](../interfaces/IThemesToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getId](../interfaces/IThemesToolDefaults.md#getid)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getId](MapToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getLabel](../interfaces/IThemesToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L57)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getProps](../interfaces/IThemesToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getTheme

▸ **getTheme**(`themesManager`): [`IMapTheme`](../interfaces/IMapTheme.md)

It returns default theme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `themesManager` | `undefined` \| [`IMapThemesManager`](../interfaces/IMapThemesManager.md) |

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getTheme](../interfaces/IThemesToolDefaults.md#gettheme)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L86)

___

### getThemesManager

▸ **getThemesManager**(): [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

It returns default themes manager.

#### Returns

[`IMapThemesManager`](../interfaces/IMapThemesManager.md)

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getThemesManager](../interfaces/IThemesToolDefaults.md#getthemesmanager)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L71)

___

### getType

▸ **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[getType](../interfaces/IThemesToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L50)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[isEnabled](../interfaces/IThemesToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one themes tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[IThemesToolDefaults](../interfaces/IThemesToolDefaults.md).[isSingleton](../interfaces/IThemesToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/themes/model/internal/tool/ThemesToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L38)
