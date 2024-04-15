[geovisto-map](../README.md) / [Exports](../modules.md) / IMapDynamicDomainDimension

# Interface: IMapDynamicDomainDimension\<T\>

This interface declares functions for using a map dimension which allows to set a data domain.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](IMapDomain.md) |

## Hierarchy

- [`IMapDomainDimension`](IMapDomainDimension.md)\<`T`\>

  ↳ **`IMapDynamicDomainDimension`**

## Table of contents

### Methods

- [findValue](IMapDynamicDomainDimension.md#findvalue)
- [getDomainManager](IMapDynamicDomainDimension.md#getdomainmanager)
- [getDomainManagerLoader](IMapDynamicDomainDimension.md#getdomainmanagerloader)
- [getName](IMapDynamicDomainDimension.md#getname)
- [getValue](IMapDynamicDomainDimension.md#getvalue)
- [setDomainManager](IMapDynamicDomainDimension.md#setdomainmanager)
- [setDomainManagerLoader](IMapDynamicDomainDimension.md#setdomainmanagerloader)
- [setName](IMapDynamicDomainDimension.md#setname)
- [setStringValue](IMapDynamicDomainDimension.md#setstringvalue)
- [setValue](IMapDynamicDomainDimension.md#setvalue)

## Methods

### findValue

▸ **findValue**(`value`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| `T`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[findValue](IMapDomainDimension.md#findvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L32)

___

### getDomainManager

▸ **getDomainManager**(): [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

It returns the map domain manager which provides options to the map dimension.

#### Returns

[`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[getDomainManager](IMapDomainDimension.md#getdomainmanager)

#### Defined in

[src/model/types/dimension/IMapDomainDimension.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDomainDimension.ts#L15)

___

### getDomainManagerLoader

▸ **getDomainManagerLoader**(): () => [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

It returns the map domain manager loader which is set to the map dimension.

#### Returns

`fn`

▸ (): [`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

##### Returns

[`IMapDomainManager`](IMapDomainManager.md)\<`T`\>

#### Defined in

[src/model/types/dimension/IMapDynamicDomainDimension.ts:15](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDynamicDomainDimension.ts#L15)

___

### getName

▸ **getName**(): `string`

It returns the name of the map domain.

#### Returns

`string`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[getName](IMapDomainDimension.md#getname)

#### Defined in

[src/model/types/domain/IMapDomain.ts:11](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomain.ts#L11)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[getValue](IMapDomainDimension.md#getvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L18)

___

### setDomainManager

▸ **setDomainManager**(`domain`): `void`

It sets a map domain manager which provides options to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`IMapDomainManager`](IMapDomainManager.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[setDomainManager](IMapDomainDimension.md#setdomainmanager)

#### Defined in

[src/model/types/dimension/IMapDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDomainDimension.ts#L22)

___

### setDomainManagerLoader

▸ **setDomainManagerLoader**(`domainManagerLoader`): `void`

It sets a map domain manager loader which is set to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainManagerLoader` | () => [`IMapDomainManager`](IMapDomainManager.md)\<`T`\> |

#### Returns

`void`

#### Defined in

[src/model/types/dimension/IMapDynamicDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDynamicDomainDimension.ts#L22)

___

### setName

▸ **setName**(`name`): `void`

It sets the name of the dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[setName](IMapDomainDimension.md#setname)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L13)

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

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[setStringValue](IMapDomainDimension.md#setstringvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L39)

___

### setValue

▸ **setValue**(`domain`): `void`

It sets a new map domain to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | `undefined` \| `T` |

#### Returns

`void`

#### Inherited from

[IMapDomainDimension](IMapDomainDimension.md).[setValue](IMapDomainDimension.md#setvalue)

#### Defined in

[src/model/types/dimension/IMapDimension.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/dimension/IMapDimension.ts#L25)
