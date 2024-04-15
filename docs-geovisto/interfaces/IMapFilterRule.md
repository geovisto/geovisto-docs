[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFilterRule

# Interface: IMapFilterRule

This interface declares functions for manipulation with a filter rule composed of
data domain, filter operation, pattern which represents a filter rule.

**`Author`**

Jiri Hynek

## Implemented by

- [`MapFilterRule`](../classes/MapFilterRule.md)

## Table of contents

### Methods

- [getDataDomain](IMapFilterRule.md#getdatadomain)
- [getFilterOperation](IMapFilterRule.md#getfilteroperation)
- [getPattern](IMapFilterRule.md#getpattern)

## Methods

### getDataDomain

▸ **getDataDomain**(): [`IMapDataDomain`](IMapDataDomain.md)

It returns the the data domain which should be analyzed.

#### Returns

[`IMapDataDomain`](IMapDataDomain.md)

#### Defined in

[src/model/types/filter/IMapFilterRule.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterRule.ts#L15)

___

### getFilterOperation

▸ **getFilterOperation**(): [`IMapFilterOperation`](IMapFilterOperation.md)

It returns the filter operation used for the filtering.

#### Returns

[`IMapFilterOperation`](IMapFilterOperation.md)

#### Defined in

[src/model/types/filter/IMapFilterRule.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterRule.ts#L20)

___

### getPattern

▸ **getPattern**(): `string`

It returns the string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Defined in

[src/model/types/filter/IMapFilterRule.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/filter/IMapFilterRule.ts#L25)
