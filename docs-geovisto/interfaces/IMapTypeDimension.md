[geovisto-map](../README.md) / [Exports](../modules.md) / IMapTypeDimension

# Interface: IMapTypeDimension\<T, C\>

This interface declares functions for using a map dimension which allows to set a value of specific type.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ITypeManager`](ITypeManager.md)\<`T`\> = [`ITypeManager`](ITypeManager.md)\<`T`\> |

## Hierarchy

- [`IMapDimension`](IMapDimension.md)\<`T`\>

  ↳ **`IMapTypeDimension`**

## Implemented by

- [`MapTypeDimension`](../classes/MapTypeDimension.md)

## Table of contents

### Methods

- [findValue](IMapTypeDimension.md#findvalue)
- [getName](IMapTypeDimension.md#getname)
- [getTypeManager](IMapTypeDimension.md#gettypemanager)
- [getValue](IMapTypeDimension.md#getvalue)
- [setName](IMapTypeDimension.md#setname)
- [setStringValue](IMapTypeDimension.md#setstringvalue)
- [setTypeManager](IMapTypeDimension.md#settypemanager)
- [setValue](IMapTypeDimension.md#setvalue)

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

#### Inherited from

[IMapDimension](IMapDimension.md).[findValue](IMapDimension.md#findvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L32)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDimension](IMapDimension.md).[getName](IMapDimension.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

___

### getTypeManager

▸ **getTypeManager**(): `C`

It returns the type manager.

#### Returns

`C`

#### Defined in

[src/model/types/dimension/IMapTypeDimension.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapTypeDimension.ts#L14)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Inherited from

[IMapDimension](IMapDimension.md).[getValue](IMapDimension.md#getvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L18)

___

### setName

▸ **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IMapDimension](IMapDimension.md).[setName](IMapDimension.md#setname)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L13)

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

#### Inherited from

[IMapDimension](IMapDimension.md).[setStringValue](IMapDimension.md#setstringvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L39)

___

### setTypeManager

▸ **setTypeManager**(`typeConstraint`): `void`

It sets a type manager.

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeConstraint` | `C` |

#### Returns

`void`

#### Defined in

[src/model/types/dimension/IMapTypeDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapTypeDimension.ts#L21)

___

### setValue

▸ **setValue**(`domain`): `void`

It sets a new map domain to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `undefined` \| `T` |

#### Returns

`void`

#### Inherited from

[IMapDimension](IMapDimension.md).[setValue](IMapDimension.md#setvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L25)
