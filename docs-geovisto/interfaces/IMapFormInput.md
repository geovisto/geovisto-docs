[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFormInput

# Interface: IMapFormInput

This interface represents description of form input.

**`Author`**

Jiri Hynek

## Implemented by

- [`AbstractMapFormInput`](../classes/AbstractMapFormInput.md)
- [`LabeledAutocompleteFormInput`](../classes/LabeledAutocompleteFormInput.md)
- [`LabeledColorFormInput`](../classes/LabeledColorFormInput.md)
- [`LabeledSelectFormInput`](../classes/LabeledSelectFormInput.md)
- [`LabeledTextFormInput`](../classes/LabeledTextFormInput.md)
- [`TextFormInput`](../classes/TextFormInput.md)

## Table of contents

### Methods

- [create](IMapFormInput.md#create)
- [getValue](IMapFormInput.md#getvalue)
- [setDisabled](IMapFormInput.md#setdisabled)
- [setValue](IMapFormInput.md#setvalue)

## Methods

### create

▸ **create**(): `HTMLElement`

It creates an input element.

#### Returns

`HTMLElement`

#### Defined in

[src/model/types/inputs/IMapFormInput.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInput.ts#L11)

___

### getValue

▸ **getValue**(): `unknown`

It returns value of the input element.

#### Returns

`unknown`

#### Defined in

[src/model/types/inputs/IMapFormInput.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInput.ts#L16)

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

#### Defined in

[src/model/types/inputs/IMapFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInput.ts#L30)

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

#### Defined in

[src/model/types/inputs/IMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/inputs/IMapFormInput.ts#L23)
