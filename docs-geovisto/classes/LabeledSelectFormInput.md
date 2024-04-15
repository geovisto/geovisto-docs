[geovisto-map](../README.md) / [Exports](../modules.md) / LabeledSelectFormInput

# Class: LabeledSelectFormInput

This class represents basic select form input composed of options.

**`Author`**

Jiri Hynek

## Hierarchy

- [`SelectFormInput`](SelectFormInput.md)

  ↳ **`LabeledSelectFormInput`**

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Table of contents

### Constructors

- [constructor](LabeledSelectFormInput.md#constructor)

### Properties

- [div](LabeledSelectFormInput.md#div)

### Methods

- [create](LabeledSelectFormInput.md#create)
- [getProps](LabeledSelectFormInput.md#getprops)
- [getValue](LabeledSelectFormInput.md#getvalue)
- [setDisabled](LabeledSelectFormInput.md#setdisabled)
- [setValue](LabeledSelectFormInput.md#setvalue)
- [ID](LabeledSelectFormInput.md#id)

## Constructors

### constructor

• **new LabeledSelectFormInput**(`props`): [`LabeledSelectFormInput`](LabeledSelectFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ILabeledSelectFormInputProps`](../interfaces/ILabeledSelectFormInputProps.md) |

#### Returns

[`LabeledSelectFormInput`](LabeledSelectFormInput.md)

#### Overrides

[SelectFormInput](SelectFormInput.md).[constructor](SelectFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L19)

## Properties

### div

• `Private` `Optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L17)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns select element.

#### Returns

`HTMLElement`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[create](../interfaces/IMapFormInput.md#create)

#### Overrides

[SelectFormInput](SelectFormInput.md).[create](SelectFormInput.md#create)

#### Defined in

[src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L35)

___

### getProps

▸ **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[SelectFormInput](SelectFormInput.md).[getProps](SelectFormInput.md#getprops)

#### Defined in

[src/model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

___

### getValue

▸ **getValue**(): `string`

It returns value of the select element.

#### Returns

`string`

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[getValue](../interfaces/IMapFormInput.md#getvalue)

#### Inherited from

[SelectFormInput](SelectFormInput.md).[getValue](SelectFormInput.md#getvalue)

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

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[setDisabled](../interfaces/IMapFormInput.md#setdisabled)

#### Inherited from

[SelectFormInput](SelectFormInput.md).[setDisabled](SelectFormInput.md#setdisabled)

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

#### Implementation of

[IMapFormInput](../interfaces/IMapFormInput.md).[setValue](../interfaces/IMapFormInput.md#setvalue)

#### Inherited from

[SelectFormInput](SelectFormInput.md).[setValue](SelectFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/basic/select/SelectFormInput.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/basic/select/SelectFormInput.ts#L62)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Overrides

[SelectFormInput](SelectFormInput.md).[ID](SelectFormInput.md#id)

#### Defined in

[src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L28)
