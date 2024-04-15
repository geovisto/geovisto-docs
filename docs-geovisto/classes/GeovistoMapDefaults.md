[geovisto-map](../README.md) / [Exports](../modules.md) / GeovistoMapDefaults

# Class: GeovistoMapDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectDefaults`](MapObjectDefaults.md)

  ↳ **`GeovistoMapDefaults`**

## Implements

- [`IMapDefaults`](../interfaces/IMapDefaults.md)

## Table of contents

### Constructors

- [constructor](GeovistoMapDefaults.md#constructor)

### Properties

- [idString](GeovistoMapDefaults.md#idstring)
- [TYPE](GeovistoMapDefaults.md#type)
- [id](GeovistoMapDefaults.md#id)

### Methods

- [generateId](GeovistoMapDefaults.md#generateid)
- [getConfig](GeovistoMapDefaults.md#getconfig)
- [getConfigManager](GeovistoMapDefaults.md#getconfigmanager)
- [getEventManager](GeovistoMapDefaults.md#geteventmanager)
- [getGeoDataManager](GeovistoMapDefaults.md#getgeodatamanager)
- [getGlobals](GeovistoMapDefaults.md#getglobals)
- [getId](GeovistoMapDefaults.md#getid)
- [getMapCenter](GeovistoMapDefaults.md#getmapcenter)
- [getMapData](GeovistoMapDefaults.md#getmapdata)
- [getMapStructure](GeovistoMapDefaults.md#getmapstructure)
- [getProps](GeovistoMapDefaults.md#getprops)
- [getTemplates](GeovistoMapDefaults.md#gettemplates)
- [getToolTemplates](GeovistoMapDefaults.md#gettooltemplates)
- [getTools](GeovistoMapDefaults.md#gettools)
- [getType](GeovistoMapDefaults.md#gettype)
- [getZoom](GeovistoMapDefaults.md#getzoom)

## Constructors

### constructor

• **new GeovistoMapDefaults**(): [`GeovistoMapDefaults`](GeovistoMapDefaults.md)

#### Returns

[`GeovistoMapDefaults`](GeovistoMapDefaults.md)

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

### TYPE

▪ `Static` **TYPE**: `string` = `"geovisto-map"`

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L47)

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

▸ **getConfig**(): [`IMapConfig`](../modules.md#imapconfig)

It returns default map config.

All config variables are undefined since they might override the props.

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getConfig](../interfaces/IMapDefaults.md#getconfig)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getConfig](MapObjectDefaults.md#getconfig)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L36)

___

### getConfigManager

▸ **getConfigManager**(): [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

It returns default map config manager.

#### Returns

[`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getConfigManager](../interfaces/IMapDefaults.md#getconfigmanager)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L27)

___

### getEventManager

▸ **getEventManager**(): [`IMapEventManager`](../interfaces/IMapEventManager.md)

It returns a default map event manager.

#### Returns

[`IMapEventManager`](../interfaces/IMapEventManager.md)

event manager

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getEventManager](../interfaces/IMapDefaults.md#geteventmanager)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L61)

___

### getGeoDataManager

▸ **getGeoDataManager**(): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns a default geo data manager.

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getGeoDataManager](../interfaces/IMapDefaults.md#getgeodatamanager)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L98)

___

### getGlobals

▸ **getGlobals**(): [`IMapGlobals`](../interfaces/IMapGlobals.md)

It returns a default global state variables.

#### Returns

[`IMapGlobals`](../interfaces/IMapGlobals.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getGlobals](../interfaces/IMapDefaults.md#getglobals)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L107)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getId](../interfaces/IMapDefaults.md#getid)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getId](MapObjectDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getMapCenter

▸ **getMapCenter**(): `Object`

It returns a default center coordinates in Leaflet map.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getMapCenter](../interfaces/IMapDefaults.md#getmapcenter)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:125](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L125)

___

### getMapData

▸ **getMapData**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns a default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getMapData](../interfaces/IMapDefaults.md#getmapdata)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L91)

___

### getMapStructure

▸ **getMapStructure**(): `Object`

It returns a default map structure defined with respect to the leaflet library.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxBounds` | [[`number`, `number`], [`number`, `number`]] |
| `maxZoom` | `number` |

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getMapStructure](../interfaces/IMapDefaults.md#getmapstructure)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:135](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L135)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getProps](../interfaces/IMapDefaults.md#getprops)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getProps](MapObjectDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getTemplates

▸ **getTemplates**(): [`IMapTemplates`](../interfaces/IMapTemplates.md)

It returns a default managers providing templates.

#### Returns

[`IMapTemplates`](../interfaces/IMapTemplates.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getTemplates](../interfaces/IMapDefaults.md#gettemplates)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L68)

___

### getToolTemplates

▸ **getToolTemplates**(): [`MapToolsManager`](MapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`MapToolsManager`](MapToolsManager.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getToolTemplates](../interfaces/IMapDefaults.md#gettooltemplates)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L77)

___

### getTools

▸ **getTools**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getTools](../interfaces/IMapDefaults.md#gettools)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:84](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L84)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the object.

#### Returns

`string`

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getType](../interfaces/IMapDefaults.md#gettype)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getType](MapObjectDefaults.md#gettype)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L52)

___

### getZoom

▸ **getZoom**(): `number`

It returns a default zoom level.

#### Returns

`number`

#### Implementation of

[IMapDefaults](../interfaces/IMapDefaults.md).[getZoom](../interfaces/IMapDefaults.md#getzoom)

#### Defined in

[src/model/internal/map/GeovistoMapDefaults.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/map/GeovistoMapDefaults.ts#L118)
