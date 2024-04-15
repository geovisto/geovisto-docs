[geovisto-map](../README.md) / [Exports](../modules.md) / AbstractMapFormInput

# Class: AbstractMapFormInput

This class represents an abstract form input.

**`Author`**

Jiri Hynek

## Hierarchy

- **`AbstractMapFormInput`**

  ↳ [`SelectFormInput`](SelectFormInput.md)

  ↳ [`TextFormInput`](TextFormInput.md)

  ↳ [`FilterAutocompleteFormInput`](FilterAutocompleteFormInput.md)

  ↳ [`FilterSelectFormInput`](FilterSelectFormInput.md)

  ↳ [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

  ↳ [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)

  ↳ [`LabeledColorFormInput`](LabeledColorFormInput.md)

  ↳ [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](AbstractMapFormInput.md#constructor)

### Properties

- [props](AbstractMapFormInput.md#props)

### Methods

- [create](AbstractMapFormInput.md#create)
- [getProps](AbstractMapFormInput.md#getprops)
- [getValue](AbstractMapFormInput.md#getvalue)
- [setDisabled](AbstractMapFormInput.md#setdisabled)
- [setValue](AbstractMapFormInput.md#setvalue)

## Constructors

### constructor

• **new AbstractMapFormInput**(`props`): [`AbstractMapFormInput`](AbstractMapFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md) |

#### Returns

[`AbstractMapFormInput`](AbstractMapFormInput.md)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L16)

## Properties

### props

• `Private` **props**: [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

Input props passed to constructor.

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L14)

## Methods

### create

▸ **create**(): `HTMLElement`

It creates the input element.

#### Returns

`HTMLElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L30)

___

### getProps

▸ **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

___

### getValue

▸ **getValue**(): `unknown`

It returns value of the input element.

#### Returns

`unknown`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[getValue](../interfaces/IMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L35)

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

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L49)

___

### setValue

▸ **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`void`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[setValue](../interfaces/IMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L42)
