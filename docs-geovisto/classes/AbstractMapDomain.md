[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapDomain

# Class: AbstractMapDomain

The abstract implementation of map domain which overrides toString function.

**`Author`**

Jiri Hynek

## Hierarchy

- **`AbstractMapDomain`**

  ↳ [`AbstractMapDimension`](AbstractMapDimension.md)

  ↳ [`MapDomain`](MapDomain.md)

  ↳ [`MapFilterOperation`](MapFilterOperation.md)

  ↳ [`EqFilterOperation`](EqFilterOperation.md)

  ↳ [`GtEqFilterOperation`](GtEqFilterOperation.md)

  ↳ [`GtFilterOperation`](GtFilterOperation.md)

  ↳ [`LtEqFilterOperation`](LtEqFilterOperation.md)

  ↳ [`LtFilterOperation`](LtFilterOperation.md)

  ↳ [`NeqFilterOperation`](NeqFilterOperation.md)

  ↳ [`RegFilterOperation`](RegFilterOperation.md)

  ↳ [`BasicTheme`](BasicTheme.md)

## Implements

- [`IMapDomain`](../interfaces/IMapDomain.md)

## Table of contents

### Constructors

- [constructor](AbstractMapDomain.md#constructor)

### Methods

- [getName](AbstractMapDomain.md#getname)
- [toString](AbstractMapDomain.md#tostring)

## Constructors

### constructor

• **new AbstractMapDomain**(): [`AbstractMapDomain`](AbstractMapDomain.md)

#### Returns

[`AbstractMapDomain`](AbstractMapDomain.md)

## Methods

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Implementation of

[IMapDomain](../interfaces/IMapDomain.md).[getName](../interfaces/IMapDomain.md#getname)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L13)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
