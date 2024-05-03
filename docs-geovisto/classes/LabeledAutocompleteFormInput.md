**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledAutocompleteFormInput

# Class: LabeledAutocompleteFormInput

This class represents labeled text form input with autocomplete.

## Author

Jakub Kachlik

## Author

Jiri Hynek (refactoring, code review)

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new LabeledAutocompleteFormInput()

> **new LabeledAutocompleteFormInput**(`props`): [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Parameters

• **props**: [`ILabeledAutocompleteFormInputProps`](../interfaces/ILabeledAutocompleteFormInputProps.md)

#### Returns

[`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L51)

## Properties

### completionListDiv

> `private` **completionListDiv**: `HTMLDivElement`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L41)

***

### formDiv

> `private` **formDiv**: `HTMLDivElement`

DOM elements are created when required - optimization

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L38)

***

### input

> `private` **input**: `HTMLInputElement`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L40)

***

### inputDiv

> `private` **inputDiv**: `HTMLDivElement`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L39)

***

### options

> `private` **options**: `string`[]

Current options.

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L33)

***

### placeholder

> `private` **placeholder**: `string`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L43)

***

### selectedCompletionItem

> `private` **selectedCompletionItem**: `number`

Index of the currently selected item.

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L49)

***

### setData()?

> `private` `optional` **setData**: (`val`) => `void`

#### Parameters

• **val**: `string`

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L44)

## Methods

### changeOptions()

> **changeOptions**(`newOptions`): `void`

#### Parameters

• **newOptions**: `string`[]

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L86)

***

### create()

> **create**(): `HTMLDivElement`

It creates an input element.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:139](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L139)

***

### createForm()

> `protected` **createForm**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:152](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L152)

***

### createListeners()

> `protected` **createListeners**(): `void`

Creates event listeners and creates/removes

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:183](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L183)

***

### createMenu()

> `protected` **createMenu**(): `void`

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:266](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L266)

***

### getCurrentOptions()

> `private` **getCurrentOptions**(): `object`

#### Returns

`object`

##### match

> **match**: `string`[]

##### other

> **other**: `string`[]

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:105](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L105)

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

> **getValue**(): `string`

It returns value of the input element.

#### Returns

`string`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`getValue`](../interfaces/IMapFormInput.md#getvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:123](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L123)

***

### redrawMenu()

> **redrawMenu**(): `void`

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:91](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L91)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setDisabled`](../interfaces/IMapFormInput.md#setdisabled)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:73](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L73)

***

### setOptions()

> **setOptions**(`newOptions`): `void`

#### Parameters

• **newOptions**: `string`[]

#### Returns

`void`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L98)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setValue`](../interfaces/IMapFormInput.md#setvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:132](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L132)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Source

[model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:66](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L66)
