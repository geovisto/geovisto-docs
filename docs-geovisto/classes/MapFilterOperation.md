[geovisto-map](../README.md) / [Exports](../modules.md) / MapFilterOperation

# Class: MapFilterOperation

This class wraps a filter operation defined by constructor props.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDomain`](AbstractMapDomain.md)

  ↳ **`MapFilterOperation`**

## Implements

- [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

## Table of contents

### Constructors

- [constructor](MapFilterOperation.md#constructor)

### Properties

- [label](MapFilterOperation.md#label)
- [match](MapFilterOperation.md#match)

### Methods

- [getName](MapFilterOperation.md#getname)
- [toString](MapFilterOperation.md#tostring)

## Constructors

### constructor

• **new MapFilterOperation**(`label`, `acceptFunction`): [`MapFilterOperation`](MapFilterOperation.md)

It creates a new filter operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `acceptFunction` | (`value`: `unknown`, `pattern`: `unknown`) => `boolean` |

#### Returns

[`MapFilterOperation`](MapFilterOperation.md)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[constructor](AbstractMapDomain.md#constructor)

#### Defined in

[src/model/internal/filter/basic/MapFilterOperation.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterOperation.ts#L27)

## Properties

### label

• `Private` **label**: `string`

#### Defined in

[src/model/internal/filter/basic/MapFilterOperation.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterOperation.ts#L11)

___

### match

• **match**: (`value`: `unknown`, `pattern`: `unknown`) => `boolean`

It performs the filter operation which compare a value with a pattern.

#### Type declaration

▸ (`value`, `pattern`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `pattern` | `unknown` |

##### Returns

`boolean`

#### Implementation of

[IMapFilterOperation](../interfaces/IMapFilterOperation.md).[match](../interfaces/IMapFilterOperation.md#match)

#### Defined in

[src/model/internal/filter/basic/MapFilterOperation.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterOperation.ts#L19)

## Methods

### getName

▸ **getName**(): `string`

It returns a unique string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Implementation of

[IMapFilterOperation](../interfaces/IMapFilterOperation.md).[getName](../interfaces/IMapFilterOperation.md#getname)

#### Overrides

[AbstractMapDomain](AbstractMapDomain.md).[getName](AbstractMapDomain.md#getname)

#### Defined in

[src/model/internal/filter/basic/MapFilterOperation.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterOperation.ts#L36)

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
