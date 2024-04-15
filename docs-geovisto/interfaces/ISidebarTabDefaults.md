[geovisto-map](../README.md) / [Exports](../modules.md) / ISidebarTabDefaults

# Interface: ISidebarTabDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

  ↳ **`ISidebarTabDefaults`**

## Implemented by

- [`SidebarTabDefaults`](../classes/SidebarTabDefaults.md)

## Table of contents

### Methods

- [getConfig](ISidebarTabDefaults.md#getconfig)
- [getIcon](ISidebarTabDefaults.md#geticon)
- [getId](ISidebarTabDefaults.md#getid)
- [getName](ISidebarTabDefaults.md#getname)
- [getProps](ISidebarTabDefaults.md#getprops)
- [getType](ISidebarTabDefaults.md#gettype)
- [hasCheckButton](ISidebarTabDefaults.md#hascheckbutton)
- [isEnabled](ISidebarTabDefaults.md#isenabled)

## Methods

### getConfig

▸ **getConfig**(): [`ISidebarTabConfig`](../modules.md#isidebartabconfig)

It returns the default config.

#### Returns

[`ISidebarTabConfig`](../modules.md#isidebartabconfig)

#### Overrides

[IMapObjectDefaults](IMapObjectDefaults.md).[getConfig](IMapObjectDefaults.md#getconfig)

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L18)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the sidebar tab.

#### Returns

`string`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L33)

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

### getName

▸ **getName**(): `string`

It returns name of the sidebar tab.

#### Returns

`string`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L28)

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

### hasCheckButton

▸ **hasCheckButton**(): `boolean`

It returns a logical value whether the sidebar tab contains a check button used to enable/disable the tool.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L38)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns whether the default value the sidebar tab is enabled.

#### Returns

`boolean`

#### Defined in

[src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/types/tab/ISidebarTabDefaults.ts#L23)
