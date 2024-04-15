[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDefaults

# Interface: IMapDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

  ↳ **`IMapDefaults`**

## Implemented by

- [`GeovistoMapDefaults`](../classes/GeovistoMapDefaults.md)

## Table of contents

### Methods

- [getConfig](IMapDefaults.md#getconfig)
- [getConfigManager](IMapDefaults.md#getconfigmanager)
- [getEventManager](IMapDefaults.md#geteventmanager)
- [getGeoDataManager](IMapDefaults.md#getgeodatamanager)
- [getGlobals](IMapDefaults.md#getglobals)
- [getId](IMapDefaults.md#getid)
- [getMapCenter](IMapDefaults.md#getmapcenter)
- [getMapData](IMapDefaults.md#getmapdata)
- [getMapStructure](IMapDefaults.md#getmapstructure)
- [getProps](IMapDefaults.md#getprops)
- [getTemplates](IMapDefaults.md#gettemplates)
- [getToolTemplates](IMapDefaults.md#gettooltemplates)
- [getTools](IMapDefaults.md#gettools)
- [getType](IMapDefaults.md#gettype)
- [getZoom](IMapDefaults.md#getzoom)

## Methods

### getConfig

▸ **getConfig**(): [`IMapConfig`](../modules.md#imapconfig)

It returns default map config.

#### Returns

[`IMapConfig`](../modules.md#imapconfig)

#### Overrides

[IMapObjectDefaults](IMapObjectDefaults.md).[getConfig](IMapObjectDefaults.md#getconfig)

#### Defined in

[src/model/types/map/IMapDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L26)

___

### getConfigManager

▸ **getConfigManager**(): [`IMapConfigManager`](IMapConfigManager.md)

It returns default map config manager.

#### Returns

[`IMapConfigManager`](IMapConfigManager.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L21)

___

### getEventManager

▸ **getEventManager**(): [`IMapEventManager`](IMapEventManager.md)

It returns a default map event manager.

#### Returns

[`IMapEventManager`](IMapEventManager.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L31)

___

### getGeoDataManager

▸ **getGeoDataManager**(): [`IGeoDataManager`](../modules.md#igeodatamanager)

It returns a default geo data manager.

#### Returns

[`IGeoDataManager`](../modules.md#igeodatamanager)

#### Defined in

[src/model/types/map/IMapDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L56)

___

### getGlobals

▸ **getGlobals**(): [`IMapGlobals`](IMapGlobals.md)

It returns default global state variables.

#### Returns

[`IMapGlobals`](IMapGlobals.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L61)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getId](IMapObjectDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getMapCenter

▸ **getMapCenter**(): `Object`

It returns default center coordinates in Leaflet map.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lng` | `number` |

#### Defined in

[src/model/types/map/IMapDefaults.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L71)

___

### getMapData

▸ **getMapData**(): [`IMapDataManager`](IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](IMapDataManager.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L51)

___

### getMapStructure

▸ **getMapStructure**(): `Object`

It returns the map structure defined with respect to the leaflet library.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxBounds` | [[`number`, `number`], [`number`, `number`]] |
| `maxZoom` | `number` |

#### Defined in

[src/model/types/map/IMapDefaults.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L76)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getProps](IMapObjectDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getTemplates

▸ **getTemplates**(): [`IMapTemplates`](IMapTemplates.md)

It returns default map templates.

#### Returns

[`IMapTemplates`](IMapTemplates.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L36)

___

### getToolTemplates

▸ **getToolTemplates**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns a default managers providing templates.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L41)

___

### getTools

▸ **getTools**(): [`IMapToolsManager`](IMapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`IMapToolsManager`](IMapToolsManager.md)

#### Defined in

[src/model/types/map/IMapDefaults.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L46)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getType](IMapObjectDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### getZoom

▸ **getZoom**(): `number`

It returns default zoom level.

#### Returns

`number`

#### Defined in

[src/model/types/map/IMapDefaults.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMapDefaults.ts#L66)
