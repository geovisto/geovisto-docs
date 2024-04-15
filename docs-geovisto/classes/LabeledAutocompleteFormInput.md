[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledAutocompleteFormInput

# Class: LabeledAutocompleteFormInput

This class represents labeled text form input with autocomplete.

**`Author`**

Jakub Kachlik

**`Author`**

Jiri Hynek (refactoring, code review)

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`LabeledAutocompleteFormInput`**

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](LabeledAutocompleteFormInput.md#constructor)

### Properties

- [completionListDiv](LabeledAutocompleteFormInput.md#completionlistdiv)
- [formDiv](LabeledAutocompleteFormInput.md#formdiv)
- [input](LabeledAutocompleteFormInput.md#input)
- [inputDiv](LabeledAutocompleteFormInput.md#inputdiv)
- [options](LabeledAutocompleteFormInput.md#options)
- [placeholder](LabeledAutocompleteFormInput.md#placeholder)
- [selectedCompletionItem](LabeledAutocompleteFormInput.md#selectedcompletionitem)
- [setData](LabeledAutocompleteFormInput.md#setdata)

### Methods

- [changeOptions](LabeledAutocompleteFormInput.md#changeoptions)
- [create](LabeledAutocompleteFormInput.md#create)
- [createForm](LabeledAutocompleteFormInput.md#createform)
- [createListeners](LabeledAutocompleteFormInput.md#createlisteners)
- [createMenu](LabeledAutocompleteFormInput.md#createmenu)
- [getCurrentOptions](LabeledAutocompleteFormInput.md#getcurrentoptions)
- [getProps](LabeledAutocompleteFormInput.md#getprops)
- [getValue](LabeledAutocompleteFormInput.md#getvalue)
- [redrawMenu](LabeledAutocompleteFormInput.md#redrawmenu)
- [setDisabled](LabeledAutocompleteFormInput.md#setdisabled)
- [setOptions](LabeledAutocompleteFormInput.md#setoptions)
- [setValue](LabeledAutocompleteFormInput.md#setvalue)
- [ID](LabeledAutocompleteFormInput.md#id)

## Constructors

### constructor

• **new LabeledAutocompleteFormInput**(`props`): [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledAutocompleteFormInputProps`](../interfaces/ILabeledAutocompleteFormInputProps.md) |

#### Returns

[`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L51)

## Properties

### completionListDiv

• `Private` **completionListDiv**: `HTMLDivElement`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L41)

___

### formDiv

• `Private` **formDiv**: `HTMLDivElement`

DOM elements are created when required - optimization

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L38)

___

### input

• `Private` **input**: `HTMLInputElement`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L40)

___

### inputDiv

• `Private` **inputDiv**: `HTMLDivElement`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L39)

___

### options

• `Private` **options**: `string`[]

Current options.

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L33)

___

### placeholder

• `Private` **placeholder**: `string`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L43)

___

### selectedCompletionItem

• `Private` **selectedCompletionItem**: `number`

Index of the currently selected item.

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L49)

___

### setData

• `Private` `Optional` **setData**: (`val`: `string`) => `void`

#### Type declaration

▸ (`val`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

##### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L44)

## Methods

### changeOptions

▸ **changeOptions**(`newOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOptions` | `string`[] |

#### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L86)

___

### create

▸ **create**(): `HTMLDivElement`

It creates an input element.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:139](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L139)

___

### createForm

▸ **createForm**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:152](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L152)

___

### createListeners

▸ **createListeners**(): `void`

Creates event listeners and creates/removes

#### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:183](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L183)

___

### createMenu

▸ **createMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:266](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L266)

___

### getCurrentOptions

▸ **getCurrentOptions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `match` | `string`[] |
| `other` | `string`[] |

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:105](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L105)

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

▸ **getValue**(): `string`

It returns value of the input element.

#### Returns

`string`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[getValue](../interfaces/IMapFormInput.md#getvalue)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:123](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L123)

___

### redrawMenu

▸ **redrawMenu**(): `void`

#### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:91](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L91)

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

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[setDisabled](../interfaces/IMapFormInput.md#setdisabled)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setDisabled](AbstractMapFormInput.md#setdisabled)

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L73)

___

### setOptions

▸ **setOptions**(`newOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOptions` | `string`[] |

#### Returns

`void`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L98)

___

### setValue

▸ **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[setValue](../interfaces/IMapFormInput.md#setvalue)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:132](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L132)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts:66](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/autocomplete/LabeledAutocompleteFormInput.ts#L66)
