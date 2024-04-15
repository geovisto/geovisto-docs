[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapDataDomain

# Class: AbstractMapDataDomain

The class wraps meta data path used to find data.

**`Author`**

Jiri Hynek

## Hierarchy

- **`AbstractMapDataDomain`**

  ↳ [`JsonMapDataDomain`](JsonMapDataDomain.md)

## Implements

- [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

## Table of contents

### Constructors

- [constructor](AbstractMapDataDomain.md#constructor)

### Properties

- [originalDataDomain](AbstractMapDataDomain.md#originaldatadomain)

### Methods

- [getName](AbstractMapDataDomain.md#getname)
- [getOriginal](AbstractMapDataDomain.md#getoriginal)

## Constructors

### constructor

• **new AbstractMapDataDomain**(`originalDataDomain`): [`AbstractMapDataDomain`](AbstractMapDataDomain.md)

It initializes the data domain wrapper providing a basic API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `originalDataDomain` | `unknown` |

#### Returns

[`AbstractMapDataDomain`](AbstractMapDataDomain.md)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataDomain.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L17)

## Properties

### originalDataDomain

• `Private` **originalDataDomain**: `unknown`

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataDomain.ts:10](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L10)

## Methods

### getName

▸ **getName**(): `string`

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`string`

#### Implementation of

[IMapDataDomain](../interfaces/IMapDataDomain.md).[getName](../interfaces/IMapDataDomain.md#getname)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataDomain.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L33)

___

### getOriginal

▸ **getOriginal**(): `unknown`

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`unknown`

#### Implementation of

[IMapDataDomain](../interfaces/IMapDataDomain.md).[getOriginal](../interfaces/IMapDataDomain.md#getoriginal)

#### Defined in

[src/model/internal/data/abstract/AbstractMapDataDomain.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/abstract/AbstractMapDataDomain.ts#L25)
