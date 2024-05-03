**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SelectionToolDefaults

# Class: SelectionToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

## Constructors

### new SelectionToolDefaults()

> **new SelectionToolDefaults**(): [`SelectionToolDefaults`](SelectionToolDefaults.md)

#### Returns

[`SelectionToolDefaults`](SelectionToolDefaults.md)

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

> `static` **TYPE**: `string` = `"geovisto-tool-selection"`

Static tool type constant.

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L36)

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

> **getConfig**(): [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

It returns the default config.

#### Returns

[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getConfig`](../interfaces/ISelectionToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L20)

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

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getIcon`](../interfaces/ISelectionToolDefaults.md#geticon)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L55)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getId`](../interfaces/ISelectionToolDefaults.md#getid)

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

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getLabel`](../interfaces/ISelectionToolDefaults.md#getlabel)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L48)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getProps`](../interfaces/ISelectionToolDefaults.md#getprops)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getProps`](MapToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getSelection()

> **getSelection**(): `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

It returns default map selection.

#### Returns

`null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getSelection`](../interfaces/ISelectionToolDefaults.md#getselection)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L62)

***

### getType()

> **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`getType`](../interfaces/ISelectionToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L41)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`isEnabled`](../interfaces/ISelectionToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one selection tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md).[`isSingleton`](../interfaces/ISelectionToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/selection/model/internal/tool/SelectionToolDefaults.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L29)
