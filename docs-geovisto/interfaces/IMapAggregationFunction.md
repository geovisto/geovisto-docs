[geovisto-map](../README.md) / [Exports](../modules.md) / IMapAggregationFunction

# Interface: IMapAggregationFunction

This interface declares functions for using map aggregation function.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IMapAggregationFunction`**

## Implemented by

- [`CountAggregationFunction`](../classes/CountAggregationFunction.md)
- [`MapAggregationFunction`](../classes/MapAggregationFunction.md)
- [`SumAggregationFunction`](../classes/SumAggregationFunction.md)

## Table of contents

### Methods

- [getAggregationBucket](IMapAggregationFunction.md#getaggregationbucket)
- [getName](IMapAggregationFunction.md#getname)

## Methods

### getAggregationBucket

▸ **getAggregationBucket**(): [`IMapAggregationBucket`](IMapAggregationBucket.md)

It returns a aggregation bucket for aggregation of multiple values.

#### Returns

[`IMapAggregationBucket`](IMapAggregationBucket.md)

#### Defined in

[src/model/types/aggregation/IMapAggregationFunction.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationFunction.ts#L14)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)
