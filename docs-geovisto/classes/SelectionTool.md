[geovisto-map](../README.md) / [Exports](../modules.md) / SelectionTool

# Class: SelectionTool

This class provides the selection tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`SelectionTool`**

## Implements

- [`ISelectionTool`](../interfaces/ISelectionTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](SelectionTool.md#constructor)

### Properties

- [mapForm](SelectionTool.md#mapform)
- [api](SelectionTool.md#api)

### Methods

- [copy](SelectionTool.md#copy)
- [create](SelectionTool.md#create)
- [createDefaults](SelectionTool.md#createdefaults)
- [createMapForm](SelectionTool.md#createmapform)
- [createState](SelectionTool.md#createstate)
- [getAPIGetter](SelectionTool.md#getapigetter)
- [getDefaults](SelectionTool.md#getdefaults)
- [getId](SelectionTool.md#getid)
- [getMap](SelectionTool.md#getmap)
- [getMapForm](SelectionTool.md#getmapform)
- [getProps](SelectionTool.md#getprops)
- [getState](SelectionTool.md#getstate)
- [getType](SelectionTool.md#gettype)
- [handleEvent](SelectionTool.md#handleevent)
- [initialize](SelectionTool.md#initialize)
- [initializeAPI](SelectionTool.md#initializeapi)
- [isEnabled](SelectionTool.md#isenabled)
- [isSingleton](SelectionTool.md#issingleton)
- [setEnabled](SelectionTool.md#setenabled)
- [setProps](SelectionTool.md#setprops)
- [setSelection](SelectionTool.md#setselection)
- [switchEnabled](SelectionTool.md#switchenabled)

## Constructors

### constructor

• **new SelectionTool**(`props?`): [`SelectionTool`](SelectionTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`ISelectionToolProps`](../modules.md#iselectiontoolprops) |

#### Returns

[`SelectionTool`](SelectionTool.md)

**`Paramps`**

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L49)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

TODO: move to the tool state.

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L42)

___

### api

▪ `Static` `Private` **api**: [`ISelectionToolAPI`](../modules.md#iselectiontoolapi) = `SelectionToolAPI`

tool api

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L37)

## Methods

### copy

▸ **copy**(): [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\>

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[copy](../interfaces/ISelectionTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L56)

___

### create

▸ **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[create](../interfaces/ISelectionTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:127](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L127)

___

### createDefaults

▸ **createDefaults**(): [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:77](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L77)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new tab control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:162](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L162)

___

### createState

▸ **createState**(): [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>

It creates the tool state.

#### Returns

[`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L91)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`ISelectionToolAPIGetter`](../modules.md#iselectiontoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`ISelectionToolAPIGetter`](../modules.md#iselectiontoolapigetter)

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getAPIGetter](../interfaces/ISelectionTool.md#getapigetter)

#### Overrides

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L98)

___

### getDefaults

▸ **getDefaults**(): [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

It returns default values of the selection tool.

#### Returns

[`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getDefaults](../interfaces/ISelectionTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L70)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getId](../interfaces/ISelectionTool.md#getid)

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

[ISelectionTool](../interfaces/ISelectionTool.md).[getMap](../interfaces/ISelectionTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a tab fragment.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:152](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L152)

___

### getProps

▸ **getProps**(): [`ISelectionToolProps`](../modules.md#iselectiontoolprops)

It returns the props given by the programmer.

#### Returns

[`ISelectionToolProps`](../modules.md#iselectiontoolprops)

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getProps](../interfaces/ISelectionTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L63)

___

### getState

▸ **getState**(): [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>

It returns the selection tool state.

#### Returns

[`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getState](../interfaces/ISelectionTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:84](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L84)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[getType](../interfaces/ISelectionTool.md#gettype)

#### Inherited from

[MapTool](MapTool.md).[getType](MapTool.md#gettype)

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

[MapTool](MapTool.md).[handleEvent](MapTool.md#handleevent)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:171](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L171)

___

### initialize

▸ **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\> |

#### Returns

`this`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[initialize](../interfaces/ISelectionTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L109)

___

### initializeAPI

▸ **initializeAPI**(): `void`

Help method which initializes the API.

#### Returns

`void`

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L117)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[isEnabled](../interfaces/ISelectionTool.md#isenabled)

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

[ISelectionTool](../interfaces/ISelectionTool.md).[isSingleton](../interfaces/ISelectionTool.md#issingleton)

#### Inherited from

[MapTool](MapTool.md).[isSingleton](MapTool.md#issingleton)

#### Defined in

[src/model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L81)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[setEnabled](../interfaces/ISelectionTool.md#setenabled)

#### Inherited from

[MapTool](MapTool.md).[setEnabled](MapTool.md#setenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L142)

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

### setSelection

▸ **setSelection**(`selection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md) |

#### Returns

`void`

**`Paramection`**

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[setSelection](../interfaces/ISelectionTool.md#setselection)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionTool.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionTool.ts#L138)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[ISelectionTool](../interfaces/ISelectionTool.md).[switchEnabled](../interfaces/ISelectionTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
