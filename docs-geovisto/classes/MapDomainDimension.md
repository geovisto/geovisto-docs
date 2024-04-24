**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapDomainDimension

# Class: MapDomainDimension\<T\>

The class wraps a map domain dimension and its properties.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

## Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

## Implements

- [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`T`\>

## Constructors

### new MapDomainDimension()

> **new MapDomainDimension**\<`T`\>(`name`, `domainManager`, `dataDomain`?): [`MapDomainDimension`](MapDomainDimension.md)\<`T`\>

It creates a new map dimension.

#### Parameters

• **name**: `string`

• **domainManager**: [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

• **dataDomain?**: `T`

#### Returns

[`MapDomainDimension`](MapDomainDimension.md)\<`T`\>

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`constructor`](AbstractMapDimension.md#constructors)

#### Source

[model/internal/dimension/MapDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDomainDimension.ts#L22)

## Properties

### domainManager

> `private` **domainManager**: [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Source

[model/internal/dimension/MapDomainDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDomainDimension.ts#L13)

## Methods

### findValue()

> **findValue**(`domainName`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **domainName**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`findValue`](../interfaces/IMapDomainDimension.md#findvalue)

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`findValue`](AbstractMapDimension.md#findvalue)

#### Source

[model/internal/dimension/MapDomainDimension.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDomainDimension.ts#L48)

***

### getDomainManager()

> **getDomainManager**(): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager which is set to the map dimension.

#### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`getDomainManager`](../interfaces/IMapDomainDimension.md#getdomainmanager)

#### Source

[model/internal/dimension/MapDomainDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDomainDimension.ts#L30)

***

### getName()

> **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`getName`](../interfaces/IMapDomainDimension.md#getname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`getName`](AbstractMapDimension.md#getname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L30)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`getValue`](../interfaces/IMapDomainDimension.md#getvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`getValue`](AbstractMapDimension.md#getvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L44)

***

### setDomainManager()

> **setDomainManager**(`domainManager`): `void`

It sets a map domain manager which is set to the map dimension.

#### Parameters

• **domainManager**: [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Returns

`void`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`setDomainManager`](../interfaces/IMapDomainDimension.md#setdomainmanager)

#### Source

[model/internal/dimension/MapDomainDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDomainDimension.ts#L39)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`setName`](../interfaces/IMapDomainDimension.md#setname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setName`](AbstractMapDimension.md#setname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L37)

***

### setStringValue()

> **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

• **value**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`setStringValue`](../interfaces/IMapDomainDimension.md#setstringvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setStringValue`](AbstractMapDimension.md#setstringvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L69)

***

### setValue()

> **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

• **value**: `undefined` \| `T`

#### Returns

`void`

#### Implementation of

[`IMapDomainDimension`](../interfaces/IMapDomainDimension.md).[`setValue`](../interfaces/IMapDomainDimension.md#setvalue)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setValue`](AbstractMapDimension.md#setvalue)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L53)

***

### toString()

> **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`toString`](AbstractMapDimension.md#tostring)

#### Source

[model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
