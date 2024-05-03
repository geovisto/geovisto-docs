**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MarkerLayerToolMapLegend

# Class: MarkerLayerToolMapLegend

This class provides controls for management of the layer legend.

## Author

Tomas Koscielniak

## Extends

- [`MapLayerToolLegend`](MapLayerToolLegend.md)\<[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\>

## Implements

- [`IMapLegend`](../interfaces/IMapLegend.md)

## Constructors

### new MarkerLayerToolMapLegend()

> **new MarkerLayerToolMapLegend**(`tool`): [`MarkerLayerToolMapLegend`](MarkerLayerToolMapLegend.md)

It creates new map Legend with respect to the given props.

#### Parameters

• **tool**: [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

[`MarkerLayerToolMapLegend`](MarkerLayerToolMapLegend.md)

#### Overrides

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`constructor`](MapLayerToolLegend.md#constructors)

#### Source

[tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L23)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLElement`

#### Source

[tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L16)

## Methods

### getContent()

> **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns the legend.

#### Parameters

• **tool**: [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[`IMapLegend`](../interfaces/IMapLegend.md).[`getContent`](../interfaces/IMapLegend.md#getcontent)

#### Overrides

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`getContent`](MapLayerToolLegend.md#getcontent)

#### Source

[tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/legend/MarkerLayerToolMapLegend.ts#L30)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Returns

[`IMarkerLayerTool`](../interfaces/IMarkerLayerTool.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolState`](../interfaces/IMarkerLayerToolState.md)\<[`IMarkerLayerToolProps`](../type-aliases/IMarkerLayerToolProps.md), [`IMarkerLayerToolDefaults`](../interfaces/IMarkerLayerToolDefaults.md), [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), `object`, `object`\>, [`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMarkerLayerToolConfig`](../type-aliases/IMarkerLayerToolConfig.md)\>\>

#### Inherited from

[`MapLayerToolLegend`](MapLayerToolLegend.md).[`getMapObject`](MapLayerToolLegend.md#getmapobject)

#### Source

[model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/legend/MapObjectLegend.ts#L17)
