**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FilterSelectFormInput

# Class: FilterSelectFormInput

This class represents a map input composed of three selects used for filters.

## Author

Jiri Hynek

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Constructors

### new FilterSelectFormInput()

> **new FilterSelectFormInput**(`props`): [`FilterSelectFormInput`](FilterSelectFormInput.md)

#### Parameters

• **props**: [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md)

#### Returns

[`FilterSelectFormInput`](FilterSelectFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L30)

## Properties

### input

> `private` **input**: `object`

Input element is composed of 3 HTML select elements

#### data?

> `optional` **data**: `HTMLSelectElement`

#### op?

> `optional` **op**: `HTMLSelectElement`

#### val?

> `optional` **val**: `HTMLInputElement`

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L24)

***

### inputDiv?

> `private` `optional` **inputDiv**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L19)

## Methods

### create()

> **create**(): `HTMLElement`

It returns filter div element composed of 2 selects and one input element.

#### Returns

`HTMLElement`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L51)

***

### createInputElement()

> `protected` **createInputElement**(): `HTMLInputElement`

Help static function which creates select element.

#### Returns

`HTMLInputElement`

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L96)

***

### createSelectElement()

> `protected` **createSelectElement**(`onChangeAction`, `options`): `HTMLSelectElement`

Help static function which creates select element.

#### Parameters

• **onChangeAction**: `null` \| (`this`, `ev`) => `unknown`

• **options**: `string`[]

#### Returns

`HTMLSelectElement`

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L79)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getProps`](AbstractMapFormInput.md#getprops)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> **getValue**(): [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

It returns values of the inputs.

#### Returns

[`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L107)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L118)

***

### setValue()

> **setValue**(`value`): `void`

It sets values of the inputs.

#### Parameters

• **value**: [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

#### Returns

`void`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:138](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L138)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Source

[model/internal/inputs/filter/select/FilterSelectFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L44)
