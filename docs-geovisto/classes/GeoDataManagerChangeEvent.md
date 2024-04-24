**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDataManagerChangeEvent

# Class: GeoDataManagerChangeEvent\<TSource\>

This class provides the data change event object.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IGeoDataManager`](../type-aliases/IGeoDataManager.md), `TSource`\>

## Type parameters

• **TSource** *extends* [`IMapObject`](../interfaces/IMapObject.md) = [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IGeoDataManagerChangeEvent`](../type-aliases/IGeoDataManagerChangeEvent.md)

## Constructors

### new GeoDataManagerChangeEvent()

> **new GeoDataManagerChangeEvent**\<`TSource`\>(`source`, `data`): [`GeoDataManagerChangeEvent`](GeoDataManagerChangeEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

• **data**: [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Returns

[`GeoDataManagerChangeEvent`](GeoDataManagerChangeEvent.md)\<`TSource`\>

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[model/internal/event/geodata/GeoDataManagerChangeEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/geodata/GeoDataManagerChangeEvent.ts#L16)

## Methods

### getChangedObject()

> **getChangedObject**(): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

Return the changed object.

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Implementation of

`IGeoDataManagerChangeEvent.getChangedObject`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getChangedObject`](MapChangeEvent.md#getchangedobject)

#### Source

[model/internal/event/generic/MapChangeEvent.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapChangeEvent.ts#L26)

***

### getSource()

> **getSource**(): `TSource`

It return source map object of the event.

#### Returns

`TSource`

#### Implementation of

`IGeoDataManagerChangeEvent.getSource`

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

`IGeoDataManagerChangeEvent.getType`

#### Inherited from

[`MapChangeEvent`](MapChangeEvent.md).[`getType`](MapChangeEvent.md#gettype)

#### Source

[model/internal/event/generic/MapEvent.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/generic/MapEvent.ts#L25)

***

### TYPE()

> `static` **TYPE**(): `string`

Type of the event.

#### Returns

`string`

#### Source

[model/internal/event/geodata/GeoDataManagerChangeEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/geodata/GeoDataManagerChangeEvent.ts#L23)
