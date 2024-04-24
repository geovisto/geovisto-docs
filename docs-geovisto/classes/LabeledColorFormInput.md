**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledColorFormInput

# Class: LabeledColorFormInput

This class represents basic text sidebar input.

## Author

Jakub Kachlik

## Author

Jiri Hynek - conversion to TypeScript

TODO: replace this by LabeledTextFormInput

## Extends

- [`AbstractMapFormInput`](AbstractMapFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new LabeledColorFormInput()

> **new LabeledColorFormInput**(`props`): [`LabeledColorFormInput`](LabeledColorFormInput.md)

#### Parameters

• **props**: [`ILabeledColorFormInputProps`](../interfaces/ILabeledColorFormInputProps.md)

#### Returns

[`LabeledColorFormInput`](LabeledColorFormInput.md)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`constructor`](AbstractMapFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L32)

## Properties

### div?

> `private` `optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L25)

***

### input?

> `private` `optional` **input**: `HTMLInputElement`

Basic input is used.

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L30)

## Methods

### create()

> **create**(): `HTMLDivElement`

It returns input element.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`create`](AbstractMapFormInput.md#create)

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L50)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getProps`](AbstractMapFormInput.md#getprops)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> **getValue**(): `string`

It returns value of the input element.

#### Returns

`string`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`getValue`](../interfaces/IMapFormInput.md#getvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`getValue`](AbstractMapFormInput.md#getvalue)

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L89)

***

### setDisabled()

> **setDisabled**(`disabled`): `void`

It sets the input disabled.

#### Parameters

• **disabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setDisabled`](../interfaces/IMapFormInput.md#setdisabled)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setDisabled`](AbstractMapFormInput.md#setdisabled)

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L107)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the input element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setValue`](../interfaces/IMapFormInput.md#setvalue)

#### Overrides

[`AbstractMapFormInput`](AbstractMapFormInput.md).[`setValue`](AbstractMapFormInput.md#setvalue)

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:98](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L98)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Source

[model/internal/inputs/labeled/color/LabeledColorFormInput.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/color/LabeledColorFormInput.ts#L43)
