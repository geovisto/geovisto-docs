[geovisto-map](../README.md) / [Exports](../modules.md) / JsonMapDataDomain

# Class: JsonMapDataDomain

The class wraps meta data path used to find data.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapDataDomain`](AbstractMapDataDomain.md)

  ↳ **`JsonMapDataDomain`**

## Table of contents

### Constructors

- [constructor](JsonMapDataDomain.md#constructor)

### Properties

- [name](JsonMapDataDomain.md#name)

### Methods

- [getName](JsonMapDataDomain.md#getname)
- [getOriginal](JsonMapDataDomain.md#getoriginal)

## Constructors

### constructor

• **new JsonMapDataDomain**(`domainDescription`): [`JsonMapDataDomain`](JsonMapDataDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainDescription` | `string`[] |

#### Returns

[`JsonMapDataDomain`](JsonMapDataDomain.md)

#### Overrides

[AbstractMapDataDomain](AbstractMapDataDomain.md).[constructor](AbstractMapDataDomain.md#constructor)

#### Defined in

[src/model/internal/data/json/JsonMapDataDomain.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataDomain.ts#L12)

## Properties

### name

• `Private` **name**: `string`

#### Defined in

[src/model/internal/data/json/JsonMapDataDomain.ts:10](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataDomain.ts#L10)

## Methods

### getName

▸ **getName**(): `string`

The function returns the string representation of the map data domain
which is *unique* among the names of other data domains.

It uses dots to delimiter the array items.

#### Returns

`string`

#### Overrides

[AbstractMapDataDomain](AbstractMapDataDomain.md).[getName](AbstractMapDataDomain.md#getname)

#### Defined in

[src/model/internal/data/json/JsonMapDataDomain.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataDomain.ts#L31)

___

### getOriginal

▸ **getOriginal**(): `string`[]

The function returns the string representation of the map data domain
which is *unique* among the labels of other data domains.

#### Returns

`string`[]

#### Overrides

[AbstractMapDataDomain](AbstractMapDataDomain.md).[getOriginal](AbstractMapDataDomain.md#getoriginal)

#### Defined in

[src/model/internal/data/json/JsonMapDataDomain.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/data/json/JsonMapDataDomain.ts#L21)
