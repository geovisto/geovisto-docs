**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / InfoToolDefaults

# Class: InfoToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

## Constructors

### new InfoToolDefaults()

> **new InfoToolDefaults**(): [`InfoToolDefaults`](InfoToolDefaults.md)

#### Returns

[`InfoToolDefaults`](InfoToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-info"`

Static tool type constant.

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L55)

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

> **getConfig**(): [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getConfig`](../interfaces/IInfoToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L24)

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

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getIcon`](../interfaces/IInfoToolDefaults.md#geticon)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L74)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getId`](../interfaces/IInfoToolDefaults.md#getid)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getId`](MapToolDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getInfoDataManager()

> **getInfoDataManager**(): [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

It returns default markdown manager.

#### Returns

[`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getInfoDataManager`](../interfaces/IInfoToolDefaults.md#getinfodatamanager)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L33)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getLabel`](../interfaces/IInfoToolDefaults.md#getlabel)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L67)

***

### getMarkdown()

> **getMarkdown**(): [`IInfoData`](../interfaces/IInfoData.md)

It returns default markdown.

#### Returns

[`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getMarkdown`](../interfaces/IInfoToolDefaults.md#getmarkdown)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L41)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getProps`](../interfaces/IInfoToolDefaults.md#getprops)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getProps`](MapToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`getType`](../interfaces/IInfoToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L60)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`isEnabled`](../interfaces/IInfoToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one info tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md).[`isSingleton`](../interfaces/IInfoToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/info/model/internal/tool/InfoToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolDefaults.ts#L48)
