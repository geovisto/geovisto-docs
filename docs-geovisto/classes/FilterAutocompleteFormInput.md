[geovisto-map](../README.md) / [Exports](../modules.md) / FilterAutocompleteFormInput

# Class: FilterAutocompleteFormInput

This class represents a form input composed of three autocomplete inputs used for filters.

**`Author`**

Jakub Kachlik

**`Author`**

Jiri Hynek (refactoring, code review)

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`FilterAutocompleteFormInput`**

## Table of contents

### Constructors

- [constructor](FilterAutocompleteFormInput.md#constructor)

### Properties

- [input](FilterAutocompleteFormInput.md#input)
- [inputDiv](FilterAutocompleteFormInput.md#inputdiv)

### Methods

- [create](FilterAutocompleteFormInput.md#create)
- [getInputElement](FilterAutocompleteFormInput.md#getinputelement)
- [getProps](FilterAutocompleteFormInput.md#getprops)
- [getValue](FilterAutocompleteFormInput.md#getvalue)
- [setDisabled](FilterAutocompleteFormInput.md#setdisabled)
- [setValue](FilterAutocompleteFormInput.md#setvalue)
- [ID](FilterAutocompleteFormInput.md#id)

## Constructors

### constructor

• **new FilterAutocompleteFormInput**(`props`): [`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md) |

#### Returns

[`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L32)

## Properties

### input

• `Private` **input**: ``null`` \| \{ `data`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `op`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `val`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)  }

Input element is composed of 3 HTML select elements

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L26)

___

### inputDiv

• `Private` **inputDiv**: ``null`` \| `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L21)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns filter div element composed of 3 autocomplete form inputs.

#### Returns

`HTMLElement`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L50)

___

### getInputElement

▸ **getInputElement**(): ``null`` \| \{ `data`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `op`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `val`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)  }

It returns input

#### Returns

``null`` \| \{ `data`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `op`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md) ; `val`: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)  }

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:115](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L115)

___

### getProps

▸ **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[AbstractMapFormInput](AbstractMapFormInput.md).[getProps](AbstractMapFormInput.md#getprops)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

___

### getValue

▸ **getValue**(): [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

It returns values of the inputs.

#### Returns

[`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L76)

___

### setDisabled

▸ **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setDisabled](AbstractMapFormInput.md#setdisabled)

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L104)

___

### setValue

▸ **setValue**(`value`): `void`

It sets values of the inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md) |

#### Returns

`void`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L93)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/autocomplete/FilterAutocompleteFormInput.ts#L43)
