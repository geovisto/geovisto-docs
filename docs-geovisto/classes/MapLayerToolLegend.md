[geovisto-map](../README.md) / [Exports](../modules.md) / MapLayerToolLegend

# Class: MapLayerToolLegend\<T\>

The interface declares functions for management of legends.

**`Author`**

Tomas Koscielniak

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ILayerTool`](../interfaces/ILayerTool.md) |

## Hierarchy

- [`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

  ↳ **`MapLayerToolLegend`**

  ↳↳ [`ChoroplethLayerToolMapLegend`](ChoroplethLayerToolMapLegend.md)

  ↳↳ [`MarkerLayerToolMapLegend`](MarkerLayerToolMapLegend.md)

## Table of contents

### Constructors

- [constructor](MapLayerToolLegend.md#constructor)

### Methods

- [getContent](MapLayerToolLegend.md#getcontent)
- [getMapObject](MapLayerToolLegend.md#getmapobject)

## Constructors

### constructor

• **new MapLayerToolLegend**\<`T`\>(`layerTool`): [`MapLayerToolLegend`](MapLayerToolLegend.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerTool` | `T` |

#### Returns

[`MapLayerToolLegend`](MapLayerToolLegend.md)\<`T`\>

#### Overrides

[MapObjectLegend](MapObjectLegend.md).[constructor](MapObjectLegend.md#constructor)

#### Defined in

[src/model/internal/legend/MapLayerToolLegend.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapLayerToolLegend.ts#L12)

## Methods

### getContent

▸ **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns a HTML div element conatining the legends.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[MapObjectLegend](MapObjectLegend.md).[getContent](MapObjectLegend.md#getcontent)

#### Defined in

[src/model/internal/legend/MapLayerToolLegend.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapLayerToolLegend.ts#L19)

___

### getMapObject

▸ **getMapObject**(): `T`

#### Returns

`T`

#### Inherited from

[MapObjectLegend](MapObjectLegend.md).[getMapObject](MapObjectLegend.md#getmapobject)

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L17)
