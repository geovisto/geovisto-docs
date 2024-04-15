[geovisto-map](../README.md) / [Exports](../modules.md) / IScale

# Interface: IScale

This interface declares functions for using choropleth scale.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IScale`**

## Implemented by

- [`CustomMinMaxScale`](../classes/CustomMinMaxScale.md)
- [`DecimalScale`](../classes/DecimalScale.md)
- [`MedianScale`](../classes/MedianScale.md)
- [`RelativeMinMaxScale`](../classes/RelativeMinMaxScale.md)
- [`RelativeScale`](../classes/RelativeScale.md)

## Table of contents

### Methods

- [getName](IScale.md#getname)
- [getScale](IScale.md#getscale)

## Methods

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomain](IMapDomain.md).[getName](IMapDomain.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

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

#### Defined in

[src/tools/layers/choropleth/model/types/scale/IScale.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/choropleth/model/types/scale/IScale.ts#L18)
