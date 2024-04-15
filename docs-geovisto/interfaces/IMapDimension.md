[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDimension

# Interface: IMapDimension\<T\>

This interface declares functions for using a map dimension which allows to set a data domain.

**`Author`**

Jiri Hynek

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IMapDimension`**

  ↳↳ [`IMapDomainDimension`](IMapDomainDimension.md)

  ↳↳ [`IMapTypeDimension`](IMapTypeDimension.md)

## Implemented by

- [`AbstractMapDimension`](../classes/AbstractMapDimension.md)
- [`MapDynamicDomainDimension`](../classes/MapDynamicDomainDimension.md)

## Table of contents

### Methods

- [findValue](IMapDimension.md#findvalue)
- [getName](IMapDimension.md#getname)
- [getValue](IMapDimension.md#getvalue)
- [setName](IMapDimension.md#setname)
- [setStringValue](IMapDimension.md#setstringvalue)
- [setValue](IMapDimension.md#setvalue)

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

#### Defined in

[src/model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L32)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

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

#### Defined in

[src/model/types/dimension/IMapDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L39)

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

#### Defined in

[src/model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L25)
