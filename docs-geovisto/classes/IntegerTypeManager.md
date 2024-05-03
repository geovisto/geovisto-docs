**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IntegerTypeManager

# Class: IntegerTypeManager

This class specifies the integer type manager.

## Author

Jiri Hynek

## Extended by

- [`IntegerRangeManager`](IntegerRangeManager.md)

## Implements

- [`ITypeManager`](../interfaces/ITypeManager.md)\<`number`\>

## Constructors

### new IntegerTypeManager()

> **new IntegerTypeManager**(): [`IntegerTypeManager`](IntegerTypeManager.md)

#### Returns

[`IntegerTypeManager`](IntegerTypeManager.md)

## Methods

### deserialize()

> **deserialize**(`value`): `number`

It converts the string representation of the number value.

#### Parameters

• **value**: `string`

#### Returns

`number`

#### Implementation of

[`ITypeManager`](../interfaces/ITypeManager.md).[`deserialize`](../interfaces/ITypeManager.md#deserialize)

#### Source

[model/internal/type/IntegerTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerTypeManager.ts#L13)
