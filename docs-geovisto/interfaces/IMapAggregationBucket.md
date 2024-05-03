**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMapAggregationBucket

# Interface: IMapAggregationBucket

This interface declares functions aggregation of values.

## Author

Jiri Hynek

## Methods

### addValue()

> **addValue**(`value`): `void`

It adds a new value to the aggregation bucket.

#### Parameters

• **value**: `number`

#### Returns

`void`

#### Source

[model/types/aggregation/IMapAggregationBucket.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationBucket.ts#L13)

***

### getValue()

> **getValue**(): `number`

It returns the current aggregated value.

#### Returns

`number`

#### Source

[model/types/aggregation/IMapAggregationBucket.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/aggregation/IMapAggregationBucket.ts#L18)
