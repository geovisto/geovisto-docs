**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / BooleanTypeManager

# Class: BooleanTypeManager

This class specifies the empty type constraint.

## Author

Jiri Hynek

## Implements

- [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>

## Constructors

### new BooleanTypeManager()

> **new BooleanTypeManager**(): [`BooleanTypeManager`](BooleanTypeManager.md)

#### Returns

[`BooleanTypeManager`](BooleanTypeManager.md)

## Methods

### deserialize()

> **deserialize**(`value`): `boolean`

It converts the string representation of the boolean value.

#### Parameters

• **value**: `string`

#### Returns

`boolean`

#### Implementation of

[`ITypeManager`](../interfaces/ITypeManager.md).[`deserialize`](../interfaces/ITypeManager.md#deserialize)

#### Source

[model/internal/type/BooleanTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/BooleanTypeManager.ts#L13)
