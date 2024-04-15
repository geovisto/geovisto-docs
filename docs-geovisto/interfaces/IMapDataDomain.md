[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDataDomain

# Interface: IMapDataDomain

The interface declares meta data path used to find data.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomain`](IMapDomain.md)

  ↳ **`IMapDataDomain`**

## Implemented by

- [`AbstractMapDataDomain`](../classes/AbstractMapDataDomain.md)

## Table of contents

### Methods

- [getName](IMapDataDomain.md#getname)
- [getOriginal](IMapDataDomain.md#getoriginal)

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

### getOriginal

▸ **getOriginal**(): `unknown`

It returns the original representation of data domain.

#### Returns

`unknown`

#### Defined in

[src/model/types/data/IMapDataDomain.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/data/IMapDataDomain.ts#L13)
