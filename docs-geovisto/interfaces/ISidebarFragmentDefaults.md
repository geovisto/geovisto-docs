[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarFragmentDefaults

# Interface: ISidebarFragmentDefaults

This interface provides functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

  ↳ **`ISidebarFragmentDefaults`**

## Implemented by

- [`SidebarFragmentDefaults`](../classes/SidebarFragmentDefaults.md)

## Table of contents

### Methods

- [getConfig](ISidebarFragmentDefaults.md#getconfig)
- [getId](ISidebarFragmentDefaults.md#getid)
- [getProps](ISidebarFragmentDefaults.md#getprops)
- [getType](ISidebarFragmentDefaults.md#gettype)
- [isEnabled](ISidebarFragmentDefaults.md#isenabled)

## Methods

### getConfig

▸ **getConfig**(): [`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

It returns the default config.

#### Returns

[`ISidebarFragmentConfig`](../modules.md#isidebarfragmentconfig)

#### Overrides

[IMapObjectDefaults](IMapObjectDefaults.md).[getConfig](IMapObjectDefaults.md#getconfig)

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentDefaults.ts#L18)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getId](IMapObjectDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getProps](IMapObjectDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[IMapObjectDefaults](IMapObjectDefaults.md).[getType](IMapObjectDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns a logical value whether the sidebar fragment is enabled.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/fragment/ISidebarFragmentDefaults.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/fragment/ISidebarFragmentDefaults.ts#L23)
