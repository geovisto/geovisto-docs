[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDownloaderToolState

# Class: GeoDownloaderToolState

State class for GeoDownloaderTool.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`GeoDownloaderToolState`**

## Implements

- [`IGeoDownloaderToolState`](../modules.md#igeodownloadertoolstate)

## Table of contents

### Constructors

- [constructor](GeoDownloaderToolState.md#constructor)

### Methods

- [deserialize](GeoDownloaderToolState.md#deserialize)
- [getIcon](GeoDownloaderToolState.md#geticon)
- [getId](GeoDownloaderToolState.md#getid)
- [getLabel](GeoDownloaderToolState.md#getlabel)
- [getMap](GeoDownloaderToolState.md#getmap)
- [getMapObject](GeoDownloaderToolState.md#getmapobject)
- [getType](GeoDownloaderToolState.md#gettype)
- [initialize](GeoDownloaderToolState.md#initialize)
- [isEnabled](GeoDownloaderToolState.md#isenabled)
- [serialize](GeoDownloaderToolState.md#serialize)
- [setEnabled](GeoDownloaderToolState.md#setenabled)
- [setIcon](GeoDownloaderToolState.md#seticon)
- [setId](GeoDownloaderToolState.md#setid)
- [setLabel](GeoDownloaderToolState.md#setlabel)
- [setMap](GeoDownloaderToolState.md#setmap)

## Constructors

### constructor

• **new GeoDownloaderToolState**(`tool`): [`GeoDownloaderToolState`](GeoDownloaderToolState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md) |

#### Returns

[`GeoDownloaderToolState`](GeoDownloaderToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolState.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolState.ts#L17)

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

IGeoDownloaderToolState.deserialize

#### Inherited from

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/model/internal/tool/MapToolState.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L64)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

IGeoDownloaderToolState.getIcon

#### Inherited from

[MapToolState](MapToolState.md).[getIcon](MapToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

IGeoDownloaderToolState.getId

#### Inherited from

[MapToolState](MapToolState.md).[getId](MapToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

IGeoDownloaderToolState.getLabel

#### Inherited from

[MapToolState](MapToolState.md).[getLabel](MapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

IGeoDownloaderToolState.getMap

#### Inherited from

[MapToolState](MapToolState.md).[getMap](MapToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapToolState](MapToolState.md).[getMapObject](MapToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

IGeoDownloaderToolState.getType

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md) |
| `props` | [`IMapToolProps`](../modules.md#imaptoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolProps`](../modules.md#imaptoolprops)\> |

#### Returns

`void`

#### Implementation of

IGeoDownloaderToolState.initialize

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolState.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderToolState.ts#L21)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

IGeoDownloaderToolState.isEnabled

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

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

IGeoDownloaderToolState.serialize

#### Inherited from

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

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

IGeoDownloaderToolState.setEnabled

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

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

IGeoDownloaderToolState.setIcon

#### Inherited from

[MapToolState](MapToolState.md).[setIcon](MapToolState.md#seticon)

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

IGeoDownloaderToolState.setId

#### Inherited from

[MapToolState](MapToolState.md).[setId](MapToolState.md#setid)

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

IGeoDownloaderToolState.setLabel

#### Inherited from

[MapToolState](MapToolState.md).[setLabel](MapToolState.md#setlabel)

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

#### Inherited from

[MapToolState](MapToolState.md).[setMap](MapToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)
