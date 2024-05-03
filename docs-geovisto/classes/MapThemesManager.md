**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapThemesManager

# Class: MapThemesManager

This class provide functions for using themes.

## Author

Jiri Hynek

## Extends

- [`MapDomainArrayManager`](MapDomainArrayManager.md)\<[`IMapTheme`](../interfaces/IMapTheme.md)\>

## Implements

- [`IMapThemesManager`](../interfaces/IMapThemesManager.md)

## Constructors

### new MapThemesManager()

> **new MapThemesManager**(`themes`): [`MapThemesManager`](MapThemesManager.md)

#### Parameters

• **themes**: [`IMapTheme`](../interfaces/IMapTheme.md)[]

#### Returns

[`MapThemesManager`](MapThemesManager.md)

#### Overrides

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`constructor`](MapDomainArrayManager.md#constructors)

#### Source

[tools/themes/model/internal/theme/basic/MapThemesManager.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/MapThemesManager.ts#L16)

## Methods

### add()

> **add**(`domains`): `void`

It adds a domain to the list of domains.

Override this function.

#### Parameters

• **domains**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`add`](../interfaces/IMapThemesManager.md#add)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`add`](MapDomainArrayManager.md#add)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L56)

***

### getDefault()

> **getDefault**(): `undefined` \| [`IMapTheme`](../interfaces/IMapTheme.md)

The function returns the default theme.

#### Returns

`undefined` \| [`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`getDefault`](../interfaces/IMapThemesManager.md#getdefault)

#### Overrides

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDefault`](MapDomainArrayManager.md#getdefault)

#### Source

[tools/themes/model/internal/theme/basic/MapThemesManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/themes/model/internal/theme/basic/MapThemesManager.ts#L23)

***

### getDomain()

> **getDomain**(`name`): `undefined` \| [`IMapTheme`](../interfaces/IMapTheme.md)

The function returns map domains of given type.

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`IMapTheme`](../interfaces/IMapTheme.md)

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`getDomain`](../interfaces/IMapThemesManager.md#getdomain)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomain`](MapDomainArrayManager.md#getdomain)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L99)

***

### getDomainNames()

> **getDomainNames**(): `string`[]

Help function which returns the list of domain string labels (map domain types).

#### Returns

`string`[]

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`getDomainNames`](../interfaces/IMapThemesManager.md#getdomainnames)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomainNames`](MapDomainArrayManager.md#getdomainnames)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L83)

***

### getDomains()

> **getDomains**(): [`IMapTheme`](../interfaces/IMapTheme.md)[]

The function returns available map domains.

#### Returns

[`IMapTheme`](../interfaces/IMapTheme.md)[]

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`getDomains`](../interfaces/IMapThemesManager.md#getdomains)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`getDomains`](MapDomainArrayManager.md#getdomains)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L23)

***

### isEmpty()

> **isEmpty**(): `boolean`

The function returns true if size() is 0.

#### Returns

`boolean`

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`isEmpty`](../interfaces/IMapThemesManager.md#isempty)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`isEmpty`](MapDomainArrayManager.md#isempty)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L45)

***

### remove()

> **remove**(`domains`): `void`

It removes a domain from the list of domains.

#### Parameters

• **domains**: [`IMapTheme`](../interfaces/IMapTheme.md)

#### Returns

`void`

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`remove`](../interfaces/IMapThemesManager.md#remove)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`remove`](MapDomainArrayManager.md#remove)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L65)

***

### removeByName()

> **removeByName**(`id`): `void`

It removes a domain from the list of domains.

Override this function.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`removeByName`](../interfaces/IMapThemesManager.md#removebyname)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`removeByName`](MapDomainArrayManager.md#removebyname)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L76)

***

### size()

> **size**(): `number`

The function returns number of domains.

#### Returns

`number`

#### Implementation of

[`IMapThemesManager`](../interfaces/IMapThemesManager.md).[`size`](../interfaces/IMapThemesManager.md#size)

#### Inherited from

[`MapDomainArrayManager`](MapDomainArrayManager.md).[`size`](MapDomainArrayManager.md#size)

#### Source

[model/internal/domain/generic/MapDomainArrayManager.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/domain/generic/MapDomainArrayManager.ts#L38)
