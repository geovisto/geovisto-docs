**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / HieararchyToolMapForm

# Class: HieararchyToolMapForm

Hierarchy tool map form.

## Author

Vojtěch Malý

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new HieararchyToolMapForm()

> **new HieararchyToolMapForm**(`tool`): [`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Parameters

• **tool**: [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

#### Returns

[`HieararchyToolMapForm`](HieararchyToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L16)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L14)

## Methods

### getContent()

> **getContent**(): `HTMLDivElement`

Returns html div elemnt of hierarchy tool. If not defined, creates one.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/hierarchy/model/internal/form/HieararchyToolMapForm.ts#L24)

***

### getMapObject()

> `protected` **getMapObject**(): [`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

#### Returns

[`IHierarchyTool`](../interfaces/IHierarchyTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolState`](../interfaces/IHierarchyToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IHierarchyToolDefaults`](../interfaces/IHierarchyToolDefaults.md), [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>, [`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IHierarchyToolConfig`](../type-aliases/IHierarchyToolConfig.md)\>\>

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)
