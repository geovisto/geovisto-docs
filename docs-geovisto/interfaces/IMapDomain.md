[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDomain

# Interface: IMapDomain

This interface declares functions for using map object which can be identified by uniquie string.

**`Author`**

Jiri Hynek

## Hierarchy

- **`IMapDomain`**

  ↳ [`IMapAggregationFunction`](IMapAggregationFunction.md)

  ↳ [`IMapDataDomain`](IMapDataDomain.md)

  ↳ [`IMapDimension`](IMapDimension.md)

  ↳ [`IMapFilterOperation`](IMapFilterOperation.md)

  ↳ [`IGeoData`](IGeoData.md)

  ↳ [`IInfoData`](IInfoData.md)

  ↳ [`IScale`](IScale.md)

  ↳ [`IMapTheme`](IMapTheme.md)

## Implemented by

- [`AbstractMapDomain`](../classes/AbstractMapDomain.md)
- [`MapDomain`](../classes/MapDomain.md)

## Table of contents

### Methods

- [getName](IMapDomain.md#getname)

## Methods

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)
