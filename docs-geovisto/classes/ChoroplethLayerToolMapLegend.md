**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ChoroplethLayerToolMapLegend

# Class: ChoroplethLayerToolMapLegend

This class provides controls for management of the layer legend.

## Author

Tomas Koscielniak

## Extends

- [`MapLayerToolLegend`](MapLayerToolLegend.md)\<[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\>

## Implements

- [`IMapLegend`](../interfaces/IMapLegend.md)

## Constructors

### new ChoroplethLayerToolMapLegend()

> **new ChoroplethLayerToolMapLegend**(`tool`): [`ChoroplethLayerToolMapLegend`](ChoroplethLayerToolMapLegend.md)

It creates new map Legend with respect to the given props.

#### Parameters

• **tool**: [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

[`ChoroplethLayerToolMapLegend`](ChoroplethLayerToolMapLegend.md)

#### Overrides

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`constructor`](MapLayerToolLegend.md#constructors)

#### Source

[tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L24)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLElement`

#### Source

[tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L17)

## Methods

### getContent()

> **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns the legend.

#### Parameters

• **tool**: [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[`IMapLegend`](../interfaces/IMapLegend.md).[`getContent`](../interfaces/IMapLegend.md#getcontent)

#### Overrides

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`getContent`](MapLayerToolLegend.md#getcontent)

#### Source

[tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/choropleth/model/internal/legend/ChoroplethLayerToolMapLegend.ts#L31)

***

### getMapObject()

> `protected` **getMapObject**(): [`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Returns

[`IChoroplethLayerTool`](../interfaces/IChoroplethLayerTool.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolState`](../interfaces/IChoroplethLayerToolState.md)\<[`IChoroplethLayerToolProps`](../type-aliases/IChoroplethLayerToolProps.md), [`IChoroplethLayerToolDefaults`](../interfaces/IChoroplethLayerToolDefaults.md), [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), `object`, `object`\>, [`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IChoroplethLayerToolConfig`](../type-aliases/IChoroplethLayerToolConfig.md)\>\>

#### Inherited from

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`getMapObject`](MapLayerToolLegend.md#getmapobject)

#### Source

[model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/legend/MapObjectLegend.ts#L17)
