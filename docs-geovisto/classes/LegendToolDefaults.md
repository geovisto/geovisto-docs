**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / LegendToolDefaults

# Class: LegendToolDefaults

This class provide functions which return the default state values.

## Author

Tomas Koscielniak

## Extends

- [`MapToolDefaults`](MapToolDefaults.md)

## Implements

- [`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md)

## Constructors

### new LegendToolDefaults()

> **new LegendToolDefaults**(): [`LegendToolDefaults`](LegendToolDefaults.md)

#### Returns

[`LegendToolDefaults`](LegendToolDefaults.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`constructor`](MapToolDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`idString`](MapToolDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### TYPE

> `static` **TYPE**: `string` = `"geovisto-tool-legend"`

Static tool type constant.

#### Source

[tools/legend/model/internal/tool/LegendToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L27)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`id`](MapToolDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`generateId`](MapToolDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)

It returns the default config.

#### Returns

[`ILegendToolConfig`](../type-aliases/ILegendToolConfig.md)

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getConfig`](../interfaces/ILegendToolDefaults.md#getconfig)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getConfig`](MapToolDefaults.md#getconfig)

#### Source

[tools/legend/model/internal/tool/LegendToolDefaults.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L17)

***

### getDataManager()

> **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getDataManager`](MapToolDefaults.md#getdatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L20)

***

### getGeoDataManager()

> **getGeoDataManager**(`geoDataArray`): [`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

It returns default geo data manager.

#### Parameters

• **geoDataArray**: `undefined` \| [`IGeoData`](../interfaces/IGeoData.md)[]

#### Returns

[`IGeoDataManager`](../type-aliases/IGeoDataManager.md)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getGeoDataManager`](MapToolDefaults.md#getgeodatamanager)

#### Source

[model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L27)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getIcon`](../interfaces/ILegendToolDefaults.md#geticon)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getIcon`](MapToolDefaults.md#geticon)

#### Source

[model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L64)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getId`](../interfaces/ILegendToolDefaults.md#getid)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getId`](MapToolDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getLabel`](../interfaces/ILegendToolDefaults.md#getlabel)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getLabel`](MapToolDefaults.md#getlabel)

#### Source

[model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L57)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getProps`](../interfaces/ILegendToolDefaults.md#getprops)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`getProps`](MapToolDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique string of the tool type.

#### Returns

`string`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`getType`](../interfaces/ILegendToolDefaults.md#gettype)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`getType`](MapToolDefaults.md#gettype)

#### Source

[tools/legend/model/internal/tool/LegendToolDefaults.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L32)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`isEnabled`](../interfaces/ILegendToolDefaults.md#isenabled)

#### Inherited from

[`MapToolDefaults`](MapToolDefaults.md).[`isEnabled`](MapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

Only one legend tool should be present in the Geovisto map.

#### Returns

`boolean`

#### Implementation of

[`ILegendToolDefaults`](../interfaces/ILegendToolDefaults.md).[`isSingleton`](../interfaces/ILegendToolDefaults.md#issingleton)

#### Overrides

[`MapToolDefaults`](MapToolDefaults.md).[`isSingleton`](MapToolDefaults.md#issingleton)

#### Source

[tools/legend/model/internal/tool/LegendToolDefaults.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/legend/model/internal/tool/LegendToolDefaults.ts#L39)
