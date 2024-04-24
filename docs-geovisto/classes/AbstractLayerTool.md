**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / AbstractLayerTool

# Class: `abstract` AbstractLayerTool

This class wraps filter tool. It provides methods for layer management.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`ILayerTool`](../interfaces/ILayerTool.md)

## Constructors

### new AbstractLayerTool()

> **new AbstractLayerTool**(`props`?): [`AbstractLayerTool`](AbstractLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

#### Returns

[`AbstractLayerTool`](AbstractLayerTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[model/internal/layer/AbstractLayerTool.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L29)

## Methods

### copy()

> `abstract` **copy**(): [`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

It creates a copy of the uninitialized layer tool.

#### Returns

[`ILayerTool`](../interfaces/ILayerTool.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>, [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>\>

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`copy`](../interfaces/ILayerTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[model/internal/layer/AbstractLayerTool.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L36)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`create`](../interfaces/ILayerTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

It creates new defaults of the layer tool.

#### Returns

[`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[model/internal/layer/AbstractLayerTool.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L55)

***

### createLayerItems()

> `protected` `abstract` **createLayerItems**(): `Layer`[]

It creates layer items.

Override this function.

#### Returns

`Layer`[]

#### Source

[model/internal/layer/AbstractLayerTool.ts:179](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L179)

***

### createState()

> `protected` **createState**(): [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It creates new defaults of the layer tool.

#### Returns

[`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[model/internal/layer/AbstractLayerTool.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L69)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getAPIGetter`](../interfaces/ILayerTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md)

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getDefaults`](../interfaces/ILayerTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[model/internal/layer/AbstractLayerTool.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L48)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getId`](../interfaces/ILayerTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getLayerItems()

> **getLayerItems**(): `Layer`[]

It returns layer items which should be rendered.

#### Returns

`Layer`[]

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getLayerItems`](../interfaces/ILayerTool.md#getlayeritems)

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`getMap`](../interfaces/ILayerTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getProps()

> **getProps**(): [`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

Help function which returns the props given by the programmer.

#### Returns

[`ILayerToolProps`](../type-aliases/ILayerToolProps.md)

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getProps`](../interfaces/ILayerTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[model/internal/layer/AbstractLayerTool.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L41)

***

### getState()

> **getState**(): [`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

It returns the layer tool state.

#### Returns

[`ILayerToolState`](../interfaces/ILayerToolState.md)\<[`ILayerToolProps`](../type-aliases/ILayerToolProps.md), [`ILayerToolDefaults`](../interfaces/ILayerToolDefaults.md), [`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md), [`ILayerToolDimensionsConfig`](../type-aliases/ILayerToolDimensionsConfig.md), [`ILayerToolDimensions`](../type-aliases/ILayerToolDimensions.md)\>

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getState`](../interfaces/ILayerTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[model/internal/layer/AbstractLayerTool.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L62)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`getType`](../interfaces/ILayerTool.md#gettype)

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

### hideLayerItems()

> `protected` **hideLayerItems**(): `void`

Help function which hides layer items

This function is meant to be private.

#### Returns

`void`

#### Source

[model/internal/layer/AbstractLayerTool.ts:147](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L147)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the layer tool.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ILayerToolConfig`](../type-aliases/ILayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`initialize`](../interfaces/ILayerTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[model/internal/layer/AbstractLayerTool.ts:82](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L82)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ILayerTool`](../interfaces/ILayerTool.md).[`isEnabled`](../interfaces/ILayerTool.md#isenabled)

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`isSingleton`](../interfaces/ILayerTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`render`](../interfaces/ILayerTool.md#render)

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`setEnabled`](../interfaces/ILayerTool.md#setenabled)

#### Overrides

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

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

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### showLayerItems()

> `protected` **showLayerItems**(): `void`

Help function which shows layer items.

This function is meant to be private.

#### Returns

`void`

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`switchEnabled`](../interfaces/ILayerTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

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

[`ILayerTool`](../interfaces/ILayerTool.md).[`updateDimension`](../interfaces/ILayerTool.md#updatedimension)

#### Source

[model/internal/layer/AbstractLayerTool.ts:205](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L205)
