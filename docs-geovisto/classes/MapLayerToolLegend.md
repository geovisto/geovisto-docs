**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapLayerToolLegend

# Class: `abstract` MapLayerToolLegend\<T\>

The interface declares functions for management of legends.

## Author

Tomas Koscielniak

## Extends

- [`MapObjectLegend`](MapObjectLegend.md)\<`T`\>

## Type parameters

• **T** *extends* [`ILayerTool`](../interfaces/ILayerTool.md)

## Constructors

### new MapLayerToolLegend()

> **new MapLayerToolLegend**\<`T`\>(`layerTool`): [`MapLayerToolLegend`](MapLayerToolLegend.md)\<`T`\>

#### Parameters

• **layerTool**: `T`

#### Returns

[`MapLayerToolLegend`](MapLayerToolLegend.md)\<`T`\>

#### Overrides

[`MapObjectLegend`](MapObjectLegend.md).[`constructor`](MapObjectLegend.md#constructors)

#### Source

[model/internal/legend/MapLayerToolLegend.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/legend/MapLayerToolLegend.ts#L12)

## Methods

### getContent()

> `abstract` **getContent**(`tool`): `undefined` \| `HTMLElement`

It returns a HTML div element conatining the legends.

#### Parameters

• **tool**: [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`undefined` \| `HTMLElement`

#### Overrides

[`MapObjectLegend`](MapObjectLegend.md).[`getContent`](MapObjectLegend.md#getcontent)

#### Source

[model/internal/legend/MapLayerToolLegend.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/legend/MapLayerToolLegend.ts#L19)

***

### getMapObject()

> `protected` **getMapObject**(): `T`

#### Returns

`T`

#### Inherited from

[`MapObjectLegend`](MapObjectLegend.md).[`getMapObject`](MapObjectLegend.md#getmapobject)

#### Source

[model/internal/legend/MapObjectLegend.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/legend/MapObjectLegend.ts#L17)
