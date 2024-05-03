**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / InfoToolState

# Class: InfoToolState

This class provide functions for using filters.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`MapToolState`](MapToolState.md)

## Implements

- [`IInfoToolState`](../interfaces/IInfoToolState.md)

## Constructors

### new InfoToolState()

> **new InfoToolState**(`tool`): [`InfoToolState`](InfoToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

#### Returns

[`InfoToolState`](InfoToolState.md)

#### Overrides

[`MapToolState`](MapToolState.md).[`constructor`](MapToolState.md#constructors)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L33)

## Properties

### data

> `private` **data**: `null` \| `string`

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L23)

***

### defaultFile

> `private` **defaultFile**: `string`

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L26)

***

### manager?

> `private` `optional` **manager**: [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L24)

***

### md\_data?

> `private` `optional` **md\_data**: [`IInfoData`](../interfaces/IInfoData.md)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L25)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The method takes config and deserializes the values.

#### Parameters

• **config**: [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`deserialize`](../interfaces/IInfoToolState.md#deserialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`deserialize`](MapToolState.md#deserialize)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L62)

***

### getContent()

> **getContent**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getContent`](../interfaces/IInfoToolState.md#getcontent)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L78)

***

### getDefaultFile()

> **getDefaultFile**(): `string`

It returns the default file property of the tool state.

#### Returns

`string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getDefaultFile`](../interfaces/IInfoToolState.md#getdefaultfile)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L92)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getIcon`](../interfaces/IInfoToolState.md#geticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getIcon`](MapToolState.md#geticon)

#### Source

[model/internal/tool/MapToolState.ts:120](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L120)

***

### getId()

> **getId**(): `string`

It returns the id property of the tool state.

#### Returns

`string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getId`](../interfaces/IInfoToolState.md#getid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getId`](MapToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getInfoDataManager()

> **getInfoDataManager**(): `undefined` \| [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

It returns markdown manager.

#### Returns

`undefined` \| [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getInfoDataManager`](../interfaces/IInfoToolState.md#getinfodatamanager)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:117](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L117)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getLabel`](../interfaces/IInfoToolState.md#getlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getLabel`](MapToolState.md#getlabel)

#### Source

[model/internal/tool/MapToolState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L104)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getMap`](../interfaces/IInfoToolState.md#getmap)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMap`](MapToolState.md#getmap)

#### Source

[model/internal/tool/MapToolState.ts:136](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L136)

***

### getMapObject()

> `protected` **getMapObject**(): [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

It makes the map object visible to extended classes.

#### Returns

[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

#### Inherited from

[`MapToolState`](MapToolState.md).[`getMapObject`](MapToolState.md#getmapobject)

#### Source

[model/internal/object/MapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L39)

***

### getMarkdown()

> **getMarkdown**(): `undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

It returns the markdown property of the tool state.

#### Returns

`undefined` \| [`IInfoData`](../interfaces/IInfoData.md)

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getMarkdown`](../interfaces/IInfoToolState.md#getmarkdown)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:85](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L85)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`getType`](../interfaces/IInfoToolState.md#gettype)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getType`](MapToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

• **props**: [`IInfoToolProps`](../type-aliases/IInfoToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`initialize`](../interfaces/IInfoToolState.md#initialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`initialize`](MapToolState.md#initialize)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L46)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`isEnabled`](../interfaces/IInfoToolState.md#isenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`isEnabled`](MapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md)

#### Returns

[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`serialize`](../interfaces/IInfoToolState.md#serialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`serialize`](MapToolState.md#serialize)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:72](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L72)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setEnabled`](../interfaces/IInfoToolState.md#setenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setEnabled`](MapToolState.md#setenabled)

#### Source

[model/internal/tool/MapToolState.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L97)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setIcon`](../interfaces/IInfoToolState.md#seticon)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setIcon`](MapToolState.md#seticon)

#### Source

[model/internal/tool/MapToolState.ts:129](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L129)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the tool state.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setId`](../interfaces/IInfoToolState.md#setid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setId`](MapToolState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setInfoDataManager()

> **setInfoDataManager**(`manager`): `void`

It sets markdown manager.

#### Parameters

• **manager**: [`IInfoDataManager`](../type-aliases/IInfoDataManager.md)

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setInfoDataManager`](../interfaces/IInfoToolState.md#setinfodatamanager)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:110](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L110)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setLabel`](../interfaces/IInfoToolState.md#setlabel)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setLabel`](MapToolState.md#setlabel)

#### Source

[model/internal/tool/MapToolState.ts:113](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L113)

***

### setMap()

> `protected` **setMap**(`map`): `void`

It sets the map property of the tool state.

#### Parameters

• **map**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Returns

`void`

#### Inherited from

[`MapToolState`](MapToolState.md).[`setMap`](MapToolState.md#setmap)

#### Source

[model/internal/tool/MapToolState.ts:145](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L145)

***

### setMarkdown()

> **setMarkdown**(`md`): `void`

It sets the markdown property of the tool state.

#### Parameters

• **md**: [`IInfoData`](../interfaces/IInfoData.md)

#### Returns

`void`

#### Implementation of

[`IInfoToolState`](../interfaces/IInfoToolState.md).[`setMarkdown`](../interfaces/IInfoToolState.md#setmarkdown)

#### Source

[tools/info/model/internal/tool/InfoToolState.ts:101](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/tool/InfoToolState.ts#L101)
