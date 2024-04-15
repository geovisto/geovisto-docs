[geovisto-map](../README.md) / [Exports](../modules.md) / MapToolDefaults

# Class: MapToolDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectDefaults`](MapObjectDefaults.md)

  ↳ **`MapToolDefaults`**

  ↳↳ [`LayerToolDefaults`](LayerToolDefaults.md)

  ↳↳ [`FiltersToolDefaults`](FiltersToolDefaults.md)

  ↳↳ [`GeoDownloaderToolDefaults`](GeoDownloaderToolDefaults.md)

  ↳↳ [`HierarchyToolDefaults`](HierarchyToolDefaults.md)

  ↳↳ [`InfoToolDefaults`](InfoToolDefaults.md)

  ↳↳ [`LegendToolDefaults`](LegendToolDefaults.md)

  ↳↳ [`SelectionToolDefaults`](SelectionToolDefaults.md)

  ↳↳ [`SidebarToolDefaults`](SidebarToolDefaults.md)

  ↳↳ [`ThemesToolDefaults`](ThemesToolDefaults.md)

## Implements

- [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

## Table of contents

### Constructors

- [constructor](MapToolDefaults.md#constructor)

### Properties

- [idString](MapToolDefaults.md#idstring)
- [id](MapToolDefaults.md#id)

### Methods

- [generateId](MapToolDefaults.md#generateid)
- [getConfig](MapToolDefaults.md#getconfig)
- [getDataManager](MapToolDefaults.md#getdatamanager)
- [getGeoDataManager](MapToolDefaults.md#getgeodatamanager)
- [getIcon](MapToolDefaults.md#geticon)
- [getId](MapToolDefaults.md#getid)
- [getLabel](MapToolDefaults.md#getlabel)
- [getProps](MapToolDefaults.md#getprops)
- [getType](MapToolDefaults.md#gettype)
- [isEnabled](MapToolDefaults.md#isenabled)
- [isSingleton](MapToolDefaults.md#issingleton)

## Constructors

### constructor

• **new MapToolDefaults**(): [`MapToolDefaults`](MapToolDefaults.md)

#### Returns

[`MapToolDefaults`](MapToolDefaults.md)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[constructor](MapObjectDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[idString](MapObjectDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[id](MapObjectDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[generateId](MapObjectDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getConfig](../interfaces/IMapToolDefaults.md#getconfig)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getConfig](MapObjectDefaults.md#getconfig)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L34)

___

### getDataManager

▸ **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

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

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L27)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getIcon](../interfaces/IMapToolDefaults.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L64)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getId](../interfaces/IMapToolDefaults.md#getid)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getId](MapObjectDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getLabel](../interfaces/IMapToolDefaults.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L57)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getProps](../interfaces/IMapToolDefaults.md#getprops)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getProps](MapObjectDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the tool.

#### Returns

`string`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[getType](../interfaces/IMapToolDefaults.md#gettype)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getType](MapObjectDefaults.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L37)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[isEnabled](../interfaces/IMapToolDefaults.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L50)

___

### isSingleton

▸ **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[IMapToolDefaults](../interfaces/IMapToolDefaults.md).[isSingleton](../interfaces/IMapToolDefaults.md#issingleton)

#### Defined in

[src/model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolDefaults.ts#L43)
