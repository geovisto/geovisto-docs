**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IIntegerRangeManager

# Interface: IIntegerRangeManager

This interface declares functions for the integer range constraint.

## Author

Jiri Hynek

## Extends

- [`ITypeManager`](ITypeManager.md)\<`number`\>

## Methods

### deserialize()

> **deserialize**(`value`): `number`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`number`

#### Inherited from

[`ITypeManager`](ITypeManager.md).[`deserialize`](ITypeManager.md#deserialize)

#### Source

[model/types/type/ITypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/type/ITypeManager.ts#L13)

***

### getMaxValue()

> **getMaxValue**(): `number`

It returns the max value.

#### Returns

`number`

#### Source

[model/types/type/IIntegerRangeManager.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/type/IIntegerRangeManager.ts#L18)

***

### getMinValue()

> **getMinValue**(): `number`

It returns the min value.

#### Returns

`number`

#### Source

[model/types/type/IIntegerRangeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/type/IIntegerRangeManager.ts#L13)
