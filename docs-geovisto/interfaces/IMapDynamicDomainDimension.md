**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapDynamicDomainDimension

# Interface: IMapDynamicDomainDimension\<T\>

This interface declares functions for using a map dimension which allows to set a data domain.

## Author

Jiri Hynek

## Extends

- [`IMapDomainDimension`](IMapDomainDimension.md)\<`T`\>

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

[`IMapDomainDimension`](IMapDomainDimension.md).[`findValue`](IMapDomainDimension.md#findvalue)

#### Source

[model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L32)

***

### getDomainManager()

> **getDomainManager**(): [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

It returns the map domain manager which provides options to the map dimension.

#### Returns

[`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

#### Inherited from

[`IMapDomainDimension`](IMapDomainDimension.md).[`getDomainManager`](IMapDomainDimension.md#getdomainmanager)

#### Source

[model/types/dimension/IMapDomainDimension.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDomainDimension.ts#L15)

***

### getDomainManagerLoader()

> **getDomainManagerLoader**(): () => [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

It returns the map domain manager loader which is set to the map dimension.

#### Returns

`Function`

> ##### Returns
>
> [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>
>

#### Source

[model/types/dimension/IMapDynamicDomainDimension.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDynamicDomainDimension.ts#L15)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomainDimension`](IMapDomainDimension.md).[`getName`](IMapDomainDimension.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Inherited from

[`IMapDomainDimension`](IMapDomainDimension.md).[`getValue`](IMapDomainDimension.md#getvalue)

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

#### Inherited from

[`IMapDomainDimension`](IMapDomainDimension.md).[`setDomainManager`](IMapDomainDimension.md#setdomainmanager)

#### Source

[model/types/dimension/IMapDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDomainDimension.ts#L22)

***

### setDomainManagerLoader()

> **setDomainManagerLoader**(`domainManagerLoader`): `void`

It sets a map domain manager loader which is set to the map dimension.

#### Parameters

• **domainManagerLoader**

#### Returns

`void`

#### Source

[model/types/dimension/IMapDynamicDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDynamicDomainDimension.ts#L22)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Inherited from

[`IMapDomainDimension`](IMapDomainDimension.md).[`setName`](IMapDomainDimension.md#setname)

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

[`IMapDomainDimension`](IMapDomainDimension.md).[`setStringValue`](IMapDomainDimension.md#setstringvalue)

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

[`IMapDomainDimension`](IMapDomainDimension.md).[`setValue`](IMapDomainDimension.md#setvalue)

#### Source

[model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/dimension/IMapDimension.ts#L25)
