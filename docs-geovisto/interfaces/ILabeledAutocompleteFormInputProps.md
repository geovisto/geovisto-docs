[geovisto-map](../README.md) / [Exports](../modules.md) / ILabeledAutocompleteFormInputProps

# Interface: ILabeledAutocompleteFormInputProps

This interface declares specification of a form input props model.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapFormInputProps`](IMapFormInputProps.md)

  ↳ **`ILabeledAutocompleteFormInputProps`**

## Table of contents

### Properties

- [label](ILabeledAutocompleteFormInputProps.md#label)
- [onChangeAction](ILabeledAutocompleteFormInputProps.md#onchangeaction)
- [options](ILabeledAutocompleteFormInputProps.md#options)
- [placeholder](ILabeledAutocompleteFormInputProps.md#placeholder)
- [setData](ILabeledAutocompleteFormInputProps.md#setdata)

## Properties

### label

• **label**: `string`

#### Defined in

[src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts:10](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts#L10)

___

### onChangeAction

• **onChangeAction**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `unknown`

#### Defined in

[src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts:9](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts#L9)

___

### options

• **options**: `string`[]

#### Defined in

[src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts#L11)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts#L12)

___

### setData

• `Optional` **setData**: (`val`: `string`) => `void`

#### Type declaration

▸ (`val`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |

##### Returns

`void`

#### Defined in

[src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/labeled/autocomplete/ILabeledAutocompleteFormInputProps.ts#L13)
