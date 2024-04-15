[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDataChangeEvent

# Class: GeoDataChangeEvent

This class provides event, dispatched in case of geo data change.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapChangeEvent`](MapChangeEvent.md)\<``null``, [`IMapTool`](../interfaces/IMapTool.md)\>

  ↳ **`GeoDataChangeEvent`**

## Implements

- [`IGeoDataChangeEvent`](../modules.md#igeodatachangeevent)

## Table of contents

### Constructors

- [constructor](GeoDataChangeEvent.md#constructor)

### Methods

- [getChangedObject](GeoDataChangeEvent.md#getchangedobject)
- [getSource](GeoDataChangeEvent.md#getsource)
- [getType](GeoDataChangeEvent.md#gettype)
- [TYPE](GeoDataChangeEvent.md#type)

## Constructors

### constructor

• **new GeoDataChangeEvent**(`tool`): [`GeoDataChangeEvent`](GeoDataChangeEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

[`GeoDataChangeEvent`](GeoDataChangeEvent.md)

#### Overrides

[MapChangeEvent](MapChangeEvent.md).[constructor](MapChangeEvent.md#constructor)

#### Defined in

[src/model/internal/event/geodata/GeoDataChangeEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/geodata/GeoDataChangeEvent.ts#L12)

## Methods

### getChangedObject

▸ **getChangedObject**(): ``null``

Return the changed object.

#### Returns

``null``

#### Implementation of

IGeoDataChangeEvent.getChangedObject

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getChangedObject](MapChangeEvent.md#getchangedobject)

#### Defined in

[src/model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapChangeEvent.ts#L26)

___

### getSource

▸ **getSource**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

It return source map object of the event.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Implementation of

IGeoDataChangeEvent.getSource

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getSource](MapChangeEvent.md#getsource)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L32)

___

### getType

▸ **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

IGeoDataChangeEvent.getType

#### Inherited from

[MapChangeEvent](MapChangeEvent.md).[getType](MapChangeEvent.md#gettype)

#### Defined in

[src/model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/generic/MapEvent.ts#L25)

___

### TYPE

▸ **TYPE**(): `string`

#### Returns

`string`

#### Defined in

[src/model/internal/event/geodata/GeoDataChangeEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/event/geodata/GeoDataChangeEvent.ts#L16)
