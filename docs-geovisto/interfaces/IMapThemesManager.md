[geovisto-map](../README.md) / [Exports](../modules.md) / IMapThemesManager

# Interface: IMapThemesManager

This interface declares a manager for using themes.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapDomainArrayManager`](IMapDomainArrayManager.md)\<[`IMapTheme`](IMapTheme.md)\>

  ↳ **`IMapThemesManager`**

## Implemented by

- [`MapThemesManager`](../classes/MapThemesManager.md)

## Table of contents

### Methods

- [add](IMapThemesManager.md#add)
- [getDefault](IMapThemesManager.md#getdefault)
- [getDomain](IMapThemesManager.md#getdomain)
- [getDomainNames](IMapThemesManager.md#getdomainnames)
- [getDomains](IMapThemesManager.md#getdomains)
- [isEmpty](IMapThemesManager.md#isempty)
- [remove](IMapThemesManager.md#remove)
- [removeByName](IMapThemesManager.md#removebyname)
- [size](IMapThemesManager.md#size)

## Methods

### add

▸ **add**(`domain`): `void`

It adds a domain to the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`IMapTheme`](IMapTheme.md) |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[add](IMapDomainArrayManager.md#add)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L31)

___

### getDefault

▸ **getDefault**(): `undefined` \| [`IMapTheme`](IMapTheme.md)

It returns the default theme.

#### Returns

`undefined` \| [`IMapTheme`](IMapTheme.md)

#### Overrides

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDefault](IMapDomainArrayManager.md#getdefault)

#### Defined in

[src/tools/themes/model/types/theme/IMapThemesManager.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/theme/IMapThemesManager.ts#L18)

___

### getDomain

▸ **getDomain**(`name`): `undefined` \| [`IMapTheme`](IMapTheme.md)

The function returns map domains of given name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`IMapTheme`](IMapTheme.md)

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomain](IMapDomainArrayManager.md#getdomain)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L27)

___

### getDomainNames

▸ **getDomainNames**(): `string`[]

It sets the data domain which is set to the map dimension.

#### Returns

`string`[]

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomainNames](IMapDomainArrayManager.md#getdomainnames)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L20)

___

### getDomains

▸ **getDomains**(): `undefined` \| [`IMapTheme`](IMapTheme.md)[]

It returns data domain which is set to the map dimension.

#### Returns

`undefined` \| [`IMapTheme`](IMapTheme.md)[]

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[getDomains](IMapDomainArrayManager.md#getdomains)

#### Defined in

[src/model/types/domain/IMapDomainManager.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainManager.ts#L13)

___

### isEmpty

▸ **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[isEmpty](IMapDomainArrayManager.md#isempty)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L24)

___

### remove

▸ **remove**(`domain`): `void`

It removes a domain from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`IMapTheme`](IMapTheme.md) |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[remove](IMapDomainArrayManager.md#remove)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L38)

___

### removeByName

▸ **removeByName**(`name`): `void`

It removes domain of the given name from the list of domains.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[removeByName](IMapDomainArrayManager.md#removebyname)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L45)

___

### size

▸ **size**(): `number`

The function returns the number of domains.

#### Returns

`number`

#### Inherited from

[IMapDomainArrayManager](IMapDomainArrayManager.md).[size](IMapDomainArrayManager.md#size)

#### Defined in

[src/model/types/domain/IMapDomainArrayManager.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/domain/IMapDomainArrayManager.ts#L19)
