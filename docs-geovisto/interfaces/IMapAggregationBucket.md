[geovisto-map](../README.md) / [Exports](../modules.md) / IMapAggregationBucket

# Interface: IMapAggregationBucket

This interface declares functions aggregation of values.

**`Author`**

Jiri Hynek

## Table of contents

### Methods

- [addValue](IMapAggregationBucket.md#addvalue)
- [getValue](IMapAggregationBucket.md#getvalue)

## Methods

### addValue

▸ **addValue**(`value`): `void`

It adds a new value to the aggregation bucket.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/model/types/aggregation/IMapAggregationBucket.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationBucket.ts#L13)

___

### getValue

▸ **getValue**(): `number`

It returns the current aggregated value.

#### Returns

`number`

#### Defined in

[src/model/types/aggregation/IMapAggregationBucket.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/aggregation/IMapAggregationBucket.ts#L18)
