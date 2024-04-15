[geovisto-map](../README.md) / [Exports](../modules.md) / RegFilterOperation

# Class: RegFilterOperation

This class wraps the regex filter operation.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`RegFilterOperation`**

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Table of contents

### Constructors

- [constructor](RegFilterOperation.md#constructor)

### Methods

- [getName](RegFilterOperation.md#getname)
- [match](RegFilterOperation.md#match)
- [toString](RegFilterOperation.md#tostring)

## Constructors

### constructor

• **new RegFilterOperation**(): [`RegFilterOperation`](RegFilterOperation.md)

It creates the regular expression filter operation.

#### Returns

[`RegFilterOperation`](RegFilterOperation.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/filter/custom/RegFilterOperation.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/RegFilterOperation.ts#L16)

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

[src/model/internal/filter/custom/RegFilterOperation.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/RegFilterOperation.ts#L23)

___

### match

▸ **match**(`value`, `pattern`): `boolean`

It checks if a value match a regular expression pattern.

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

[src/model/internal/filter/custom/RegFilterOperation.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/custom/RegFilterOperation.ts#L33)

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
