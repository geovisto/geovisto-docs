**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / SidebarTool

# Class: SidebarTool

This class provides the sidebar tool.

## Author

Jiri Hynek

## Extends

- [`MapTool`](MapTool.md)

## Implements

- [`ISidebarTool`](../interfaces/ISidebarTool.md)

## Constructors

### new SidebarTool()

> **new SidebarTool**(`props`?): [`SidebarTool`](SidebarTool.md)

It creates a new tool with respect to the props.

#### Parameters

• **props?**: [`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md)

#### Returns

[`SidebarTool`](SidebarTool.md)

#### Overrides

[`MapTool`](MapTool.md).[`constructor`](MapTool.md#constructors)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L48)

## Properties

### themeChangeAdapter

> `private` **themeChangeAdapter**: [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L41)

## Methods

### copy()

> **copy**(): [`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

It creates a copy of the uninitialized tool.

#### Returns

[`ISidebarTool`](../interfaces/ISidebarTool.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>, [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>\>

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`copy`](../interfaces/ISidebarTool.md#copy)

#### Overrides

[`MapTool`](MapTool.md).[`copy`](MapTool.md#copy)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L55)

***

### create()

> **create**(): `this`

It creates sidebar.

#### Returns

`this`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`create`](../interfaces/ISidebarTool.md#create)

#### Overrides

[`MapTool`](MapTool.md).[`create`](MapTool.md#create)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:116](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L116)

***

### createDefaults()

> `protected` **createDefaults**(): [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

It creates new defaults of the tool.

#### Returns

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

#### Overrides

[`MapTool`](MapTool.md).[`createDefaults`](MapTool.md#createdefaults)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L76)

***

### createSidebar()

> `protected` **createSidebar**(): `void`

It creates a sidebar tool and its parts (leaflet sidebar and sidebar tabs).

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L126)

***

### createSidebarTab()

> `protected` **createSidebarTab**(`tool`, `config`, `propsSidebarTab`): `void`

Help function which initializes and creates sidebar tab for a tool with respect to a given config.

#### Parameters

• **tool**: `undefined` \| [`IMapTool`](../interfaces/IMapTool.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolState`](../interfaces/IMapToolState.md)\<[`IMapToolProps`](../type-aliases/IMapToolProps.md), [`IMapToolDefaults`](../interfaces/IMapToolDefaults.md), [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>\>, [`IMapToolConfig`](../type-aliases/IMapToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IMapToolConfig`](../type-aliases/IMapToolConfig.md)\>, [`IMapToolAPI`](../type-aliases/IMapToolAPI.md)\>

• **config**: `undefined` \| [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)

• **propsSidebarTab**: `undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:219](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L219)

***

### createState()

> `protected` **createState**(): [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>

It returns default tool state.

#### Returns

[`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>

#### Overrides

[`MapTool`](MapTool.md).[`createState`](MapTool.md#createstate)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:90](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L90)

***

### createTabs()

> `protected` **createTabs**(): `void`

It returns sidebar tabs.

#### Returns

`void`

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:163](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L163)

***

### getAPIGetter()

> **getAPIGetter**(): `undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

It returns the tool API

#### Returns

`undefined` \| [`IMapToolAPIGetter`](../type-aliases/IMapToolAPIGetter.md)

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getAPIGetter`](../interfaces/ISidebarTool.md#getapigetter)

#### Inherited from

[`MapTool`](MapTool.md).[`getAPIGetter`](MapTool.md#getapigetter)

#### Source

[model/internal/tool/MapTool.ts:74](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L74)

***

### getDefaults()

> **getDefaults**(): [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

It returns default values of the sidebar tool.

#### Returns

[`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md)

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getDefaults`](../interfaces/ISidebarTool.md#getdefaults)

#### Overrides

[`MapTool`](MapTool.md).[`getDefaults`](MapTool.md#getdefaults)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:69](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L69)

***

### getId()

> **getId**(): `string`

Help function which returns the id of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getId`](../interfaces/ISidebarTool.md#getid)

#### Inherited from

[`MapTool`](MapTool.md).[`getId`](MapTool.md#getid)

#### Source

[model/internal/object/MapObject.ts:93](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L93)

***

### getMap()

> **getMap**(): `undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

Help function returns map which uses this tool.

Do not override this function. Use the state class instead.

#### Returns

`undefined` \| [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getMap`](../interfaces/ISidebarTool.md#getmap)

#### Inherited from

[`MapTool`](MapTool.md).[`getMap`](MapTool.md#getmap)

#### Source

[model/internal/tool/MapTool.ts:112](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L112)

***

### getProps()

> **getProps**(): [`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md)

It returns the props given by the programmer.

#### Returns

[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md)

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getProps`](../interfaces/ISidebarTool.md#getprops)

#### Overrides

[`MapTool`](MapTool.md).[`getProps`](MapTool.md#getprops)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L62)

***

### getPropsSidebarTab()

> `protected` **getPropsSidebarTab**(`toolId`): `undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

Help function which loops up a sidebar tab in props

#### Parameters

• **toolId**: `string`

#### Returns

`undefined` \| [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:202](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L202)

***

### getSidebarStructure()

> `protected` **getSidebarStructure**(): `SidebarOptions`

It returns structure of sidebar defined with respect to the leaflet-sidebar-v2 plugin specification.

See: https://github.com/noerw/leaflet-sidebar-v2

#### Returns

`SidebarOptions`

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:144](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L144)

***

### getState()

> **getState**(): [`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>

It returns the sidebar tool state.

#### Returns

[`ISidebarToolState`](../interfaces/ISidebarToolState.md)\<[`ISidebarToolProps`](../type-aliases/ISidebarToolProps.md), [`ISidebarToolDefaults`](../interfaces/ISidebarToolDefaults.md), [`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getState`](../interfaces/ISidebarTool.md#getstate)

#### Overrides

[`MapTool`](MapTool.md).[`getState`](MapTool.md#getstate)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:83](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L83)

***

### getTabs()

> **getTabs**(): [`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>[]

Help function which returns sidebar tabs.

#### Returns

[`ISidebarTab`](../interfaces/ISidebarTab.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabState`](../interfaces/ISidebarTabState.md)\<[`ISidebarTabProps`](../type-aliases/ISidebarTabProps.md), [`ISidebarTabDefaults`](../interfaces/ISidebarTabDefaults.md), [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>, [`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md), [`ISidebarTabInitProps`](../type-aliases/ISidebarTabInitProps.md)\<[`ISidebarTabConfig`](../type-aliases/ISidebarTabConfig.md)\>\>[]

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getTabs`](../interfaces/ISidebarTool.md#gettabs)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:156](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L156)

***

### getThemeChangeAdapter()

> `protected` **getThemeChangeAdapter**(): [`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

It returns theme change adapter.

#### Returns

[`SidebarToolThemeChangeAdapter`](SidebarToolThemeChangeAdapter.md)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:97](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L97)

***

### getType()

> **getType**(): `string`

Help function which returns the type of the object.

#### Returns

`string`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`getType`](../interfaces/ISidebarTool.md#gettype)

#### Inherited from

[`MapTool`](MapTool.md).[`getType`](MapTool.md#gettype)

#### Source

[model/internal/object/MapObject.ts:86](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L86)

***

### handleEvent()

> **handleEvent**(`event`): `void`

This function is called when a custom event is invoked.

#### Parameters

• **event**: [`IMapEvent`](../interfaces/IMapEvent.md)\<[`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>\>

#### Returns

`void`

#### Overrides

[`MapTool`](MapTool.md).[`handleEvent`](MapTool.md#handleevent)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:243](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L243)

***

### initialize()

> **initialize**(`initProps`): `this`

Overrides the super method.

#### Parameters

• **initProps**: [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`ISidebarToolConfig`](../type-aliases/ISidebarToolConfig.md)\>

#### Returns

`this`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`initialize`](../interfaces/ISidebarTool.md#initialize)

#### Overrides

[`MapTool`](MapTool.md).[`initialize`](MapTool.md#initialize)

#### Source

[tools/sidebar/model/internal/tool/SidebarTool.ts:109](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/internal/tool/SidebarTool.ts#L109)

***

### isEnabled()

> **isEnabled**(): `boolean`

Help getter which returns enabled property of state.

Do not override this function. Use the state class instead.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`isEnabled`](../interfaces/ISidebarTool.md#isenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`isEnabled`](MapTool.md#isenabled)

#### Source

[model/internal/tool/MapTool.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L130)

***

### isSingleton()

> **isSingleton**(): `boolean`

Help getter which returns a logtical value whether the tool type is singleton.

#### Returns

`boolean`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`isSingleton`](../interfaces/ISidebarTool.md#issingleton)

#### Inherited from

[`MapTool`](MapTool.md).[`isSingleton`](MapTool.md#issingleton)

#### Source

[model/internal/tool/MapTool.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L81)

***

### setEnabled()

> **setEnabled**(`enabled`): `void`

Some tools might be dynamicaly enabled/disabled.
This function is called externally when the tool is enabled/disabled.

Override this function, if needed.

#### Parameters

• **enabled**: `boolean`

#### Returns

`void`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`setEnabled`](../interfaces/ISidebarTool.md#setenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`setEnabled`](MapTool.md#setenabled)

#### Source

[model/internal/tool/MapTool.ts:142](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L142)

***

### setProps()

> `protected` **setProps**(`props`): `void`

It updates the props.

#### Parameters

• **props**: [`IMapObjectProps`](../type-aliases/IMapObjectProps.md)

#### Returns

`void`

#### Inherited from

[`MapTool`](MapTool.md).[`setProps`](MapTool.md#setprops)

#### Source

[model/internal/object/MapObject.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/object/MapObject.ts#L38)

***

### switchEnabled()

> **switchEnabled**(): `void`

Help function which switches enabled state (enabled/disabled).

Do not override this function. Use setEnabled instead.

#### Returns

`void`

#### Implementation of

[`ISidebarTool`](../interfaces/ISidebarTool.md).[`switchEnabled`](../interfaces/ISidebarTool.md#switchenabled)

#### Inherited from

[`MapTool`](MapTool.md).[`switchEnabled`](MapTool.md#switchenabled)

#### Source

[model/internal/tool/MapTool.ts:158](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/tool/MapTool.ts#L158)
