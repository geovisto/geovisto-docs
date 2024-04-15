[geovisto-map](../README.md) / [Exports](../modules.md) / SelectionToolMapForm

# Class: SelectionToolMapForm

This class represents tab fragment for Themes tool.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`ISelectionTool`](../interfaces/ISelectionTool.md)\>

  ↳ **`SelectionToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](SelectionToolMapForm.md#constructor)

### Properties

- [htmlContent](SelectionToolMapForm.md#htmlcontent)

### Methods

- [createContent](SelectionToolMapForm.md#createcontent)
- [getContent](SelectionToolMapForm.md#getcontent)
- [getMapObject](SelectionToolMapForm.md#getmapobject)

## Constructors

### constructor

• **new SelectionToolMapForm**(`tool`): [`SelectionToolMapForm`](SelectionToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\> |

#### Returns

[`SelectionToolMapForm`](SelectionToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/selection/model/internal/form/SelectionTooMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L23)

## Properties

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/selection/model/internal/form/SelectionTooMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L16)

## Methods

### createContent

▸ **createContent**(): `HTMLDivElement`

Help function which creates the HTML div element.

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/selection/model/internal/form/SelectionTooMapForm.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L40)

___

### getContent

▸ **getContent**(): `HTMLDivElement`

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/selection/model/internal/form/SelectionTooMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L30)

___

### getMapObject

▸ **getMapObject**(): [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\>

#### Returns

[`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../modules.md#iselectiontoolprops), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolConfig`](../modules.md#iselectiontoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`ISelectionToolConfig`](../modules.md#iselectiontoolconfig)\>, [`ISelectionToolAPI`](../modules.md#iselectiontoolapi)\>

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)
