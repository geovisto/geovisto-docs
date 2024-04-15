[geovisto-map](../README.md) / [Exports](../modules.md) / FiltersToolMapForm

# Class: FiltersToolMapForm

This class provides controls for management of filters map form inputs.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IFiltersTool`](../interfaces/IFiltersTool.md)\>

  ↳ **`FiltersToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](FiltersToolMapForm.md#constructor)

### Properties

- [btnGroup](FiltersToolMapForm.md#btngroup)
- [htmlContent](FiltersToolMapForm.md#htmlcontent)
- [inputs](FiltersToolMapForm.md#inputs)

### Methods

- [addSelectItem](FiltersToolMapForm.md#addselectitem)
- [dimensionInputChangedAction](FiltersToolMapForm.md#dimensioninputchangedaction)
- [getContent](FiltersToolMapForm.md#getcontent)
- [getDataManager](FiltersToolMapForm.md#getdatamanager)
- [getFilterManager](FiltersToolMapForm.md#getfiltermanager)
- [getFilterRuleElementClass](FiltersToolMapForm.md#getfilterruleelementclass)
- [getFilterRules](FiltersToolMapForm.md#getfilterrules)
- [getMapObject](FiltersToolMapForm.md#getmapobject)
- [inputChangedAction](FiltersToolMapForm.md#inputchangedaction)
- [removeSelectItem](FiltersToolMapForm.md#removeselectitem)
- [setFilterRules](FiltersToolMapForm.md#setfilterrules)

## Constructors

### constructor

• **new FiltersToolMapForm**(`tool`): [`FiltersToolMapForm`](FiltersToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\> |

#### Returns

[`FiltersToolMapForm`](FiltersToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L45)

## Properties

### btnGroup

• `Private` **btnGroup**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L37)

___

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

TODO: exclude class variables to the defaults and state.

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L36)

___

### inputs

• `Private` **inputs**: `InputItem`[]

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L38)

## Methods

### addSelectItem

▸ **addSelectItem**(): ``null`` \| `InputItem`

Help static function which adds new select item to the filter map form.

#### Returns

``null`` \| `InputItem`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:109](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L109)

___

### dimensionInputChangedAction

▸ **dimensionInputChangedAction**(): `void`

It updates input values according to the selection.

#### Returns

`void`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L246)

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

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L79)

___

### getDataManager

▸ **getDataManager**(): `undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

A help function which returns data manager

#### Returns

`undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L55)

___

### getFilterManager

▸ **getFilterManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

A help function which returns data manager

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L62)

___

### getFilterRuleElementClass

▸ **getFilterRuleElementClass**(`objectType`): `string`

A help function which returns the element class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectType` | `undefined` \| `string` |

#### Returns

`string`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L69)

___

### getFilterRules

▸ **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns selected values from input fields and constructs filter rules.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:253](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L253)

___

### getMapObject

▸ **getMapObject**(): [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\>

#### Returns

[`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../modules.md#ifilterstoolprops), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>, [`IFiltersToolConfig`](../modules.md#ifilterstoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IFiltersToolConfig`](../modules.md#ifilterstoolconfig)\>\>

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)

___

### inputChangedAction

▸ **inputChangedAction**(): `void`

It updates rules according to the input values.

#### Returns

`void`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:239](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L239)

___

### removeSelectItem

▸ **removeSelectItem**(`e`): `void`

Help function which removes item from the filter map form.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:220](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L220)

___

### setFilterRules

▸ **setFilterRules**(`filterRules`): `void`

It updates input fileds according to the given filter rules.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filterRules` | [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[] |

#### Returns

`void`

#### Defined in

[src/tools/filters/model/internal/form/FiltersToolMapForm.ts:278](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L278)
