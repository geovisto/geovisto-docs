**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FiltersToolDefaults

# Class: FiltersToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

## Constructors

### new FiltersToolDefaults()

> **new FiltersToolDefaults**(): [`FiltersToolDefaults`](FiltersToolDefaults.md)

#### Returns

[`FiltersToolDefaults`](FiltersToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-filters"`

Static tool type constant.

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L43)

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

> **getConfig**(): [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

It returns default config if no config is given.

#### Returns

[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getConfig`](../interfaces/IFiltersToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L27)

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

### getFilterRules()

> **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns default filter rules.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getFilterRules`](../interfaces/IFiltersToolDefaults.md#getfilterrules)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L80)

***

### getFiltersManager()

> **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

It returns default filters manager.

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getFiltersManager`](../interfaces/IFiltersToolDefaults.md#getfiltersmanager)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L69)

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

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getIcon`](../interfaces/IFiltersToolDefaults.md#geticon)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L62)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getId`](../interfaces/IFiltersToolDefaults.md#getid)

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

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getLabel`](../interfaces/IFiltersToolDefaults.md#getlabel)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L55)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getProps`](../interfaces/IFiltersToolDefaults.md#getprops)

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

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`getType`](../interfaces/IFiltersToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L48)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`isEnabled`](../interfaces/IFiltersToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one filter tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md).[`isSingleton`](../interfaces/IFiltersToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/filters/model/internal/tool/FiltersToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L36)
