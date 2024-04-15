[geovisto-map](../README.md) / [Exports](../modules.md) / MapFormInputFactory

# Class: MapFormInputFactory

This class provides a factory for form inputs.

**`Author`**

Jiri Hynek

## Table of contents

### Constructors

- [constructor](MapFormInputFactory.md#constructor)

### Methods

- [filterAutocomplete](MapFormInputFactory.md#filterautocomplete)
- [filterSelect](MapFormInputFactory.md#filterselect)
- [labeledAutocomplete](MapFormInputFactory.md#labeledautocomplete)
- [labeledCheckbox](MapFormInputFactory.md#labeledcheckbox)
- [labeledColor](MapFormInputFactory.md#labeledcolor)
- [labeledSelect](MapFormInputFactory.md#labeledselect)
- [labeledSlider](MapFormInputFactory.md#labeledslider)
- [labeledText](MapFormInputFactory.md#labeledtext)
- [select](MapFormInputFactory.md#select)
- [text](MapFormInputFactory.md#text)
- [textArea](MapFormInputFactory.md#textarea)

## Constructors

### constructor

• **new MapFormInputFactory**(): [`MapFormInputFactory`](MapFormInputFactory.md)

#### Returns

[`MapFormInputFactory`](MapFormInputFactory.md)

## Methods

### filterAutocomplete

▸ **filterAutocomplete**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the filter autocomplete form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L74)

___

### filterSelect

▸ **filterSelect**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the filter select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:67](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L67)

___

### labeledAutocomplete

▸ **labeledAutocomplete**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled autocomplete form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledAutocompleteFormInputProps`](../interfaces/ILabeledAutocompleteFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L60)

___

### labeledCheckbox

▸ **labeledCheckbox**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled checkbox form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledCheckboxFormInputProps`](../interfaces/ILabeledCheckboxFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:95](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L95)

___

### labeledColor

▸ **labeledColor**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled color form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledColorFormInputProps`](../interfaces/ILabeledColorFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L88)

___

### labeledSelect

▸ **labeledSelect**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSelectFormInputProps`](../interfaces/ILabeledSelectFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L53)

___

### labeledSlider

▸ **labeledSlider**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled slider form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSliderFormInputProps`](../interfaces/ILabeledSliderFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L81)

___

### labeledText

▸ **labeledText**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the labeled text form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledTextFormInputProps`](../interfaces/ILabeledTextFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L46)

___

### select

▸ **select**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the select form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ISelectFormInputProps`](../interfaces/ISelectFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L39)

___

### text

▸ **text**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the text form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ITextFormInputProps`](../interfaces/ITextFormInputProps.md) |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L32)

___

### textArea

▸ **textArea**(`props`): [`IMapFormInput`](../interfaces/IMapFormInput.md)

It creates the textarea form input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ITextareaFormInputProps` |

#### Returns

[`IMapFormInput`](../interfaces/IMapFormInput.md)

#### Defined in

[src/model/internal/inputs/MapFormInputFactory.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/MapFormInputFactory.ts#L102)
