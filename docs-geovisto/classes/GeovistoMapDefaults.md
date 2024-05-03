**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeovistoMapDefaults

# Class: GeovistoMapDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapObjectDefaults`](MapObjectDefaults.md)

## Implements

- [`IMapDefaults`](../interfaces/IMapDefaults.md)

## Constructors

### new GeovistoMapDefaults()

> **new GeovistoMapDefaults**(): [`GeovistoMapDefaults`](GeovistoMapDefaults.md)

#### Returns

[`GeovistoMapDefaults`](GeovistoMapDefaults.md)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`constructor`](MapObjectDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`idString`](MapObjectDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### TYPE

> `static` **TYPE**: `string` = `"geovisto-map"`

#### Source

[model/internal/map/GeovistoMapDefaults.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L47)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`id`](MapObjectDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`generateId`](MapObjectDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`IMapConfig`](../type-aliases/IMapConfig.md)

It returns default map config.

All config variables are undefined since they might override the props.

#### Returns

[`IMapConfig`](../type-aliases/IMapConfig.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getConfig`](../interfaces/IMapDefaults.md#getconfig)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getConfig`](MapObjectDefaults.md#getconfig)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L36)

***

### getConfigManager()

> **getConfigManager**(): [`IMapConfigManager`](../interfaces/IMapConfigManager.md)

It returns default map config manager.

#### Returns

[`IMapConfigManager`](../interfaces/IMapConfigManager.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getConfigManager`](../interfaces/IMapDefaults.md#getconfigmanager)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L27)

***

### getEventManager()

> **getEventManager**(): [`IMapEventManager`](../interfaces/IMapEventManager.md)

It returns a default map event manager.

#### Returns

[`IMapEventManager`](../interfaces/IMapEventManager.md)

event manager

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getEventManager`](../interfaces/IMapDefaults.md#geteventmanager)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L61)

***

### getGeoDataManager()

> **getGeoDataManager**(): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns a default geo data manager.

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getGeoDataManager`](../interfaces/IMapDefaults.md#getgeodatamanager)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L98)

***

### getGlobals()

> **getGlobals**(): [`IMapGlobals`](../interfaces/IMapGlobals.md)

It returns a default global state variables.

#### Returns

[`IMapGlobals`](../interfaces/IMapGlobals.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getGlobals`](../interfaces/IMapDefaults.md#getglobals)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L107)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getId`](../interfaces/IMapDefaults.md#getid)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getId`](MapObjectDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getMapCenter()

> **getMapCenter**(): `object`

It returns a default center coordinates in Leaflet map.

#### Returns

`object`

##### lat

> **lat**: `number`

##### lng

> **lng**: `number`

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getMapCenter`](../interfaces/IMapDefaults.md#getmapcenter)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:125](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L125)

***

### getMapData()

> **getMapData**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns a default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getMapData`](../interfaces/IMapDefaults.md#getmapdata)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L91)

***

### getMapStructure()

> **getMapStructure**(): `object`

It returns a default map structure defined with respect to the leaflet library.

#### Returns

`object`

##### maxBounds

> **maxBounds**: [[`number`, `number`], [`number`, `number`]]

##### maxZoom

> **maxZoom**: `number`

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getMapStructure`](../interfaces/IMapDefaults.md#getmapstructure)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:135](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L135)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getProps`](../interfaces/IMapDefaults.md#getprops)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getProps`](MapObjectDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getTemplates()

> **getTemplates**(): [`IMapTemplates`](../interfaces/IMapTemplates.md)

It returns a default managers providing templates.

#### Returns

[`IMapTemplates`](../interfaces/IMapTemplates.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getTemplates`](../interfaces/IMapDefaults.md#gettemplates)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L68)

***

### getToolTemplates()

> **getToolTemplates**(): [`MapToolsManager`](MapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`MapToolsManager`](MapToolsManager.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getToolTemplates`](../interfaces/IMapDefaults.md#gettooltemplates)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L77)

***

### getTools()

> **getTools**(): [`IMapToolsManager`](../interfaces/IMapToolsManager.md)

It returns a default tools manager containing used tools.

#### Returns

[`IMapToolsManager`](../interfaces/IMapToolsManager.md)

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getTools`](../interfaces/IMapDefaults.md#gettools)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:84](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L84)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the object.

#### Returns

`string`

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getType`](../interfaces/IMapDefaults.md#gettype)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getType`](MapObjectDefaults.md#gettype)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L52)

***

### getZoom()

> **getZoom**(): `number`

It returns a default zoom level.

#### Returns

`number`

#### Implementation of

[`IMapDefaults`](../interfaces/IMapDefaults.md).[`getZoom`](../interfaces/IMapDefaults.md#getzoom)

#### Source

[model/internal/map/GeovistoMapDefaults.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/map/GeovistoMapDefaults.ts#L118)
