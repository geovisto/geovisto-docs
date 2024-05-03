**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarFragment

# Class: SidebarFragment\<T\>

This class provides tab fragment for a sidebar tab.

This class is intended to be extended.

## Author

Jiri Hynek

## Extends

- [`MapObject`](MapObject.md)

## Type parameters

• **T** *extends* [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Implements

- [`ISidebarFragment`](../interfaces/ISidebarFragment.md)

## Constructors

### new SidebarFragment()

> **new SidebarFragment**\<`T`\>(`props`?): [`SidebarFragment`](SidebarFragment.md)\<`T`\>

It creates abstract sidebar fragment with respect to the given props.

#### Parameters

• **props?**: [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

#### Returns

[`SidebarFragment`](SidebarFragment.md)\<`T`\>

#### Overrides

[`MapObject`](MapObject.md).[`constructor`](MapObject.md#constructors)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:29](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L29)

## Methods

### createDefaults()

> `protected` **createDefaults**(): [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

It creates new defaults of the sidebar fragment.

#### Returns

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

#### Overrides

[`MapObject`](MapObject.md).[`createDefaults`](MapObject.md#createdefaults)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L50)

***

### createState()

> `protected` **createState**(): [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>

It creates the sidebar fragment state.

#### Returns

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>

#### Overrides

[`MapObject`](MapObject.md).[`createState`](MapObject.md#createstate)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L64)

***

### getContent()

> **getContent**(): `HTMLDivElement`

It returns the HTML content of the sidebar fragment.

#### Returns

`HTMLDivElement`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getContent`](../interfaces/ISidebarFragment.md#getcontent)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:87](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L87)

***

### getDefaults()

> **getDefaults**(): [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

It returns default values of the sidebar fragment.

#### Returns

[`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md)

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getDefaults`](../interfaces/ISidebarFragment.md#getdefaults)

#### Overrides

[`MapObject`](MapObject.md).[`getDefaults`](MapObject.md#getdefaults)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:43](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L43)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getId`](../interfaces/ISidebarFragment.md#getid)

#### Inherited from

[`MapObject`](MapObject.md).[`getId`](MapObject.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getProps()

> **getProps**(): [`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

It returns the props given by the programmer.

#### Returns

[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md)

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getProps`](../interfaces/ISidebarFragment.md#getprops)

#### Overrides

[`MapObject`](MapObject.md).[`getProps`](MapObject.md#getprops)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L36)

***

### getState()

> **getState**(): [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>

It returns the sidebar fragment state.

#### Returns

[`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getState`](../interfaces/ISidebarFragment.md#getstate)

#### Overrides

[`MapObject`](MapObject.md).[`getState`](MapObject.md#getstate)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L57)

***

### getTool()

> **getTool**(): `T`

Help function which returns the tool.

#### Returns

`T`

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L71)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`getType`](../interfaces/ISidebarFragment.md#gettype)

#### Inherited from

[`MapObject`](MapObject.md).[`getType`](MapObject.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), `T`\>

#### Returns

`this`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`initialize`](../interfaces/ISidebarFragment.md#initialize)

#### Overrides

[`MapObject`](MapObject.md).[`initialize`](MapObject.md#initialize)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:80](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L80)

***

### postCreate()

> **postCreate**(): `this`

This function is called after the sidebar tab is rendered in sidebar.

#### Returns

`this`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`postCreate`](../interfaces/ISidebarFragment.md#postcreate)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:94](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L94)

***

### setFragmentContentChecked()

> **setFragmentContentChecked**(`checked`): `void`

Changes the state of the tool which is controled by this sidebar tab.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarFragment`](../interfaces/ISidebarFragment.md).[`setFragmentContentChecked`](../interfaces/ISidebarFragment.md#setfragmentcontentchecked)

#### Source

[tools/sidebar/model/internal/fragment/SidebarFragment.ts:103](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/fragment/SidebarFragment.ts#L103)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapObject`](MapObject.md).[`setProps`](MapObject.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)
