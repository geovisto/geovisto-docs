**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarTab

# Interface: ISidebarTab\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares functions for the sidebar tab.
It contains enable button which enables the sidebar and tool.

## Author

Jiri Hynek

## Extends

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

## Type parameters

• **TProps** *extends* [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md) = [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

• **TDefaults** *extends* [`ISidebarTabDefaults`](ISidebarTabDefaults.md) = [`ISidebarTabDefaults`](ISidebarTabDefaults.md)

• **TState** *extends* [`ISidebarTabState`](ISidebarTabState.md) = [`ISidebarTabState`](ISidebarTabState.md)

• **TConfig** *extends* [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md) = [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

• **TInitProps** *extends* [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<`TConfig`\> = [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<`TConfig`\>

## Methods

### create()

> **create**(): `this`

It creates the sidebar tab

#### Returns

`this`

#### Source

[tools/sidebar/model/types/tab/ISidebarTab.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L46)

***

### getDefaults()

> **getDefaults**(): `TDefaults`

It returns default values of the state properties.

#### Returns

`TDefaults`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getDefaults`](IMapObject.md#getdefaults)

#### Source

[model/types/object/IMapObject.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L27)

***

### getFragments()

> **getFragments**(): `undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

It returns the fragments property of the sidebar tab state.

#### Returns

`undefined` \| [`ISidebarFragment`](ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Source

[tools/sidebar/model/types/tab/ISidebarTab.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L41)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getId`](IMapObject.md#getid)

#### Source

[model/types/object/IMapObject.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L42)

***

### getProps()

> **getProps**(): `TProps`

It returns the props given by the programmer.

#### Returns

`TProps`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getProps`](IMapObject.md#getprops)

#### Source

[model/types/object/IMapObject.ts:22](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L22)

***

### getState()

> **getState**(): `TState`

It returns the map object state.

#### Returns

`TState`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getState`](IMapObject.md#getstate)

#### Source

[model/types/object/IMapObject.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L32)

***

### getTool()

> **getTool**(): [`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

Help function which returns the tool from the state.

#### Returns

[`IMapTool`](IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolState`](IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

#### Source

[tools/sidebar/model/types/tab/ISidebarTab.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L29)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Inherited from

[`IMapObject`](IMapObject.md).[`getType`](IMapObject.md#gettype)

#### Source

[model/types/object/IMapObject.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L37)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the state of the object.
It processes the serialized config and sets further objects.

This cannot be done in the object constructor
since the object can be created before the Geovisto map is created.

#### Parameters

• **initProps**: `TInitProps`

#### Returns

`this`

#### Inherited from

[`IMapObject`](IMapObject.md).[`initialize`](IMapObject.md#initialize)

#### Source

[model/types/object/IMapObject.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/object/IMapObject.ts#L53)

***

### redraw()

> **redraw**(): `void`

It redraws the content of the sidebar tab.

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTab.ts:51](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L51)

***

### setChecked()

> **setChecked**(`checked`): `void`

Functions changes layer state to enabled/disabled.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/tab/ISidebarTab.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTab.ts#L36)
