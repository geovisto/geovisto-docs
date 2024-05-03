**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapObjectsManager

# Interface: IMapObjectsManager\<T\>

This interface declares functions for using map objects which can be identified by uniquie string.

## Author

Jiri Hynek

## Extended by

- [`IMapToolsManager`](IMapToolsManager.md)

## Type parameters

• **T** *extends* [`IMapObject`](IMapObject.md)

## Methods

### add()

> **add**(`object`): `void`

It adds object to the list of objects.

#### Parameters

• **object**: `T`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectsManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L30)

***

### getAll()

> **getAll**(): `T`[]

The function returns available map objects.

#### Returns

`T`[]

#### Source

[model/types/object/IMapObjectsManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L13)

***

### getById()

> **getById**(`id`): `undefined` \| `T`

The function returns map object of given unique identifier.

#### Parameters

• **id**: `string`

#### Returns

`undefined` \| `T`

#### Source

[model/types/object/IMapObjectsManager.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L68)

***

### getByType()

> **getByType**(`type`): `T`[]

The function returns map objects of given type.

#### Parameters

• **type**: `string`

#### Returns

`T`[]

#### Source

[model/types/object/IMapObjectsManager.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L61)

***

### getIds()

> **getIds**(): `string`[]

Help function which returns the list of object string identifiers.

#### Returns

`string`[]

#### Source

[model/types/object/IMapObjectsManager.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L54)

***

### getTypes()

> **getTypes**(): `string`[]

Help function which returns the list of object string types.

#### Returns

`string`[]

#### Source

[model/types/object/IMapObjectsManager.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L49)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Source

[model/types/object/IMapObjectsManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L23)

***

### remove()

> **remove**(`object`): `void`

It removes object from the list of objects.

#### Parameters

• **object**: `T`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectsManager.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L37)

***

### removeById()

> **removeById**(`id`): `void`

It removes object of the given id from the list of objects.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Source

[model/types/object/IMapObjectsManager.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L44)

***

### size()

> **size**(): `number`

The function returns the number of objects.

#### Returns

`number`

#### Source

[model/types/object/IMapObjectsManager.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectsManager.ts#L18)
