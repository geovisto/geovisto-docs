[geovisto-map](../README.md) / [Exports](../modules.md) / IntegerTypeManager

# Class: IntegerTypeManager

This class specifies the integer type manager.

**`Author`**

Jiri Hynek

## Hierarchy

- **`IntegerTypeManager`**

  ↳ [`IntegerRangeManager`](IntegerRangeManager.md)

## Implements

- [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>

## Table of contents

### Constructors

- [constructor](IntegerTypeManager.md#constructor)

### Methods

- [deserialize](IntegerTypeManager.md#deserialize)

## Constructors

### constructor

• **new IntegerTypeManager**(): [`IntegerTypeManager`](IntegerTypeManager.md)

#### Returns

[`IntegerTypeManager`](IntegerTypeManager.md)

## Methods

### deserialize

▸ **deserialize**(`value`): `number`

It converts the string representation of the number value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`number`

#### Implementation of

[ITypeManager](../interfaces/ITypeManager.md).[deserialize](../interfaces/ITypeManager.md#deserialize)

#### Defined in

[src/model/internal/type/IntegerTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerTypeManager.ts#L13)
