[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyToolDefaults

# Class: HierarchyToolDefaults

Class for default values of HierarchyTool.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`HierarchyToolDefaults`**

## Implements

- [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

## Table of contents

### Constructors

- [constructor](HierarchyToolDefaults.md#constructor)

### Properties

- [idString](HierarchyToolDefaults.md#idstring)
- [TYPE](HierarchyToolDefaults.md#type)
- [id](HierarchyToolDefaults.md#id)

### Methods

- [generateId](HierarchyToolDefaults.md#generateid)
- [getConfig](HierarchyToolDefaults.md#getconfig)
- [getDataManager](HierarchyToolDefaults.md#getdatamanager)
- [getGeoDataManager](HierarchyToolDefaults.md#getgeodatamanager)
- [getIcon](HierarchyToolDefaults.md#geticon)
- [getId](HierarchyToolDefaults.md#getid)
- [getLabel](HierarchyToolDefaults.md#getlabel)
- [getProps](HierarchyToolDefaults.md#getprops)
- [getType](HierarchyToolDefaults.md#gettype)
- [isEnabled](HierarchyToolDefaults.md#isenabled)
- [isSingleton](HierarchyToolDefaults.md#issingleton)

## Constructors

### constructor

• **new HierarchyToolDefaults**(): [`HierarchyToolDefaults`](HierarchyToolDefaults.md)

#### Returns

[`HierarchyToolDefaults`](HierarchyToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-hierarchy"`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L13)

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

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getConfig](../interfaces/IHierarchyToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L38)

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

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getIcon](../interfaces/IHierarchyToolDefaults.md#geticon)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L34)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getId](../interfaces/IHierarchyToolDefaults.md#getid)

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

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getLabel](../interfaces/IHierarchyToolDefaults.md#getlabel)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L30)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getProps](../interfaces/IHierarchyToolDefaults.md#getprops)

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

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[getType](../interfaces/IHierarchyToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L15)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is disabled.

#### Returns

`boolean`

#### Implementation of

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[isEnabled](../interfaces/IHierarchyToolDefaults.md#isenabled)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L22)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IHierarchyToolDefaults](../interfaces/IHierarchyToolDefaults.md).[isSingleton](../interfaces/IHierarchyToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyToolDefaults.ts#L26)
