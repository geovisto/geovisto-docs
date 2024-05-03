**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SelectionToolState

# Class: SelectionToolState

This class provide functions for using selections.

## Author

Jiri Hynek

## Extends

- [`MapToolState`](MapToolState.md)

## Implements

- [`ISelectionToolState`](../interfaces/ISelectionToolState.md)

## Constructors

### new SelectionToolState()

> **new SelectionToolState**(`tool`): [`SelectionToolState`](SelectionToolState.md)

It creates a tool state.

#### Parameters

• **tool**: [`ISelectionTool`](../interfaces/ISelectionTool.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolState`](../interfaces/ISelectionToolState.md)\<[`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md), [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md), [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>, [`ISelectionToolAPI`](../type-aliases/ISelectionToolAPI.md)\>

#### Returns

[`SelectionToolState`](SelectionToolState.md)

#### Overrides

[`MapToolState`](MapToolState.md).[`constructor`](MapToolState.md#constructors)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L28)

## Properties

### selection

> `private` **selection**: `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L23)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

#### Returns

`void`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`deserialize`](../interfaces/ISelectionToolState.md#deserialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`deserialize`](MapToolState.md#deserialize)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L48)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getIcon`](../interfaces/ISelectionToolState.md#geticon)

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

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getId`](../interfaces/ISelectionToolState.md#getid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getId`](MapToolState.md#getid)

#### Source

[model/internal/object/MapObjectState.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L87)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getLabel`](../interfaces/ISelectionToolState.md#getlabel)

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

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getMap`](../interfaces/ISelectionToolState.md#getmap)

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

### getSelection()

> **getSelection**(): `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

It returns the selection property of the tool state.

#### Returns

`null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getSelection`](../interfaces/ISelectionToolState.md#getselection)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L83)

***

### getType()

> **getType**(): `string`

It returns the type property of the tool state.

#### Returns

`string`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`getType`](../interfaces/ISelectionToolState.md#gettype)

#### Inherited from

[`MapToolState`](MapToolState.md).[`getType`](MapToolState.md#gettype)

#### Source

[model/internal/object/MapObjectState.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L80)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets state with respect to initial props.

#### Parameters

• **defaults**: [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

• **props**: [`ISelectionToolProps`](../type-aliases/ISelectionToolProps.md)

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)\>

#### Returns

`void`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`initialize`](../interfaces/ISelectionToolState.md#initialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`initialize`](MapToolState.md#initialize)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L35)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`isEnabled`](../interfaces/ISelectionToolState.md#isenabled)

#### Inherited from

[`MapToolState`](MapToolState.md).[`isEnabled`](MapToolState.md#isenabled)

#### Source

[model/internal/tool/MapToolState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapToolState.ts#L88)

***

### serialize()

> **serialize**(`defaults`): [`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

The method serializes the tool state. Optionally, defaults can be set if property is undefined.

#### Parameters

• **defaults**: `undefined` \| [`ISelectionToolDefaults`](../interfaces/ISelectionToolDefaults.md)

#### Returns

[`ISelectionToolConfig`](../type-aliases/ISelectionToolConfig.md)

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`serialize`](../interfaces/ISelectionToolState.md#serialize)

#### Overrides

[`MapToolState`](MapToolState.md).[`serialize`](MapToolState.md#serialize)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:65](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L65)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`setEnabled`](../interfaces/ISelectionToolState.md#setenabled)

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

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`setIcon`](../interfaces/ISelectionToolState.md#seticon)

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

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`setId`](../interfaces/ISelectionToolState.md#setid)

#### Inherited from

[`MapToolState`](MapToolState.md).[`setId`](MapToolState.md#setid)

#### Source

[model/internal/object/MapObjectState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObjectState.ts#L96)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`setLabel`](../interfaces/ISelectionToolState.md#setlabel)

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

### setSelection()

> **setSelection**(`selection`): `void`

It sets the selection property of the tool state.

#### Parameters

• **selection**: `null` \| [`IMapSelection`](../interfaces/IMapSelection.md)

#### Returns

`void`

#### Implementation of

[`ISelectionToolState`](../interfaces/ISelectionToolState.md).[`setSelection`](../interfaces/ISelectionToolState.md#setselection)

#### Source

[tools/selection/model/internal/tool/SelectionToolState.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/selection/model/internal/tool/SelectionToolState.ts#L92)
