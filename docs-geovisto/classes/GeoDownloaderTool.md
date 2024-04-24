**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDownloaderTool

# Class: GeoDownloaderTool

GeoDownladerTool -- 
Tool providing basic user interface for downloading GeoJSON objects from OverpassAPI.
Objects can be downloaded for more than one administrative level of country. 
Can be also used for generating hierarchy definition in case of downloading polygons.

## Author

Vojtěch Malý

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

## Constructors

### new GeoDownloaderTool()

> **new GeoDownloaderTool**(`props`?): [`GeoDownloaderTool`](GeoDownloaderTool.md)

#### Parameters

• **props?**: [`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Returns

[`GeoDownloaderTool`](GeoDownloaderTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L28)

## Properties

### mapForm

> `private` **mapForm**: [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L26)

## Methods

### changeForm()

> `private` **changeForm**(): `void`

Update displayed zoom level in form.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L78)

***

### copy()

> **copy**(): [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

It creates copy of the uninitialized tool.

#### Returns

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`copy`](../interfaces/IGeoDownloaderTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L63)

***

### create()

> **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`create`](../interfaces/IGeoDownloaderTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L67)

***

### createDefaults()

> **createDefaults**(): [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L43)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L47)

***

### createState()

> **createState**(): [`IGeoDownloaderToolState`](../type-aliases/IGeoDownloaderToolState.md)

It creates new defaults of the tool.

#### Returns

[`IGeoDownloaderToolState`](../type-aliases/IGeoDownloaderToolState.md)

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L59)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getAPIGetter`](../interfaces/IGeoDownloaderTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IGeoDownloaderToolDefaults`](../interfaces/IGeoDownloaderToolDefaults.md)

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getDefaults`](../interfaces/IGeoDownloaderTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L39)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getId`](../interfaces/IGeoDownloaderTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getMap`](../interfaces/IGeoDownloaderTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L32)

***

### getProps()

> **getProps**(): [`IMapToolProps`](../type-aliases/IMapToolProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../type-aliases/IMapToolProps.md)

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getProps`](../interfaces/IGeoDownloaderTool.md#getprops)

#### Inherited from

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L39)

***

### getState()

> **getState**(): [`IGeoDownloaderToolState`](../type-aliases/IGeoDownloaderToolState.md)

It returns the map object state.

#### Returns

[`IGeoDownloaderToolState`](../type-aliases/IGeoDownloaderToolState.md)

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getState`](../interfaces/IGeoDownloaderTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L55)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`getType`](../interfaces/IGeoDownloaderTool.md#gettype)

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

Override this function, if needed.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L171)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`initialize`](../interfaces/IGeoDownloaderTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L51)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`isEnabled`](../interfaces/IGeoDownloaderTool.md#isenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`isEnabled`](MapTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`isSingleton`](../interfaces/IGeoDownloaderTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`setEnabled`](../interfaces/IGeoDownloaderTool.md#setenabled)

#### Overrides

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/tool/GeoDownloaderTool.ts#L87)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md).[`switchEnabled`](../interfaces/IGeoDownloaderTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
