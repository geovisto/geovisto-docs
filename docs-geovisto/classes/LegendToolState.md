[geovisto-map](../README.md) / [Exports](../modules.md) / LegendToolState

# Class: LegendToolState

This class provide legend tool model.

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapToolState`](MapToolState.md)

  ↳ **`LegendToolState`**

## Implements

- [`ILegendToolState`](../interfaces/ILegendToolState.md)

## Table of contents

### Constructors

- [constructor](LegendToolState.md#constructor)

### Properties

- [legendConfig](LegendToolState.md#legendconfig)
- [legendTools](LegendToolState.md#legendtools)

### Methods

- [deserialize](LegendToolState.md#deserialize)
- [getIcon](LegendToolState.md#geticon)
- [getId](LegendToolState.md#getid)
- [getLabel](LegendToolState.md#getlabel)
- [getLegendConfig](LegendToolState.md#getlegendconfig)
- [getLegendToolsConfig](LegendToolState.md#getlegendtoolsconfig)
- [getMap](LegendToolState.md#getmap)
- [getMapObject](LegendToolState.md#getmapobject)
- [getType](LegendToolState.md#gettype)
- [initialize](LegendToolState.md#initialize)
- [isEnabled](LegendToolState.md#isenabled)
- [serialize](LegendToolState.md#serialize)
- [setEnabled](LegendToolState.md#setenabled)
- [setIcon](LegendToolState.md#seticon)
- [setId](LegendToolState.md#setid)
- [setLabel](LegendToolState.md#setlabel)
- [setMap](LegendToolState.md#setmap)

## Constructors

### constructor

• **new LegendToolState**(`tool`): [`LegendToolState`](LegendToolState.md)

It creates a tool state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ILegendTool`](../interfaces/ILegendTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolState`](../interfaces/ILegendToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md), [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>, [`ILegendToolConfig`](../modules.md#ilegendtoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)\>\> |

#### Returns

[`LegendToolState`](LegendToolState.md)

#### Overrides

[MapToolState](MapToolState.md).[constructor](MapToolState.md#constructor)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L24)

## Properties

### legendConfig

• `Private` `Optional` **legendConfig**: [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)[]

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L18)

___

### legendTools

• `Private` `Optional` **legendTools**: `string`[]

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L19)

## Methods

### deserialize

▸ **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILegendToolConfig`](../modules.md#ilegendtoolconfig) |

#### Returns

`void`

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[deserialize](../interfaces/ILegendToolState.md#deserialize)

#### Overrides

[MapToolState](MapToolState.md).[deserialize](MapToolState.md#deserialize)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L35)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[getIcon](../interfaces/ILegendToolState.md#geticon)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[getId](../interfaces/ILegendToolState.md#getid)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[getLabel](../interfaces/ILegendToolState.md#getlabel)

#### Inherited from

[MapToolState](MapToolState.md).[getLabel](MapToolState.md#getlabel)

#### Defined in

[src/model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L104)

___

### getLegendConfig

▸ **getLegendConfig**(): `undefined` \| [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)[]

It returns the legend config.

#### Returns

`undefined` \| [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)[]

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[getLegendConfig](../interfaces/ILegendToolState.md#getlegendconfig)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L63)

___

### getLegendToolsConfig

▸ **getLegendToolsConfig**(): `undefined` \| `string`[]

It returns the tools to create a legend for.

#### Returns

`undefined` \| `string`[]

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[getLegendToolsConfig](../interfaces/ILegendToolState.md#getlegendtoolsconfig)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L70)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[getMap](../interfaces/ILegendToolState.md#getmap)

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

### getType

▸ **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[getType](../interfaces/ILegendToolState.md#gettype)

#### Inherited from

[MapToolState](MapToolState.md).[getType](MapToolState.md#gettype)

#### Defined in

[src/model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectState.ts#L80)

___

### initialize

▸ **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md) |
| `props` | [`IMapToolProps`](../modules.md#imaptoolprops) |
| `initProps` | [`IMapToolInitProps`](../modules.md#imaptoolinitprops) |

#### Returns

`void`

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[initialize](../interfaces/ILegendToolState.md#initialize)

#### Inherited from

[MapToolState](MapToolState.md).[initialize](MapToolState.md#initialize)

#### Defined in

[src/model/internal/tool/MapToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L42)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[isEnabled](../interfaces/ILegendToolState.md#isenabled)

#### Inherited from

[MapToolState](MapToolState.md).[isEnabled](MapToolState.md#isenabled)

#### Defined in

[src/model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/tool/MapToolState.ts#L88)

___

### serialize

▸ **serialize**(`defaults`): [`ILegendToolConfig`](../modules.md#ilegendtoolconfig)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | `undefined` \| [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md) |

#### Returns

[`ILegendToolConfig`](../modules.md#ilegendtoolconfig)

#### Implementation of

[ILegendToolState](../interfaces/ILegendToolState.md).[serialize](../interfaces/ILegendToolState.md#serialize)

#### Overrides

[MapToolState](MapToolState.md).[serialize](MapToolState.md#serialize)

#### Defined in

[src/tools/legend/model/internal/tool/LegendToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/legend/model/internal/tool/LegendToolState.ts#L47)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[setEnabled](../interfaces/ILegendToolState.md#setenabled)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[setIcon](../interfaces/ILegendToolState.md#seticon)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[setId](../interfaces/ILegendToolState.md#setid)

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

[ILegendToolState](../interfaces/ILegendToolState.md).[setLabel](../interfaces/ILegendToolState.md#setlabel)

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
