[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDownloaderTool

# Class: GeoDownloaderTool

GeoDownladerTool -- 
Tool providing basic user interface for downloading GeoJSON objects from OverpassAPI.
Objects can be downloaded for more than one administrative level of country. 
Can be also used for generating hierarchy definition in case of downloading polygons.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`GeoDownloaderTool`**

## Implements

- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

## Table of contents

### Constructors

- [constructor](GeoDownloaderTool.md#constructor)

### Properties

- [mapForm](GeoDownloaderTool.md#mapform)

### Methods

- [changeForm](GeoDownloaderTool.md#changeform)
- [copy](GeoDownloaderTool.md#copy)
- [create](GeoDownloaderTool.md#create)
- [createDefaults](GeoDownloaderTool.md#createdefaults)
- [createMapForm](GeoDownloaderTool.md#createmapform)
- [createState](GeoDownloaderTool.md#createstate)
- [getAPIGetter](GeoDownloaderTool.md#getapigetter)
- [getDefaults](GeoDownloaderTool.md#getdefaults)
- [getId](GeoDownloaderTool.md#getid)
- [getMap](GeoDownloaderTool.md#getmap)
- [getMapForm](GeoDownloaderTool.md#getmapform)
- [getProps](GeoDownloaderTool.md#getprops)
- [getState](GeoDownloaderTool.md#getstate)
- [getType](GeoDownloaderTool.md#gettype)
- [handleEvent](GeoDownloaderTool.md#handleevent)
- [initialize](GeoDownloaderTool.md#initialize)
- [isEnabled](GeoDownloaderTool.md#isenabled)
- [isSingleton](GeoDownloaderTool.md#issingleton)
- [setEnabled](GeoDownloaderTool.md#setenabled)
- [setProps](GeoDownloaderTool.md#setprops)
- [switchEnabled](GeoDownloaderTool.md#switchenabled)

## Constructors

### constructor

• **new GeoDownloaderTool**(`props?`): [`GeoDownloaderTool`](GeoDownloaderTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapToolProps`](../modules.md#imaptoolprops) |

#### Returns

[`GeoDownloaderTool`](GeoDownloaderTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L28)

## Properties

### mapForm

• `Private` **mapForm**: [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L26)

## Methods

### changeForm

▸ **changeForm**(): `void`

Update displayed zoom level in form.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L78)

___

### copy

▸ **copy**(): [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

It creates copy of the uninitialized tool.

#### Returns

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[copy](../interfaces/IGeoDownloaderTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L63)

___

### create

▸ **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[create](../interfaces/IGeoDownloaderTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L67)

___

### createDefaults

▸ **createDefaults**(): [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L43)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L47)

___

### createState

▸ **createState**(): [`IGeoDownloaderToolState`](../modules.md#igeodownloadertoolstate)

It creates new defaults of the tool.

#### Returns

[`IGeoDownloaderToolState`](../modules.md#igeodownloadertoolstate)

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L59)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getAPIGetter](../interfaces/IGeoDownloaderTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getDefaults](../interfaces/IGeoDownloaderTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L39)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getId](../interfaces/IGeoDownloaderTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getMap](../interfaces/IGeoDownloaderTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L32)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getProps](../interfaces/IGeoDownloaderTool.md#getprops)

#### Inherited from

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L39)

___

### getState

▸ **getState**(): [`IGeoDownloaderToolState`](../modules.md#igeodownloadertoolstate)

It returns the map object state.

#### Returns

[`IGeoDownloaderToolState`](../modules.md#igeodownloadertoolstate)

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getState](../interfaces/IGeoDownloaderTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L55)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[getType](../interfaces/IGeoDownloaderTool.md#gettype)

#### Inherited from

[MapTool](MapTool.md).[getType](MapTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Inherited from

[MapTool](MapTool.md).[handleEvent](MapTool.md#handleevent)

#### Defined in

[src/model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L171)

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

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[initialize](../interfaces/IGeoDownloaderTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L51)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[isEnabled](../interfaces/IGeoDownloaderTool.md#isenabled)

#### Inherited from

[MapTool](MapTool.md).[isEnabled](MapTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[isSingleton](../interfaces/IGeoDownloaderTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

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

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[setEnabled](../interfaces/IGeoDownloaderTool.md#setenabled)

#### Overrides

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

#### Defined in

[src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L87)

___

### setProps

▸ **setProps**(`props`): `void`

It updates the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapObjectProps`](../modules.md#imapobjectprops) |

#### Returns

`void`

#### Inherited from

[MapTool](MapTool.md).[setProps](MapTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[IGeoDownloaderTool](../interfaces/IGeoDownloaderTool.md).[switchEnabled](../interfaces/IGeoDownloaderTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
