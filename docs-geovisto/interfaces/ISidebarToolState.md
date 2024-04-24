**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarToolState

# Interface: ISidebarToolState\<TProps, TDefaults, TConfig\>

This interface declares sidebar tool model.

## Author

Jiri Hynek

## Extends

- [`IMapToolState`](IMapToolState.md)\<`TProps`, `TDefaults`, `TConfig`\>

## Type parameters

• **TProps** *extends* [`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md) = [`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md)

• **TDefaults** *extends* [`ISidebarToolDefaults`](ISidebarToolDefaults.md) = [`ISidebarToolDefaults`](ISidebarToolDefaults.md)

• **TConfig** *extends* [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md) = [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)

## Methods

### addTab()

> **addTab**(`tab`): `void`

It sets the tabs property of the tool state.

#### Parameters

• **tab**: [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L54)

***

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`deserialize`](IMapToolState.md#deserialize)

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the tool state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getIcon`](IMapToolState.md#geticon)

#### Source

[model/types/tool/IMapToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L61)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getId`](IMapToolState.md#getid)

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

***

### getLabel()

> **getLabel**(): `string`

It returns the label property of the tool state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getLabel`](IMapToolState.md#getlabel)

#### Source

[model/types/tool/IMapToolState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L49)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns the map property of the tool state.

#### Returns

`undefined` \| [`IMap`](IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapState`](IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getMap`](IMapToolState.md#getmap)

#### Source

[model/types/tool/IMapToolState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L44)

***

### getSidebar()

> **getSidebar**(): `any`

It returns the sidebar.

#### Returns

`any`

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L35)

***

### getTabs()

> **getTabs**(): [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>[]

It returns the tabs controls.

#### Returns

[`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>[]

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L47)

***

### getTabsConfigs()

> **getTabsConfigs**(): `undefined` \| [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)[]

It returns the tabs configs.

#### Returns

`undefined` \| [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)[]

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L30)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`getType`](IMapToolState.md#gettype)

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state with respect to the initial props.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<`TConfig`\>

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`initialize`](IMapToolState.md#initialize)

#### Source

[model/types/tool/IMapToolState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L27)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the tool state.

#### Returns

`boolean`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`isEnabled`](IMapToolState.md#isenabled)

#### Source

[model/types/tool/IMapToolState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L32)

***

### removeTab()

> **removeTab**(`tab`): `void`

It removes tab from the list of tabs.

#### Parameters

• **tab**: [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:61](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L61)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`serialize`](IMapToolState.md#serialize)

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of tool state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setEnabled`](IMapToolState.md#setenabled)

#### Source

[model/types/tool/IMapToolState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L39)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the tool state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setIcon`](IMapToolState.md#seticon)

#### Source

[model/types/tool/IMapToolState.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L68)

***

### setId()

> **setId**(`id`): `void`

It sets the id property of the map object state.
It can be set only once.

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setId`](IMapToolState.md#setid)

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)

***

### setLabel()

> **setLabel**(`label`): `void`

It sets the label property of the tool state.

#### Parameters

• **label**: `string`

#### Returns

`void`

#### Inherited from

[`IMapToolState`](IMapToolState.md).[`setLabel`](IMapToolState.md#setlabel)

#### Source

[model/types/tool/IMapToolState.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/tool/IMapToolState.ts#L56)

***

### setSidebar()

> **setSidebar**(`sidebar`): `void`

It sets sidebar.

#### Parameters

• **sidebar**: `Sidebar`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tool/ISidebarToolState.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tool/ISidebarToolState.ts#L42)
