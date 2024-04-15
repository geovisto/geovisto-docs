[geovisto-map](../README.md) / [Exports](../modules.md) / InfoToolDefaults

# Class: InfoToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`InfoToolDefaults`**

## Implements

- [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

## Table of contents

### Constructors

- [constructor](InfoToolDefaults.md#constructor)

### Properties

- [idString](InfoToolDefaults.md#idstring)
- [TYPE](InfoToolDefaults.md#type)
- [id](InfoToolDefaults.md#id)

### Methods

- [generateId](InfoToolDefaults.md#generateid)
- [getConfig](InfoToolDefaults.md#getconfig)
- [getDataManager](InfoToolDefaults.md#getdatamanager)
- [getGeoDataManager](InfoToolDefaults.md#getgeodatamanager)
- [getIcon](InfoToolDefaults.md#geticon)
- [getId](InfoToolDefaults.md#getid)
- [getInfoDataManager](InfoToolDefaults.md#getinfodatamanager)
- [getLabel](InfoToolDefaults.md#getlabel)
- [getMarkdown](InfoToolDefaults.md#getmarkdown)
- [getProps](InfoToolDefaults.md#getprops)
- [getType](InfoToolDefaults.md#gettype)
- [isEnabled](InfoToolDefaults.md#isenabled)
- [isSingleton](InfoToolDefaults.md#issingleton)

## Constructors

### constructor

• **new InfoToolDefaults**(): [`InfoToolDefaults`](InfoToolDefaults.md)

#### Returns

[`InfoToolDefaults`](InfoToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-info"`

Static tool type constant.

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L55)

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

▸ **getConfig**(): [`IInfoToolConfig`](../modules.md#iinfotoolconfig)

It returns default config if no config is given.

#### Returns

[`IInfoToolConfig`](../modules.md#iinfotoolconfig)

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getConfig](../interfaces/IInfoToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L24)

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

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getIcon](../interfaces/IInfoToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L74)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getId](../interfaces/IInfoToolDefaults.md#getid)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getId](MapToolDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getInfoDataManager

▸ **getInfoDataManager**(): [`IInfoDataManager`](../modules.md#iinfodatamanager)

It returns default markdown manager.

#### Returns

[`IInfoDataManager`](../modules.md#iinfodatamanager)

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getInfoDataManager](../interfaces/IInfoToolDefaults.md#getinfodatamanager)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L33)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getLabel](../interfaces/IInfoToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L67)

___

### getMarkdown

▸ **getMarkdown**(): [`IInfoData`](../interfaces/IInfoData.md)

It returns default markdown.

#### Returns

[`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getMarkdown](../interfaces/IInfoToolDefaults.md#getmarkdown)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L41)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getProps](../interfaces/IInfoToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[getType](../interfaces/IInfoToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L60)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[isEnabled](../interfaces/IInfoToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one info tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[IInfoToolDefaults](../interfaces/IInfoToolDefaults.md).[isSingleton](../interfaces/IInfoToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/info/model/internal/tool/InfoToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L48)
