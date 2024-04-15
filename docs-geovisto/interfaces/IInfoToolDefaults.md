[geovisto-map](../README.md) / [Exports](../modules.md) / IInfoToolDefaults

# Interface: IInfoToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

**`Author`**

Tomas Koscielniak

## Hierarchy

- [`IMapToolDefaults`](IMapToolDefaults.md)

  ↳ **`IInfoToolDefaults`**

## Implemented by

- [`InfoToolDefaults`](../classes/InfoToolDefaults.md)

## Table of contents

### Methods

- [getConfig](IInfoToolDefaults.md#getconfig)
- [getIcon](IInfoToolDefaults.md#geticon)
- [getId](IInfoToolDefaults.md#getid)
- [getInfoDataManager](IInfoToolDefaults.md#getinfodatamanager)
- [getLabel](IInfoToolDefaults.md#getlabel)
- [getMarkdown](IInfoToolDefaults.md#getmarkdown)
- [getProps](IInfoToolDefaults.md#getprops)
- [getType](IInfoToolDefaults.md#gettype)
- [isEnabled](IInfoToolDefaults.md#isenabled)
- [isSingleton](IInfoToolDefaults.md#issingleton)

## Methods

### getConfig

▸ **getConfig**(): [`IInfoToolConfig`](../modules.md#iinfotoolconfig)

It returns default config if no config is given.

#### Returns

[`IInfoToolConfig`](../modules.md#iinfotoolconfig)

#### Overrides

[IMapToolDefaults](IMapToolDefaults.md).[getConfig](IMapToolDefaults.md#getconfig)

#### Defined in

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L20)

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

### getInfoDataManager

▸ **getInfoDataManager**(): [`IInfoDataManager`](../modules.md#iinfodatamanager)

It returns default info data manager.

#### Returns

[`IInfoDataManager`](../modules.md#iinfodatamanager)

#### Defined in

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L25)

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

### getMarkdown

▸ **getMarkdown**(): [`IInfoData`](IInfoData.md)

#### Returns

[`IInfoData`](IInfoData.md)

#### Defined in

[src/tools/info/model/types/tool/IInfoToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/info/model/types/tool/IInfoToolDefaults.ts#L27)

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
