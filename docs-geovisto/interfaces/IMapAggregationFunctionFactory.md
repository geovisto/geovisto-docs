[geovisto-map](../README.md) / [Exports](../modules.md) / IMapAggregationFunctionFactory

# Interface: IMapAggregationFunctionFactory

This interface declares a factory for aggregation functions.

**`Author`**

Jiri Hynek

## Implemented by

- [`MapAggregationFunctionFactory`](../classes/MapAggregationFunctionFactory.md)

## Table of contents

### Methods

- [count](IMapAggregationFunctionFactory.md#count)
- [default](IMapAggregationFunctionFactory.md#default)
- [sum](IMapAggregationFunctionFactory.md#sum)

## Methods

### count

▸ **count**(): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates the count aggregation function.

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Defined in

[src/model/types/aggregation/IMapAggregationFunctionFactory.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L19)

___

### default

▸ **default**(`type`, `aggregationBucket`): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates a generic aggregation function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `aggregationBucket` | () => [`IMapAggregationBucket`](IMapAggregationBucket.md) |

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Defined in

[src/model/types/aggregation/IMapAggregationFunctionFactory.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L14)

___

### sum

▸ **sum**(): [`IMapAggregationFunction`](IMapAggregationFunction.md)

It creates the sum aggregation function.

#### Returns

[`IMapAggregationFunction`](IMapAggregationFunction.md)

#### Defined in

[src/model/types/aggregation/IMapAggregationFunctionFactory.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationFunctionFactory.ts#L24)
