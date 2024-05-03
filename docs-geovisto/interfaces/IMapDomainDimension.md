**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDomainDimension

# Interface: IMapDomainDimension\<T\>

This interface declares functions for using a map dimension which allows to set a data domain.

## Author

Jiri Hynek

## Extends

- [`IMapDimension`](IMapDimension.md)\<`T`\>

## Type parameters

• **T** *extends* [`IMapDomain`](IMapDomain.md)

## Methods

### findValue()

> **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **value**: `string`

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`findValue`](IMapDimension.md#findvalue)

#### Source

[model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L32)

***

### getDomainManager()

> **getDomainManager**(): [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

It returns the map domain manager which provides options to the map dimension.

#### Returns

[`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

#### Source

[model/types/dimension/IMapDomainDimension.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDomainDimension.ts#L15)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`getName`](IMapDimension.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`getValue`](IMapDimension.md#getvalue)

#### Source

[model/types/dimension/IMapDimension.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L18)

***

### setDomainManager()

> **setDomainManager**(`domain`): `void`

It sets a map domain manager which provides options to the map dimension.

#### Parameters

• **domain**: [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

#### Returns

`void`

#### Source

[model/types/dimension/IMapDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDomainDimension.ts#L22)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setName`](IMapDimension.md#setname)

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

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setStringValue`](IMapDimension.md#setstringvalue)

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

#### Inherited from

[`IMapDimension`](IMapDimension.md).[`setValue`](IMapDimension.md#setvalue)

#### Source

[model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L25)
