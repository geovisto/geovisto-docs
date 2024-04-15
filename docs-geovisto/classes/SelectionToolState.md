[geovisto-map](../README.md) / [Exports](../modules.md) / SelectionToolState

# Class: SelectionToolState

This class provide functions for using selections.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`SelectionToolState`**

## Implements

- [`ISelectionToolState`](../interfaces/ISelectionToolState.md)

## Table of contents

### Constructors

- [constructor](SelectionToolState.md#constructor)

### Properties

- [selection](SelectionToolState.md#selection)

### Methods

- [deserialize](SelectionToolState.md#deserialize)
- [getIcon](SelectionToolState.md#geticon)
- [getId](SelectionToolState.md#getid)
- [getLabel](SelectionToolState.md#getlabel)
- [getMap](SelectionToolState.md#getmap)
- [getMapObject](SelectionToolState.md#getmapobject)
- [getSelection](SelectionToolState.md#getselection)
- [getType](SelectionToolState.md#gettype)
- [initialize](SelectionToolState.md#initialize)
- [isEnabled](SelectionToolState.md#isenabled)
- [serialize](SelectionToolState.md#serialize)
- [setEnabled](SelectionToolState.md#setenabled)
- [setIcon](SelectionToolState.md#seticon)
- [setId](SelectionToolState.md#setid)
- [setLabel](SelectionToolState.md#setlabel)
- [setMap](SelectionToolState.md#setmap)
- [setSelection](SelectionToolState.md#setselection)

## Constructors

### constructor

• **new SelectionToolState**(`tool`): [`SelectionToolState`](SelectionToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\> |

#### Returns

[`SelectionToolState`](SelectionToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L28)

## Properties

### selection

• `Private` **selection**: ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L23)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig) |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[deserialize](../interfaces/ISelectionToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L48)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getIcon](../interfaces/ISelectionToolState.md#geticon)

#### Inherited from

[MapToolState](MapToolState.md).[getIcon](MapToolState.md#geticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L120)

___

### getId

▸ **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getId](../interfaces/ISelectionToolState.md#getid)

#### Inherited from

[MapToolState](MapToolState.md).[getId](MapToolState.md#getid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L87)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getLabel](../interfaces/ISelectionToolState.md#getlabel)

#### Inherited from

[MapToolState](MapToolState.md).[getLabel](MapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getMap](../interfaces/ISelectionToolState.md#getmap)

#### Inherited from

[MapToolState](MapToolState.md).[getMap](MapToolState.md#getmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L136)

___

### getMapObject

▸ **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../modules.md#imapobjectprops), [`IMapObjectConfig`](../modules.md#imapobjectconfig)\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>, [`IMapObjectConfig`](../modules.md#imapobjectconfig), [`IMapObjectInitProps`](../modules.md#imapobjectinitprops)\<[`IMapObjectConfig`](../modules.md#imapobjectconfig)\>\>

#### Inherited from

[MapToolState](MapToolState.md).[getMapObject](MapToolState.md#getmapobject)

#### Defined in

[src/model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L39)

___

### getSelection

▸ **getSelection**(): ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md)

It returns the selection property of the tool state.

#### Returns

``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getSelection](../interfaces/ISelectionToolState.md#getselection)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:83](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L83)

___

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[getType](../interfaces/ISelectionToolState.md#gettype)

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md) |
| `props` | [`ISelectionToolProps`](../modules.md#iselectiontoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\> |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[initialize](../interfaces/ISelectionToolState.md#initialize)

#### Overrides

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L35)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[isEnabled](../interfaces/ISelectionToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md) |

#### Returns

[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[serialize](../interfaces/ISelectionToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:65](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L65)

___

### setEnabled

▸ **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[setEnabled](../interfaces/ISelectionToolState.md#setenabled)

#### Inherited from

[MapToolState](MapToolState.md).[setEnabled](MapToolState.md#setenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L97)

___

### setIcon

▸ **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[setIcon](../interfaces/ISelectionToolState.md#seticon)

#### Inherited from

[MapToolState](MapToolState.md).[setIcon](MapToolState.md#seticon)

#### Defined in

[src/model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L129)

___

### setId

▸ **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[setId](../interfaces/ISelectionToolState.md#setid)

#### Inherited from

[MapToolState](MapToolState.md).[setId](MapToolState.md#setid)

#### Defined in

[src/model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L96)

___

### setLabel

▸ **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[setLabel](../interfaces/ISelectionToolState.md#setlabel)

#### Inherited from

[MapToolState](MapToolState.md).[setLabel](MapToolState.md#setlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L113)

___

### setMap

▸ **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\> |

#### Returns

`void`

#### Inherited from

[MapToolState](MapToolState.md).[setMap](MapToolState.md#setmap)

#### Defined in

[src/model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L145)

___

### setSelection

▸ **setSelection**(`selection`): `void`

It sets the selection property of the tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`IMapSelection`](../interfaces/IMapSelection.md) |

#### Returns

`void`

#### Implementation of

[ISelectionToolState](../interfaces/ISelectionToolState.md).[setSelection](../interfaces/ISelectionToolState.md#setselection)

#### Defined in

[src/tools/selection/model/internal/tool/SelectionToolState.ts:92](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/tool/SelectionToolState.ts#L92)
