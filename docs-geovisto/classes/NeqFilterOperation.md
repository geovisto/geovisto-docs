[geovisto-map](../README.md) / [Exports](../modules.md) / NeqFilterOperation

# Class: NeqFilterOperation

This class wraps the not-equals filter operation.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`NeqFilterOperation`**

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Table of contents

### Constructors

- [constructor](NeqFilterOperation.md#constructor)

### Methods

- [getName](NeqFilterOperation.md#getname)
- [match](NeqFilterOperation.md#match)
- [toString](NeqFilterOperation.md#tostring)

## Constructors

### constructor

• **new NeqFilterOperation**(): [`NeqFilterOperation`](NeqFilterOperation.md)

It creates the not-equals filter operation.

#### Returns

[`NeqFilterOperation`](NeqFilterOperation.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/filter/custom/NeqFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/NeqFilterOperation.ts#L16)

## Methods

### getName

▸ **getName**(): `string`

It returns the string label of the filter representing the operator.

#### Returns

`string`

#### Implementation of

[IMapFilterOperation](../interfaces/IMapFilterOperation.md).[getName](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/model/internal/filter/custom/NeqFilterOperation.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/NeqFilterOperation.ts#L23)

___

### match

▸ **match**(`value`, `pattern`): `boolean`

It checks if value does not equal a pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `pattern` | `string` |

#### Returns

`boolean`

#### Implementation of

[IMapFilterOperation](../interfaces/IMapFilterOperation.md).[match](../interfaces/IMapFilterOperation.md#match)

#### Defined in

[src/model/internal/filter/custom/NeqFilterOperation.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/NeqFilterOperation.ts#L33)

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
