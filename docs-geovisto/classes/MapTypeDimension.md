[geovisto-map](../README.md) / [Exports](../modules.md) / MapTypeDimension

# Class: MapTypeDimension\<T, C\>

The class wraps a map type dimension and its properties.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> = [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> |

## Hierarchy

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

  ↳ **`MapTypeDimension`**

## Implements

- [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`T`, `C`\>

## Table of contents

### Constructors

- [constructor](MapTypeDimension.md#constructor)

### Properties

- [typeManager](MapTypeDimension.md#typemanager)

### Methods

- [findValue](MapTypeDimension.md#findvalue)
- [getName](MapTypeDimension.md#getname)
- [getTypeManager](MapTypeDimension.md#gettypemanager)
- [getValue](MapTypeDimension.md#getvalue)
- [setName](MapTypeDimension.md#setname)
- [setStringValue](MapTypeDimension.md#setstringvalue)
- [setTypeManager](MapTypeDimension.md#settypemanager)
- [setValue](MapTypeDimension.md#setvalue)
- [toString](MapTypeDimension.md#tostring)

## Constructors

### constructor

• **new MapTypeDimension**\<`T`, `C`\>(`name`, `typeManager`, `value?`): [`MapTypeDimension`](MapTypeDimension.md)\<`T`, `C`\>

It creates a new map dimension.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `C` | extends [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> = [`ITypeManager`](../interfaces/ITypeManager.md)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `typeManager` | `C` |
| `value?` | `T` |

#### Returns

[`MapTypeDimension`](MapTypeDimension.md)\<`T`, `C`\>

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[constructor](AbstractMapDimension.md#constructor)

#### Defined in

[src/model/internal/dimension/MapTypeDimension.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L21)

## Properties

### typeManager

• `Private` **typeManager**: `C`

#### Defined in

[src/model/internal/dimension/MapTypeDimension.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L12)

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

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[findValue](../interfaces/IMapTypeDimension.md#findvalue)

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[findValue](AbstractMapDimension.md#findvalue)

#### Defined in

[src/model/internal/dimension/MapTypeDimension.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L47)

___

### getName

▸ **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[getName](../interfaces/IMapTypeDimension.md#getname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[getName](AbstractMapDimension.md#getname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L30)

___

### getTypeManager

▸ **getTypeManager**(): `C`

It returns the type constraint.

#### Returns

`C`

#### Implementation of

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[getTypeManager](../interfaces/IMapTypeDimension.md#gettypemanager)

#### Defined in

[src/model/internal/dimension/MapTypeDimension.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L29)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[getValue](../interfaces/IMapTypeDimension.md#getvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[getValue](AbstractMapDimension.md#getvalue)

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

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[setName](../interfaces/IMapTypeDimension.md#setname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setName](AbstractMapDimension.md#setname)

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

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[setStringValue](../interfaces/IMapTypeDimension.md#setstringvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setStringValue](AbstractMapDimension.md#setstringvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L69)

___

### setTypeManager

▸ **setTypeManager**(`typeManager`): `void`

It sets a type constraint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeManager` | `C` |

#### Returns

`void`

#### Implementation of

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[setTypeManager](../interfaces/IMapTypeDimension.md#settypemanager)

#### Defined in

[src/model/internal/dimension/MapTypeDimension.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapTypeDimension.ts#L38)

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

[IMapTypeDimension](../interfaces/IMapTypeDimension.md).[setValue](../interfaces/IMapTypeDimension.md#setvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setValue](AbstractMapDimension.md#setvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L53)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[toString](AbstractMapDimension.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
