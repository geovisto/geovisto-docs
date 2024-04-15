[geovisto-map](../README.md) / [Exports](../modules.md) / FiltersTool

# Class: FiltersTool

This class wraps filters, sidebar tab and state. It provides methods for filters management.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`FiltersTool`**

## Implements

- [`IFiltersTool`](../interfaces/IFiltersTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](FiltersTool.md#constructor)

### Properties

- [mapForm](FiltersTool.md#mapform)

### Methods

- [copy](FiltersTool.md#copy)
- [create](FiltersTool.md#create)
- [createDefaults](FiltersTool.md#createdefaults)
- [createMapForm](FiltersTool.md#createmapform)
- [createState](FiltersTool.md#createstate)
- [getAPIGetter](FiltersTool.md#getapigetter)
- [getDefaults](FiltersTool.md#getdefaults)
- [getId](FiltersTool.md#getid)
- [getMap](FiltersTool.md#getmap)
- [getMapForm](FiltersTool.md#getmapform)
- [getProps](FiltersTool.md#getprops)
- [getState](FiltersTool.md#getstate)
- [getType](FiltersTool.md#gettype)
- [handleEvent](FiltersTool.md#handleevent)
- [initialize](FiltersTool.md#initialize)
- [isEnabled](FiltersTool.md#isenabled)
- [isSingleton](FiltersTool.md#issingleton)
- [setEnabled](FiltersTool.md#setenabled)
- [setFilterRules](FiltersTool.md#setfilterrules)
- [setProps](FiltersTool.md#setprops)
- [switchEnabled](FiltersTool.md#switchenabled)

## Constructors

### constructor

• **new FiltersTool**(`props?`): [`FiltersTool`](FiltersTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IFiltersToolProps`](../modules.md#ifilterstoolprops) |

#### Returns

[`FiltersTool`](FiltersTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L40)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the state

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L33)

## Methods

### copy

▸ **copy**(): [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\>

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[copy](../interfaces/IFiltersTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L47)

___

### create

▸ **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[create](../interfaces/IFiltersTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L98)

___

### createDefaults

▸ **createDefaults**(): [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L68)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L117)

___

### createState

▸ **createState**(): [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>

It returns default tool state.

#### Returns

[`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:82](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L82)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getAPIGetter](../interfaces/IFiltersTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

It returns default values of the filters tool.

#### Returns

[`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md)

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getDefaults](../interfaces/IFiltersTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L61)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getId](../interfaces/IFiltersTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getMap](../interfaces/IFiltersTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L107)

___

### getProps

▸ **getProps**(): [`IFiltersToolProps`](../modules.md#ifilterstoolprops)

It returns the props given by the programmer.

#### Returns

[`IFiltersToolProps`](../modules.md#ifilterstoolprops)

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getProps](../interfaces/IFiltersTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L54)

___

### getState

▸ **getState**(): [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>

It returns the filters tool state.

#### Returns

[`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getState](../interfaces/IFiltersTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:75](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L75)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[getType](../interfaces/IFiltersTool.md#gettype)

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

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[initialize](../interfaces/IFiltersTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L91)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[isEnabled](../interfaces/IFiltersTool.md#isenabled)

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

[IFiltersTool](../interfaces/IFiltersTool.md).[isSingleton](../interfaces/IFiltersTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It changes filters state to enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[setEnabled](../interfaces/IFiltersTool.md#setenabled)

#### Overrides

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:147](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L147)

___

### setFilterRules

▸ **setFilterRules**(`filterRules`): `void`

It updates filter rules and notifies listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterRules` | [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[] |

#### Returns

`void`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[setFilterRules](../interfaces/IFiltersTool.md#setfilterrules)

#### Defined in

[src/tools/filters/model/internal/tool/FiltersTool.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/tool/FiltersTool.ts#L126)

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

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[IFiltersTool](../interfaces/IFiltersTool.md).[switchEnabled](../interfaces/IFiltersTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
