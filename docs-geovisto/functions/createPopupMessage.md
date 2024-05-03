**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / createPopupMessage

# Function: createPopupMessage()

> **createPopupMessage**(`name`, `bucketMap`, `tool`, `useCategories`): `string`

Help function which creates marker popup message.

## Parameters

• **name**: `string`

• **bucketMap**: `Map`\<`string`, `null` \| [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

• **tool**: [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

• **useCategories**: `boolean`

## Returns

`string`

## Source

[tools/layers/marker/model/internal/marker/MarkerUtil.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/MarkerUtil.ts#L60)
