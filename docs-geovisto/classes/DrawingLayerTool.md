[geovisto-map](../README.md) / [Exports](../modules.md) / DrawingLayerTool

# Class: DrawingLayerTool

This class represents Drawing layer tool.

**`Author`**

Andrej Tlcina

## Hierarchy

- [`AbstractLayerTool`](AbstractLayerTool.md)

  ↳ **`DrawingLayerTool`**

## Implements

- `IDrawingLayerTool`
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](DrawingLayerTool.md#constructor)

### Properties

- [controlDrawingToolbar](DrawingLayerTool.md#controldrawingtoolbar)
- [drawingTools](DrawingLayerTool.md#drawingtools)
- [mapForm](DrawingLayerTool.md#mapform)

### Methods

- [applyEventListeners](DrawingLayerTool.md#applyeventlisteners)
- [copy](DrawingLayerTool.md#copy)
- [create](DrawingLayerTool.md#create)
- [createDefaults](DrawingLayerTool.md#createdefaults)
- [createLayerItems](DrawingLayerTool.md#createlayeritems)
- [createMapForm](DrawingLayerTool.md#createmapform)
- [createState](DrawingLayerTool.md#createstate)
- [createdListener](DrawingLayerTool.md#createdlistener)
- [getAPIGetter](DrawingLayerTool.md#getapigetter)
- [getDefaults](DrawingLayerTool.md#getdefaults)
- [getId](DrawingLayerTool.md#getid)
- [getLayerItems](DrawingLayerTool.md#getlayeritems)
- [getMap](DrawingLayerTool.md#getmap)
- [getMapForm](DrawingLayerTool.md#getmapform)
- [getProps](DrawingLayerTool.md#getprops)
- [getState](DrawingLayerTool.md#getstate)
- [getType](DrawingLayerTool.md#gettype)
- [handleEvent](DrawingLayerTool.md#handleevent)
- [hideLayerItems](DrawingLayerTool.md#hidelayeritems)
- [highlightElement](DrawingLayerTool.md#highlightelement)
- [hightlightOnHover](DrawingLayerTool.md#hightlightonhover)
- [initChangeStyle](DrawingLayerTool.md#initchangestyle)
- [initialize](DrawingLayerTool.md#initialize)
- [initializeDrawingTools](DrawingLayerTool.md#initializedrawingtools)
- [isEnabled](DrawingLayerTool.md#isenabled)
- [isSingleton](DrawingLayerTool.md#issingleton)
- [normalizeElement](DrawingLayerTool.md#normalizeelement)
- [normalizeOnHover](DrawingLayerTool.md#normalizeonhover)
- [redrawMapForm](DrawingLayerTool.md#redrawmapform)
- [render](DrawingLayerTool.md#render)
- [setEnabled](DrawingLayerTool.md#setenabled)
- [setGlobalSimplificationTolerance](DrawingLayerTool.md#setglobalsimplificationtolerance)
- [setProps](DrawingLayerTool.md#setprops)
- [showLayerItems](DrawingLayerTool.md#showlayeritems)
- [switchEnabled](DrawingLayerTool.md#switchenabled)
- [updateDimension](DrawingLayerTool.md#updatedimension)

## Constructors

### constructor

• **new DrawingLayerTool**(`props?`): [`DrawingLayerTool`](DrawingLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ILayerToolProps`](../modules.md#ilayertoolprops) |

#### Returns

[`DrawingLayerTool`](DrawingLayerTool.md)

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[constructor](AbstractLayerTool.md#constructor)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L81)

## Properties

### controlDrawingToolbar

• `Private` **controlDrawingToolbar**: `TDrawingToolbar`

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L76)

___

### drawingTools

• **drawingTools**: `LooseObject`

#### Implementation of

IDrawingLayerTool.drawingTools

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L74)

___

### mapForm

• `Private` **mapForm**: `DrawingForm`

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L75)

## Methods

### applyEventListeners

▸ **applyEventListeners**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`void`

**`Brief`**

aplies event listeners for each geo. object

#### Implementation of

IDrawingLayerTool.applyEventListeners

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:326](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L326)

___

### copy

▸ **copy**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

It creates a copy of the uninitialized tool.

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

IDrawingLayerTool.copy

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[copy](AbstractLayerTool.md#copy)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L102)

___

### create

▸ **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

IDrawingLayerTool.create

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[create](AbstractLayerTool.md#create)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L89)

___

### createDefaults

▸ **createDefaults**(): `IDrawingLayerToolDefaults`

It creates new defaults of the tool.

#### Returns

`IDrawingLayerToolDefaults`

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createDefaults](AbstractLayerTool.md#createdefaults)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L129)

___

### createLayerItems

▸ **createLayerItems**(): `FeatureGroup`\<`any`\>[]

It creates layer items.

#### Returns

`FeatureGroup`\<`any`\>[]

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createLayerItems](AbstractLayerTool.md#createlayeritems)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:221](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L221)

___

### createMapForm

▸ **createMapForm**(): `DrawingForm`

It creates new tab control.

#### Returns

`DrawingForm`

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L158)

___

### createState

▸ **createState**(): `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It returns default tool state.

#### Returns

`IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[createState](AbstractLayerTool.md#createstate)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L136)

___

### createdListener

▸ **createdListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `CreatedEvent` |

#### Returns

`void`

**`Brief`**

called whenever new geo. object is created

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:280](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L280)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

IDrawingLayerTool.getAPIGetter

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getAPIGetter](AbstractLayerTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): `IDrawingLayerToolDefaults`

It returns default values of the state properties.

#### Returns

`IDrawingLayerToolDefaults`

#### Implementation of

IDrawingLayerTool.getDefaults

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getDefaults](AbstractLayerTool.md#getdefaults)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:116](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L116)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

IDrawingLayerTool.getId

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

IDrawingLayerTool.getLayerItems

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

IDrawingLayerTool.getMap

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getMap](AbstractLayerTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): `DrawingForm`

It returns a tab control.

#### Returns

`DrawingForm`

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:143](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L143)

___

### getProps

▸ **getProps**(): [`ILayerToolProps`](../modules.md#ilayertoolprops)

It returns the props given by the programmer.

#### Returns

[`ILayerToolProps`](../modules.md#ilayertoolprops)

#### Implementation of

IDrawingLayerTool.getProps

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getProps](AbstractLayerTool.md#getprops)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L109)

___

### getState

▸ **getState**(): `IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

It returns the layer tool state.

#### Returns

`IDrawingLayerToolState`\<[`ILayerToolProps`](../modules.md#ilayertoolprops), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../modules.md#ilayertooldimensionsconfig), [`ILayerToolDimensions`](../modules.md#ilayertooldimensions)\>

#### Implementation of

IDrawingLayerTool.getState

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[getState](AbstractLayerTool.md#getstate)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:122](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L122)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

IDrawingLayerTool.getType

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[getType](AbstractLayerTool.md#gettype)

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

[AbstractLayerTool](AbstractLayerTool.md).[handleEvent](AbstractLayerTool.md#handleevent)

#### Defined in

[src/model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L171)

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

### highlightElement

▸ **highlightElement**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `DrawnObject` |

#### Returns

`void`

**`Brief`**

highlights element

#### Implementation of

IDrawingLayerTool.highlightElement

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:355](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L355)

___

### hightlightOnHover

▸ **hightlightOnHover**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TileEvent` |

#### Returns

`void`

**`Brief`**

highlights element on mouse hover

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:366](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L366)

___

### initChangeStyle

▸ **initChangeStyle**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `LeafletMouseEvent` |

#### Returns

`void`

**`Brief`**

called on object click to change its style accordingly

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:400](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L400)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`IDrawingLayerToolConfig`\> |

#### Returns

`this`

#### Implementation of

IDrawingLayerTool.initialize

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[initialize](AbstractLayerTool.md#initialize)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L91)

___

### initializeDrawingTools

▸ **initializeDrawingTools**(): `void`

#### Returns

`void`

#### Implementation of

IDrawingLayerTool.initializeDrawingTools

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:185](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L185)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

IDrawingLayerTool.isEnabled

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

IDrawingLayerTool.isSingleton

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[isSingleton](AbstractLayerTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### normalizeElement

▸ **normalizeElement**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `DrawnObject` |

#### Returns

`void`

**`Brief`**

sets normal styles for element

#### Implementation of

IDrawingLayerTool.normalizeElement

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:374](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L374)

___

### normalizeOnHover

▸ **normalizeOnHover**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `TileEvent` |

#### Returns

`void`

**`Brief`**

sets normal styles for element on mouse hover

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:387](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L387)

___

### redrawMapForm

▸ **redrawMapForm**(`layerType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layerType` | ``""`` \| `LayerType` |

#### Returns

`void`

#### Implementation of

IDrawingLayerTool.redrawMapForm

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:150](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L150)

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

IDrawingLayerTool.render

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

IDrawingLayerTool.setEnabled

#### Overrides

[AbstractLayerTool](AbstractLayerTool.md).[setEnabled](AbstractLayerTool.md#setenabled)

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:167](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L167)

___

### setGlobalSimplificationTolerance

▸ **setGlobalSimplificationTolerance**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `undefined` \| `Map` |

#### Returns

`void`

**`Brief`**

sets global tolerance for brush stroke

#### Implementation of

IDrawingLayerTool.setGlobalSimplificationTolerance

#### Defined in

[src/tools/layers/drawing/DrawingLayerTool.ts:340](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/DrawingLayerTool.ts#L340)

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

IDrawingLayerTool.switchEnabled

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

IDrawingLayerTool.updateDimension

#### Inherited from

[AbstractLayerTool](AbstractLayerTool.md).[updateDimension](AbstractLayerTool.md#updatedimension)

#### Defined in

[src/model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/layer/AbstractLayerTool.ts#L205)
