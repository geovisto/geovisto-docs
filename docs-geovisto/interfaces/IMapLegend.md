[geovisto-map](../README.md) / [Exports](../modules.md) / IMapLegend

# Interface: IMapLegend

The interface declares functions for management of legends.

**`Author`**

Tomas Koscielniak

## Implemented by

- [`ChoroplethLayerToolMapLegend`](../classes/ChoroplethLayerToolMapLegend.md)
- [`MarkerLayerToolMapLegend`](../classes/MarkerLayerToolMapLegend.md)

## Table of contents

### Methods

- [getContent](IMapLegend.md#getcontent)

## Methods

### getContent

▸ **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns a HTML div element conatining the legends.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

[src/model/types/legend/IMapLegend.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/legend/IMapLegend.ts#L13)
