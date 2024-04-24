**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarTabState

# Interface: ISidebarTabState\<TProps, TDefaults, TConfig\>

This interface declares the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

## Type parameters

• **TProps** *extends* [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md) = [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

• **TDefaults** *extends* [`ISidebarTabDefaults`](ISidebarTabDefaults.md) = [`ISidebarTabDefaults`](ISidebarTabDefaults.md)

• **TConfig** *extends* [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md) = [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

## Methods

### deserialize()

> **deserialize**(`config`): `void`

The metod takes config and deserializes the values.

#### Parameters

• **config**: `TConfig`

#### Returns

`void`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`deserialize`](IMapObjectState.md#deserialize)

#### Source

[model/types/object/IMapObjectState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L32)

***

### getContent()

> **getContent**(): `null` \| `HTMLElement`

It returns the tabPane property of the sidebar tab state.

#### Returns

`null` \| `HTMLElement`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:100](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L100)

***

### getFragments()

> **getFragments**(): `undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L112)

***

### getIcon()

> **getIcon**(): `string`

It returns the icon property of the sidebar tab state.

#### Returns

`string`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L64)

***

### getId()

> **getId**(): `string`

It returns the id property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`getId`](IMapObjectState.md#getid)

#### Source

[model/types/object/IMapObjectState.ts:49](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L49)

***

### getName()

> **getName**(): `string`

It returns the name property of the sidebar tab state.

#### Returns

`string`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:52](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L52)

***

### getSidebarTool()

> **getSidebarTool**(): [`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

It returns the sidebar property of the sidebar tab state.

#### Returns

[`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L88)

***

### getTool()

> **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool property of the sidebar tab state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:28](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L28)

***

### getType()

> **getType**(): `string`

It returns the type property of the map object state.

#### Returns

`string`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`getType`](IMapObjectState.md#gettype)

#### Source

[model/types/object/IMapObjectState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L44)

***

### hasCheckButton()

> **hasCheckButton**(): `boolean`

It returns the checkButton property of the sidebar tab state.

#### Returns

`boolean`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L76)

***

### initialize()

> **initialize**(`defaults`, `props`, `initProps`): `void`

It resets the state to the initial state.

#### Parameters

• **defaults**: `TDefaults`

• **props**: `TProps`

• **initProps**: [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<`TConfig`\>

#### Returns

`void`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`initialize`](IMapObjectState.md#initialize)

#### Source

[model/types/object/IMapObjectState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L25)

***

### isEnabled()

> **isEnabled**(): `boolean`

It returns the enabled property of the sidebar tab state.

#### Returns

`boolean`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L40)

***

### serialize()

> **serialize**(`defaults`): `TConfig`

The method serializes the map object state. Optionally, a serialized value can be let undefined if it equals the default value.

#### Parameters

• **defaults**: `undefined` \| `TDefaults`

#### Returns

`TConfig`

#### Inherited from

[`IMapObjectState`](IMapObjectState.md).[`serialize`](IMapObjectState.md#serialize)

#### Source

[model/types/object/IMapObjectState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L39)

***

### setCheckButton()

> **setCheckButton**(`checkButton`): `void`

It sets the checkButton property of the sidebar tab state.

#### Parameters

• **checkButton**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L83)

***

### setContent()

> **setContent**(`content`): `void`

It sets the tabPane property of the sidebar tab state.

#### Parameters

• **content**: `HTMLElement`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:107](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L107)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar tab state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L47)

***

### setFragments()

> **setFragments**(`fragments`): `void`

It sets the fragments property of the sidebar tab state.

#### Parameters

• **fragments**: [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:119](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L119)

***

### setIcon()

> **setIcon**(`icon`): `void`

It sets the icon property of the sidebar tab state.

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L71)

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

[`IMapObjectState`](IMapObjectState.md).[`setId`](IMapObjectState.md#setid)

#### Source

[model/types/object/IMapObjectState.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObjectState.ts#L57)

***

### setName()

> **setName**(`name`): `void`

It sets the name property of the sidebar tab state.

#### Parameters

• **name**: `string`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L59)

***

### setSidebarTool()

> **setSidebarTool**(`sidebar`): `void`

It sets the sidebar property of the sidebar tab state.

#### Parameters

• **sidebar**: [`ISidebarTool`](ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolState`](ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:95](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L95)

***

### setTool()

> **setTool**(`tool`): `void`

It sets the tool property of the sidebar tab state.

#### Parameters

• **tool**: [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTabState.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabState.ts#L35)
