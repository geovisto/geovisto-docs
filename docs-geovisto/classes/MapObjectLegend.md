[geovisto-map](../README.md) / [Exports](../modules.md) / MapObjectLegend

# Class: MapObjectLegend\<T\>

The interface declares functions for management of legends.

**`Author`**

Tomas Koscielniak

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md) |

## Hierarchy

- **`MapObjectLegend`**

  ↳ [`MapLayerToolLegend`](MapLayerToolLegend.md)

## Table of contents

### Constructors

- [constructor](MapObjectLegend.md#constructor)

### Properties

- [mapObject](MapObjectLegend.md#mapobject)

### Methods

- [getContent](MapObjectLegend.md#getcontent)
- [getMapObject](MapObjectLegend.md#getmapobject)

## Constructors

### constructor

• **new MapObjectLegend**\<`T`\>(`mapObject`): [`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapObject` | `T` |

#### Returns

[`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L13)

## Properties

### mapObject

• `Private` **mapObject**: `T`

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L11)

## Methods

### getContent

▸ **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns a HTML div element conatining the legend.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L24)

___

### getMapObject

▸ **getMapObject**(): `T`

#### Returns

`T`

#### Defined in

[src/model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/legend/MapObjectLegend.ts#L17)
