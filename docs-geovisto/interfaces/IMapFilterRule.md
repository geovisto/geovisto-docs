**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapFilterRule

# Interface: IMapFilterRule

This interface declares functions for manipulation with a filter rule composed of
data domain, filter operation, pattern which represents a filter rule.

## Author

Jiri Hynek

## Methods

### getDataDomain()

> **getDataDomain**(): [`IMapDataDomain`](IMapDataDomain.md)

It returns the the data domain which should be analyzed.

#### Returns

[`IMapDataDomain`](IMapDataDomain.md)

#### Source

[model/types/filter/IMapFilterRule.ts:15](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterRule.ts#L15)

***

### getFilterOperation()

> **getFilterOperation**(): [`IMapFilterOperation`](IMapFilterOperation.md)

It returns the filter operation used for the filtering.

#### Returns

[`IMapFilterOperation`](IMapFilterOperation.md)

#### Source

[model/types/filter/IMapFilterRule.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterRule.ts#L20)

***

### getPattern()

> **getPattern**(): `string`

It returns the string label of the filter representing operator given by the parameter of constructor.

#### Returns

`string`

#### Source

[model/types/filter/IMapFilterRule.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/filter/IMapFilterRule.ts#L25)
