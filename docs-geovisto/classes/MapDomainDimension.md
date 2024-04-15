[geovisto-map](../README.md) / [Exports](../modules.md) / MapDomainDimension

# Class: MapDomainDimension\<T\>

The class wraps a map domain dimension and its properties.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

## Hierarchy

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

  ↳ **`MapDomainDimension`**

## Implements

- [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](MapDomainDimension.md#constructor)

### Properties

- [domainManager](MapDomainDimension.md#domainmanager)

### Methods

- [findValue](MapDomainDimension.md#findvalue)
- [getDomainManager](MapDomainDimension.md#getdomainmanager)
- [getName](MapDomainDimension.md#getname)
- [getValue](MapDomainDimension.md#getvalue)
- [setDomainManager](MapDomainDimension.md#setdomainmanager)
- [setName](MapDomainDimension.md#setname)
- [setStringValue](MapDomainDimension.md#setstringvalue)
- [setValue](MapDomainDimension.md#setvalue)
- [toString](MapDomainDimension.md#tostring)

## Constructors

### constructor

• **new MapDomainDimension**\<`T`\>(`name`, `domainManager`, `dataDomain?`): [`MapDomainDimension`](MapDomainDimension.md)\<`T`\>

It creates a new map dimension.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `domainManager` | [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\> |
| `dataDomain?` | `T` |

#### Returns

[`MapDomainDimension`](MapDomainDimension.md)\<`T`\>

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[constructor](AbstractMapDimension.md#constructor)

#### Defined in

[src/model/internal/dimension/MapDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDomainDimension.ts#L22)

## Properties

### domainManager

• `Private` **domainManager**: [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Defined in

[src/model/internal/dimension/MapDomainDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDomainDimension.ts#L13)

## Methods

### findValue

▸ **findValue**(`domainName`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[findValue](../interfaces/IMapDomainDimension.md#findvalue)

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[findValue](AbstractMapDimension.md#findvalue)

#### Defined in

[src/model/internal/dimension/MapDomainDimension.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDomainDimension.ts#L48)

___

### getDomainManager

▸ **getDomainManager**(): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager which is set to the map dimension.

#### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[getDomainManager](../interfaces/IMapDomainDimension.md#getdomainmanager)

#### Defined in

[src/model/internal/dimension/MapDomainDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDomainDimension.ts#L30)

___

### getName

▸ **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[getName](../interfaces/IMapDomainDimension.md#getname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[getName](AbstractMapDimension.md#getname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L30)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the value which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[getValue](../interfaces/IMapDomainDimension.md#getvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[getValue](AbstractMapDimension.md#getvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L44)

___

### setDomainManager

▸ **setDomainManager**(`domainManager`): `void`

It sets a map domain manager which is set to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainManager` | [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\> |

#### Returns

`void`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[setDomainManager](../interfaces/IMapDomainDimension.md#setdomainmanager)

#### Defined in

[src/model/internal/dimension/MapDomainDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDomainDimension.ts#L39)

___

### setName

▸ **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[setName](../interfaces/IMapDomainDimension.md#setname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setName](AbstractMapDimension.md#setname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L37)

___

### setStringValue

▸ **setStringValue**(`value`): `void`

It deserializes the string representation of a given value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[setStringValue](../interfaces/IMapDomainDimension.md#setstringvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setStringValue](AbstractMapDimension.md#setstringvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:69](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L69)

___

### setValue

▸ **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `T` |

#### Returns

`void`

#### Implementation of

[IMapDomainDimension](../interfaces/IMapDomainDimension.md).[setValue](../interfaces/IMapDomainDimension.md#setvalue)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setValue](AbstractMapDimension.md#setvalue)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L53)

___

### toString

▸ **toString**(): `string`

The string representation is equal to the name of the map domain.

#### Returns

`string`

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[toString](AbstractMapDimension.md#tostring)

#### Defined in

[src/model/internal/domain/abstract/AbstractMapDomain.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/domain/abstract/AbstractMapDomain.ts#L18)
