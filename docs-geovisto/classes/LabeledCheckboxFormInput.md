[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledCheckboxFormInput

# Class: LabeledCheckboxFormInput

This class represents basic checkbox sidebar input.

**`Author`**

Krystof Rykala

**`Author`**

Jiri Hynek - conversion to TypeScript

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`LabeledCheckboxFormInput`**

## Table of contents

### Constructors

- [constructor](LabeledCheckboxFormInput.md#constructor)

### Properties

- [div](LabeledCheckboxFormInput.md#div)
- [input](LabeledCheckboxFormInput.md#input)

### Methods

- [create](LabeledCheckboxFormInput.md#create)
- [createCheckbox](LabeledCheckboxFormInput.md#createcheckbox)
- [createLabel](LabeledCheckboxFormInput.md#createlabel)
- [getProps](LabeledCheckboxFormInput.md#getprops)
- [getValue](LabeledCheckboxFormInput.md#getvalue)
- [setDisabled](LabeledCheckboxFormInput.md#setdisabled)
- [setValue](LabeledCheckboxFormInput.md#setvalue)
- [ID](LabeledCheckboxFormInput.md#id)

## Constructors

### constructor

• **new LabeledCheckboxFormInput**(`props`): [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledCheckboxFormInputProps`](../interfaces/ILabeledCheckboxFormInputProps.md) |

#### Returns

[`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L24)

## Properties

### div

• `Private` `Optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L17)

___

### input

• `Private` `Optional` **input**: `HTMLInputElement`

Basic input is used.

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L22)

## Methods

### create

▸ **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L42)

___

### createCheckbox

▸ **createCheckbox**(): `HTMLInputElement`

A help method which creates the checkbox HTML element.

#### Returns

`HTMLInputElement`

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L71)

___

### createLabel

▸ **createLabel**(): `HTMLDivElement`

A help method which creates the label HTML element.

#### Returns

`HTMLDivElement`

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L60)

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

▸ **getValue**(): `boolean`

It returns the value of the input element.

#### Returns

`boolean`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:84](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L84)

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

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L102)

___

### setValue

▸ **setValue**(`checked`): `void`

It sets value of the input element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `boolean` |

#### Returns

`void`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:93](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L93)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/checkbox/LabeledCheckboxFormInput.ts#L35)
