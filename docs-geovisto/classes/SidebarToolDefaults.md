[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarToolDefaults

# Class: SidebarToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolDefaults`](MapToolDefaults.md)

  ↳ **`SidebarToolDefaults`**

## Implements

- [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

## Table of contents

### Constructors

- [constructor](SidebarToolDefaults.md#constructor)

### Properties

- [idString](SidebarToolDefaults.md#idstring)
- [TYPE](SidebarToolDefaults.md#type)
- [id](SidebarToolDefaults.md#id)

### Methods

- [generateId](SidebarToolDefaults.md#generateid)
- [getConfig](SidebarToolDefaults.md#getconfig)
- [getDataManager](SidebarToolDefaults.md#getdatamanager)
- [getGeoDataManager](SidebarToolDefaults.md#getgeodatamanager)
- [getIcon](SidebarToolDefaults.md#geticon)
- [getId](SidebarToolDefaults.md#getid)
- [getLabel](SidebarToolDefaults.md#getlabel)
- [getProps](SidebarToolDefaults.md#getprops)
- [getType](SidebarToolDefaults.md#gettype)
- [isEnabled](SidebarToolDefaults.md#isenabled)
- [isSingleton](SidebarToolDefaults.md#issingleton)

## Constructors

### constructor

• **new SidebarToolDefaults**(): [`SidebarToolDefaults`](SidebarToolDefaults.md)

#### Returns

[`SidebarToolDefaults`](SidebarToolDefaults.md)

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

▪ `Static` **TYPE**: `string` = `"geovisto-tool-sidebar"`

Static tool type constant.

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L28)

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

▸ **getConfig**(): [`ISidebarToolConfig`](../modules.md#isidebartoolconfig)

It returns the default config.

#### Returns

[`ISidebarToolConfig`](../modules.md#isidebartoolconfig)

#### Implementation of

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getConfig](../interfaces/ISidebarToolDefaults.md#getconfig)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getConfig](MapToolDefaults.md#getconfig)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L19)

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

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getIcon](../interfaces/ISidebarToolDefaults.md#geticon)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getIcon](MapToolDefaults.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getId](../interfaces/ISidebarToolDefaults.md#getid)

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

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getLabel](../interfaces/ISidebarToolDefaults.md#getlabel)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[getLabel](MapToolDefaults.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L57)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getProps](../interfaces/ISidebarToolDefaults.md#getprops)

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

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[getType](../interfaces/ISidebarToolDefaults.md#gettype)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[getType](MapToolDefaults.md#gettype)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L33)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[isEnabled](../interfaces/ISidebarToolDefaults.md#isenabled)

#### Inherited from

[MapToolDefaults](MapToolDefaults.md).[isEnabled](MapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Only one sidebar tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[ISidebarToolDefaults](../interfaces/ISidebarToolDefaults.md).[isSingleton](../interfaces/ISidebarToolDefaults.md#issingleton)

#### Overrides

[MapToolDefaults](MapToolDefaults.md).[isSingleton](MapToolDefaults.md#issingleton)

#### Defined in

[src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tool/SidebarToolDefaults.ts#L40)
