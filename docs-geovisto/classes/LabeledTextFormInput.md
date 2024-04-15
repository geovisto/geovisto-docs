[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledTextFormInput

# Class: LabeledTextFormInput

This class represents labeled text form input.

**`Author`**

Jiri Hynek

**`Author`**

Krystof Rykala - input div wrapper

## Hierarchy

- [`TextFormInput`](TextFormInput.md)

  ↳ **`LabeledTextFormInput`**

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](LabeledTextFormInput.md#constructor)

### Properties

- [div](LabeledTextFormInput.md#div)

### Methods

- [create](LabeledTextFormInput.md#create)
- [createLabel](LabeledTextFormInput.md#createlabel)
- [getInput](LabeledTextFormInput.md#getinput)
- [getProps](LabeledTextFormInput.md#getprops)
- [getValue](LabeledTextFormInput.md#getvalue)
- [setDisabled](LabeledTextFormInput.md#setdisabled)
- [setValue](LabeledTextFormInput.md#setvalue)
- [ID](LabeledTextFormInput.md#id)

## Constructors

### constructor

• **new LabeledTextFormInput**(`props`): [`LabeledTextFormInput`](LabeledTextFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledTextFormInputProps`](../interfaces/ILabeledTextFormInputProps.md) |

#### Returns

[`LabeledTextFormInput`](LabeledTextFormInput.md)

#### Overrides

[TextFormInput](TextFormInput.md).[constructor](TextFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L20)

## Properties

### div

• `Private` `Optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L18)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns input element.

#### Returns

`HTMLElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Overrides

[TextFormInput](TextFormInput.md).[create](TextFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L36)

___

### createLabel

▸ **createLabel**(): `HTMLDivElement`

A help method which creates the label HTML element.

#### Returns

`HTMLDivElement`

#### Defined in

[src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L58)

___

### getInput

▸ **getInput**(): `undefined` \| `HTMLInputElement`

It makes input element visible for the extended classes.

#### Returns

`undefined` \| `HTMLInputElement`

#### Inherited from

[TextFormInput](TextFormInput.md).[getInput](TextFormInput.md#getinput)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L48)

___

### getProps

▸ **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[TextFormInput](TextFormInput.md).[getProps](TextFormInput.md#getprops)

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

#### Inherited from

[TextFormInput](TextFormInput.md).[getValue](TextFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L55)

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

#### Inherited from

[TextFormInput](TextFormInput.md).[setDisabled](TextFormInput.md#setdisabled)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:73](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L73)

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

#### Inherited from

[TextFormInput](TextFormInput.md).[setValue](TextFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L64)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Overrides

[TextFormInput](TextFormInput.md).[ID](TextFormInput.md#id)

#### Defined in

[src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts:29](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L29)
