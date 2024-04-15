[geovisto-map](../README.md) / [Exports](../modules.md) / CustomMinMaxScale

# Class: CustomMinMaxScale

This class provides the relative [min,max] scale.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapDomain`](MapDomain.md)

  ↳ **`CustomMinMaxScale`**

## Implements

- [`IScale`](../interfaces/IScale.md)

## Table of contents

### Constructors

- [constructor](CustomMinMaxScale.md#constructor)

### Properties

- [max](CustomMinMaxScale.md#max)
- [min](CustomMinMaxScale.md#min)

### Methods

- [getName](CustomMinMaxScale.md#getname)
- [getScale](CustomMinMaxScale.md#getscale)
- [toString](CustomMinMaxScale.md#tostring)
- [TYPE](CustomMinMaxScale.md#type)

## Constructors

### constructor

• **new CustomMinMaxScale**(`min`, `max`): [`CustomMinMaxScale`](CustomMinMaxScale.md)

It initializes the scale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`CustomMinMaxScale`](CustomMinMaxScale.md)

#### Overrides

[MapDomain](MapDomain.md).[constructor](MapDomain.md#constructor)

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts#L21)

## Properties

### max

• `Private` **max**: `number`

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts#L16)

___

### min

• `Private` **min**: `number`

#### Defined in

[src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts#L15)

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

[src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts#L40)

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

[src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/internal/scale/CustomMinMaxScale.ts#L30)
