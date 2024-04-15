[geovisto-map](../README.md) / [Exports](../modules.md) / MapAggregationFunctionFactory

# Class: MapAggregationFunctionFactory

This class provides a factory for aggregation functions.

**`Author`**

Jiri Hynek

## Implements

- [`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md)

## Table of contents

### Constructors

- [constructor](MapAggregationFunctionFactory.md#constructor)

### Methods

- [count](MapAggregationFunctionFactory.md#count)
- [default](MapAggregationFunctionFactory.md#default)
- [sum](MapAggregationFunctionFactory.md#sum)

## Constructors

### constructor

• **new MapAggregationFunctionFactory**(): [`MapAggregationFunctionFactory`](MapAggregationFunctionFactory.md)

#### Returns

[`MapAggregationFunctionFactory`](MapAggregationFunctionFactory.md)

## Methods

### count

▸ **count**(): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates the count aggregation function.

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[IMapAggregationFunctionFactory](../interfaces/IMapAggregationFunctionFactory.md).[count](../interfaces/IMapAggregationFunctionFactory.md#count)

#### Defined in

[src/model/internal/aggregation/MapAggregationFunctionFactory.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L25)

___

### default

▸ **default**(`type`, `aggregationBucket`): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates a generic aggregation function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `aggregationBucket` | () => [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md) |

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[IMapAggregationFunctionFactory](../interfaces/IMapAggregationFunctionFactory.md).[default](../interfaces/IMapAggregationFunctionFactory.md#default)

#### Defined in

[src/model/internal/aggregation/MapAggregationFunctionFactory.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L18)

___

### sum

▸ **sum**(): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates the sum aggregation function.

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[IMapAggregationFunctionFactory](../interfaces/IMapAggregationFunctionFactory.md).[sum](../interfaces/IMapAggregationFunctionFactory.md#sum)

#### Defined in

[src/model/internal/aggregation/MapAggregationFunctionFactory.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L32)
