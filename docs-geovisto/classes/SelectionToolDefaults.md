[geovisto-map](../README.md) / [Exports](../modules.md) / SelectionToolDefaults

# Class: SelectionToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`SelectionToolDefaults`**

## Implements

- [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

## Table of contents

### Constructors

- [constructor](SelectionToolDefaults.md#constructor)

### Properties

- [idString](SelectionToolDefaults.md#idstring)
- [TYPE](SelectionToolDefaults.md#type)
- [id](SelectionToolDefaults.md#id)

### Methods

- [generateId](SelectionToolDefaults.md#generateid)
- [getConfig](SelectionToolDefaults.md#getconfig)
- [getDataManager](SelectionToolDefaults.md#getdatamanager)
- [getGeoDataManager](SelectionToolDefaults.md#getgeodatamanager)
- [getIcon](SelectionToolDefaults.md#geticon)
- [getId](SelectionToolDefaults.md#getid)
- [getLabel](SelectionToolDefaults.md#getlabel)
- [getProps](SelectionToolDefaults.md#getprops)
- [getSelection](SelectionToolDefaults.md#getselection)
- [getType](SelectionToolDefaults.md#gettype)
- [isEnabled](SelectionToolDefaults.md#isenabled)
- [isSingleton](SelectionToolDefaults.md#issingleton)

## Constructors

### constructor

• **new SelectionToolDefaults**(): [`SelectionToolDefaults`](SelectionToolDefaults.md)

#### Returns

[`SelectionToolDefaults`](SelectionToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-selection"`

Static tool type constant.

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L36)

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

▸ **getConfig**(): [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)

It returns the default config.

#### Returns

[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getConfig](../interfaces/ISelectionToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L20)

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

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getIcon](../interfaces/ISelectionToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L55)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getId](../interfaces/ISelectionToolDefaults.md#getid)

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

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getLabel](../interfaces/ISelectionToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L48)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getProps](../interfaces/ISelectionToolDefaults.md#getprops)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getProps](MapToolDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getSelection

▸ **getSelection**(): ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md)

It returns default map selection.

#### Returns

``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getSelection](../interfaces/ISelectionToolDefaults.md#getselection)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L62)

___

### getType

▸ **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[getType](../interfaces/ISelectionToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L41)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[isEnabled](../interfaces/ISelectionToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one selection tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[ISelectionToolDefaults](../interfaces/ISelectionToolDefaults.md).[isSingleton](../interfaces/ISelectionToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolDefaults.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolDefaults.ts#L29)
