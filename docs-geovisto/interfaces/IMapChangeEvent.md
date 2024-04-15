[geovisto-map](../README.md) / [Exports](../modules.md) / IMapChangeEvent

# Interface: IMapChangeEvent\<TChangedObject, TSource\>

This interface declares abstract map event change object.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TChangedObject` | extends `unknown` = `unknown` |
| `TSource` | extends [`IMapObject`](IMapObject.md) = [`IMapObject`](IMapObject.md) |

## Hierarchy

- [`IMapEvent`](IMapEvent.md)\<`TSource`\>

  ↳ **`IMapChangeEvent`**

  ↳↳ [`IMapDataChangeEvent`](IMapDataChangeEvent.md)

  ↳↳ [`IThemesToolEvent`](IThemesToolEvent.md)

## Implemented by

- [`MapChangeEvent`](../classes/MapChangeEvent.md)

## Table of contents

### Methods

- [getChangedObject](IMapChangeEvent.md#getchangedobject)
- [getSource](IMapChangeEvent.md#getsource)
- [getType](IMapChangeEvent.md#gettype)

## Methods

### getChangedObject

▸ **getChangedObject**(): `TChangedObject`

Return the changed object.

#### Returns

`TChangedObject`

#### Defined in

[src/model/types/event/IMapChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapChangeEvent.ts#L14)

___

### getSource

▸ **getSource**(): `TSource`

Return source object of the event.

#### Returns

`TSource`

#### Inherited from

[IMapEvent](IMapEvent.md).[getSource](IMapEvent.md#getsource)

#### Defined in

[src/model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L18)

___

### getType

▸ **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[IMapEvent](IMapEvent.md).[getType](IMapEvent.md#gettype)

#### Defined in

[src/model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/event/IMapEvent.ts#L13)
