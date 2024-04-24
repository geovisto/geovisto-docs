**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / FilterAutocompleteFormInput

# Class: FilterAutocompleteFormInput

This class represents a form input composed of three autocomplete inputs used for filters.

## Author

Jakub Kachlik

## Author

Jiri Hynek (refactoring, code review)

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Constructors

### new FilterAutocompleteFormInput()

> **new FilterAutocompleteFormInput**(`props`): [`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)

#### Parameters

• **props**: [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md)

#### Returns

[`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L32)

## Properties

### input

> `private` **input**: `null` \| `object`

Input element is composed of 3 HTML select elements

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L26)

***

### inputDiv

> `private` **inputDiv**: `null` \| `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L21)

## Methods

### create()

> **create**(): `HTMLElement`

It returns filter div element composed of 3 autocomplete form inputs.

#### Returns

`HTMLElement`

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L50)

***

### getInputElement()

> **getInputElement**(): `null` \| `object`

It returns input

#### Returns

`null` \| `object`

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:115](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L115)

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

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L76)

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

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L104)

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

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L93)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Source

[model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L43)
