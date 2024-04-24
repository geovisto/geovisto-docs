**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DataManagerChangeEvent

# Class: DataManagerChangeEvent\<TSource\>

This class provides the data change event object.

## Author

Jiri Hynek

## Extends

- [`MapChangeEvent`](MapChangeEvent.md)\<[`IMapDataManager`](../interfaces/IMapDataManager.md), `TSource`\>

## Type parameters

• **TSource** *extends* [`IMapObject`](../interfaces/IMapObject.md)

## Implements

- [`IMapDataManagerChangeEvent`](../type-aliases/IMapDataManagerChangeEvent.md)

## Constructors

### new DataManagerChangeEvent()

> **new DataManagerChangeEvent**\<`TSource`\>(`source`, `data`): [`DataManagerChangeEvent`](DataManagerChangeEvent.md)\<`TSource`\>

It initializes event.

#### Parameters

• **source**: `TSource`

• **data**: [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Returns

[`DataManagerChangeEvent`](DataManagerChangeEvent.md)\<`TSource`\>

#### Overrides

[`MapChangeEvent`](MapChangeEvent.md).[`constructor`](MapChangeEvent.md#constructors)

#### Source

[model/internal/event/data/DataManagerChangeEvent.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/data/DataManagerChangeEvent.ts#L16)

## Methods

### getChangedObject()

> **getChangedObject**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

Return the changed object.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Implementation of

`IMapDataManagerChangeEvent.getChangedObject`

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

`IMapDataManagerChangeEvent.getSource`

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

`IMapDataManagerChangeEvent.getType`

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

[model/internal/event/data/DataManagerChangeEvent.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/event/data/DataManagerChangeEvent.ts#L23)
