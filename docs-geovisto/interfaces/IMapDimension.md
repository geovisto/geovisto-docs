**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDimension

# Interface: IMapDimension\<T\>

This interface declares functions for using a map dimension which allows to set a data domain.

## Author

Jiri Hynek

## Extends

- [`IMapDomain`](IMapDomain.md)

## Type parameters

• **T**

## Methods

### findValue()

> **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **value**: `string`

#### Returns

`undefined` \| `T`

#### Source

[model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L32)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Source

[model/types/dimension/IMapDimension.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L18)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[model/types/dimension/IMapDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L13)

***

### setStringValue()

> **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Source

[model/types/dimension/IMapDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L39)

***

### setValue()

> **setValue**(`domain`): `void`

It sets a new map domain to the map dimension.

#### Parameters

• **domain**: `undefined` \| `T`

#### Returns

`void`

#### Source

[model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L25)
