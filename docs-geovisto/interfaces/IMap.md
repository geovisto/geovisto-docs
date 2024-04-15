[geovisto-map](../README.md) / [Exports](../modules.md) / IMap

# Interface: IMap\<TProps, TDefaults, TState, TConfig, TInitProps\>

Declaration of map wrapper which handles map inputs (data, props, config), map tools and other map objects.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IMapProps`](../modules.md#imapprops) = [`IMapProps`](../modules.md#imapprops) |
| `TDefaults` | extends [`IMapDefaults`](IMapDefaults.md) = [`IMapDefaults`](IMapDefaults.md) |
| `TState` | extends [`IMapState`](IMapState.md) = [`IMapState`](IMapState.md) |
| `TConfig` | extends [`IMapConfig`](../modules.md#imapconfig) = [`IMapConfig`](../modules.md#imapconfig) |
| `TInitProps` | extends [`IMapInitProps`](../modules.md#imapinitprops)\<`TConfig`\> = [`IMapInitProps`](../modules.md#imapinitprops)\<`TConfig`\> |

## Hierarchy

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

  ↳ **`IMap`**

## Implemented by

- [`GeovistoMap`](../classes/GeovistoMap.md)

## Table of contents

### Methods

- [draw](IMap.md#draw)
- [export](IMap.md#export)
- [getDefaults](IMap.md#getdefaults)
- [getId](IMap.md#getid)
- [getProps](IMap.md#getprops)
- [getState](IMap.md#getstate)
- [getType](IMap.md#gettype)
- [initialize](IMap.md#initialize)
- [redraw](IMap.md#redraw)
- [updateCurrentData](IMap.md#updatecurrentdata)
- [updateData](IMap.md#updatedata)
- [updateGeoData](IMap.md#updategeodata)

## Methods

### draw

▸ **draw**(`mapConfig`): ``null`` \| `HTMLElement`

The function draws a new map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfig` | [`IMapConfigManager`](IMapConfigManager.md) |

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/model/types/map/IMap.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L28)

___

### export

▸ **export**(): `Record`\<`string`, `unknown`\>

It exports the serialized representation of the current state of the map.

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

[src/model/types/map/IMap.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L38)

___

### getDefaults

▸ **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[IMapObject](IMapObject.md).[getDefaults](IMapObject.md#getdefaults)

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[IMapObject](IMapObject.md).[getId](IMapObject.md#getid)

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getProps

▸ **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[IMapObject](IMapObject.md).[getProps](IMapObject.md#getprops)

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getState

▸ **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[IMapObject](IMapObject.md).[getState](IMapObject.md#getstate)

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[IMapObject](IMapObject.md).[getType](IMapObject.md#gettype)

#### Defined in

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | `TInitProps` |

#### Returns

`this`

#### Inherited from

[IMapObject](IMapObject.md).[initialize](IMapObject.md#initialize)

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)

___

### redraw

▸ **redraw**(`mapConfig`, `props?`): ``null`` \| `HTMLElement`

This function redraws the current map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapConfig` | [`IMapConfigManager`](IMapConfigManager.md) |
| `props?` | [`IMapProps`](../modules.md#imapprops) |

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[src/model/types/map/IMap.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L33)

___

### updateCurrentData

▸ **updateCurrentData**(`data`, `source`, `animateOptions?`): `void`

It updates current data and notifies listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IMapData`](../modules.md#imapdata) |  |
| `source` | [`IMapObject`](IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\> | of the change |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |  |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMap.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L61)

___

### updateData

▸ **updateData**(`dataManager`): `void`

It updates data and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataManager` | [`IMapDataManager`](IMapDataManager.md) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMap.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L45)

___

### updateGeoData

▸ **updateGeoData**(`geoDataManager`): `void`

It updates geo data and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geoDataManager` | [`IGeoDataManager`](../modules.md#igeodatamanager) |

#### Returns

`void`

#### Defined in

[src/model/types/map/IMap.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/map/IMap.ts#L52)
