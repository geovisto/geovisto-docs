**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapEvent

# Interface: IMapEvent\<TSource\>

This interface declares abstract map event object.

## Author

Jiri Hynek

## Extended by

- [`IMapChangeEvent`](IMapChangeEvent.md)

## Type parameters

• **TSource** *extends* [`IMapObject`](IMapObject.md) = [`IMapObject`](IMapObject.md)

## Methods

### getSource()

> **getSource**(): `TSource`

Return source object of the event.

#### Returns

`TSource`

#### Source

[model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEvent.ts#L18)

***

### getType()

> **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Source

[model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEvent.ts#L13)
