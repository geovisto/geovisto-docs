[geovisto-map](../README.md) / [Exports](../modules.md) / IThemesToolDefaults

# Interface: IThemesToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapToolDefaults`](IMapToolDefaults.md)

  ↳ **`IThemesToolDefaults`**

## Implemented by

- [`ThemesToolDefaults`](../classes/ThemesToolDefaults.md)

## Table of contents

### Methods

- [getConfig](IThemesToolDefaults.md#getconfig)
- [getIcon](IThemesToolDefaults.md#geticon)
- [getId](IThemesToolDefaults.md#getid)
- [getLabel](IThemesToolDefaults.md#getlabel)
- [getProps](IThemesToolDefaults.md#getprops)
- [getTheme](IThemesToolDefaults.md#gettheme)
- [getThemesManager](IThemesToolDefaults.md#getthemesmanager)
- [getType](IThemesToolDefaults.md#gettype)
- [isEnabled](IThemesToolDefaults.md#isenabled)
- [isSingleton](IThemesToolDefaults.md#issingleton)

## Methods

### getConfig

▸ **getConfig**(): [`IThemesToolConfig`](../modules.md#ithemestoolconfig)

It returns default config if no config is given.

#### Returns

[`IThemesToolConfig`](../modules.md#ithemestoolconfig)

#### Overrides

[IMapToolDefaults](IMapToolDefaults.md).[getConfig](IMapToolDefaults.md#getconfig)

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolDefaults.ts#L20)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getIcon](IMapToolDefaults.md#geticon)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

___

### getId

▸ **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getId](IMapToolDefaults.md#getid)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L32)

___

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getLabel](IMapToolDefaults.md#getlabel)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

___

### getProps

▸ **getProps**(): [`IMapObjectProps`](../modules.md#imapobjectprops)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../modules.md#imapobjectprops)

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getProps](IMapToolDefaults.md#getprops)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L17)

___

### getTheme

▸ **getTheme**(`themesManager`): [`IMapTheme`](IMapTheme.md)

It returns default theme.

#### Parameters

| Name | Type |
| :------ | :------ |
| `themesManager` | `undefined` \| [`IMapThemesManager`](IMapThemesManager.md) |

#### Returns

[`IMapTheme`](IMapTheme.md)

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolDefaults.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolDefaults.ts#L30)

___

### getThemesManager

▸ **getThemesManager**(): [`IMapThemesManager`](IMapThemesManager.md)

It returns default themes manager.

#### Returns

[`IMapThemesManager`](IMapThemesManager.md)

#### Defined in

[src/tools/themes/model/types/tool/IThemesToolDefaults.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/themes/model/types/tool/IThemesToolDefaults.ts#L25)

___

### getType

▸ **getType**(): `string`

It returns a unique type string of the map object.

#### Returns

`string`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[getType](IMapToolDefaults.md#gettype)

#### Defined in

[src/model/types/object/IMapObjectDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/object/IMapObjectDefaults.ts#L27)

___

### isEnabled

▸ **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[isEnabled](IMapToolDefaults.md#isenabled)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Inherited from

[IMapToolDefaults](IMapToolDefaults.md).[isSingleton](IMapToolDefaults.md#issingleton)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
