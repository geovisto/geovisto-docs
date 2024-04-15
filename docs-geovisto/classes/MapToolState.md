[geovisto-map](../README.md) / [Exports](../modules.md) / MapToolState

# Class: MapToolState

This class manages state of the tool.
It wraps the state since the tool can work with state objects which needs to be explicitly serialized.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectState`](MapObjectState.md)

  ↳ **`MapToolState`**

  ↳↳ [`LayerToolState`](LayerToolState.md)

  ↳↳ [`FiltersToolState`](FiltersToolState.md)

  ↳↳ [`GeoDownloaderToolState`](GeoDownloaderToolState.md)

  ↳↳ [`HierarchyToolState`](HierarchyToolState.md)

  ↳↳ [`InfoToolState`](InfoToolState.md)

  ↳↳ [`LegendToolState`](LegendToolState.md)

  ↳↳ [`SelectionToolState`](SelectionToolState.md)

  ↳↳ [`SidebarToolState`](SidebarToolState.md)

  ↳↳ [`ThemesToolState`](ThemesToolState.md)

## Implements

- [`IMapToolState`](../interfaces/IMapToolState.md)

## Table of contents

### Constructors

- [constructor](MapToolState.md#constructor)

### Properties

- [enabled](MapToolState.md#enabled)
- [icon](MapToolState.md#icon)
- [label](MapToolState.md#label)
- [map](MapToolState.md#map)

### Methods

- [deserialize](MapToolState.md#deserialize)
- [getIcon](MapToolState.md#geticon)
- [getId](MapToolState.md#getid)
- [getLabel](MapToolState.md#getlabel)
- [getMap](MapToolState.md#getmap)
- [getMapObject](MapToolState.md#getmapobject)
- [getType](MapToolState.md#gettype)
- [initialize](MapToolState.md#initialize)
- [isEnabled](MapToolState.md#isenabled)
- [serialize](MapToolState.md#serialize)
- [setEnabled](MapToolState.md#setenabled)
- [setIcon](MapToolState.md#seticon)
- [setId](MapToolState.md#setid)
- [setLabel](MapToolState.md#setlabel)
- [setMap](MapToolState.md#setmap)

## Constructors

### constructor

• **new MapToolState**(`tool`): [`MapToolState`](MapToolState.md)

It creates a map object state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>, [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>, [`IMapToolAPI`](../modules.md#imaptoolapi)\> |

#### Returns

[`MapToolState`](MapToolState.md)

#### Overrides

[MapObjectState](MapObjectState.md).[constructor](MapObjectState.md#constructor)

#### Defined in

[src/model/internal/tool/MapToolState.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L31)

## Properties

### enabled

• `Private` **enabled**: `boolean`

#### Defined in

[src/model/internal/tool/MapToolState.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L17)

___

### icon

• `Private` **icon**: `string`

#### Defined in

[src/model/internal/tool/MapToolState.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L19)

___

### label

• `Private` **label**: `string`

#### Defined in

[src/model/internal/tool/MapToolState.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L18)

___

### map

• `Private` **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

map is set during the tool initialization

#### Defined in

[src/model/internal/tool/MapToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L24)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`IMapToolConfig`](../modules.md#imaptoolconfig) |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[deserialize](../interfaces/IMapToolState.md#deserialize)

#### Overrides

[MapObjectState](MapObjectState.md).[deserialize](MapObjectState.md#deserialize)

#### Defined in

[src/model/internal/tool/MapToolState.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L64)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[getIcon](../interfaces/IMapToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[getId](../interfaces/IMapToolState.md#getid)

#### Inherited from

[MapObjectState](MapObjectState.md).[getId](MapObjectState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[getLabel](../interfaces/IMapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[getMap](../interfaces/IMapToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapObjectState](MapObjectState.md).[getMapObject](MapObjectState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[getType](../interfaces/IMapToolState.md#gettype)

#### Inherited from

[MapObjectState](MapObjectState.md).[getType](MapObjectState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md) |
| `props` | [`IMapToolProps`](../modules.md#imaptoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops) |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[initialize](../interfaces/IMapToolState.md#initialize)

#### Overrides

[MapObjectState](MapObjectState.md).[initialize](MapObjectState.md#initialize)

#### Defined in

[src/model/internal/tool/MapToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L42)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[isEnabled](../interfaces/IMapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`IMapToolConfig`](../modules.md#imaptoolconfig)

The method serializes the tool state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md) |

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[serialize](../interfaces/IMapToolState.md#serialize)

#### Overrides

[MapObjectState](MapObjectState.md).[serialize](MapObjectState.md#serialize)

#### Defined in

[src/model/internal/tool/MapToolState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L76)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[setEnabled](../interfaces/IMapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[setIcon](../interfaces/IMapToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[setId](../interfaces/IMapToolState.md#setid)

#### Inherited from

[MapObjectState](MapObjectState.md).[setId](MapObjectState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[IMapToolState](../interfaces/IMapToolState.md).[setLabel](../interfaces/IMapToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)
