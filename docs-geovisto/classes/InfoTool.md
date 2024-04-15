[geovisto-map](../README.md) / [Exports](../modules.md) / InfoTool

# Class: InfoTool

This class implements Info Tool

**`Author`**

Jiri Hynek
    IMap,

## Hierarchy

- [`MapTool`](MapTool.md)

  ↳ **`InfoTool`**

## Implements

- [`IInfoTool`](../interfaces/IInfoTool.md)
- [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Table of contents

### Constructors

- [constructor](InfoTool.md#constructor)

### Properties

- [mapForm](InfoTool.md#mapform)

### Methods

- [copy](InfoTool.md#copy)
- [create](InfoTool.md#create)
- [createDefaults](InfoTool.md#createdefaults)
- [createMapForm](InfoTool.md#createmapform)
- [createState](InfoTool.md#createstate)
- [getAPIGetter](InfoTool.md#getapigetter)
- [getDefaults](InfoTool.md#getdefaults)
- [getId](InfoTool.md#getid)
- [getInfo](InfoTool.md#getinfo)
- [getMap](InfoTool.md#getmap)
- [getMapForm](InfoTool.md#getmapform)
- [getProps](InfoTool.md#getprops)
- [getState](InfoTool.md#getstate)
- [getType](InfoTool.md#gettype)
- [handleEvent](InfoTool.md#handleevent)
- [initialize](InfoTool.md#initialize)
- [isEnabled](InfoTool.md#isenabled)
- [isSingleton](InfoTool.md#issingleton)
- [setEnabled](InfoTool.md#setenabled)
- [setProps](InfoTool.md#setprops)
- [switchEnabled](InfoTool.md#switchenabled)

## Constructors

### constructor

• **new InfoTool**(`props?`): [`InfoTool`](InfoTool.md)

It creates a new tool with respect to the props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | [`IInfoToolProps`](../modules.md#iinfotoolprops) |

#### Returns

[`InfoTool`](InfoTool.md)

#### Overrides

[MapTool](MapTool.md).[constructor](MapTool.md#constructor)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L36)

## Properties

### mapForm

• `Private` **mapForm**: [`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L29)

## Methods

### copy

▸ **copy**(): [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\>

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[copy](../interfaces/IInfoTool.md#copy)

#### Overrides

[MapTool](MapTool.md).[copy](MapTool.md#copy)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L43)

___

### create

▸ **create**(): `this`

It creates new filter tool.

#### Returns

`this`

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[create](../interfaces/IInfoTool.md#create)

#### Overrides

[MapTool](MapTool.md).[create](MapTool.md#create)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:94](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L94)

___

### createDefaults

▸ **createDefaults**(): [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

#### Overrides

[MapTool](MapTool.md).[createDefaults](MapTool.md#createdefaults)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L64)

___

### createMapForm

▸ **createMapForm**(): [`IMapForm`](../interfaces/IMapForm.md)

It creates new map form.

#### Returns

[`IMapForm`](../interfaces/IMapForm.md)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:112](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L112)

___

### createState

▸ **createState**(): [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>

It returns default tool state.

#### Returns

[`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>

#### Overrides

[MapTool](MapTool.md).[createState](MapTool.md#createstate)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:78](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L78)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getAPIGetter](../interfaces/IInfoTool.md#getapigetter)

#### Inherited from

[MapTool](MapTool.md).[getAPIGetter](MapTool.md#getapigetter)

#### Defined in

[src/model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L74)

___

### getDefaults

▸ **getDefaults**(): [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

It returns default values of the filters tool.

#### Returns

[`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getDefaults](../interfaces/IInfoTool.md#getdefaults)

#### Overrides

[MapTool](MapTool.md).[getDefaults](MapTool.md#getdefaults)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L57)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getId](../interfaces/IInfoTool.md#getid)

#### Inherited from

[MapTool](MapTool.md).[getId](MapTool.md#getid)

#### Defined in

[src/model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObject.ts#L93)

___

### getInfo

▸ **getInfo**(): `void`

It creates a new map form.

#### Returns

`void`

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L120)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getMap](../interfaces/IInfoTool.md#getmap)

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

[src/tools/info/model/internal/tool/InfoTool.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L102)

___

### getProps

▸ **getProps**(): [`IInfoToolProps`](../modules.md#iinfotoolprops)

It returns the props given by the programmer.

#### Returns

[`IInfoToolProps`](../modules.md#iinfotoolprops)

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getProps](../interfaces/IInfoTool.md#getprops)

#### Overrides

[MapTool](MapTool.md).[getProps](MapTool.md#getprops)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L50)

___

### getState

▸ **getState**(): [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>

It returns the filters tool state.

#### Returns

[`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getState](../interfaces/IInfoTool.md#getstate)

#### Overrides

[MapTool](MapTool.md).[getState](MapTool.md#getstate)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L71)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[getType](../interfaces/IInfoTool.md#gettype)

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
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\> |

#### Returns

`this`

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[initialize](../interfaces/IInfoTool.md#initialize)

#### Overrides

[MapTool](MapTool.md).[initialize](MapTool.md#initialize)

#### Defined in

[src/tools/info/model/internal/tool/InfoTool.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/tool/InfoTool.ts#L87)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[IInfoTool](../interfaces/IInfoTool.md).[isEnabled](../interfaces/IInfoTool.md#isenabled)

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

[IInfoTool](../interfaces/IInfoTool.md).[isSingleton](../interfaces/IInfoTool.md#issingleton)

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

[IInfoTool](../interfaces/IInfoTool.md).[setEnabled](../interfaces/IInfoTool.md#setenabled)

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

[IInfoTool](../interfaces/IInfoTool.md).[switchEnabled](../interfaces/IInfoTool.md#switchenabled)

#### Inherited from

[MapTool](MapTool.md).[switchEnabled](MapTool.md#switchenabled)

#### Defined in

[src/model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapTool.ts#L158)
