[geovisto-map](../README.md) / [Exports](../modules.md) / MapAggregationFunction

# Class: MapAggregationFunction

This class provides a generic aggregation function.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`MapAggregationFunction`**

## Implements

- [`IMapAggregationFunction`](../interfaces/IMapAggregationFunction.md)

## Table of contents

### Constructors

- [constructor](MapAggregationFunction.md#constructor)

### Properties

- [aggregationBucket](MapAggregationFunction.md#aggregationbucket)

### Methods

- [getAggregationBucket](MapAggregationFunction.md#getaggregationbucket)
- [getName](MapAggregationFunction.md#getname)
- [toString](MapAggregationFunction.md#tostring)

## Constructors

### constructor

• **new MapAggregationFunction**(`type`, `aggregationBucket`): [`MapAggregationFunction`](MapAggregationFunction.md)

It initializes the function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `aggregationBucket` | () => [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md) |

#### Returns

[`MapAggregationFunction`](MapAggregationFunction.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/model/internal/aggregation/generic/MapAggregationFunction.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/generic/MapAggregationFunction.ts#L17)

## Properties

### aggregationBucket

• `Private` **aggregationBucket**: () => [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

#### Type declaration

▸ (): [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

##### Returns

[`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

#### Defined in

[src/model/internal/aggregation/generic/MapAggregationFunction.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/generic/MapAggregationFunction.ts#L12)

## Methods

### getAggregationBucket

▸ **getAggregationBucket**(): [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

It returns a aggregation bucket for aggregation of multiple values.

#### Returns

[`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)

#### Implementation of

[IMapAggregationFunction](../interfaces/IMapAggregationFunction.md).[getAggregationBucket](../interfaces/IMapAggregationFunction.md#getaggregationbucket)

#### Defined in

[src/model/internal/aggregation/generic/MapAggregationFunction.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/aggregation/generic/MapAggregationFunction.ts#L26)

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
