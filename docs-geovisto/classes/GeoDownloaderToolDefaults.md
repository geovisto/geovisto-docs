**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDownloaderToolDefaults

# Class: GeoDownloaderToolDefaults

Defaults class for GeoDownloaderTool

## Author

Vojtěch Malý

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

## Constructors

### new GeoDownloaderToolDefaults()

> **new GeoDownloaderToolDefaults**(): [`GeoDownloaderToolDefaults`](GeoDownloaderToolDefaults.md)

#### Returns

[`GeoDownloaderToolDefaults`](GeoDownloaderToolDefaults.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`constructor`](MapToolDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`idString`](MapToolDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### TYPE

> `static` **TYPE**: `string` = `"geovisto-tool-geo-downloader"`

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L14)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`id`](MapToolDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`generateId`](MapToolDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getConfig`](../interfaces/IGeoDownloaderToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L32)

***

### getDataManager()

> **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getDataManager`](MapToolDefaults.md#getdatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L20)

***

### getGeoDataManager()

> **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns default geo data manager.

#### Parameters

• **geoDataArray**: `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[]

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getGeoDataManager`](MapToolDefaults.md#getgeodatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L27)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getIcon`](../interfaces/IGeoDownloaderToolDefaults.md#geticon)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L28)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getId`](../interfaces/IGeoDownloaderToolDefaults.md#getid)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getId`](MapToolDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getLabel`](../interfaces/IGeoDownloaderToolDefaults.md#getlabel)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L24)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getProps`](../interfaces/IGeoDownloaderToolDefaults.md#getprops)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getProps`](MapToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`getType`](../interfaces/IGeoDownloaderToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L16)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`isEnabled`](../interfaces/IGeoDownloaderToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md).[`isSingleton`](../interfaces/IGeoDownloaderToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolDefaults.ts#L20)
