**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapAggregationFunctionFactory

# Interface: IMapAggregationFunctionFactory

This interface declares a factory for aggregation functions.

## Author

Jiri Hynek

## Methods

### count()

> **count**(): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates the count aggregation function.

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Source

[model/types/aggregation/IMapAggregationFunctionFactory.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L19)

***

### default()

> **default**(`type`, `aggregationBucket`): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates a generic aggregation function.

#### Parameters

• **type**: `string`

• **aggregationBucket**

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Source

[model/types/aggregation/IMapAggregationFunctionFactory.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L14)

***

### sum()

> **sum**(): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates the sum aggregation function.

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Source

[model/types/aggregation/IMapAggregationFunctionFactory.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L24)
