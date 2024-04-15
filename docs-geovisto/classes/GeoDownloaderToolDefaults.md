[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDownloaderToolDefaults

# Class: GeoDownloaderToolDefaults

Defaults class for GeoDownloaderTool

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`GeoDownloaderToolDefaults`**

## Implements

- [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

## Table of contents

### Constructors

- [constructor](GeoDownloaderToolDefaults.md#constructor)

### Properties

- [idString](GeoDownloaderToolDefaults.md#idstring)
- [TYPE](GeoDownloaderToolDefaults.md#type)
- [id](GeoDownloaderToolDefaults.md#id)

### Methods

- [generateId](GeoDownloaderToolDefaults.md#generateid)
- [getConfig](GeoDownloaderToolDefaults.md#getconfig)
- [getDataManager](GeoDownloaderToolDefaults.md#getdatamanager)
- [getGeoDataManager](GeoDownloaderToolDefaults.md#getgeodatamanager)
- [getIcon](GeoDownloaderToolDefaults.md#geticon)
- [getId](GeoDownloaderToolDefaults.md#getid)
- [getLabel](GeoDownloaderToolDefaults.md#getlabel)
- [getProps](GeoDownloaderToolDefaults.md#getprops)
- [getType](GeoDownloaderToolDefaults.md#gettype)
- [isEnabled](GeoDownloaderToolDefaults.md#isenabled)
- [isSingleton](GeoDownloaderToolDefaults.md#issingleton)

## Constructors

### constructor

• **new GeoDownloaderToolDefaults**(): [`GeoDownloaderToolDefaults`](GeoDownloaderToolDefaults.md)

#### Returns

[`GeoDownloaderToolDefaults`](GeoDownloaderToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-geo-downloader"`

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L14)

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

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getConfig](../interfaces/IGeoDownloaderToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L32)

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

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getIcon](../interfaces/IGeoDownloaderToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L28)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getId](../interfaces/IGeoDownloaderToolDefaults.md#getid)

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

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getLabel](../interfaces/IGeoDownloaderToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L24)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getProps](../interfaces/IGeoDownloaderToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[getType](../interfaces/IGeoDownloaderToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L16)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[isEnabled](../interfaces/IGeoDownloaderToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IGeoDownloaderToolDefaults](../interfaces/IGeoDownloaderToolDefaults.md).[isSingleton](../interfaces/IGeoDownloaderToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L20)
