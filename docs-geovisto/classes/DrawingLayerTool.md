**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DrawingLayerTool

# Class: DrawingLayerTool

This class represents Drawing layer tool.

## Author

Andrej Tlcina

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- `IDrawingLayerTool`
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new DrawingLayerTool()

> **new DrawingLayerTool**(`props`?): [`DrawingLayerTool`](DrawingLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

#### Returns

[`DrawingLayerTool`](DrawingLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L81)

## Properties

### controlDrawingToolbar

> `private` **controlDrawingToolbar**: `any`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L76)

***

### drawingTools

> **drawingTools**: `LooseObject`

#### Implementation of

`IDrawingLayerTool.drawingTools`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L74)

***

### mapForm

> `private` **mapForm**: `DrawingForm`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L75)

## Methods

### applyEventListeners()

> **applyEventListeners**(`layer`): `void`

#### Parameters

• **layer**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.applyEventListeners`

#### Brief

aplies event listeners for each geo. object

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:326](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L326)

***

### copy()

> **copy**(): `IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

It creates a copy of the uninitialized tool.

#### Returns

`IDrawingLayerTool`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, `IDrawingLayerToolConfig`, [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>\>

#### Implementation of

`IDrawingLayerTool.copy`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L102)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

`IDrawingLayerTool.create`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): `IDrawingLayerToolDefaults`

It creates new defaults of the tool.

#### Returns

`IDrawingLayerToolDefaults`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L129)

***

### createLayerItems()

> `protected` **createLayerItems**(): `FeatureGroup`[]

It creates layer items.

#### Returns

`FeatureGroup`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:221](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L221)

***

### createMapForm()

> `protected` **createMapForm**(): `DrawingForm`

It creates new tab control.

#### Returns

`DrawingForm`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L158)

***

### createState()

> `protected` **createState**(): `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It returns default tool state.

#### Returns

`IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L136)

***

### createdListener()

> `private` **createdListener**(`e`): `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

#### Brief

called whenever new geo. object is created

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:280](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L280)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

`IDrawingLayerTool.getAPIGetter`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): `IDrawingLayerToolDefaults`

It returns default values of the state properties.

#### Returns

`IDrawingLayerToolDefaults`

#### Implementation of

`IDrawingLayerTool.getDefaults`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:116](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L116)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

`IDrawingLayerTool.getId`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getId`](AbstractLayerTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getLayerItems()

> **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

`IDrawingLayerTool.getLayerItems`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getLayerItems`](AbstractLayerTool.md#getlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L163)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

`IDrawingLayerTool.getMap`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getMap`](AbstractLayerTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): `DrawingForm`

It returns a tab control.

#### Returns

`DrawingForm`

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:143](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L143)

***

### getProps()

> **getProps**(): [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

#### Implementation of

`IDrawingLayerTool.getProps`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L109)

***

### getState()

> **getState**(): `IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It returns the layer tool state.

#### Returns

`IDrawingLayerToolState`\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), `IDrawingLayerToolDefaults`, `IDrawingLayerToolConfig`, [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Implementation of

`IDrawingLayerTool.getState`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:122](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L122)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

`IDrawingLayerTool.getType`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

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

[`AbstractLayerTool`](AbstractLayerTool.md).[`handleEvent`](AbstractLayerTool.md#handleevent)

#### Source

[model/internal/tool/MapTool.ts:171](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L171)

***

### hideLayerItems()

> `protected` **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`hideLayerItems`](AbstractLayerTool.md#hidelayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L147)

***

### highlightElement()

> **highlightElement**(`el`): `void`

#### Parameters

• **el**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.highlightElement`

#### Brief

highlights element

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:355](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L355)

***

### hightlightOnHover()

> `private` **hightlightOnHover**(`e`): `void`

#### Parameters

• **e**: `TileEvent`

#### Returns

`void`

#### Brief

highlights element on mouse hover

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:366](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L366)

***

### initChangeStyle()

> `private` **initChangeStyle**(`e`): `void`

#### Parameters

• **e**: `LeafletMouseEvent`

#### Returns

`void`

#### Brief

called on object click to change its style accordingly

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:400](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L400)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`IDrawingLayerToolConfig`\>

#### Returns

`this`

#### Implementation of

`IDrawingLayerTool.initialize`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L91)

***

### initializeDrawingTools()

> **initializeDrawingTools**(): `void`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.initializeDrawingTools`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:185](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L185)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerTool.isEnabled`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isEnabled`](AbstractLayerTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

`IDrawingLayerTool.isSingleton`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### normalizeElement()

> **normalizeElement**(`el`): `void`

#### Parameters

• **el**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.normalizeElement`

#### Brief

sets normal styles for element

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:374](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L374)

***

### normalizeOnHover()

> `private` **normalizeOnHover**(`e`): `void`

#### Parameters

• **e**: `TileEvent`

#### Returns

`void`

#### Brief

sets normal styles for element on mouse hover

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:387](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L387)

***

### redrawMapForm()

> **redrawMapForm**(`layerType`): `void`

#### Parameters

• **layerType**: `""` \| `LayerType`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.redrawMapForm`

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:150](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L150)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer with respect to the type.

By default it works with LayerRedrawType

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.render`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[model/internal/layer/AbstractLayerTool.ts:189](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L189)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.setEnabled`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`setEnabled`](AbstractLayerTool.md#setenabled)

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:167](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L167)

***

### setGlobalSimplificationTolerance()

> **setGlobalSimplificationTolerance**(`map`): `void`

#### Parameters

• **map**: `any`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.setGlobalSimplificationTolerance`

#### Brief

sets global tolerance for brush stroke

#### Source

[tools/layers/drawing/DrawingLayerTool.ts:340](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/DrawingLayerTool.ts#L340)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setProps`](AbstractLayerTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### showLayerItems()

> `protected` **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`showLayerItems`](AbstractLayerTool.md#showlayeritems)

#### Source

[model/internal/layer/AbstractLayerTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L126)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.switchEnabled`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\>

• **value**: `string`

• **renderType**: `undefined` \| `number`= `undefined`

#### Returns

`void`

#### Implementation of

`IDrawingLayerTool.updateDimension`

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L205)
