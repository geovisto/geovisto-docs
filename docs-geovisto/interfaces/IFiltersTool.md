**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IFiltersTool

# Interface: IFiltersTool\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares the  filter tool.
It provides methods for filters management.

## Author

Jiri Hynek

## Extends

- [`IMapTool`](IMapTool.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

## Type parameters

• **TProps** *extends* [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md) = [`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md)

• **TDefaults** *extends* [`IFiltersToolDefaults`](IFiltersToolDefaults.md) = [`IFiltersToolDefaults`](IFiltersToolDefaults.md)

• **TState** *extends* [`IFiltersToolState`](IFiltersToolState.md) = [`IFiltersToolState`](IFiltersToolState.md)

• **TConfig** *extends* [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md) = [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)

• **TInitProps** *extends* [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\> = [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\>

## Methods

### copy()

> **copy**(): [`IFiltersTool`](IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](IFiltersToolDefaults.md), [`IFiltersToolState`](IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IFiltersTool`](IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](IFiltersToolDefaults.md), [`IFiltersToolState`](IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Overrides

[`IMapTool`](IMapTool.md).[`copy`](IMapTool.md#copy)

#### Source

[tools/filters/model/types/tool/IFiltersTool.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/types/tool/IFiltersTool.ts#L30)

***

### create()

> **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Inherited from

[`IMapTool`](IMapTool.md).[`create`](IMapTool.md#create)

#### Source

[model/types/tool/IMapTool.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L47)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)\<[`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool API.

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)\<[`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Inherited from

[`IMapTool`](IMapTool.md).[`getAPIGetter`](IMapTool.md#getapigetter)

#### Source

[model/types/tool/IMapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L32)

***

### getDefaults()

> **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[`IMapTool`](IMapTool.md).[`getDefaults`](IMapTool.md#getdefaults)

#### Source

[model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L27)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[`IMapTool`](IMapTool.md).[`getId`](IMapTool.md#getid)

#### Source

[model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L42)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function which returns map which uses this tool.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Inherited from

[`IMapTool`](IMapTool.md).[`getMap`](IMapTool.md#getmap)

#### Source

[model/types/tool/IMapTool.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L42)

***

### getProps()

> **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[`IMapTool`](IMapTool.md).[`getProps`](IMapTool.md#getprops)

#### Source

[model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L22)

***

### getState()

> **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[`IMapTool`](IMapTool.md).[`getState`](IMapTool.md#getstate)

#### Source

[model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L32)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[`IMapTool`](IMapTool.md).[`getType`](IMapTool.md#gettype)

#### Source

[model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L37)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: `TInitProps`

#### Returns

`this`

#### Inherited from

[`IMapTool`](IMapTool.md).[`initialize`](IMapTool.md#initialize)

#### Source

[model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L53)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

#### Returns

`boolean`

#### Inherited from

[`IMapTool`](IMapTool.md).[`isEnabled`](IMapTool.md#isenabled)

#### Source

[model/types/tool/IMapTool.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L52)

***

### isSingleton()

> **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[`IMapTool`](IMapTool.md).[`isSingleton`](IMapTool.md#issingleton)

#### Source

[model/types/tool/IMapTool.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L37)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Inherited from

[`IMapTool`](IMapTool.md).[`setEnabled`](IMapTool.md#setenabled)

#### Source

[model/types/tool/IMapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L60)

***

### setFilterRules()

> **setFilterRules**(`filterRules`): `void`

It updates filter rules and notifies listeners.

#### Parameters

• **filterRules**: [`IMapFilterRule`](IMapFilterRule.md)[]

#### Returns

`void`

#### Source

[tools/filters/model/types/tool/IFiltersTool.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/types/tool/IFiltersTool.ts#L37)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches the enabled state (enabled/disabled).

#### Returns

`void`

#### Inherited from

[`IMapTool`](IMapTool.md).[`switchEnabled`](IMapTool.md#switchenabled)

#### Source

[model/types/tool/IMapTool.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapTool.ts#L65)
