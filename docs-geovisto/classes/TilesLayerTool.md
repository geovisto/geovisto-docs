[geovisto-map](../README.md) / [Exports](../modules.md) / TilesLayerTool

# Class: TilesLayerTool

This class represents Map layer tool. It use tile layer and OSM maps.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`TilesLayerTool`**

## Implements

- [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](TilesLayerTool.md#constructor)

### Properties

- [mapForm](TilesLayerTool.md#mapform)
- [themesToolAPI](TilesLayerTool.md#themestoolapi)

### Methods

- [copy](TilesLayerTool.md#copy)
- [create](TilesLayerTool.md#create)
- [createDefaults](TilesLayerTool.md#createdefaults)
- [createLayerItems](TilesLayerTool.md#createlayeritems)
- [createMapForm](TilesLayerTool.md#createmapform)
- [createState](TilesLayerTool.md#createstate)
- [createTileLayer](TilesLayerTool.md#createtilelayer)
- [getAPIGetter](TilesLayerTool.md#getapigetter)
- [getDefaults](TilesLayerTool.md#getdefaults)
- [getId](TilesLayerTool.md#getid)
- [getLayerItems](TilesLayerTool.md#getlayeritems)
- [getMap](TilesLayerTool.md#getmap)
- [getMapForm](TilesLayerTool.md#getmapform)
- [getProps](TilesLayerTool.md#getprops)
- [getState](TilesLayerTool.md#getstate)
- [getThemesTool](TilesLayerTool.md#getthemestool)
- [getType](TilesLayerTool.md#gettype)
- [handleEvent](TilesLayerTool.md#handleevent)
- [hideLayerItems](TilesLayerTool.md#hidelayeritems)
- [initialize](TilesLayerTool.md#initialize)
- [isEnabled](TilesLayerTool.md#isenabled)
- [isSingleton](TilesLayerTool.md#issingleton)
- [onThemeChange](TilesLayerTool.md#onthemechange)
- [render](TilesLayerTool.md#render)
- [setEnabled](TilesLayerTool.md#setenabled)
- [setProps](TilesLayerTool.md#setprops)
- [showLayerItems](TilesLayerTool.md#showlayeritems)
- [switchEnabled](TilesLayerTool.md#switchenabled)
- [updateDimension](TilesLayerTool.md#updatedimension)

## Constructors

### constructor

• **new TilesLayerTool**(`props?`): [`TilesLayerTool`](TilesLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ITilesLayerToolProps`](../modules.md#itileslayertoolprops) |

#### Returns

[`TilesLayerTool`](TilesLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L47)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L40)

___

### themesToolAPI

• `Private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L39)

## Methods

### copy

▸ **copy**(): [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\>

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[copy](../interfaces/ITilesLayerTool.md#copy)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L54)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[create](../interfaces/ITilesLayerTool.md#create)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L75)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L136)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:106](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L106)

___

### createState

▸ **createState**(): [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It creates new defaults of the layer tool.

#### Returns

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L89)

___

### createTileLayer

▸ **createTileLayer**(`tilesModel`): `TileLayer`

Creates new tile layer

#### Parameters

| Name | Type |
| :------ | :------ |
| `tilesModel` | [`IMapTilesModel`](../modules.md#imaptilesmodel) |

#### Returns

`TileLayer`

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:151](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L151)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getAPIGetter](../interfaces/ITilesLayerTool.md#getapigetter)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getDefaults](../interfaces/ITilesLayerTool.md#getdefaults)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L68)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getId](../interfaces/ITilesLayerTool.md#getid)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getId](AbstractLayerTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getLayerItems](../interfaces/ITilesLayerTool.md#getlayeritems)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getLayerItems](AbstractLayerTool.md#getlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L163)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getMap](../interfaces/ITilesLayerTool.md#getmap)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L96)

___

### getProps

▸ **getProps**(): [`ITilesLayerToolProps`](../modules.md#itileslayertoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops)

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getProps](../interfaces/ITilesLayerTool.md#getprops)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L61)

___

### getState

▸ **getState**(): [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It returns the layer tool state.

#### Returns

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../modules.md#itileslayertoolprops), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getState](../interfaces/ITilesLayerTool.md#getstate)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L82)

___

### getThemesTool

▸ **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../modules.md#ithemestoolapi)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L114)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[getType](../interfaces/ITilesLayerTool.md#gettype)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

#### Defined in

[src/model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L86)

___

### handleEvent

▸ **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>\> |

#### Returns

`void`

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:173](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L173)

___

### hideLayerItems

▸ **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[hideLayerItems](AbstractLayerTool.md#hidelayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L147)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[initialize](../interfaces/ITilesLayerTool.md#initialize)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L129)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[isEnabled](../interfaces/ITilesLayerTool.md#isenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isEnabled](AbstractLayerTool.md#isenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L130)

___

### isSingleton

▸ **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[isSingleton](../interfaces/ITilesLayerTool.md#issingleton)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### onThemeChange

▸ **onThemeChange**(`theme`): `void`

This function updates theme used in the tool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`IMapTheme`](../interfaces/IMapTheme.md) |

#### Returns

`void`

#### Defined in

[src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:182](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L182)

___

### render

▸ **render**(`type`, `animateOptions?`): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `animateOptions?` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[render](../interfaces/ITilesLayerTool.md#render)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[render](AbstractLayerTool.md#render)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:189](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L189)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[setEnabled](../interfaces/ITilesLayerTool.md#setenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[setEnabled](AbstractLayerTool.md#setenabled)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L102)

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

[AbstractLayerTool](AbstractLayerTool.md).[setProps](AbstractLayerTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### showLayerItems

▸ **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[showLayerItems](AbstractLayerTool.md#showlayeritems)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L126)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[switchEnabled](../interfaces/ITilesLayerTool.md#switchenabled)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[switchEnabled](AbstractLayerTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateDimension

▸ **updateDimension**(`dimension`, `value`, `renderType?`): `void`

It updates the dimension.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dimension` | [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\> | `undefined` |
| `value` | `string` | `undefined` |
| `renderType` | `undefined` \| `number` | `undefined` |

#### Returns

`void`

#### Implementation of

[ITilesLayerTool](../interfaces/ITilesLayerTool.md).[updateDimension](../interfaces/ITilesLayerTool.md#updatedimension)

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L205)
