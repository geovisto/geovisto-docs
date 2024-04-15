[geovisto-map](../README.md) / [Exports](../modules.md) / IHierarchyTool

# Interface: IHierarchyTool\<TProps, TDefaults, TState, TConfig, TInitProps\>

Tool interface for Hierarchy tool.

**`Author`**

Vojtěch Malý

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProps` | extends [`IHierarchyToolProps`](../modules.md#ihierarchytoolprops) = [`IHierarchyToolProps`](../modules.md#ihierarchytoolprops) |
| `TDefaults` | extends [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md) = [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md) |
| `TState` | extends [`IHierarchyToolState`](IHierarchyToolState.md) = [`IHierarchyToolState`](IHierarchyToolState.md) |
| `TConfig` | extends [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig) = [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig) |
| `TInitProps` | extends [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> = [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<`TConfig`\> |

## Hierarchy

- [`IMapTool`](IMapTool.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

  ↳ **`IHierarchyTool`**

## Implemented by

- [`HierarchyTool`](../classes/HierarchyTool.md)

## Table of contents

### Methods

- [copy](IHierarchyTool.md#copy)
- [create](IHierarchyTool.md#create)
- [getAPIGetter](IHierarchyTool.md#getapigetter)
- [getDefaults](IHierarchyTool.md#getdefaults)
- [getId](IHierarchyTool.md#getid)
- [getMap](IHierarchyTool.md#getmap)
- [getProps](IHierarchyTool.md#getprops)
- [getState](IHierarchyTool.md#getstate)
- [getType](IHierarchyTool.md#gettype)
- [initialize](IHierarchyTool.md#initialize)
- [isEnabled](IHierarchyTool.md#isenabled)
- [isSingleton](IHierarchyTool.md#issingleton)
- [setEnabled](IHierarchyTool.md#setenabled)
- [switchEnabled](IHierarchyTool.md#switchenabled)

## Methods

### copy

▸ **copy**(): [`IHierarchyTool`](IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md), [`IHierarchyToolState`](IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`IHierarchyTool`](IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md), [`IHierarchyToolState`](IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

#### Overrides

[IMapTool](IMapTool.md).[copy](IMapTool.md#copy)

#### Defined in

[src/tools/hierarchy/model/types/tool/IHierarchyTool.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/types/tool/IHierarchyTool.ts#L26)

___

### create

▸ **create**(): `this`

It creates a tool.

#### Returns

`this`

#### Inherited from

[IMapTool](IMapTool.md).[create](IMapTool.md#create)

#### Defined in

[src/model/types/tool/IMapTool.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L47)

___

### getAPIGetter

▸ **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

It returns the tool API.

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../modules.md#imaptoolapigetter)\<[`IMapToolAPI`](../modules.md#imaptoolapi)\>

#### Inherited from

[IMapTool](IMapTool.md).[getAPIGetter](IMapTool.md#getapigetter)

#### Defined in

[src/model/types/tool/IMapTool.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L32)

___

### getDefaults

▸ **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[IMapTool](IMapTool.md).[getDefaults](IMapTool.md#getdefaults)

#### Defined in

[src/model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L27)

___

### getId

▸ **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[IMapTool](IMapTool.md).[getId](IMapTool.md#getid)

#### Defined in

[src/model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L42)

___

### getMap

▸ **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

Help function which returns map which uses this tool.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Inherited from

[IMapTool](IMapTool.md).[getMap](IMapTool.md#getmap)

#### Defined in

[src/model/types/tool/IMapTool.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L42)

___

### getProps

▸ **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[IMapTool](IMapTool.md).[getProps](IMapTool.md#getprops)

#### Defined in

[src/model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L22)

___

### getState

▸ **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[IMapTool](IMapTool.md).[getState](IMapTool.md#getstate)

#### Defined in

[src/model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L32)

___

### getType

▸ **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[IMapTool](IMapTool.md).[getType](IMapTool.md#gettype)

#### Defined in

[src/model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L37)

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
| `initProps` | `TInitProps` |

#### Returns

`this`

#### Inherited from

[IMapTool](IMapTool.md).[initialize](IMapTool.md#initialize)

#### Defined in

[src/model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObject.ts#L53)

___

### isEnabled

▸ **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

#### Returns

`boolean`

#### Inherited from

[IMapTool](IMapTool.md).[isEnabled](IMapTool.md#isenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:52](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L52)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[IMapTool](IMapTool.md).[isSingleton](IMapTool.md#issingleton)

#### Defined in

[src/model/types/tool/IMapTool.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L37)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

[IMapTool](IMapTool.md).[setEnabled](IMapTool.md#setenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L60)

___

### switchEnabled

▸ **switchEnabled**(): `void`

Help function which switches the enabled state (enabled/disabled).

#### Returns

`void`

#### Inherited from

[IMapTool](IMapTool.md).[switchEnabled](IMapTool.md#switchenabled)

#### Defined in

[src/model/types/tool/IMapTool.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapTool.ts#L65)
