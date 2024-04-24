**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ThemesToolDefaults

# Class: ThemesToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md)

## Constructors

### new ThemesToolDefaults()

> **new ThemesToolDefaults**(): [`ThemesToolDefaults`](ThemesToolDefaults.md)

#### Returns

[`ThemesToolDefaults`](ThemesToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-themes"`

Static tool type constant.

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L45)

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

> **getConfig**(): [`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)

It returns the default config.

#### Returns

[`IThemesToolConfig`](../type-aliases/IThemesToolConfig.md)

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getConfig`](../interfaces/IThemesToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L29)

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

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getIcon`](../interfaces/IThemesToolDefaults.md#geticon)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L64)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getId`](../interfaces/IThemesToolDefaults.md#getid)

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

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getLabel`](../interfaces/IThemesToolDefaults.md#getlabel)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L57)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getProps`](../interfaces/IThemesToolDefaults.md#getprops)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getProps`](MapToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getTheme()

> **getTheme**(`themesManager`): [`IMapTheme`](../interfaces/IMapTheme.md)

It returns default theme.

#### Parameters

• **themesManager**: `undefined` \| [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getTheme`](../interfaces/IThemesToolDefaults.md#gettheme)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L86)

***

### getThemesManager()

> **getThemesManager**(): [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

It returns default themes manager.

#### Returns

[`IMapThemesManager`](../interfaces/IMapThemesManager.md)

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getThemesManager`](../interfaces/IThemesToolDefaults.md#getthemesmanager)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L71)

***

### getType()

> **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`getType`](../interfaces/IThemesToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L50)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`isEnabled`](../interfaces/IThemesToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one themes tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`IThemesToolDefaults`](../interfaces/IThemesToolDefaults.md).[`isSingleton`](../interfaces/IThemesToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/themes/model/internal/tool/ThemesToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/tool/ThemesToolDefaults.ts#L38)
