[geovisto-map](../README.md) / [Exports](../modules.md) / StringTypeManager

# Class: StringTypeManager

This class specifies the empty type constraint.

**`Author`**

Jiri Hynek

## Implements

- [`ITypeManager`](../interfaces/ITypeManager.md)\<`string`\>

## Table of contents

### Constructors

- [constructor](StringTypeManager.md#constructor)

### Methods

- [deserialize](StringTypeManager.md#deserialize)

## Constructors

### constructor

• **new StringTypeManager**(): [`StringTypeManager`](StringTypeManager.md)

#### Returns

[`StringTypeManager`](StringTypeManager.md)

## Methods

### deserialize

▸ **deserialize**(`value`): `string`

It keeps the string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Implementation of

[ITypeManager](../interfaces/ITypeManager.md).[deserialize](../interfaces/ITypeManager.md#deserialize)

#### Defined in

[src/model/internal/type/StringTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/StringTypeManager.ts#L13)
