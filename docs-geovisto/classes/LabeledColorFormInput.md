[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledColorFormInput

# Class: LabeledColorFormInput

This class represents basic text sidebar input.

**`Author`**

Jakub Kachlik

**`Author`**

Jiri Hynek - conversion to TypeScript

TODO: replace this by LabeledTextFormInput

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`LabeledColorFormInput`**

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](LabeledColorFormInput.md#constructor)

### Properties

- [div](LabeledColorFormInput.md#div)
- [input](LabeledColorFormInput.md#input)

### Methods

- [create](LabeledColorFormInput.md#create)
- [getProps](LabeledColorFormInput.md#getprops)
- [getValue](LabeledColorFormInput.md#getvalue)
- [setDisabled](LabeledColorFormInput.md#setdisabled)
- [setValue](LabeledColorFormInput.md#setvalue)
- [ID](LabeledColorFormInput.md#id)

## Constructors

### constructor

• **new LabeledColorFormInput**(`props`): [`LabeledColorFormInput`](LabeledColorFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledColorFormInputProps`](../interfaces/ILabeledColorFormInputProps.md) |

#### Returns

[`LabeledColorFormInput`](LabeledColorFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L32)

## Properties

### div

• `Private` `Optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L25)

___

### input

• `Private` `Optional` **input**: `HTMLInputElement`

Basic input is used.

#### Defined in

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L30)

## Methods

### create

▸ **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:50](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L50)

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

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L89)

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

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L107)

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

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L98)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L43)
