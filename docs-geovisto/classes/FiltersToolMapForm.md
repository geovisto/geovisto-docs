**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FiltersToolMapForm

# Class: FiltersToolMapForm

This class provides controls for management of filters map form inputs.

## Author

Jiri Hynek

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IFiltersTool`](../interfaces/IFiltersTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new FiltersToolMapForm()

> **new FiltersToolMapForm**(`tool`): [`FiltersToolMapForm`](FiltersToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Returns

[`FiltersToolMapForm`](FiltersToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L45)

## Properties

### btnGroup

> `private` **btnGroup**: `null` \| `HTMLDivElement`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L37)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

TODO: exclude class variables to the defaults and state.

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L36)

***

### inputs

> `private` **inputs**: `InputItem`[]

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L38)

## Methods

### addSelectItem()

> `protected` **addSelectItem**(): `null` \| `InputItem`

Help static function which adds new select item to the filter map form.

#### Returns

`null` \| `InputItem`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L109)

***

### dimensionInputChangedAction()

> `protected` **dimensionInputChangedAction**(): `void`

It updates input values according to the selection.

#### Returns

`void`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:246](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L246)

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

[tools/filters/model/internal/form/FiltersToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L79)

***

### getDataManager()

> `protected` **getDataManager**(): `undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

A help function which returns data manager

#### Returns

`undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L55)

***

### getFilterManager()

> `protected` **getFilterManager**(): [`IMapFilterManager`](../interfaces/IMapFilterManager.md)

A help function which returns data manager

#### Returns

[`IMapFilterManager`](../interfaces/IMapFilterManager.md)

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L62)

***

### getFilterRuleElementClass()

> `protected` **getFilterRuleElementClass**(`objectType`): `string`

A help function which returns the element class.

#### Parameters

• **objectType**: `undefined` \| `string`

#### Returns

`string`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L69)

***

### getFilterRules()

> `protected` **getFilterRules**(): [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

It returns selected values from input fields and constructs filter rules.

#### Returns

[`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:253](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L253)

***

### getMapObject()

> `protected` **getMapObject**(): [`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Returns

[`IFiltersTool`](../interfaces/IFiltersTool.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolState`](../interfaces/IFiltersToolState.md)\<[`IFiltersToolProps`](../type-aliases/IFiltersToolProps.md), [`IFiltersToolDefaults`](../interfaces/IFiltersToolDefaults.md), [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>, [`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IFiltersToolConfig`](../type-aliases/IFiltersToolConfig.md)\>\>

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)

***

### inputChangedAction()

> `protected` **inputChangedAction**(): `void`

It updates rules according to the input values.

#### Returns

`void`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:239](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L239)

***

### removeSelectItem()

> `protected` **removeSelectItem**(`e`): `void`

Help function which removes item from the filter map form.

#### Parameters

• **e**: `MouseEvent`

#### Returns

`void`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:220](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L220)

***

### setFilterRules()

> `protected` **setFilterRules**(`filterRules`): `void`

It updates input fileds according to the given filter rules.

#### Parameters

• **filterRules**: [`IMapFilterRule`](../interfaces/IMapFilterRule.md)[]

#### Returns

`void`

#### Source

[tools/filters/model/internal/form/FiltersToolMapForm.ts:278](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/filters/model/internal/form/FiltersToolMapForm.ts#L278)
