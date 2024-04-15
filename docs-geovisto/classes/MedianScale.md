[geovisto-map](../README.md) / [Exports](../modules.md) / MedianScale

# Class: MedianScale

This class provides the median scale.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`MedianScale`**

## Implements

- [`IScale`](../interfaces/IScale.md)

## Table of contents

### Constructors

- [constructor](MedianScale.md#constructor)

### Methods

- [getName](MedianScale.md#getname)
- [getScale](MedianScale.md#getscale)
- [toString](MedianScale.md#tostring)
- [TYPE](MedianScale.md#type)

## Constructors

### constructor

• **new MedianScale**(): [`MedianScale`](MedianScale.md)

It initializes the scale.

#### Returns

[`MedianScale`](MedianScale.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/MedianScale.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/MedianScale.ts#L18)

## Methods

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IScale](../interfaces/IScale.md).[getName](../interfaces/IScale.md#getname)

#### Inherited from

[MapDomain](MapDomain.md).[getName](MapDomain.md#getname)

#### Defined in

[src/model/internal/domain/generic/MapDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/generic/MapDomain.ts#L21)

___

### getScale

▸ **getScale**(`values`, `size`): `number`[]

It returns a scale which can be used for choropleth color levels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `size` | `number` |

#### Returns

`number`[]

#### Implementation of

[IScale](../interfaces/IScale.md).[getScale](../interfaces/IScale.md#getscale)

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/MedianScale.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/MedianScale.ts#L35)

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

Type of the scale.

#### Returns

`string`

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/MedianScale.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/MedianScale.ts#L25)
