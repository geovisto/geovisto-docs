**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapFilterRule

# Class: MapFilterRule

This class wraps dataDomain, filterOperation, pattern which represents a filter rule.

## Author

Jiri Hynek

## Implements

- [`IMapFilterRule`](../interfaces/IMapFilterRule.md)

## Constructors

### new MapFilterRule()

> **new MapFilterRule**(`dataDomain`, `operation`, `pattern`): [`MapFilterRule`](MapFilterRule.md)

It creates a filter rule composed of given data domain, operation and pattern.

#### Parameters

• **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

• **operation**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

• **pattern**: `string`

#### Returns

[`MapFilterRule`](MapFilterRule.md)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L24)

## Properties

### dataDomain

> `private` **dataDomain**: [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:11](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L11)

***

### operation

> `private` **operation**: [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L13)

***

### pattern

> `private` **pattern**: `string`

#### Source

[model/internal/filter/basic/MapFilterRule.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L15)

## Methods

### getDataDomain()

> **getDataDomain**(): [`IMapDataDomain`](../interfaces/IMapDataDomain.md)

It returns the the data domain which should be analyzed.

#### Returns

[`IMapDataDomain`](../interfaces/IMapDataDomain.md)

#### Implementation of

[`IMapFilterRule`](../interfaces/IMapFilterRule.md).[`getDataDomain`](../interfaces/IMapFilterRule.md#getdatadomain)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L33)

***

### getFilterOperation()

> **getFilterOperation**(): [`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

It returns the filter operation used for the filtering.

#### Returns

[`IMapFilterOperation`](../interfaces/IMapFilterOperation.md)

#### Implementation of

[`IMapFilterRule`](../interfaces/IMapFilterRule.md).[`getFilterOperation`](../interfaces/IMapFilterRule.md#getfilteroperation)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L40)

***

### getPattern()

> **getPattern**(): `string`

It returns the string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Implementation of

[`IMapFilterRule`](../interfaces/IMapFilterRule.md).[`getPattern`](../interfaces/IMapFilterRule.md#getpattern)

#### Source

[model/internal/filter/basic/MapFilterRule.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/filter/basic/MapFilterRule.ts#L47)
