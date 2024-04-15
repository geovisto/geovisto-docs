[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarFragmentDefaults

# Class: SidebarFragmentDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectDefaults`](MapObjectDefaults.md)

  ↳ **`SidebarFragmentDefaults`**

## Implements

- [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

## Table of contents

### Constructors

- [constructor](SidebarFragmentDefaults.md#constructor)

### Properties

- [idString](SidebarFragmentDefaults.md#idstring)
- [id](SidebarFragmentDefaults.md#id)

### Methods

- [generateId](SidebarFragmentDefaults.md#generateid)
- [getConfig](SidebarFragmentDefaults.md#getconfig)
- [getId](SidebarFragmentDefaults.md#getid)
- [getProps](SidebarFragmentDefaults.md#getprops)
- [getType](SidebarFragmentDefaults.md#gettype)
- [isEnabled](SidebarFragmentDefaults.md#isenabled)

## Constructors

### constructor

• **new SidebarFragmentDefaults**(): [`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)

#### Returns

[`SidebarFragmentDefaults`](SidebarFragmentDefaults.md)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[constructor](MapObjectDefaults.md#constructor)

## Properties

### idString

• `Protected` `Optional` **idString**: `string`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[idString](MapObjectDefaults.md#idstring)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L13)

___

### id

▪ `Static` `Protected` **id**: `number`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[id](MapObjectDefaults.md#id)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId

▸ **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[generateId](MapObjectDefaults.md#generateid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L54)

___

### getConfig

▸ **getConfig**(): [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

It returns the default config.

#### Returns

[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

#### Implementation of

[ISidebarFragmentDefaults](../interfaces/ISidebarFragmentDefaults.md).[getConfig](../interfaces/ISidebarFragmentDefaults.md#getconfig)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getConfig](MapObjectDefaults.md#getconfig)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L18)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ISidebarFragmentDefaults](../interfaces/ISidebarFragmentDefaults.md).[getId](../interfaces/ISidebarFragmentDefaults.md#getid)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getId](MapObjectDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ISidebarFragmentDefaults](../interfaces/ISidebarFragmentDefaults.md).[getProps](../interfaces/ISidebarFragmentDefaults.md#getprops)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getProps](MapObjectDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the sidebar fragment.

#### Returns

`string`

#### Implementation of

[ISidebarFragmentDefaults](../interfaces/ISidebarFragmentDefaults.md).[getType](../interfaces/ISidebarFragmentDefaults.md#gettype)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getType](MapObjectDefaults.md#gettype)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L28)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns a logical value whether the sidebar fragment is enabled.

#### Returns

`boolean`

#### Implementation of

[ISidebarFragmentDefaults](../interfaces/ISidebarFragmentDefaults.md).[isEnabled](../interfaces/ISidebarFragmentDefaults.md#isenabled)

#### Defined in

[src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/fragment/SidebarFragmentDefaults.ts#L35)
