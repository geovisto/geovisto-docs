[geovisto-map](../README.md) / [Exports](../modules.md) / IntegerRangeManager

# Class: IntegerRangeManager

This class specifies the integer type manager.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IntegerTypeManager`](IntegerTypeManager.md)

  ↳ **`IntegerRangeManager`**

## Implements

- [`IIntegerRangeManager`](../interfaces/IIntegerRangeManager.md)

## Table of contents

### Constructors

- [constructor](IntegerRangeManager.md#constructor)

### Properties

- [max](IntegerRangeManager.md#max)
- [min](IntegerRangeManager.md#min)

### Methods

- [deserialize](IntegerRangeManager.md#deserialize)
- [getMaxValue](IntegerRangeManager.md#getmaxvalue)
- [getMinValue](IntegerRangeManager.md#getminvalue)

## Constructors

### constructor

• **new IntegerRangeManager**(`min`, `max`): [`IntegerRangeManager`](IntegerRangeManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`IntegerRangeManager`](IntegerRangeManager.md)

#### Overrides

[IntegerTypeManager](IntegerTypeManager.md).[constructor](IntegerTypeManager.md#constructor)

#### Defined in

[src/model/internal/type/IntegerRangeManager.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerRangeManager.ts#L14)

## Properties

### max

• `Private` **max**: `number`

#### Defined in

[src/model/internal/type/IntegerRangeManager.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerRangeManager.ts#L12)

___

### min

• `Private` **min**: `number`

#### Defined in

[src/model/internal/type/IntegerRangeManager.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerRangeManager.ts#L11)

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

[IIntegerRangeManager](../interfaces/IIntegerRangeManager.md).[deserialize](../interfaces/IIntegerRangeManager.md#deserialize)

#### Inherited from

[IntegerTypeManager](IntegerTypeManager.md).[deserialize](IntegerTypeManager.md#deserialize)

#### Defined in

[src/model/internal/type/IntegerTypeManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerTypeManager.ts#L13)

___

### getMaxValue

▸ **getMaxValue**(): `number`

It returns the max value.

#### Returns

`number`

#### Implementation of

[IIntegerRangeManager](../interfaces/IIntegerRangeManager.md).[getMaxValue](../interfaces/IIntegerRangeManager.md#getmaxvalue)

#### Defined in

[src/model/internal/type/IntegerRangeManager.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerRangeManager.ts#L30)

___

### getMinValue

▸ **getMinValue**(): `number`

It returns the min value.

#### Returns

`number`

#### Implementation of

[IIntegerRangeManager](../interfaces/IIntegerRangeManager.md).[getMinValue](../interfaces/IIntegerRangeManager.md#getminvalue)

#### Defined in

[src/model/internal/type/IntegerRangeManager.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/type/IntegerRangeManager.ts#L23)
