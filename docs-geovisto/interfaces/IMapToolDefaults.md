[geovisto-map](../README.md) / [Exports](../modules.md) / IMapToolDefaults

# Interface: IMapToolDefaults

This interface declares functions which return the default state values.

**`Author`**

Jiri Hynek

## Hierarchy

- [`IMapObjectDefaults`](IMapObjectDefaults.md)

  ↳ **`IMapToolDefaults`**

  ↳↳ [`ILayerToolDefaults`](ILayerToolDefaults.md)

  ↳↳ [`IFiltersToolDefaults`](IFiltersToolDefaults.md)

  ↳↳ [`IGeoDownloaderToolDefaults`](IGeoDownloaderToolDefaults.md)

  ↳↳ [`IHierarchyToolDefaults`](IHierarchyToolDefaults.md)

  ↳↳ [`IInfoToolDefaults`](IInfoToolDefaults.md)

  ↳↳ [`ILegendToolDefaults`](ILegendToolDefaults.md)

  ↳↳ [`ISelectionToolDefaults`](ISelectionToolDefaults.md)

  ↳↳ [`ISidebarToolDefaults`](ISidebarToolDefaults.md)

  ↳↳ [`IThemesToolDefaults`](IThemesToolDefaults.md)

## Implemented by

- [`MapToolDefaults`](../classes/MapToolDefaults.md)

## Table of contents

### Methods

- [getConfig](IMapToolDefaults.md#getconfig)
- [getIcon](IMapToolDefaults.md#geticon)
- [getId](IMapToolDefaults.md#getid)
- [getLabel](IMapToolDefaults.md#getlabel)
- [getProps](IMapToolDefaults.md#getprops)
- [getType](IMapToolDefaults.md#gettype)
- [isEnabled](IMapToolDefaults.md#isenabled)
- [isSingleton](IMapToolDefaults.md#issingleton)

## Methods

### getConfig

▸ **getConfig**(): [`IMapToolConfig`](../modules.md#imaptoolconfig)

It returns default config if no config is given.

#### Returns

[`IMapToolConfig`](../modules.md#imaptoolconfig)

#### Overrides

[IMapObjectDefaults](IMapObjectDefaults.md).[getConfig](IMapObjectDefaults.md#getconfig)

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:14](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L14)

___

### getIcon

▸ **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L36)

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

### getLabel

▸ **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L31)

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

By default, the tool is enabled.

#### Returns

`boolean`

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L26)

___

### isSingleton

▸ **isSingleton**(): `boolean`

It returns a logical value whether the tool type is singleton.

#### Returns

`boolean`

#### Defined in

[src/model/types/tool/IMapToolDefaults.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/tool/IMapToolDefaults.ts#L19)
