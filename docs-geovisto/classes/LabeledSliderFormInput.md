[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledSliderFormInput

# Class: LabeledSliderFormInput

This class represents basic text sidebar input.

**`Author`**

Jakub Kachlik

**`Author`**

Jiri Hynek - conversion to TypeScript

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`LabeledSliderFormInput`**

## Table of contents

### Constructors

- [constructor](LabeledSliderFormInput.md#constructor)

### Properties

- [div](LabeledSliderFormInput.md#div)
- [input](LabeledSliderFormInput.md#input)

### Methods

- [create](LabeledSliderFormInput.md#create)
- [getProps](LabeledSliderFormInput.md#getprops)
- [getValue](LabeledSliderFormInput.md#getvalue)
- [setDisabled](LabeledSliderFormInput.md#setdisabled)
- [setValue](LabeledSliderFormInput.md#setvalue)
- [ID](LabeledSliderFormInput.md#id)

## Constructors

### constructor

• **new LabeledSliderFormInput**(`props`): [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSliderFormInputProps`](../interfaces/ILabeledSliderFormInputProps.md) |

#### Returns

[`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L33)

## Properties

### div

• `Private` `Optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L26)

___

### input

• `Private` `Optional` **input**: `HTMLInputElement`

Basic input is used.

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L31)

## Methods

### create

▸ **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L51)

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

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:99](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L99)

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

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:117](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L117)

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

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:108](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L108)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/slider/LabeledSliderFormInput.ts#L44)
