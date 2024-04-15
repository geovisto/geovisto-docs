[geovisto-map](../README.md) / [Exports](../modules.md) / ILayerToolDefaults

# Interface: ILayerToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapToolDefaults`](IMapToolDefaults.md)

  ↳ **`ILayerToolDefaults`**

  ↳↳ [`IBubbleLayerToolDefaults`](IBubbleLayerToolDefaults.md)

  ↳↳ [`IConnectionLayerToolDefaults`](IConnectionLayerToolDefaults.md)

  ↳↳ [`IDotLayerToolDefaults`](IDotLayerToolDefaults.md)

  ↳↳ [`IHeatLayerToolDefaults`](IHeatLayerToolDefaults.md)

  ↳↳ [`IChoroplethLayerToolDefaults`](IChoroplethLayerToolDefaults.md)

  ↳↳ [`IMarkerLayerToolDefaults`](IMarkerLayerToolDefaults.md)

  ↳↳ [`ISpikeLayerToolDefaults`](ISpikeLayerToolDefaults.md)

  ↳↳ [`ITilesLayerToolDefaults`](ITilesLayerToolDefaults.md)

  ↳↳ [`ITimelineToolDefaults`](ITimelineToolDefaults.md)

## Implemented by

- [`LayerToolDefaults`](../classes/LayerToolDefaults.md)

## Table of contents

### Methods

- [getConfig](ILayerToolDefaults.md#getconfig)
- [getDimensions](ILayerToolDefaults.md#getdimensions)
- [getIcon](ILayerToolDefaults.md#geticon)
- [getId](ILayerToolDefaults.md#getid)
- [getLabel](ILayerToolDefaults.md#getlabel)
- [getLayerName](ILayerToolDefaults.md#getlayername)
- [getProps](ILayerToolDefaults.md#getprops)
- [getType](ILayerToolDefaults.md#gettype)
- [isEnabled](ILayerToolDefaults.md#isenabled)
- [isSingleton](ILayerToolDefaults.md#issingleton)

## Methods

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getConfig](IMapToolDefaults.md#getconfig)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L14)

___

### getDimensions

▸ **getDimensions**(`map?`): [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

It returns list of map dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map?` | [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

[`ILayerToolDimensions`](../modules.md#ilayertooldimensions)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L20)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getIcon](IMapToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getId](IMapToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getLabel](IMapToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L15)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getProps](IMapToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getType](IMapToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[isEnabled](IMapToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[isSingleton](IMapToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
