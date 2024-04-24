**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LabeledSelectFormInput

# Class: LabeledSelectFormInput

This class represents basic select form input composed of options.

## Author

Jiri Hynek

## Extends

- [`SelectFormInput`](SelectFormInput.md)

## Implements

- [`IMapFormInput`](../interfaces/IMapFormInput.md)

## Constructors

### new LabeledSelectFormInput()

> **new LabeledSelectFormInput**(`props`): [`LabeledSelectFormInput`](LabeledSelectFormInput.md)

#### Parameters

• **props**: [`ILabeledSelectFormInputProps`](../interfaces/ILabeledSelectFormInputProps.md)

#### Returns

[`LabeledSelectFormInput`](LabeledSelectFormInput.md)

#### Overrides

[`SelectFormInput`](SelectFormInput.md).[`constructor`](SelectFormInput.md#constructors)

#### Source

[model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L19)

## Properties

### div?

> `private` `optional` **div**: `HTMLDivElement`

The input element is created when required.

#### Source

[model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L17)

## Methods

### create()

> **create**(): `HTMLElement`

It returns select element.

#### Returns

`HTMLElement`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`create`](../interfaces/IMapFormInput.md#create)

#### Overrides

[`SelectFormInput`](SelectFormInput.md).[`create`](SelectFormInput.md#create)

#### Source

[model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L35)

***

### getProps()

> `protected` **getProps**(): [`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

It provides the props to the exteded classes.

#### Returns

[`IMapFormInputProps`](../interfaces/IMapFormInputProps.md)

#### Inherited from

[`SelectFormInput`](SelectFormInput.md).[`getProps`](SelectFormInput.md#getprops)

#### Source

[model/internal/inputs/abstract/AbstractMapFormInput.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/abstract/AbstractMapFormInput.ts#L23)

***

### getValue()

> **getValue**(): `string`

It returns value of the select element.

#### Returns

`string`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`getValue`](../interfaces/IMapFormInput.md#getvalue)

#### Inherited from

[`SelectFormInput`](SelectFormInput.md).[`getValue`](SelectFormInput.md#getvalue)

#### Source

[model/internal/inputs/basic/select/SelectFormInput.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/select/SelectFormInput.ts#L53)

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

[`SelectFormInput`](SelectFormInput.md).[`setDisabled`](SelectFormInput.md#setdisabled)

#### Source

[model/internal/inputs/basic/select/SelectFormInput.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/select/SelectFormInput.ts#L71)

***

### setValue()

> **setValue**(`value`): `void`

It sets value of the select element.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapFormInput`](../interfaces/IMapFormInput.md).[`setValue`](../interfaces/IMapFormInput.md#setvalue)

#### Inherited from

[`SelectFormInput`](SelectFormInput.md).[`setValue`](SelectFormInput.md#setvalue)

#### Source

[model/internal/inputs/basic/select/SelectFormInput.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/basic/select/SelectFormInput.ts#L62)

***

### ID()

> `static` **ID**(): `string`

Static function returns identifier of the input type

#### Returns

`string`

#### Overrides

[`SelectFormInput`](SelectFormInput.md).[`ID`](SelectFormInput.md#id)

#### Source

[model/internal/inputs/labeled/select/LabeledSelectFormInput.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/inputs/labeled/select/LabeledSelectFormInput.ts#L28)
