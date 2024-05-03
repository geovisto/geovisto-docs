**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarFragmentState

# Interface: ISidebarFragmentState\<TProps, TDefaults, TConfig\>

This interface declares the state of the sidebar fragment.
It wraps the state since the sidebar fragment can work with state objects which needs to be explicitly serialized.

## Author

Jiri Hynek

## Extends

- [`IMapObjectState`](IMapObjectState.md)\<`TProps`, `TDefaults`, `TConfig`\>

## Type parameters

• **TProps** *extends* [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md) = [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

• **TDefaults** *extends* [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) = [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md)

• **TConfig** *extends* [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md) = [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

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

It returns the content property of the sidebar tab framgent state.

#### Returns

`null` \| `HTMLElement`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L56)

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

### getSidebarTab()

> **getSidebarTab**(): [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

It returns the sidenar tab property of the sidebar fragment state.

#### Returns

[`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L44)

***

### getTool()

> **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

It returns the tool property of the sidebar tab fragment state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L27)

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

It returns the enabled property of the sidebar tab fragment state.

#### Returns

`boolean`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L32)

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

### setContent()

> **setContent**(`content`): `void`

It sets the content property of the sidebar fragmemt tab state.

#### Parameters

• **content**: `HTMLElement`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:63](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L63)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

It sets the enabled property of the sidebar tab fragment state.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L39)

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

### setSidebarTab()

> **setSidebarTab**(`sidebarTab`): `void`

It sets the sidebar tab property of the sidebar tab contrfragmentol state.

#### Parameters

• **sidebarTab**: [`ISidebarTab`](ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabState`](ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragmentState.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentState.ts#L51)
