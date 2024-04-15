[geovisto-map](../README.md) / [Exports](../modules.md) / IMapEvent

# Interface: IMapEvent\<TSource\>

This interface declares abstract map event object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends [`IMapObject`](IMapObject.md) = [`IMapObject`](IMapObject.md) |

## Hierarchy

- **`IMapEvent`**

  ↳ [`IMapChangeEvent`](IMapChangeEvent.md)

## Implemented by

- [`MapEvent`](../classes/MapEvent.md)

## Table of contents

### Methods

- [getSource](IMapEvent.md#getsource)
- [getType](IMapEvent.md#gettype)

## Methods

### getSource

▸ **getSource**(): `TSource`

Return source object of the event.

#### Returns

`TSource`

#### Defined in

[src/model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L18)

___

### getType

▸ **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Defined in

[src/model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L13)
