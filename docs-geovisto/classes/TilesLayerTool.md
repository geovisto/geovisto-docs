**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / TilesLayerTool

# Class: TilesLayerTool

This class represents Map layer tool. It use tile layer and OSM maps.

## Author

Jiri Hynek

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new TilesLayerTool()

> **new TilesLayerTool**(`props`?): [`TilesLayerTool`](TilesLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md)

#### Returns

[`TilesLayerTool`](TilesLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L47)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L40)

***

### themesToolAPI

> `private` **themesToolAPI**: `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L39)

## Methods

### copy()

> **copy**(): [`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`copy`](../interfaces/ITilesLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L54)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`create`](../interfaces/ITilesLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L75)

***

### createLayerItems()

> `protected` **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L136)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:106](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L106)

***

### createState()

> `protected` **createState**(): [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It creates new defaults of the layer tool.

#### Returns

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L89)

***

### createTileLayer()

> `protected` **createTileLayer**(`tilesModel`): `TileLayer`

Creates new tile layer

#### Parameters

• **tilesModel**: [`IMapTilesModel`](../type-aliases/IMapTilesModel.md)

#### Returns

`TileLayer`

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:151](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L151)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getAPIGetter`](../interfaces/ITilesLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md)

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getDefaults`](../interfaces/ITilesLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L68)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getId`](../interfaces/ITilesLayerTool.md#getid)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getLayerItems`](../interfaces/ITilesLayerTool.md#getlayeritems)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getMap`](../interfaces/ITilesLayerTool.md#getmap)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getMap`](AbstractLayerTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a sidebar tab with respect to the configuration.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L96)

***

### getProps()

> **getProps**(): [`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md)

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getProps`](../interfaces/ITilesLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L61)

***

### getState()

> **getState**(): [`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It returns the layer tool state.

#### Returns

[`ITilesLayerToolState`](../interfaces/ITilesLayerToolState.md)\<[`ITilesLayerToolProps`](../type-aliases/ITilesLayerToolProps.md), [`ITilesLayerToolDefaults`](../interfaces/ITilesLayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getState`](../interfaces/ITilesLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L82)

***

### getThemesTool()

> `private` **getThemesTool**(): `undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

Help function which acquires and returns the themes tool if available.

#### Returns

`undefined` \| [`IThemesToolAPI`](../type-aliases/IThemesToolAPI.md)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L114)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`getType`](../interfaces/ITilesLayerTool.md#gettype)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getType`](AbstractLayerTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`handleEvent`](AbstractLayerTool.md#handleevent)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:173](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L173)

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

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`initialize`](../interfaces/ITilesLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L129)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`isEnabled`](../interfaces/ITilesLayerTool.md#isenabled)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`isSingleton`](../interfaces/ITilesLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### onThemeChange()

> `protected` **onThemeChange**(`theme`): `void`

This function updates theme used in the tool.

#### Parameters

• **theme**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Source

[tools/layers/tiles/model/internal/tool/TilesLayerTool.ts:182](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/tiles/model/internal/tool/TilesLayerTool.ts#L182)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`render`](../interfaces/ITilesLayerTool.md#render)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`setEnabled`](../interfaces/ITilesLayerTool.md#setenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`setEnabled`](AbstractLayerTool.md#setenabled)

#### Source

[model/internal/layer/AbstractLayerTool.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L102)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`switchEnabled`](../interfaces/ITilesLayerTool.md#switchenabled)

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

[`ITilesLayerTool`](../interfaces/ITilesLayerTool.md).[`updateDimension`](../interfaces/ITilesLayerTool.md#updatedimension)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L205)
