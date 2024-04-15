[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractLayerTool

# Class: AbstractLayerTool

This class wraps filter tool. It provides methods for layer management.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`AbstractLayerTool`**

  ↳↳ [`BubbleLayerTool`](BubbleLayerTool.md)

  ↳↳ [`ConnectionLayerTool`](ConnectionLayerTool.md)

  ↳↳ [`DotLayerTool`](DotLayerTool.md)

  ↳↳ [`DrawingLayerTool`](DrawingLayerTool.md)

  ↳↳ [`HeatLayerTool`](HeatLayerTool.md)

  ↳↳ [`ChoroplethLayerTool`](ChoroplethLayerTool.md)

  ↳↳ [`MarkerLayerTool`](MarkerLayerTool.md)

  ↳↳ [`SpikeLayerTool`](SpikeLayerTool.md)

  ↳↳ [`TilesLayerTool`](TilesLayerTool.md)

  ↳↳ [`TimelineTool`](TimelineTool.md)

## Implements

- [`ILayerTool`](../interfaces/ILayerTool.md)

## Table of contents

### Constructors

- [constructor](AbstractLayerTool.md#constructor)

### Methods

- [copy](AbstractLayerTool.md#copy)
- [create](AbstractLayerTool.md#create)
- [createDefaults](AbstractLayerTool.md#createdefaults)
- [createLayerItems](AbstractLayerTool.md#createlayeritems)
- [createState](AbstractLayerTool.md#createstate)
- [getAPIGetter](AbstractLayerTool.md#getapigetter)
- [getDefaults](AbstractLayerTool.md#getdefaults)
- [getId](AbstractLayerTool.md#getid)
- [getLayerItems](AbstractLayerTool.md#getlayeritems)
- [getMap](AbstractLayerTool.md#getmap)
- [getProps](AbstractLayerTool.md#getprops)
- [getState](AbstractLayerTool.md#getstate)
- [getType](AbstractLayerTool.md#gettype)
- [handleEvent](AbstractLayerTool.md#handleevent)
- [hideLayerItems](AbstractLayerTool.md#hidelayeritems)
- [initialize](AbstractLayerTool.md#initialize)
- [isEnabled](AbstractLayerTool.md#isenabled)
- [isSingleton](AbstractLayerTool.md#issingleton)
- [render](AbstractLayerTool.md#render)
- [setEnabled](AbstractLayerTool.md#setenabled)
- [setProps](AbstractLayerTool.md#setprops)
- [showLayerItems](AbstractLayerTool.md#showlayeritems)
- [switchEnabled](AbstractLayerTool.md#switchenabled)
- [updateDimension](AbstractLayerTool.md#updatedimension)

## Constructors

### constructor

• **new AbstractLayerTool**(`props?`): [`AbstractLayerTool`](AbstractLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ILayerToolProps`](../modules.md#ilayertoolprops) |

#### Returns

[`AbstractLayerTool`](AbstractLayerTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L29)

## Methods

### copy

▸ **copy**(): [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\>

It creates a copy of the uninitialized layer tool.

#### Returns

[`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\>\>

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[copy](../interfaces/ILayerTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L36)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[create](../interfaces/ILayerTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L55)

___

### createLayerItems

▸ **createLayerItems**(): `Layer`[]

It creates layer items.

Override this function.

#### Returns

`Layer`[]

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:179](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L179)

___

### createState

▸ **createState**(): [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It creates new defaults of the layer tool.

#### Returns

[`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L69)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getAPIGetter](../interfaces/ILayerTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getDefaults](../interfaces/ILayerTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L48)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getId](../interfaces/ILayerTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getLayerItems

▸ **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getLayerItems](../interfaces/ILayerTool.md#getlayeritems)

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

[ILayerTool](../interfaces/ILayerTool.md).[getMap](../interfaces/ILayerTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getProps

▸ **getProps**(): [`ILayerToolProps`](../modules.md#ilayertoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`ILayerToolProps`](../modules.md#ilayertoolprops)

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getProps](../interfaces/ILayerTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L41)

___

### getState

▸ **getState**(): [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It returns the layer tool state.

#### Returns

[`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../modules.md#ilayertoolprops), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../modules.md#ilayertoolconfig), [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getState](../interfaces/ILayerTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L62)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[getType](../interfaces/ILayerTool.md#gettype)

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

### hideLayerItems

▸ **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L147)

___

### initialize

▸ **initialize**(`initProps`): `this`

It initializes the state of the layer tool.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILayerToolConfig`](../modules.md#ilayertoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[initialize](../interfaces/ILayerTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L82)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ILayerTool](../interfaces/ILayerTool.md).[isEnabled](../interfaces/ILayerTool.md#isenabled)

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

[ILayerTool](../interfaces/ILayerTool.md).[isSingleton](../interfaces/ILayerTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

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

[ILayerTool](../interfaces/ILayerTool.md).[render](../interfaces/ILayerTool.md#render)

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

[ILayerTool](../interfaces/ILayerTool.md).[setEnabled](../interfaces/ILayerTool.md#setenabled)

#### Overrides

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

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

[MapTool](MapTool.md).[setProps](MapTool.md#setprops)

#### Defined in

[src/model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L38)

___

### showLayerItems

▸ **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

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

[ILayerTool](../interfaces/ILayerTool.md).[switchEnabled](../interfaces/ILayerTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

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

[ILayerTool](../interfaces/ILayerTool.md).[updateDimension](../interfaces/ILayerTool.md#updatedimension)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L205)
