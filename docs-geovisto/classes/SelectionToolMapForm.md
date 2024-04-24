**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SelectionToolMapForm

# Class: SelectionToolMapForm

This class represents tab fragment for Themes tool.

## Author

Jiri Hynek

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`ISelectionTool`](../interfaces/ISelectionTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new SelectionToolMapForm()

> **new SelectionToolMapForm**(`tool`): [`SelectionToolMapForm`](SelectionToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

#### Returns

[`SelectionToolMapForm`](SelectionToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/selection/model/internal/form/SelectionTooMapForm.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L23)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/selection/model/internal/form/SelectionTooMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L16)

## Methods

### createContent()

> `protected` **createContent**(): `HTMLDivElement`

Help function which creates the HTML div element.

#### Returns

`HTMLDivElement`

#### Source

[tools/selection/model/internal/form/SelectionTooMapForm.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L40)

***

### getContent()

> **getContent**(): `HTMLDivElement`

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[tools/selection/model/internal/form/SelectionTooMapForm.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/form/SelectionTooMapForm.ts#L30)

***

### getMapObject()

> `protected` **getMapObject**(): [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

#### Returns

[`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)
