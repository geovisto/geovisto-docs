**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDataChangeEvent

# Interface: IMapDataChangeEvent

This interface declares abstract map event data change object.

## Author

Jiri Hynek

## Extends

- [`IMapChangeEvent`](IMapChangeEvent.md)\<[`IMapData`](../type-aliases/IMapData.md)\>

## Methods

### getAnimateOptions()

> **getAnimateOptions**(): `undefined` \| [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

It returns the animate options

#### Returns

`undefined` \| [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Source

[model/types/event/data/IMapDataChangeEvent.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/data/IMapDataChangeEvent.ts#L15)

***

### getChangedObject()

> **getChangedObject**(): [`IMapData`](../type-aliases/IMapData.md)

Return the changed object.

#### Returns

[`IMapData`](../type-aliases/IMapData.md)

#### Inherited from

[`IMapChangeEvent`](IMapChangeEvent.md).[`getChangedObject`](IMapChangeEvent.md#getchangedobject)

#### Source

[model/types/event/IMapChangeEvent.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapChangeEvent.ts#L14)

***

### getSource()

> **getSource**(): [`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

Return source object of the event.

#### Returns

[`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`IMapChangeEvent`](IMapChangeEvent.md).[`getSource`](IMapChangeEvent.md#getsource)

#### Source

[model/types/event/IMapEvent.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEvent.ts#L18)

***

### getType()

> **getType**(): `string`

Returns string which identifies the event.

#### Returns

`string`

#### Inherited from

[`IMapChangeEvent`](IMapChangeEvent.md).[`getType`](IMapChangeEvent.md#gettype)

#### Source

[model/types/event/IMapEvent.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/event/IMapEvent.ts#L13)
