[geovisto-map](../README.md) / [Exports](../modules.md) / HierarchyTool

# Class: HierarchyTool

Hierarchy tool provides configuration parsing for hierarchy, sets hierarchy trees for geoDataManager and
later dispatches event in case of zoom/geo data change event.

**`Author`**

Malý Vojtěch

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`HierarchyTool`**

## Implements

- [`IMapFormControl`](../interfaces/IMapFormControl.md)
- [`IHierarchyTool`](../interfaces/IHierarchyTool.md)

## Table of contents

### Constructors

- [constructor](HierarchyTool.md#constructor)

### Properties

- [changeLastZoom](HierarchyTool.md#changelastzoom)
- [changeStruct](HierarchyTool.md#changestruct)
- [manager](HierarchyTool.md#manager)
- [mapForm](HierarchyTool.md#mapform)

### Methods

- [copy](HierarchyTool.md#copy)
- [create](HierarchyTool.md#create)
- [createDefaults](HierarchyTool.md#createdefaults)
- [createMapForm](HierarchyTool.md#createmapform)
- [createState](HierarchyTool.md#createstate)
- [getAPIGetter](HierarchyTool.md#getapigetter)
- [getDefaults](HierarchyTool.md#getdefaults)
- [getId](HierarchyTool.md#getid)
- [getMap](HierarchyTool.md#getmap)
- [getMapForm](HierarchyTool.md#getmapform)
- [getProps](HierarchyTool.md#getprops)
- [getState](HierarchyTool.md#getstate)
- [getType](HierarchyTool.md#gettype)
- [handleEvent](HierarchyTool.md#handleevent)
- [initialize](HierarchyTool.md#initialize)
- [isEnabled](HierarchyTool.md#isenabled)
- [isSingleton](HierarchyTool.md#issingleton)
- [setEnabled](HierarchyTool.md#setenabled)
- [setProps](HierarchyTool.md#setprops)
- [switchEnabled](HierarchyTool.md#switchenabled)
- [updateChangeStruct](HierarchyTool.md#updatechangestruct)
- [zoomChanged](HierarchyTool.md#zoomchanged)

## Constructors

### constructor

• **new HierarchyTool**(`props?`): [`HierarchyTool`](HierarchyTool.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IMapToolProps`](../modules.md#imaptoolprops) |

#### Returns

[`HierarchyTool`](HierarchyTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L35)

## Properties

### changeLastZoom

• `Private` **changeLastZoom**: `string`[] = `[]`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L32)

___

### changeStruct

• `Private` **changeStruct**: `Map`\<`string`, [`boolean`, `number`]\>

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L31)

___

### manager

• `Private` **manager**: [`HierarchyToolManager`](HierarchyToolManager.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L28)

___

### mapForm

• `Private` **mapForm**: [`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L27)

## Methods

### copy

▸ **copy**(): [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[copy](../interfaces/IHierarchyTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L76)

___

### create

▸ **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[create](../interfaces/IHierarchyTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L81)

___

### createDefaults

▸ **createDefaults**(): [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L50)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L54)

___

### createState

▸ **createState**(): [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>

It creates new defaults of the tool.

#### Returns

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:72](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L72)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getAPIGetter](../interfaces/IHierarchyTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

It returns default values of the state properties.

#### Returns

[`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md)

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getDefaults](../interfaces/IHierarchyTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L46)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getId](../interfaces/IHierarchyTool.md#getid)

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

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getMap](../interfaces/IHierarchyTool.md#getmap)

#### Inherited from

[MapTool](MapTool.md).[getMap](MapTool.md#getmap)

#### Defined in

[src/model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L112)

___

### getMapForm

▸ **getMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Implementation of

[IMapFormControl](../interfaces/IMapFormControl.md).[getMapForm](../interfaces/IMapFormControl.md#getmapform)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L39)

___

### getProps

▸ **getProps**(): [`IMapToolProps`](../modules.md#imaptoolprops)

Help function which returns the props given by the programmer.

#### Returns

[`IMapToolProps`](../modules.md#imaptoolprops)

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getProps](../interfaces/IHierarchyTool.md#getprops)

#### Inherited from

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/model/internal/tool/MapTool.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L39)

___

### getState

▸ **getState**(): [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>

It returns the map object state.

#### Returns

[`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getState](../interfaces/IHierarchyTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L68)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[getType](../interfaces/IHierarchyTool.md#gettype)

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

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IMapToolConfig`](../modules.md#imaptoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[initialize](../interfaces/IHierarchyTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L58)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[isEnabled](../interfaces/IHierarchyTool.md#isenabled)

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

[IHierarchyTool](../interfaces/IHierarchyTool.md).[isSingleton](../interfaces/IHierarchyTool.md#issingleton)

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

[IHierarchyTool](../interfaces/IHierarchyTool.md).[setEnabled](../interfaces/IHierarchyTool.md#setenabled)

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

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[IHierarchyTool](../interfaces/IHierarchyTool.md).[switchEnabled](../interfaces/IHierarchyTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)

___

### updateChangeStruct

▸ **updateChangeStruct**(`zoom`): `void`

Private method to update data in change structer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zoom` | `number` | New level of zoom. |

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:156](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L156)

___

### zoomChanged

▸ **zoomChanged**(): `void`

Method called whenever zoom changes.

#### Returns

`void`

#### Defined in

[src/tools/hierarchy/model/internal/tool/HierarchyTool.ts:125](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/tool/HierarchyTool.ts#L125)
