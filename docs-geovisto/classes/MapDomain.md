[geovisto-map](../README.md) / [Exports](../modules.md) / MapDomain

# Class: MapDomain

The generic implementation of map domain which overrides toString function.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`MapDomain`**

  ↳↳ [`CountAggregationFunction`](CountAggregationFunction.md)

  ↳↳ [`SumAggregationFunction`](SumAggregationFunction.md)

  ↳↳ [`MapAggregationFunction`](MapAggregationFunction.md)

  ↳↳ [`GeoJsonData`](GeoJsonData.md)

  ↳↳ [`MarkDownData`](MarkDownData.md)

  ↳↳ [`CustomMinMaxScale`](CustomMinMaxScale.md)

  ↳↳ [`DecimalScale`](DecimalScale.md)

  ↳↳ [`MedianScale`](MedianScale.md)

  ↳↳ [`RelativeMinMaxScale`](RelativeMinMaxScale.md)

  ↳↳ [`RelativeScale`](RelativeScale.md)

## Implements

- [`IMapDomain`](../interfaces/IMapDomain.md)

## Table of contents

### Constructors

- [constructor](MapDomain.md#constructor)

### Properties

- [name](MapDomain.md#name)

### Methods

- [getName](MapDomain.md#getname)
- [toString](MapDomain.md#tostring)

## Constructors

### constructor

• **new MapDomain**(`name`): [`MapDomain`](MapDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`MapDomain`](MapDomain.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L13)

## Properties

### name

• `Private` **name**: `string`

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L11)

## Methods

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IMapDomain](../interfaces/IMapDomain.md).[getName](../interfaces/IMapDomain.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L21)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[AbstractMapDomain](AbstractMapDomain.md).[toString](AbstractMapDomain.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
