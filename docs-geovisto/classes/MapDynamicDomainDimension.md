[geovisto-map](../README.md) / [Exports](../modules.md) / MapDynamicDomainDimension

# Class: MapDynamicDomainDimension\<T\>

The class wraps a map dynamin domain dimension and its properties.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

## Hierarchy

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

  ↳ **`MapDynamicDomainDimension`**

## Implements

- [`IMapDimension`](../interfaces/IMapDimension.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](MapDynamicDomainDimension.md#constructor)

### Properties

- [domainManagerLoader](MapDynamicDomainDimension.md#domainmanagerloader)
- [domainName](MapDynamicDomainDimension.md#domainname)

### Methods

- [findValue](MapDynamicDomainDimension.md#findvalue)
- [getDomainManager](MapDynamicDomainDimension.md#getdomainmanager)
- [getDomainManagerLoader](MapDynamicDomainDimension.md#getdomainmanagerloader)
- [getName](MapDynamicDomainDimension.md#getname)
- [getValue](MapDynamicDomainDimension.md#getvalue)
- [setDomainManager](MapDynamicDomainDimension.md#setdomainmanager)
- [setDomainManagerLoader](MapDynamicDomainDimension.md#setdomainmanagerloader)
- [setName](MapDynamicDomainDimension.md#setname)
- [setStringValue](MapDynamicDomainDimension.md#setstringvalue)
- [setValue](MapDynamicDomainDimension.md#setvalue)
- [toString](MapDynamicDomainDimension.md#tostring)

## Constructors

### constructor

• **new MapDynamicDomainDimension**\<`T`\>(`name`, `domainManagerLoader`, `domainName`): [`MapDynamicDomainDimension`](MapDynamicDomainDimension.md)\<`T`\>

It creates a new map dimension.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMapDomain`](../interfaces/IMapDomain.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `domainManagerLoader` | () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\> |
| `domainName` | `string` |

#### Returns

[`MapDynamicDomainDimension`](MapDynamicDomainDimension.md)\<`T`\>

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[constructor](AbstractMapDimension.md#constructor)

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L22)

## Properties

### domainManagerLoader

• `Private` **domainManagerLoader**: () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Type declaration

▸ (): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

##### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L13)

___

### domainName

• `Private` **domainName**: `string`

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L14)

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

[IMapDimension](../interfaces/IMapDimension.md).[findValue](../interfaces/IMapDimension.md#findvalue)

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[findValue](AbstractMapDimension.md#findvalue)

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:86](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L86)

___

### getDomainManager

▸ **getDomainManager**(): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager which is set to the map dimension.

#### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L31)

___

### getDomainManagerLoader

▸ **getDomainManagerLoader**(): () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager loader which is set to the map dimension.

#### Returns

`fn`

▸ (): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

##### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:47](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L47)

___

### getName

▸ **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[getName](../interfaces/IMapDimension.md#getname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[getName](AbstractMapDimension.md#getname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L30)

___

### getValue

▸ **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[getValue](../interfaces/IMapDimension.md#getvalue)

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[getValue](AbstractMapDimension.md#getvalue)

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:63](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L63)

___

### setDomainManager

▸ **setDomainManager**(): `void`

It sets a map domain manager which is set to the map dimension.

#### Returns

`void`

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L40)

___

### setDomainManagerLoader

▸ **setDomainManagerLoader**(`domainManagerLoader`): `void`

It sets a map domain manager loader which is set to the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainManagerLoader` | () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\> |

#### Returns

`void`

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L56)

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

[IMapDimension](../interfaces/IMapDimension.md).[setName](../interfaces/IMapDimension.md#setname)

#### Inherited from

[AbstractMapDimension](AbstractMapDimension.md).[setName](AbstractMapDimension.md#setname)

#### Defined in

[src/model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/AbstractMapDimension.ts#L37)

___

### setStringValue

▸ **setStringValue**(`domainName`): `void`

It looks for the map domain of the given name and sets it the map dimension.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domainName` | `string` |

#### Returns

`void`

#### Implementation of

[IMapDimension](../interfaces/IMapDimension.md).[setStringValue](../interfaces/IMapDimension.md#setstringvalue)

#### Overrides

[AbstractMapDimension](AbstractMapDimension.md).[setStringValue](AbstractMapDimension.md#setstringvalue)

#### Defined in

[src/model/internal/dimension/MapDynamicDomainDimension.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/dimension/MapDynamicDomainDimension.ts#L76)

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

[IMapDimension](../interfaces/IMapDimension.md).[setValue](../interfaces/IMapDimension.md#setvalue)

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
