[geovisto-map](../README.md) / [Exports](../modules.md) / TextFormInput

# Class: TextFormInput

This class represents basic text form input.

**`Author`**

Jiri Hynek

**`Author`**

Krystof Rykala - generic input types

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`TextFormInput`**

  ↳↳ [`LabeledTextFormInput`](LabeledTextFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](TextFormInput.md#constructor)

### Properties

- [input](TextFormInput.md#input)

### Methods

- [create](TextFormInput.md#create)
- [getInput](TextFormInput.md#getinput)
- [getProps](TextFormInput.md#getprops)
- [getValue](TextFormInput.md#getvalue)
- [setDisabled](TextFormInput.md#setdisabled)
- [setValue](TextFormInput.md#setvalue)
- [ID](TextFormInput.md#id)

## Constructors

### constructor

• **new TextFormInput**(`props`): [`TextFormInput`](TextFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ITextFormInputProps`](../interfaces/ITextFormInputProps.md) |

#### Returns

[`TextFormInput`](TextFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L20)

## Properties

### input

• `Private` `Optional` **input**: `HTMLInputElement`

Basic input is used.

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L18)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns input element.

#### Returns

`HTMLElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L34)

___

### getInput

▸ **getInput**(): `undefined` \| `HTMLInputElement`

It makes input element visible for the extended classes.

#### Returns

`undefined` \| `HTMLInputElement`

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L48)

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

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setDisabled](AbstractMapFormInput.md#setdisabled)

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

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:64](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L64)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/basic/text/TextFormInput.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/text/TextFormInput.ts#L27)
