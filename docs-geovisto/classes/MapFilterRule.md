[geovisto-map](../README.md) / [Exports](../modules.md) / MapFilterRule

# Class: MapFilterRule

This class wraps dataDomain, filterOperation, pattern which represents a filter rule.

**`Author`**

Jiri Hynek

## Implements

- [`IMapFilterRule`](../interfaces/IMapFilterRule.md)

## Table of contents

### Constructors

- [constructor](MapFilterRule.md#constructor)

### Properties

- [dataDomain](MapFilterRule.md#datadomain)
- [operation](MapFilterRule.md#operation)
- [pattern](MapFilterRule.md#pattern)

### Methods

- [getDataDomain](MapFilterRule.md#getdatadomain)
- [getFilterOperation](MapFilterRule.md#getfilteroperation)
- [getPattern](MapFilterRule.md#getpattern)

## Constructors

### constructor

• **new MapFilterRule**(`dataDomain`, `operation`, `pattern`): [`MapFilterRule`](MapFilterRule.md)

It creates a filter rule composed of given data domain, operation and pattern.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDomain` | [`IMapDataDomain`](../interfaces/IMapDataDomain.md) |
| `operation` | [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md) |
| `pattern` | `string` |

#### Returns

[`MapFilterRule`](MapFilterRule.md)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L24)

## Properties

### dataDomain

• `Private` **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L11)

___

### operation

• `Private` **operation**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L13)

___

### pattern

• `Private` **pattern**: `string`

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L15)

## Methods

### getDataDomain

▸ **getDataDomain**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the the data domain which should be analyzed.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[IMapFilterRule](../interfaces/IMapFilterRule.md).[getDataDomain](../interfaces/IMapFilterRule.md#getdatadomain)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L33)

___

### getFilterOperation

▸ **getFilterOperation**(): [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

It returns the filter operation used for the filtering.

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Implementation of

[IMapFilterRule](../interfaces/IMapFilterRule.md).[getFilterOperation](../interfaces/IMapFilterRule.md#getfilteroperation)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L40)

___

### getPattern

▸ **getPattern**(): `string`

It returns the string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Implementation of

[IMapFilterRule](../interfaces/IMapFilterRule.md).[getPattern](../interfaces/IMapFilterRule.md#getpattern)

#### Defined in

[src/model/internal/filter/basic/MapFilterRule.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/filter/basic/MapFilterRule.ts#L47)
