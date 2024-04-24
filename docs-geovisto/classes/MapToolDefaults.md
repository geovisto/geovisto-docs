**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapToolDefaults

# Class: MapToolDefaults

This class provide functions which return the default state values.

## Author

Jiri Hynek

## Extends

- [`MapObjectDefaults`](MapObjectDefaults.md)

## Implements

- [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md)

## Constructors

### new MapToolDefaults()

> **new MapToolDefaults**(): [`MapToolDefaults`](MapToolDefaults.md)

#### Returns

[`MapToolDefaults`](MapToolDefaults.md)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`constructor`](MapObjectDefaults.md#constructors)

## Properties

### idString?

> `protected` `optional` **idString**: `string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`idString`](MapObjectDefaults.md#idstring)

#### Source

[model/internal/object/MapObjectDefaults.ts:13](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L13)

***

### id

> `static` `protected` **id**: `number`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`id`](MapObjectDefaults.md#id)

#### Source

[model/internal/object/MapObjectDefaults.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L12)

## Methods

### generateId()

> `protected` **generateId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`generateId`](MapObjectDefaults.md#generateid)

#### Source

[model/internal/object/MapObjectDefaults.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L54)

***

### getConfig()

> **getConfig**(): [`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

By defaults it returns the config with undefined props.

#### Returns

[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getConfig`](../interfaces/IMapToolDefaults.md#getconfig)

#### Overrides

[`MapObjectDefaults`](MapObjectDefaults.md).[`getConfig`](MapObjectDefaults.md#getconfig)

#### Source

[model/internal/tool/MapToolDefaults.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L34)

***

### getDataManager()

> **getDataManager**(): [`IMapDataManager`](../interfaces/IMapDataManager.md)

It returns default map data manager.

#### Returns

[`IMapDataManager`](../interfaces/IMapDataManager.md)

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

#### Source

[model/internal/tool/MapToolDefaults.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L27)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon of the tool.

#### Returns

`string`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getIcon`](../interfaces/IMapToolDefaults.md#geticon)

#### Source

[model/internal/tool/MapToolDefaults.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L64)

***

### getId()

> **getId**(): `string`

It returns identifier which is used when no identifier is specified.

#### Returns

`string`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getId`](../interfaces/IMapToolDefaults.md#getid)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getId`](MapObjectDefaults.md#getid)

#### Source

[model/internal/object/MapObjectDefaults.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L44)

***

### getLabel()

> **getLabel**(): `string`

It returns the label of the tool.

#### Returns

`string`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getLabel`](../interfaces/IMapToolDefaults.md#getlabel)

#### Source

[model/internal/tool/MapToolDefaults.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L57)

***

### getProps()

> **getProps**(): [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

It returns default props if no props are given.

#### Returns

[`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getProps`](../interfaces/IMapToolDefaults.md#getprops)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getProps`](MapObjectDefaults.md#getprops)

#### Source

[model/internal/object/MapObjectDefaults.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L18)

***

### getType()

> **getType**(): `string`

It returns a unique type string of the tool.

#### Returns

`string`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`getType`](../interfaces/IMapToolDefaults.md#gettype)

#### Inherited from

[`MapObjectDefaults`](MapObjectDefaults.md).[`getType`](MapObjectDefaults.md#gettype)

#### Source

[model/internal/object/MapObjectDefaults.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectDefaults.ts#L37)

***

### isEnabled()

> **isEnabled**(): `boolean`

By default, the tool is enabled.

#### Returns

`boolean`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`isEnabled`](../interfaces/IMapToolDefaults.md#isenabled)

#### Source

[model/internal/tool/MapToolDefaults.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L50)

***

### isSingleton()

> **isSingleton**(): `boolean`

By default, the tool is singleton

#### Returns

`boolean`

#### Implementation of

[`IMapToolDefaults`](../interfaces/IMapToolDefaults.md).[`isSingleton`](../interfaces/IMapToolDefaults.md#issingleton)

#### Source

[model/internal/tool/MapToolDefaults.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolDefaults.ts#L43)
