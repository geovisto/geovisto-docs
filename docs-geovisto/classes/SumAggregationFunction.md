**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SumAggregationFunction

# Class: SumAggregationFunction

This class provides the sum aggregation function.

## Author

Jiri Hynek

## Extends

- [`MapDomain`](MapDomain.md)

## Implements

- [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

## Constructors

### new SumAggregationFunction()

> **new SumAggregationFunction**(): [`SumAggregationFunction`](SumAggregationFunction.md)

It initializes the function.

#### Returns

[`SumAggregationFunction`](SumAggregationFunction.md)

#### Overrides

[`MapDomain`](MapDomain.md).[`constructor`](MapDomain.md#constructors)

#### Source

[model/internal/aggregation/basic/SumAggregationFunction.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L15)

## Methods

### getAggregationBucket()

> **getAggregationBucket**(): [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

It returns a aggregation bucket for aggregation of multiple values.

#### Returns

[`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

#### Implementation of

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md).[`getAggregationBucket`](../interfaces/IMapAggregationFunction.md#getaggregationbucket)

#### Source

[model/internal/aggregation/basic/SumAggregationFunction.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L29)

***

### getName()

> **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md).[`getName`](../interfaces/IMapAggregationFunction.md#getname)

#### Inherited from

[`MapDomain`](MapDomain.md).[`getName`](MapDomain.md#getname)

#### Source

[model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomain.ts#L21)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`MapDomain`](MapDomain.md).[`toString`](MapDomain.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)

***

### TYPE()

> `static` **TYPE**(): `string`

Type of the function.

#### Returns

`string`

#### Source

[model/internal/aggregation/basic/SumAggregationFunction.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L22)
