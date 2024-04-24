**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapAggregationFunction

# Interface: IMapAggregationFunction

This interface declares functions for using map aggregation function.

## Author

Jiri Hynek

## Extends

- [`IMapDomain`](IMapDomain.md)

## Methods

### getAggregationBucket()

> **getAggregationBucket**(): [`IMapAggregationBucket`](IMapAggregationBucket.md)

It returns a aggregation bucket for aggregation of multiple values.

#### Returns

[`IMapAggregationBucket`](IMapAggregationBucket.md)

#### Source

[model/types/aggregation/IMapAggregationFunction.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationFunction.ts#L14)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[`IMapDomain`](IMapDomain.md).[`getName`](IMapDomain.md#getname)

#### Source

[model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/domain/IMapDomain.ts#L11)
