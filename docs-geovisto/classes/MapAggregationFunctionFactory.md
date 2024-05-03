**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapAggregationFunctionFactory

# Class: MapAggregationFunctionFactory

This class provides a factory for aggregation functions.

## Author

Jiri Hynek

## Implements

- [`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md)

## Constructors

### new MapAggregationFunctionFactory()

> **new MapAggregationFunctionFactory**(): [`MapAggregationFunctionFactory`](MapAggregationFunctionFactory.md)

#### Returns

[`MapAggregationFunctionFactory`](MapAggregationFunctionFactory.md)

## Methods

### count()

> **count**(): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates the count aggregation function.

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md).[`count`](../interfaces/IMapAggregationFunctionFactory.md#count)

#### Source

[model/internal/aggregation/MapAggregationFunctionFactory.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L25)

***

### default()

> **default**(`type`, `aggregationBucket`): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates a generic aggregation function.

#### Parameters

• **type**: `string`

• **aggregationBucket**

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md).[`default`](../interfaces/IMapAggregationFunctionFactory.md#default)

#### Source

[model/internal/aggregation/MapAggregationFunctionFactory.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L18)

***

### sum()

> **sum**(): [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

It creates the sum aggregation function.

#### Returns

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

#### Implementation of

[`IMapAggregationFunctionFactory`](../interfaces/IMapAggregationFunctionFactory.md).[`sum`](../interfaces/IMapAggregationFunctionFactory.md#sum)

#### Source

[model/internal/aggregation/MapAggregationFunctionFactory.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/MapAggregationFunctionFactory.ts#L32)
