[geovisto-map](../README.md) / [Exports](../modules.md) / SelectFormInput

# Class: SelectFormInput

This class represents a basic select form input composed of options.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`SelectFormInput`**

  ↳↳ [`LabeledSelectFormInput`](LabeledSelectFormInput.md)

## Table of contents

### Constructors

- [constructor](SelectFormInput.md#constructor)

### Properties

- [element](SelectFormInput.md#element)

### Methods

- [create](SelectFormInput.md#create)
- [getProps](SelectFormInput.md#getprops)
- [getValue](SelectFormInput.md#getvalue)
- [setDisabled](SelectFormInput.md#setdisabled)
- [setValue](SelectFormInput.md#setvalue)
- [ID](SelectFormInput.md#id)

## Constructors

### constructor

• **new SelectFormInput**(`props`): [`SelectFormInput`](SelectFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ISelectFormInputProps`](../interfaces/ISelectFormInputProps.md) |

#### Returns

[`SelectFormInput`](SelectFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L18)

## Properties

### element

• `Private` `Optional` **element**: `HTMLSelectElement`

the input element is initialized when required

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L16)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns select element.

#### Returns

`HTMLElement`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L32)

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

It returns value of the select element.

#### Returns

`string`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L53)

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

[src/model/internal/inputs/basic/select/SelectFormInput.ts:71](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L71)

___

### setValue

▸ **setValue**(`value`): `void`

It sets value of the select element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L62)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L25)
