**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDataChangeEvent

# Class: GeoDataChangeEvent

This class provides event, dispatched in case of geo data change.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<`null`, [`IMapTool`](../interfaces/IMapTool.md)\>

## Implements

- [`IGeoDataChangeEvent`](../type-aliases/IGeoDataChangeEvent.md)

## Constructors

### new GeoDataChangeEvent()

> **new GeoDataChangeEvent**(`tool`): [`GeoDataChangeEvent`](GeoDataChangeEvent.md)

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

[`GeoDataChangeEvent`](GeoDataChangeEvent.md)

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[model/internal/event/geodata/GeoDataChangeEvent.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/geodata/GeoDataChangeEvent.ts#L12)

## Methods

### getChangedObject()

> **getChangedObject**(): `null`

Return the changed object.

#### Returns

`null`

#### Implementation of

`IGeoDataChangeEvent.getChangedObject`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It return source map object of the event.

#### Returns

[`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Implementation of

`IGeoDataChangeEvent.getSource`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getSource`](MapChangeEvent.md#getsource)

#### Source

[model/internal/event/generic/MapEvent.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L32)

***

### getType()

> **getType**(): `string`

It returns string which identifies the event.

#### Returns

`string`

#### Implementation of

`IGeoDataChangeEvent.getType`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getType`](MapChangeEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> `static` **TYPE**(): `string`

#### Returns

`string`

#### Source

[model/internal/event/geodata/GeoDataChangeEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/geodata/GeoDataChangeEvent.ts#L16)
