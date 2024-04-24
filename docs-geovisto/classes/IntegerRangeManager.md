**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IntegerRangeManager

# Class: IntegerRangeManager

This class specifies the integer type manager.

## Author

Jiri Hynek

## Extends

- [`IntegerTypeManager`](IntegerTypeManager.md)

## Implements

- [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)

## Constructors

### new IntegerRangeManager()

> **new IntegerRangeManager**(`min`, `max`): [`IntegerRangeManager`](IntegerRangeManager.md)

#### Parameters

• **min**: `number`

• **max**: `number`

#### Returns

[`IntegerRangeManager`](IntegerRangeManager.md)

#### Overrides

[`IntegerTypeManager`](IntegerTypeManager.md).[`constructor`](IntegerTypeManager.md#constructors)

#### Source

[model/internal/type/IntegerRangeManager.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerRangeManager.ts#L14)

## Properties

### max

> `private` **max**: `number`

#### Source

[model/internal/type/IntegerRangeManager.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerRangeManager.ts#L12)

***

### min

> `private` **min**: `number`

#### Source

[model/internal/type/IntegerRangeManager.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerRangeManager.ts#L11)

## Methods

### deserialize()

> **deserialize**(`value`): `number`

It converts the string representation of the number value.

#### Parameters

• **value**: `string`

#### Returns

`number`

#### Implementation of

[`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md).[`deserialize`](../interfaces/IIntegerRangeManager.md#deserialize)

#### Inherited from

[`IntegerTypeManager`](IntegerTypeManager.md).[`deserialize`](IntegerTypeManager.md#deserialize)

#### Source

[model/internal/type/IntegerTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerTypeManager.ts#L13)

***

### getMaxValue()

> **getMaxValue**(): `number`

It returns the max value.

#### Returns

`number`

#### Implementation of

[`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md).[`getMaxValue`](../interfaces/IIntegerRangeManager.md#getmaxvalue)

#### Source

[model/internal/type/IntegerRangeManager.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerRangeManager.ts#L30)

***

### getMinValue()

> **getMinValue**(): `number`

It returns the min value.

#### Returns

`number`

#### Implementation of

[`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md).[`getMinValue`](../interfaces/IIntegerRangeManager.md#getminvalue)

#### Source

[model/internal/type/IntegerRangeManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/type/IntegerRangeManager.ts#L23)
