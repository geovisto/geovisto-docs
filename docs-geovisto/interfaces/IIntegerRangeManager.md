[geovisto-map](../README.md) / [Exports](../modules.md) / IIntegerRangeManager

# Interface: IIntegerRangeManager

This interface declares functions for the integer range constraint.

**`Author`**

Jiri Hynek

## Hierarchy

- [`ITypeManager`](ITypeManager.md)\<`number`\>

  ↳ **`IIntegerRangeManager`**

## Implemented by

- [`IntegerRangeManager`](../classes/IntegerRangeManager.md)

## Table of contents

### Methods

- [deserialize](IIntegerRangeManager.md#deserialize)
- [getMaxValue](IIntegerRangeManager.md#getmaxvalue)
- [getMinValue](IIntegerRangeManager.md#getminvalue)

## Methods

### deserialize

▸ **deserialize**(`value`): `number`

It deserializes the string representation of a given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`number`

#### Inherited from

[ITypeManager](ITypeManager.md).[deserialize](ITypeManager.md#deserialize)

#### Defined in

[src/model/types/type/ITypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/type/ITypeManager.ts#L13)

___

### getMaxValue

▸ **getMaxValue**(): `number`

It returns the max value.

#### Returns

`number`

#### Defined in

[src/model/types/type/IIntegerRangeManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/type/IIntegerRangeManager.ts#L18)

___

### getMinValue

▸ **getMinValue**(): `number`

It returns the min value.

#### Returns

`number`

#### Defined in

[src/model/types/type/IIntegerRangeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/type/IIntegerRangeManager.ts#L13)
