[geovisto-map](../README.md) / [Exports](../modules.md) / SumAggregationFunction

# Class: SumAggregationFunction

This class provides the sum aggregation function.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`SumAggregationFunction`**

## Implements

- [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

## Table of contents

### Constructors

- [constructor](SumAggregationFunction.md#constructor)

### Methods

- [getAggregationBucket](SumAggregationFunction.md#getaggregationbucket)
- [getName](SumAggregationFunction.md#getname)
- [toString](SumAggregationFunction.md#tostring)
- [TYPE](SumAggregationFunction.md#type)

## Constructors

### constructor

• **new SumAggregationFunction**(): [`SumAggregationFunction`](SumAggregationFunction.md)

It initializes the function.

#### Returns

[`SumAggregationFunction`](SumAggregationFunction.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/model/internal/aggregation/basic/SumAggregationFunction.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L15)

## Methods

### getAggregationBucket

▸ **getAggregationBucket**(): [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

It returns a aggregation bucket for aggregation of multiple values.

#### Returns

[`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

#### Implementation of

[IMapAggregationFunction](../interfaces/IMapAggregationFunction.md).[getAggregationBucket](../interfaces/IMapAggregationFunction.md#getaggregationbucket)

#### Defined in

[src/model/internal/aggregation/basic/SumAggregationFunction.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L29)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IMapAggregationFunction](../interfaces/IMapAggregationFunction.md).[getName](../interfaces/IMapAggregationFunction.md#getname)

#### Inherited from

[MapDomain](MapDomain.md).[getName](MapDomain.md#getname)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L21)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[MapDomain](MapDomain.md).[toString](MapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)

___

### TYPE

▸ **TYPE**(): `string`

Type of the function.

#### Returns

`string`

#### Defined in

[src/model/internal/aggregation/basic/SumAggregationFunction.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/basic/SumAggregationFunction.ts#L22)
