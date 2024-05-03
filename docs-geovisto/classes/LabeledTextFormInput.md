**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledTextFormInput

# Class: LabeledTextFormInput

This class represents labeled text form input.

## Author

Jiri Hynek

## Author

Krystof Rykala - input div wrapper

## Extends

- [`TextFormInput`](TextFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new LabeledTextFormInput()

> **new LabeledTextFormInput**(`props`): [`LabeledTextFormInput`](LabeledTextFormInput.md)

#### Parameters

• **props**: [`ILabeledTextFormInputProps`](../interfaces/ILabeledTextFormInputProps.md)

#### Returns

[`LabeledTextFormInput`](LabeledTextFormInput.md)

#### Overrides

[`TextFormInput`](TextFormInput.md).[`constructor`](TextFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/text/LabeledTextFormInput.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L20)

## Properties

### div?

> `private` `optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/labeled/text/LabeledTextFormInput.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L18)

## Methods

### create()

> **create**(): `HTMLElement`

It returns input element.

#### Returns

`HTMLElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Overrides

[`TextFormInput`](TextFormInput.md).[`create`](TextFormInput.md#create)

#### Source

[model/internal/inputs/labeled/text/LabeledTextFormInput.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L36)

***

### createLabel()

> `protected` **createLabel**(): `HTMLDivElement`

A help method which creates the label HTML element.

#### Returns

`HTMLDivElement`

#### Source

[model/internal/inputs/labeled/text/LabeledTextFormInput.ts:58](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L58)

***

### getInput()

> `protected` **getInput**(): `undefined` \| `HTMLInputElement`

It makes input element visible for the extended classes.

#### Returns

`undefined` \| `HTMLInputElement`

#### Inherited from

[`TextFormInput`](TextFormInput.md).[`getInput`](TextFormInput.md#getinput)

#### Source

[model/internal/inputs/basic/text/TextFormInput.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/text/TextFormInput.ts#L48)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`TextFormInput`](TextFormInput.md).[`getProps`](TextFormInput.md#getprops)

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

#### Inherited from

[`TextFormInput`](TextFormInput.md).[`getValue`](TextFormInput.md#getvalue)

#### Source

[model/internal/inputs/basic/text/TextFormInput.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/text/TextFormInput.ts#L55)

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

#### Inherited from

[`TextFormInput`](TextFormInput.md).[`setDisabled`](TextFormInput.md#setdisabled)

#### Source

[model/internal/inputs/basic/text/TextFormInput.ts:73](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/text/TextFormInput.ts#L73)

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

#### Inherited from

[`TextFormInput`](TextFormInput.md).[`setValue`](TextFormInput.md#setvalue)

#### Source

[model/internal/inputs/basic/text/TextFormInput.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/text/TextFormInput.ts#L64)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type.

#### Returns

`string`

#### Overrides

[`TextFormInput`](TextFormInput.md).[`ID`](TextFormInput.md#id)

#### Source

[model/internal/inputs/labeled/text/LabeledTextFormInput.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/text/LabeledTextFormInput.ts#L29)
