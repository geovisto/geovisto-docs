**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FiltersTool

# Class: FiltersTool

This class wraps filters, sidebar tab and state. It provides methods for filters management.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`IFiltersTool`](../interfaces/IFiltersTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Constructors

### new FiltersTool()

> **new FiltersTool**(`props`?): [`FiltersTool`](FiltersTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

#### Returns

[`FiltersTool`](FiltersTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L40)

## Properties

### mapForm

> `private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the state

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L33)

## Methods

### copy()

> **copy**(): [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`copy`](../interfaces/IFiltersTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L47)

***

### create()

> **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`create`](../interfaces/IFiltersTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L98)

***

### createDefaults()

> **createDefaults**(): [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L68)

***

### createMapForm()

> `protected` **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L117)

***

### createState()

> **createState**(): [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

It returns default tool state.

#### Returns

[`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:82](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L82)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getAPIGetter`](../interfaces/IFiltersTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

It returns default values of the filters tool.

#### Returns

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getDefaults`](../interfaces/IFiltersTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L61)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getId`](../interfaces/IFiltersTool.md#getid)

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

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getMap`](../interfaces/IFiltersTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getMapForm()

> **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[`IMapFormControl`](../interfaces/IMapFormControl.md).[`getMapForm`](../interfaces/IMapFormControl.md#getmapform)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L107)

***

### getProps()

> **getProps**(): [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

It returns the props given by the programmer.

#### Returns

[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getProps`](../interfaces/IFiltersTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L54)

***

### getState()

> **getState**(): [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

It returns the filters tool state.

#### Returns

[`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getState`](../interfaces/IFiltersTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:75](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L75)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`getType`](../interfaces/IFiltersTool.md#gettype)

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

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`initialize`](../interfaces/IFiltersTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L91)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`isEnabled`](../interfaces/IFiltersTool.md#isenabled)

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

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`isSingleton`](../interfaces/IFiltersTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It changes filters state to enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`setEnabled`](../interfaces/IFiltersTool.md#setenabled)

#### Overrides

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:147](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L147)

***

### setFilterRules()

> **setFilterRules**(`filterRules`): `void`

It updates filter rules and notifies listeners.

#### Parameters

• **filterRules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Returns

`void`

#### Implementation of

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`setFilterRules`](../interfaces/IFiltersTool.md#setfilterrules)

#### Source

[tools/filters/model/internal/tool/FiltersTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/tool/FiltersTool.ts#L126)

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

[`IFiltersTool`](../interfaces/IFiltersTool.md).[`switchEnabled`](../interfaces/IFiltersTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
