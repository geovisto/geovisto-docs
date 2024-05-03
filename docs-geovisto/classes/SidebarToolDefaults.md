**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarToolDefaults

# Class: SidebarToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

## Constructors

### new SidebarToolDefaults()

> **new SidebarToolDefaults**(): [`SidebarToolDefaults`](SidebarToolDefaults.md)

#### Returns

[`SidebarToolDefaults`](SidebarToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-sidebar"`

Static tool type constant.

#### Source

[tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L28)

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

> **getConfig**(): [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)

It returns the default config.

#### Returns

[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)

#### Implementation of

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getConfig`](../interfaces/ISidebarToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L19)

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

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getIcon`](../interfaces/ISidebarToolDefaults.md#geticon)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L64)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getId`](../interfaces/ISidebarToolDefaults.md#getid)

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

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getLabel`](../interfaces/ISidebarToolDefaults.md#getlabel)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L57)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getProps`](../interfaces/ISidebarToolDefaults.md#getprops)

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

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`getType`](../interfaces/ISidebarToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L33)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`isEnabled`](../interfaces/ISidebarToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one sidebar tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md).[`isSingleton`](../interfaces/ISidebarToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L40)
