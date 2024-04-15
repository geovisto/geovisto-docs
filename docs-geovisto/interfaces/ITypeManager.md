[geovisto-map](../README.md) / [Exports](../modules.md) / ITypeManager

# Interface: ITypeManager\<T\>

This interface declares functions for the type manager.

**`Author`**

Jiri Hynek

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`ITypeManager`**

  ↳ [`IIntegerRangeManager`](IIntegerRangeManager.md)

## Implemented by

- [`BooleanTypeManager`](../classes/BooleanTypeManager.md)
- [`IntegerTypeManager`](../classes/IntegerTypeManager.md)
- [`StringTypeManager`](../classes/StringTypeManager.md)

## Table of contents

### Methods

- [deserialize](ITypeManager.md#deserialize)

## Methods

### deserialize

▸ **deserialize**(`value`): `T`

It deserializes the string representation of a given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`T`

#### Defined in

[src/model/types/type/ITypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/type/ITypeManager.ts#L13)
