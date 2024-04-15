[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapDimension

# Class: AbstractMapDimension\<T\>

The class wraps a map type dimension and its properties.

**`Author`**

Jiri Hynek

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`AbstractMapDimension`**

  ↳↳ [`MapDomainDimension`](MapDomainDimension.md)

  ↳↳ [`MapDynamicDomainDimension`](MapDynamicDomainDimension.md)

  ↳↳ [`MapTypeDimension`](MapTypeDimension.md)

## Implements

- [`IMapDimension`](../interfaces/IMapDimension.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](AbstractMapDimension.md#constructor)

### Properties

- [name](AbstractMapDimension.md#name)
- [value](AbstractMapDimension.md#value)

### Methods

- [findValue](AbstractMapDimension.md#findvalue)
- [getName](AbstractMapDimension.md#getname)
- [getValue](AbstractMapDimension.md#getvalue)
- [setName](AbstractMapDimension.md#setname)
- [setStringValue](AbstractMapDimension.md#setstringvalue)
- [setValue](AbstractMapDimension.md#setvalue)
- [toString](AbstractMapDimension.md#tostring)

## Constructors

### constructor

• **new AbstractMapDimension**\<`T`\>(`name`, `value?`): [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

It creates a new map dimension.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value?` | `T` |

#### Returns

[`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L21)

## Properties

### name

• `Private` **name**: `string`

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L11)

___

### value

• `Private` `Optional` **value**: `T`

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L12)

## Methods

### findValue

▸ **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[findValue](../interfaces/IMapDimension.md#findvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L62)

___

### getName

▸ **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[getName](../interfaces/IMapDimension.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L30)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[getValue](../interfaces/IMapDimension.md#getvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L44)

___

### setName

▸ **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[setName](../interfaces/IMapDimension.md#setname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L37)

___

### setStringValue

▸ **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[setStringValue](../interfaces/IMapDimension.md#setstringvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L69)

___

### setValue

▸ **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[setValue](../interfaces/IMapDimension.md#setvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L53)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[AbstractMapDomain](AbstractMapDomain.md).[toString](AbstractMapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
