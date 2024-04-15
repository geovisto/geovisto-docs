[geovisto-map](../README.md) / [Exports](../modules.md) / LtEqFilterOperation

# Class: LtEqFilterOperation

This class wraps the less than equals filter operation.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`LtEqFilterOperation`**

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Table of contents

### Constructors

- [constructor](LtEqFilterOperation.md#constructor)

### Methods

- [getName](LtEqFilterOperation.md#getname)
- [match](LtEqFilterOperation.md#match)
- [toString](LtEqFilterOperation.md#tostring)

## Constructors

### constructor

• **new LtEqFilterOperation**(): [`LtEqFilterOperation`](LtEqFilterOperation.md)

#### Returns

[`LtEqFilterOperation`](LtEqFilterOperation.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/filter/custom/LtEqFilterOperation.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/LtEqFilterOperation.ts#L13)

## Methods

### getName

▸ **getName**(): `string`

It returns the string label of the filter representing operator.

#### Returns

`string`

#### Implementation of

[IMapFilterOperation](../interfaces/IMapFilterOperation.md).[getName](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/model/internal/filter/custom/LtEqFilterOperation.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/LtEqFilterOperation.ts#L20)

___

### match

▸ **match**(`value`, `pattern`): `boolean`

It checks if value equals pattern.

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

[src/model/internal/filter/custom/LtEqFilterOperation.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/LtEqFilterOperation.ts#L30)

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
