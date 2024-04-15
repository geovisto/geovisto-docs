[geovisto-map](../README.md) / [Exports](../modules.md) / SidebarTabDefaults

# Class: SidebarTabDefaults

This class provide functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`MapObjectDefaults`](MapObjectDefaults.md)

  ↳ **`SidebarTabDefaults`**

## Implements

- [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

## Table of contents

### Constructors

- [constructor](SidebarTabDefaults.md#constructor)

### Properties

- [idString](SidebarTabDefaults.md#idstring)
- [id](SidebarTabDefaults.md#id)

### Methods

- [generateId](SidebarTabDefaults.md#generateid)
- [getConfig](SidebarTabDefaults.md#getconfig)
- [getIcon](SidebarTabDefaults.md#geticon)
- [getId](SidebarTabDefaults.md#getid)
- [getName](SidebarTabDefaults.md#getname)
- [getProps](SidebarTabDefaults.md#getprops)
- [getType](SidebarTabDefaults.md#gettype)
- [hasCheckButton](SidebarTabDefaults.md#hascheckbutton)
- [isEnabled](SidebarTabDefaults.md#isenabled)

## Constructors

### constructor

• **new SidebarTabDefaults**(): [`SidebarTabDefaults`](SidebarTabDefaults.md)

#### Returns

[`SidebarTabDefaults`](SidebarTabDefaults.md)

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

▸ **getConfig**(): [`ISidebarTabConfig`](../modules.md#isidebartabconfig)

It returns the default config.

#### Returns

[`ISidebarTabConfig`](../modules.md#isidebartabconfig)

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getConfig](../interfaces/ISidebarTabDefaults.md#getconfig)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getConfig](MapObjectDefaults.md#getconfig)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L18)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the sidebar tab.

#### Returns

`string`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getIcon](../interfaces/ISidebarTabDefaults.md#geticon)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:49](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L49)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getId](../interfaces/ISidebarTabDefaults.md#getid)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getId](MapObjectDefaults.md#getid)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L44)

___

### getName

▸ **getName**(): `string`

It returns name of the sidebar tab.

#### Returns

`string`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getName](../interfaces/ISidebarTabDefaults.md#getname)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L42)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getProps](../interfaces/ISidebarTabDefaults.md#getprops)

#### Inherited from

[MapObjectDefaults](MapObjectDefaults.md).[getProps](MapObjectDefaults.md#getprops)

#### Defined in

[src/model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/object/MapObjectDefaults.ts#L18)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the sidebar tab.

#### Returns

`string`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[getType](../interfaces/ISidebarTabDefaults.md#gettype)

#### Overrides

[MapObjectDefaults](MapObjectDefaults.md).[getType](MapObjectDefaults.md#gettype)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L28)

___

### hasCheckButton

▸ **hasCheckButton**(): `boolean`

It returns a logical value whether the sidebar tab contains a check button used to enable/disable the tool.

#### Returns

`boolean`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[hasCheckButton](../interfaces/ISidebarTabDefaults.md#hascheckbutton)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L56)

___

### isEnabled

▸ **isEnabled**(): `boolean`

It returns the default value whether the sidebar tab is enabled.

#### Returns

`boolean`

#### Implementation of

[ISidebarTabDefaults](../interfaces/ISidebarTabDefaults.md).[isEnabled](../interfaces/ISidebarTabDefaults.md#isenabled)

#### Defined in

[src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/sidebar/model/internal/tab/SidebarTabDefaults.ts#L35)
