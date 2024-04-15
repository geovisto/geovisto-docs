[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFormInputFactory

# Interface: IMapFormInputFactory

This interface declares a factory for form inputs.

**`Author`**

Jiri Hynek

## Table of contents

### Methods

- [filterAutocomplete](IMapFormInputFactory.md#filterautocomplete)
- [filterSelect](IMapFormInputFactory.md#filterselect)
- [labeledAutocomplete](IMapFormInputFactory.md#labeledautocomplete)
- [labeledCheckbox](IMapFormInputFactory.md#labeledcheckbox)
- [labeledColor](IMapFormInputFactory.md#labeledcolor)
- [labeledSelect](IMapFormInputFactory.md#labeledselect)
- [labeledSlider](IMapFormInputFactory.md#labeledslider)
- [labeledText](IMapFormInputFactory.md#labeledtext)
- [select](IMapFormInputFactory.md#select)
- [text](IMapFormInputFactory.md#text)
- [textarea](IMapFormInputFactory.md#textarea)

## Methods

### filterAutocomplete

▸ **filterAutocomplete**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the filter autocomplete form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](IFilterFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L58)

___

### filterSelect

▸ **filterSelect**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the filter select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](IFilterFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L53)

___

### labeledAutocomplete

▸ **labeledAutocomplete**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled autocomplete form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledAutocompleteFormInputProps`](ILabeledAutocompleteFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L48)

___

### labeledCheckbox

▸ **labeledCheckbox**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled checkbox form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledCheckboxFormInputProps`](ILabeledCheckboxFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L73)

___

### labeledColor

▸ **labeledColor**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled color form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledColorFormInputProps`](ILabeledColorFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L68)

___

### labeledSelect

▸ **labeledSelect**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSelectFormInputProps`](ILabeledSelectFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L43)

___

### labeledSlider

▸ **labeledSlider**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled slider form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSliderFormInputProps`](ILabeledSliderFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L63)

___

### labeledText

▸ **labeledText**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the labeled text form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledTextFormInputProps`](ILabeledTextFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L33)

___

### select

▸ **select**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ISelectFormInputProps`](ISelectFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L28)

___

### text

▸ **text**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the text form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ITextFormInputProps`](ITextFormInputProps.md) |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L23)

___

### textarea

▸ **textarea**(`props`): [`IMapFormInput`](IMapFormInput.md)

It creates the textarea form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ITextareaFormInputProps` |

#### Returns

[`IMapFormInput`](IMapFormInput.md)

#### Defined in

[src/model/types/inputs/IMapFormInputFactory.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInputFactory.ts#L38)
