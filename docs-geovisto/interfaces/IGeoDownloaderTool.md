[geovisto-map](../README.md) / [Exports](../modules.md) / IGeoDownloaderTool

# Interface: IGeoDownloaderTool

Interface of GeoDownloaderTool.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`IMapTool`](IMapTool.md)

  ↳ **`IGeoDownloaderTool`**

## Implemented by

- [`GeoDownloaderTool`](../classes/GeoDownloaderTool.md)

## Table of contents

### Methods

- [copy](IGeoDownloaderTool.md#copy)
- [create](IGeoDownloaderTool.md#create)
- [getAPIGetter](IGeoDownloaderTool.md#getapigetter)
- [getDefaults](IGeoDownloaderTool.md#getdefaults)
- [getId](IGeoDownloaderTool.md#getid)
- [getMap](IGeoDownloaderTool.md#getmap)
- [getProps](IGeoDownloaderTool.md#getprops)
- [getState](IGeoDownloaderTool.md#getstate)
- [getType](IGeoDownloaderTool.md#gettype)
- [initialize](IGeoDownloaderTool.md#initialize)
- [isEnabled](IGeoDownloaderTool.md#isenabled)
- [isSingleton](IGeoDownloaderTool.md#issingleton)
- [setEnabled](IGeoDownloaderTool.md#setenabled)
- [switchEnabled](IGeoDownloaderTool.md#switchenabled)

## Methods

### copy

▸ **copy**(): [`IGeoDownloaderTool`](IGeoDownloaderTool.md)

It creates copy of the uninitialized tool.

#### Returns

[`IGeoDownloaderTool`](IGeoDownloaderTool.md)

#### Overrides

[IMapTool](IMapTool.md).[copy](IMapTool.md#copy)

#### Defined in

[src/tools/geo-downloader/model/types/tool/IGeoDownloaderTool.ts:8](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/types/tool/IGeoDownloaderTool.ts#L8)

___

### create

▸ **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Inherited from

[IMapTool](IMapTool.md).[create](IMapTool.md#create)

#### Defined in

[src/model/types/tool/IMapTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L47)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool API.

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Inherited from

[IMapTool](IMapTool.md).[getAPIGetter](IMapTool.md#getapigetter)

#### Defined in

[src/model/types/tool/IMapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L32)

___

### getDefaults

▸ **getDefaults**(): [`IMapToolDefaults`](IMapToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IMapToolDefaults`](IMapToolDefaults.md)

#### Inherited from

[IMapTool](IMapTool.md).[getDefaults](IMapTool.md#getdefaults)

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[IMapTool](IMapTool.md).[getId](IMapTool.md#getid)

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function which returns map which uses this tool.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Inherited from

[IMapTool](IMapTool.md).[getMap](IMapTool.md#getmap)

#### Defined in

[src/model/types/tool/IMapTool.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L42)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

It returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Inherited from

[IMapTool](IMapTool.md).[getProps](IMapTool.md#getprops)

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getState

▸ **getState**(): [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

It returns the map object state.

#### Returns

[`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../modules.md#imaptoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\>\>

#### Inherited from

[IMapTool](IMapTool.md).[getState](IMapTool.md#getstate)

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[IMapTool](IMapTool.md).[getType](IMapTool.md#gettype)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\> |

#### Returns

`this`

#### Inherited from

[IMapTool](IMapTool.md).[initialize](IMapTool.md#initialize)

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

#### Returns

`boolean`

#### Inherited from

[IMapTool](IMapTool.md).[isEnabled](IMapTool.md#isenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L52)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[IMapTool](IMapTool.md).[isSingleton](IMapTool.md#issingleton)

#### Defined in

[src/model/types/tool/IMapTool.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L37)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

[IMapTool](IMapTool.md).[setEnabled](IMapTool.md#setenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L60)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches the enabled state (enabled/disabled).

#### Returns

`void`

#### Inherited from

[IMapTool](IMapTool.md).[switchEnabled](IMapTool.md#switchenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L65)
