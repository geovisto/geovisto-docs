[geovisto-map](../README.md) / [Exports](../modules.md) / BooleanTypeManager

# Class: BooleanTypeManager

This class specifies the empty type constraint.

**`Author`**

Jiri Hynek

## Implements

- [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>

## Table of contents

### Constructors

- [constructor](BooleanTypeManager.md#constructor)

### Methods

- [deserialize](BooleanTypeManager.md#deserialize)

## Constructors

### constructor

• **new BooleanTypeManager**(): [`BooleanTypeManager`](BooleanTypeManager.md)

#### Returns

[`BooleanTypeManager`](BooleanTypeManager.md)

## Methods

### deserialize

▸ **deserialize**(`value`): `boolean`

It converts the string representation of the boolean value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Implementation of

[ITypeManager](../interfaces/ITypeManager.md).[deserialize](../interfaces/ITypeManager.md#deserialize)

#### Defined in

[src/model/internal/type/BooleanTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/BooleanTypeManager.ts#L13)
