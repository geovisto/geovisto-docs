[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFilterOperation

# Interface: IMapFilterOperation

This interface declares a filter operation.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IMapFilterOperation`**

## Implemented by

- [`EqFilterOperation`](../classes/EqFilterOperation.md)
- [`GtEqFilterOperation`](../classes/GtEqFilterOperation.md)
- [`GtFilterOperation`](../classes/GtFilterOperation.md)
- [`LtEqFilterOperation`](../classes/LtEqFilterOperation.md)
- [`LtFilterOperation`](../classes/LtFilterOperation.md)
- [`MapFilterOperation`](../classes/MapFilterOperation.md)
- [`NeqFilterOperation`](../classes/NeqFilterOperation.md)
- [`RegFilterOperation`](../classes/RegFilterOperation.md)

## Table of contents

### Methods

- [getName](IMapFilterOperation.md#getname)
- [match](IMapFilterOperation.md#match)

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

### match

▸ **match**(`value`, `pattern`): `boolean`

It performs the filter operation which compare a value with a pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `pattern` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/model/types/filter/IMapFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterOperation.ts#L16)
