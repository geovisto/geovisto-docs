**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractMapDimension

# Class: `abstract` AbstractMapDimension\<T\>

The class wraps a map type dimension and its properties.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDomain`](AbstractMapDomain.md)

## Type parameters

• **T**

## Implements

- [`IMapDimension`](../interfaces/IMapDimension.md)\<`T`\>

## Constructors

### new AbstractMapDimension()

> **new AbstractMapDimension**\<`T`\>(`name`, `value`?): [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

It creates a new map dimension.

#### Parameters

• **name**: `string`

• **value?**: `T`

#### Returns

[`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`constructor`](AbstractMapDomain.md#constructors)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L21)

## Properties

### name

> `private` **name**: `string`

#### Source

[model/internal/dimension/AbstractMapDimension.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L11)

***

### value?

> `private` `optional` **value**: `T`

#### Source

[model/internal/dimension/AbstractMapDimension.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L12)

## Methods

### findValue()

> `abstract` **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **value**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`findValue`](../interfaces/IMapDimension.md#findvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L62)

***

### getName()

> **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`getName`](../interfaces/IMapDimension.md#getname)

#### Overrides

[`AbstractMapDomain`](AbstractMapDomain.md).[`getName`](AbstractMapDomain.md#getname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L30)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`getValue`](../interfaces/IMapDimension.md#getvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L44)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setName`](../interfaces/IMapDimension.md#setname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L37)

***

### setStringValue()

> **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setStringValue`](../interfaces/IMapDimension.md#setstringvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L69)

***

### setValue()

> **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

• **value**: `undefined` \| `T`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setValue`](../interfaces/IMapDimension.md#setvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L53)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDomain`](AbstractMapDomain.md).[`toString`](AbstractMapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
