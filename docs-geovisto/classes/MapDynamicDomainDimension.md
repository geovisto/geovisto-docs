**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapDynamicDomainDimension

# Class: MapDynamicDomainDimension\<T\>

The class wraps a map dynamin domain dimension and its properties.

## Author

Jiri Hynek

## Extends

- [`AbstractMapDimension`](AbstractMapDimension.md)\<`T`\>

## Type parameters

• **T** *extends* [`IMapDomain`](../interfaces/IMapDomain.md)

## Implements

- [`IMapDimension`](../interfaces/IMapDimension.md)\<`T`\>

## Constructors

### new MapDynamicDomainDimension()

> **new MapDynamicDomainDimension**\<`T`\>(`name`, `domainManagerLoader`, `domainName`): [`MapDynamicDomainDimension`](MapDynamicDomainDimension.md)\<`T`\>

It creates a new map dimension.

#### Parameters

• **name**: `string`

• **domainManagerLoader**

• **domainName**: `string`

#### Returns

[`MapDynamicDomainDimension`](MapDynamicDomainDimension.md)\<`T`\>

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`constructor`](AbstractMapDimension.md#constructors)

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L22)

## Properties

### domainManagerLoader()

> `private` **domainManagerLoader**: () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L13)

***

### domainName

> `private` **domainName**: `string`

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:14](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L14)

## Methods

### findValue()

> **findValue**(`domainName`): `undefined` \| `T`

It finds the value of given string.

#### Parameters

• **domainName**: `string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`findValue`](../interfaces/IMapDimension.md#findvalue)

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`findValue`](AbstractMapDimension.md#findvalue)

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L86)

***

### getDomainManager()

> **getDomainManager**(): [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager which is set to the map dimension.

#### Returns

[`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L31)

***

### getDomainManagerLoader()

> **getDomainManagerLoader**(): () => [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>

It returns the map domain manager loader which is set to the map dimension.

#### Returns

`Function`

> ##### Returns
>
> [`IMapDomainManager`](../interfaces/IMapDomainManager.md)\<`T`\>
>

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L47)

***

### getName()

> **getName**(): `string`

It returns the name of the dimension

#### Returns

`string`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`getName`](../interfaces/IMapDimension.md#getname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`getName`](AbstractMapDimension.md#getname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L30)

***

### getValue()

> **getValue**(): `undefined` \| `T`

It returns the map domain which is set to the map dimension.

#### Returns

`undefined` \| `T`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`getValue`](../interfaces/IMapDimension.md#getvalue)

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`getValue`](AbstractMapDimension.md#getvalue)

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L63)

***

### setDomainManager()

> **setDomainManager**(): `void`

It sets a map domain manager which is set to the map dimension.

#### Returns

`void`

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L40)

***

### setDomainManagerLoader()

> **setDomainManagerLoader**(`domainManagerLoader`): `void`

It sets a map domain manager loader which is set to the map dimension.

#### Parameters

• **domainManagerLoader**

#### Returns

`void`

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L56)

***

### setName()

> **setName**(`name`): `void`

It sets the name of the dimension

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setName`](../interfaces/IMapDimension.md#setname)

#### Inherited from

[`AbstractMapDimension`](AbstractMapDimension.md).[`setName`](AbstractMapDimension.md#setname)

#### Source

[model/internal/dimension/AbstractMapDimension.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/AbstractMapDimension.ts#L37)

***

### setStringValue()

> **setStringValue**(`domainName`): `void`

It looks for the map domain of the given name and sets it the map dimension.

#### Parameters

• **domainName**: `string`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setStringValue`](../interfaces/IMapDimension.md#setstringvalue)

#### Overrides

[`AbstractMapDimension`](AbstractMapDimension.md).[`setStringValue`](AbstractMapDimension.md#setstringvalue)

#### Source

[model/internal/dimension/MapDynamicDomainDimension.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/dimension/MapDynamicDomainDimension.ts#L76)

***

### setValue()

> **setValue**(`value`): `void`

It sets a new value to the map dimension.

#### Parameters

• **value**: `undefined` \| `T`

#### Returns

`void`

#### Implementation of

[`IMapDimension`](../interfaces/IMapDimension.md).[`setValue`](../interfaces/IMapDimension.md#setvalue)

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
