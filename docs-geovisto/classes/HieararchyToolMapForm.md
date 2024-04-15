[geovisto-map](../README.md) / [Exports](../modules.md) / HieararchyToolMapForm

# Class: HieararchyToolMapForm

Hierarchy tool map form.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\>

  ↳ **`HieararchyToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](HieararchyToolMapForm.md#constructor)

### Properties

- [htmlContent](HieararchyToolMapForm.md#htmlcontent)

### Methods

- [getContent](HieararchyToolMapForm.md#getcontent)
- [getMapObject](HieararchyToolMapForm.md#getmapobject)

## Constructors

### constructor

• **new HieararchyToolMapForm**(`tool`): [`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\> |

#### Returns

[`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L16)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L14)

## Methods

### getContent

▸ **getContent**(): `HTMLDivElement`

Returns html div elemnt of hierarchy tool. If not defined, creates one.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L24)

___

### getMapObject

▸ **getMapObject**(): [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

#### Returns

[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../modules.md#imaptoolprops), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>, [`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IHierarchyToolConfig`](../modules.md#ihierarchytoolconfig)\>\>

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
