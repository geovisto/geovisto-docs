**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarFragment

# Interface: ISidebarFragment\<TProps, TDefaults, TState, TConfig, TInitProps\>

This interface declares a sidebar fragment for a sidebar tab.

## Author

Jiri Hynek

## Extends

- [`IMapObject`](IMapObject.md)\<`TProps`, `TDefaults`, `TState`, `TConfig`, `TInitProps`\>

## Type parameters

• **TProps** *extends* [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md) = [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

• **TDefaults** *extends* [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md) = [`ISidebarFragmentDefaults`](ISidebarFragmentDefaults.md)

• **TState** *extends* [`ISidebarFragmentState`](ISidebarFragmentState.md) = [`ISidebarFragmentState`](ISidebarFragmentState.md)

• **TConfig** *extends* [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md) = [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)

• **TInitProps** *extends* [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<`TConfig`\> = [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<`TConfig`\>

## Methods

### getContent()

> **getContent**(): `HTMLDivElement`

It returns the HTML content of the sidebar fragment.

#### Returns

`HTMLDivElement`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragment.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L27)

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

### postCreate()

> **postCreate**(): `this`

This function is called after the sidebar tab is rendered in sidebar.

#### Returns

`this`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragment.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L32)

***

### setFragmentContentChecked()

> **setFragmentContentChecked**(`checked`): `void`

Changes the state of the tool which is controled by this sidebar tab.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/types/fragment/ISidebarFragment.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragment.ts#L39)
