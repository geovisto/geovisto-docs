[geovisto-map](../README.md) / [Exports](../modules.md) / FilterSelectFormInput

# Class: FilterSelectFormInput

This class represents a map input composed of three selects used for filters.

**`Author`**

Jiri Hynek

## Hierarchy

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

  ↳ **`FilterSelectFormInput`**

## Table of contents

### Constructors

- [constructor](FilterSelectFormInput.md#constructor)

### Properties

- [input](FilterSelectFormInput.md#input)
- [inputDiv](FilterSelectFormInput.md#inputdiv)

### Methods

- [create](FilterSelectFormInput.md#create)
- [createInputElement](FilterSelectFormInput.md#createinputelement)
- [createSelectElement](FilterSelectFormInput.md#createselectelement)
- [getProps](FilterSelectFormInput.md#getprops)
- [getValue](FilterSelectFormInput.md#getvalue)
- [setDisabled](FilterSelectFormInput.md#setdisabled)
- [setValue](FilterSelectFormInput.md#setvalue)
- [ID](FilterSelectFormInput.md#id)

## Constructors

### constructor

• **new FilterSelectFormInput**(`props`): [`FilterSelectFormInput`](FilterSelectFormInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IFilterFormInputProps`](../interfaces/IFilterFormInputProps.md) |

#### Returns

[`FilterSelectFormInput`](FilterSelectFormInput.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[constructor](AbstractMapFormInput.md#constructor)

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L30)

## Properties

### input

• `Private` **input**: `Object`

Input element is composed of 3 HTML select elements

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | `HTMLSelectElement` |
| `op?` | `HTMLSelectElement` |
| `val?` | `HTMLInputElement` |

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L24)

___

### inputDiv

• `Private` `Optional` **inputDiv**: `HTMLDivElement`

The input element is created when required.

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L19)

## Methods

### create

▸ **create**(): `HTMLElement`

It returns filter div element composed of 2 selects and one input element.

#### Returns

`HTMLElement`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[create](AbstractMapFormInput.md#create)

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:51](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L51)

___

### createInputElement

▸ **createInputElement**(): `HTMLInputElement`

Help static function which creates select element.

#### Returns

`HTMLInputElement`

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L96)

___

### createSelectElement

▸ **createSelectElement**(`onChangeAction`, `options`): `HTMLSelectElement`

Help static function which creates select element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChangeAction` | ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `unknown` |
| `options` | `string`[] |

#### Returns

`HTMLSelectElement`

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L79)

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

▸ **getValue**(): [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

It returns values of the inputs.

#### Returns

[`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md)

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[getValue](AbstractMapFormInput.md#getvalue)

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L107)

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

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L118)

___

### setValue

▸ **setValue**(`value`): `void`

It sets values of the inputs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IFilterFormInputValue`](../interfaces/IFilterFormInputValue.md) |

#### Returns

`void`

#### Overrides

[AbstractMapFormInput](AbstractMapFormInput.md).[setValue](AbstractMapFormInput.md#setvalue)

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:138](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L138)

___

### ID

▸ **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Defined in

[src/model/internal/inputs/filter/select/FilterSelectFormInput.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/inputs/filter/select/FilterSelectFormInput.ts#L44)
