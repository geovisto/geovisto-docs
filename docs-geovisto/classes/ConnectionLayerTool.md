**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ConnectionLayerTool

# Class: ConnectionLayerTool

This class represents Connection layer tool. It uses SVG layer and D3 to draw the lines.

## Author

Jiri Hynek

## Extends

- [`AbstractLayerTool`](AbstractLayerTool.md)

## Implements

- [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new ConnectionLayerTool()

> **new ConnectionLayerTool**(`props`?): [`ConnectionLayerTool`](ConnectionLayerTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md)

#### Returns

[`ConnectionLayerTool`](ConnectionLayerTool.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`constructor`](AbstractLayerTool.md#constructors)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:77](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L77)

## Properties

### animateDirectionUtil

> `private` **animateDirectionUtil**: [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L68)

***

### connectionsPaths

> `private` **connectionsPaths**: `Record`\<`string`, `Selection`\<`BaseType`, `any`, `any`, `any`\>\>

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:70](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L70)

***

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L64)

***

### selectionChangeAdapter

> `private` **selectionChangeAdapter**: [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L66)

***

### themeChangeAdapter

> `private` **themeChangeAdapter**: [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:67](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L67)

## Methods

### bucketHashToGeoIds()

> `protected` **bucketHashToGeoIds**(`bucketHash`): `string`[]

It returns the the geo ids (from, to) used in data bucket hash.

#### Parameters

• **bucketHash**: `string`

#### Returns

`string`[]

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:224](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L224)

***

### copy()

> **copy**(): [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>, [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>\>

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`copy`](../interfaces/IConnectionLayerTool.md#copy)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`copy`](AbstractLayerTool.md#copy)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L86)

***

### create()

> **create**(): `this`

It creates new layer with respect to configuration

#### Returns

`this`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`create`](../interfaces/IConnectionLayerTool.md#create)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`create`](AbstractLayerTool.md#create)

#### Source

[model/internal/layer/AbstractLayerTool.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/layer/AbstractLayerTool.ts#L89)

***

### createDefaults()

> `protected` **createDefaults**(): [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createDefaults`](AbstractLayerTool.md#createdefaults)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L107)

***

### createLayerItems()

> `protected` **createLayerItems**(): `Layer`[]

It creates layer items.

#### Returns

`Layer`[]

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createLayerItems`](AbstractLayerTool.md#createlayeritems)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:184](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L184)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:168](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L168)

***

### createState()

> `protected` **createState**(): [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>

It returns default tool state.

#### Returns

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`createState`](AbstractLayerTool.md#createstate)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:121](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L121)

***

### deleteLayerItems()

> `protected` **deleteLayerItems**(): `void`

It deletes layer items.

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:200](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L200)

***

### geoIdsToBucketHash()

> `protected` **geoIdsToBucketHash**(`from`, `to`): `string`

It returns the hash of (from, to) used in data buckets.

#### Parameters

• **from**: `string`

• **to**: `string`

#### Returns

`string`

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:215](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L215)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getAPIGetter`](../interfaces/IConnectionLayerTool.md#getapigetter)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`getAPIGetter`](AbstractLayerTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getAnimateDirectionUtil()

> `protected` **getAnimateDirectionUtil**(): [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

It returns theme change adapter.

#### Returns

[`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:148](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L148)

***

### getDefaults()

> **getDefaults**(): [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md)

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getDefaults`](../interfaces/IConnectionLayerTool.md#getdefaults)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getDefaults`](AbstractLayerTool.md#getdefaults)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:100](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L100)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getId`](../interfaces/IConnectionLayerTool.md#getid)

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

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getLayerItems`](../interfaces/IConnectionLayerTool.md#getlayeritems)

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

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getMap`](../interfaces/IConnectionLayerTool.md#getmap)

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

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L158)

***

### getProps()

> **getProps**(): [`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md)

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getProps`](../interfaces/IConnectionLayerTool.md#getprops)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getProps`](AbstractLayerTool.md#getprops)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L93)

***

### getSelectionChangeAdapter()

> `protected` **getSelectionChangeAdapter**(): [`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

It returns selection change adapter.

#### Returns

[`ConnectionLayerToolSelectionChangeAdapter`](ConnectionLayerToolSelectionChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:128](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L128)

***

### getState()

> **getState**(): [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>

It returns the layer tool state.

#### Returns

[`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../type-aliases/IConnectionLayerToolProps.md), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md), `object`, `object`\>

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getState`](../interfaces/IConnectionLayerTool.md#getstate)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`getState`](AbstractLayerTool.md#getstate)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:114](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L114)

***

### getThemeChangeAdapter()

> `protected` **getThemeChangeAdapter**(): [`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

It returns theme change adapter.

#### Returns

[`ConnectionLayerToolThemeChangeAdapter`](ConnectionLayerToolThemeChangeAdapter.md)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L138)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`getType`](../interfaces/IConnectionLayerTool.md#gettype)

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

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:632](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L632)

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

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IConnectionLayerToolConfig`](../type-aliases/IConnectionLayerToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`initialize`](../interfaces/IConnectionLayerTool.md#initialize)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`initialize`](AbstractLayerTool.md#initialize)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:177](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L177)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`isEnabled`](../interfaces/IConnectionLayerTool.md#isenabled)

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

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`isSingleton`](../interfaces/IConnectionLayerTool.md#issingleton)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`isSingleton`](AbstractLayerTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### render()

> **render**(`type`, `animateOptions`?): `void`

It reloads data and redraw the layer.

#### Parameters

• **type**: `number`

• **animateOptions?**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`render`](../interfaces/IConnectionLayerTool.md#render)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`render`](AbstractLayerTool.md#render)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:578](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L578)

***

### renderConnections()

> `protected` **renderConnections**(`animateOptions`): `void`

This function is called when layer items are rendered.
It uses the D3 force layout simulation to arrange the connections.

#### Parameters

• **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)= `undefined`

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:392](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L392)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes layer state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`setEnabled`](../interfaces/IConnectionLayerTool.md#setenabled)

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

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`switchEnabled`](../interfaces/IConnectionLayerTool.md#switchenabled)

#### Inherited from

[`AbstractLayerTool`](AbstractLayerTool.md).[`switchEnabled`](AbstractLayerTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)

***

### updateData()

> `protected` **updateData**(): `object`

It prepares data for connections.

#### Returns

`object`

##### connections

> **connections**: `Map`\<`string`, [`IMapAggregationBucket`](../interfaces/IMapAggregationBucket.md)\>

##### nodes

> **nodes**: `Set`\<`string`\>

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:231](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L231)

***

### updateDimension()

> **updateDimension**(`dimension`, `value`, `renderType`): `void`

It updates the dimension.

#### Parameters

• **dimension**: [`IMapDimension`](../interfaces/IMapDimension.md)\<`unknown`\>

• **value**: `string`

• **renderType**: `undefined` \| `number`

#### Returns

`void`

#### Implementation of

[`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md).[`updateDimension`](../interfaces/IConnectionLayerTool.md#updatedimension)

#### Overrides

[`AbstractLayerTool`](AbstractLayerTool.md).[`updateDimension`](AbstractLayerTool.md#updatedimension)

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:607](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L607)

***

### updateStyle()

> `protected` **updateStyle**(): `void`

Help method which updates styles

#### Returns

`void`

#### Source

[tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts:566](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/connection/model/internal/tool/ConnectionLayerTool.ts#L566)
