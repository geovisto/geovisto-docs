**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarTab

# Class: SidebarTab\<T\>

This class provides controls for a sidebar tab.
It contains enable button which enables the sidebar and tool.

This class is intended to be extended.

## Author

Jiri Hynek

## Extends

- [`MapObject`](MapObject.md)

## Type parameters

• **T** *extends* [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Implements

- [`ISidebarTab`](../interfaces/ISidebarTab.md)

## Constructors

### new SidebarTab()

> **new SidebarTab**\<`T`\>(`props`?): [`SidebarTab`](SidebarTab.md)\<`T`\>

It creates abstract sidebar tab with respect to the given props.

#### Parameters

• **props?**: [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

#### Returns

[`SidebarTab`](SidebarTab.md)\<`T`\>

#### Overrides

[`MapObject`](MapObject.md).[`constructor`](MapObject.md#constructors)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:50](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L50)

## Methods

### create()

> **create**(): `this`

Creates sidebar tab.

#### Returns

`this`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`create`](../interfaces/ISidebarTab.md#create)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:168](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L168)

***

### createDefaults()

> `protected` **createDefaults**(): [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

It creates new defaults of the sidebar tab.

#### Returns

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

#### Overrides

[`MapObject`](MapObject.md).[`createDefaults`](MapObject.md#createdefaults)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:71](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L71)

***

### createState()

> `protected` **createState**(): [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>

It creates the sidebar tab state.

#### Returns

[`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>

#### Overrides

[`MapObject`](MapObject.md).[`createState`](MapObject.md#createstate)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:85](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L85)

***

### createTabContent()

> `protected` **createTabContent**(`tabContent`): `void`

#### Parameters

• **tabContent**: `Element`

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:243](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L243)

***

### getDefaults()

> **getDefaults**(): [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

It returns default values of the sidebar tab.

#### Returns

[`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md)

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getDefaults`](../interfaces/ISidebarTab.md#getdefaults)

#### Overrides

[`MapObject`](MapObject.md).[`getDefaults`](MapObject.md#getdefaults)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:64](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L64)

***

### getFragments()

> **getFragments**(): `undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

Help function which returns sidebar fragmnets.

#### Returns

`undefined` \| [`ISidebarFragment`](../interfaces/ISidebarFragment.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentState`](../interfaces/ISidebarFragmentState.md)\<[`ISidebarFragmentProps`](../type-aliases/ISidebarFragmentProps.md), [`ISidebarFragmentDefaults`](../interfaces/ISidebarFragmentDefaults.md), [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>, [`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md), [`ISidebarFragmentInitProps`](../type-aliases/ISidebarFragmentInitProps.md)\<[`ISidebarFragmentConfig`](../type-aliases/ISidebarFragmentConfig.md)\>\>[]

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getFragments`](../interfaces/ISidebarTab.md#getfragments)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:99](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L99)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getId`](../interfaces/ISidebarTab.md#getid)

#### Inherited from

[`MapObject`](MapObject.md).[`getId`](MapObject.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getProps()

> **getProps**(): [`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

It returns the props given by the programmer.

#### Returns

[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md)

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getProps`](../interfaces/ISidebarTab.md#getprops)

#### Overrides

[`MapObject`](MapObject.md).[`getProps`](MapObject.md#getprops)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L57)

***

### getState()

> **getState**(): [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>

It returns the sidebar tab state.

#### Returns

[`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getState`](../interfaces/ISidebarTab.md#getstate)

#### Overrides

[`MapObject`](MapObject.md).[`getState`](MapObject.md#getstate)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:78](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L78)

***

### getTabStructure()

> `protected` **getTabStructure**(): `PanelOptions`

It returns the sidebar tab structure defined with respect to the leaflet-sidebar-v2 plug-in.

See: https://github.com/noerw/leaflet-sidebar-v2

#### Returns

`PanelOptions`

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:186](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L186)

***

### getTool()

> **getTool**(): `T`

Help function which returns the tool.

#### Returns

`T`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getTool`](../interfaces/ISidebarTab.md#gettool)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:92](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L92)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`getType`](../interfaces/ISidebarTab.md#gettype)

#### Inherited from

[`MapObject`](MapObject.md).[`getType`](MapObject.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### initialize()

> **initialize**(`initProps`): `this`

It initializes the sidebar tab.

#### Parameters

• **initProps**: [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)

#### Returns

`this`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`initialize`](../interfaces/ISidebarTab.md#initialize)

#### Overrides

[`MapObject`](MapObject.md).[`initialize`](MapObject.md#initialize)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:108](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L108)

***

### initializeFragments()

> `protected` **initializeFragments**(`config`?): `void`

The function takes config and deserializes the tab fragments.

#### Parameters

• **config?**: [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:121](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L121)

***

### postCreate()

> `protected` **postCreate**(): `void`

It creates the remaining parts of the sidebar tab after the sidebar tab is rendered.

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:200](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L200)

***

### redraw()

> **redraw**(): `void`

It redraws the content of the sidebar tab.

#### Returns

`void`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`redraw`](../interfaces/ISidebarTab.md#redraw)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:265](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L265)

***

### setChecked()

> **setChecked**(`checked`): `void`

Functions changes layer state to enabled/disabled.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarTab`](../interfaces/ISidebarTab.md).[`setChecked`](../interfaces/ISidebarTab.md#setchecked)

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:289](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L289)

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

***

### setTabContentChecked()

> **setTabContentChecked**(`checked`): `void`

Changes the state of the tool which is controled by this sidebar tab.

This function can be extended if needed.

#### Parameters

• **checked**: `boolean`

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tab/SidebarTab.ts:332](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tab/SidebarTab.ts#L332)
