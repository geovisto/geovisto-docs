[geovisto-map](../README.md) / [Exports](../modules.md) / ITilesLayerToolDefaults

# Interface: ITilesLayerToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳ **`ITilesLayerToolDefaults`**

## Implemented by

- [`TilesLayerToolDefaults`](../classes/TilesLayerToolDefaults.md)

## Table of contents

### Methods

- [getBaseMap](ITilesLayerToolDefaults.md#getbasemap)
- [getConfig](ITilesLayerToolDefaults.md#getconfig)
- [getDimensions](ITilesLayerToolDefaults.md#getdimensions)
- [getIcon](ITilesLayerToolDefaults.md#geticon)
- [getId](ITilesLayerToolDefaults.md#getid)
- [getLabel](ITilesLayerToolDefaults.md#getlabel)
- [getLayerName](ITilesLayerToolDefaults.md#getlayername)
- [getProps](ITilesLayerToolDefaults.md#getprops)
- [getType](ITilesLayerToolDefaults.md#gettype)
- [isEnabled](ITilesLayerToolDefaults.md#isenabled)
- [isSingleton](ITilesLayerToolDefaults.md#issingleton)

## Methods

### getBaseMap

▸ **getBaseMap**(): [`IMapTilesModel`](../modules.md#imaptilesmodel)

It returns the preferred base map.

#### Returns

[`IMapTilesModel`](../modules.md#imaptilesmodel)

#### Defined in

[src/tools/layers/tiles/model/types/tool/ITilesLayerToolDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/types/tool/ITilesLayerToolDefaults.ts#L17)

___

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getConfig](ILayerToolDefaults.md#getconfig)

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

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getDimensions](ILayerToolDefaults.md#getdimensions)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L20)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getIcon](ILayerToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getId](ILayerToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLabel](ILayerToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getLayerName

▸ **getLayerName**(): `string`

It returns the layer name.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getLayerName](ILayerToolDefaults.md#getlayername)

#### Defined in

[src/model/types/layer/ILayerToolDefaults.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/layer/ILayerToolDefaults.ts#L15)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getProps](ILayerToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[getType](ILayerToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isEnabled](ILayerToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[ILayerToolDefaults](ILayerToolDefaults.md).[isSingleton](ILayerToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
