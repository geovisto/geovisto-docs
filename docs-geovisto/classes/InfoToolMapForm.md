[geovisto-map](../README.md) / [Exports](../modules.md) / InfoToolMapForm

# Class: InfoToolMapForm

This class provides controls for management of info map form inputs.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IInfoTool`](../interfaces/IInfoTool.md)\>

  ↳ **`InfoToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](InfoToolMapForm.md#constructor)

### Properties

- [htmlContent](InfoToolMapForm.md#htmlcontent)

### Methods

- [getContent](InfoToolMapForm.md#getcontent)
- [getDataManager](InfoToolMapForm.md#getdatamanager)
- [getMapObject](InfoToolMapForm.md#getmapobject)

## Constructors

### constructor

• **new InfoToolMapForm**(`tool`): [`InfoToolMapForm`](InfoToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\> |

#### Returns

[`InfoToolMapForm`](InfoToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/info/model/internal/form/InfoToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/form/InfoToolMapForm.ts#L33)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

TODO: exclude class variables to the defaults and state.

#### Defined in

[src/tools/info/model/internal/form/InfoToolMapForm.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/form/InfoToolMapForm.ts#L26)

## Methods

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns a HTML div element containing the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/info/model/internal/form/InfoToolMapForm.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/form/InfoToolMapForm.ts#L47)

___

### getDataManager

▸ **getDataManager**(): `undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

A help function which returns data manager

#### Returns

`undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Defined in

[src/tools/info/model/internal/form/InfoToolMapForm.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/internal/form/InfoToolMapForm.ts#L40)

___

### getMapObject

▸ **getMapObject**(): [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\>

#### Returns

[`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../modules.md#iinfotoolprops), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>, [`IInfoToolConfig`](../modules.md#iinfotoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IInfoToolConfig`](../modules.md#iinfotoolconfig)\>\>

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
