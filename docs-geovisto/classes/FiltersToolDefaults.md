[geovisto-map](../README.md) / [Exports](../modules.md) / FiltersToolDefaults

# Class: FiltersToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`FiltersToolDefaults`**

## Implements

- [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

## Table of contents

### Constructors

- [constructor](FiltersToolDefaults.md#constructor)

### Properties

- [idString](FiltersToolDefaults.md#idstring)
- [TYPE](FiltersToolDefaults.md#type)
- [id](FiltersToolDefaults.md#id)

### Methods

- [generateId](FiltersToolDefaults.md#generateid)
- [getConfig](FiltersToolDefaults.md#getconfig)
- [getDataManager](FiltersToolDefaults.md#getdatamanager)
- [getFilterRules](FiltersToolDefaults.md#getfilterrules)
- [getFiltersManager](FiltersToolDefaults.md#getfiltersmanager)
- [getGeoDataManager](FiltersToolDefaults.md#getgeodatamanager)
- [getIcon](FiltersToolDefaults.md#geticon)
- [getId](FiltersToolDefaults.md#getid)
- [getLabel](FiltersToolDefaults.md#getlabel)
- [getProps](FiltersToolDefaults.md#getprops)
- [getType](FiltersToolDefaults.md#gettype)
- [isEnabled](FiltersToolDefaults.md#isenabled)
- [isSingleton](FiltersToolDefaults.md#issingleton)

## Constructors

### constructor

• **new FiltersToolDefaults**(): [`FiltersToolDefaults`](FiltersToolDefaults.md)

#### Returns

[`FiltersToolDefaults`](FiltersToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-filters"`

Static tool type constant.

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L43)

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

▸ **getConfig**(): [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)

It returns default config if no config is given.

#### Returns

[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getConfig](../interfaces/IFiltersToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L27)

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

### getFilterRules

▸ **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns default filter rules.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getFilterRules](../interfaces/IFiltersToolDefaults.md#getfilterrules)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L80)

___

### getFiltersManager

▸ **getFiltersManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

It returns default filters manager.

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getFiltersManager](../interfaces/IFiltersToolDefaults.md#getfiltersmanager)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L69)

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

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getIcon](../interfaces/IFiltersToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L62)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getId](../interfaces/IFiltersToolDefaults.md#getid)

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

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getLabel](../interfaces/IFiltersToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L55)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getProps](../interfaces/IFiltersToolDefaults.md#getprops)

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

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[getType](../interfaces/IFiltersToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L48)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[isEnabled](../interfaces/IFiltersToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one filter tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[IFiltersToolDefaults](../interfaces/IFiltersToolDefaults.md).[isSingleton](../interfaces/IFiltersToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersToolDefaults.ts#L36)
