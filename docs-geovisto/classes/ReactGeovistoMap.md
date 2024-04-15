[geovisto-map](../README.md) / [Exports](../modules.md) / ReactGeovistoMap

# Class: ReactGeovistoMap

React component which wraps Geovisto map.

**`Author`**

Jiri Hynek

## Hierarchy

- `Component`\<`IReactGeovistoMapProps`, `Record`\<`string`, `never`\>\>

  ↳ **`ReactGeovistoMap`**

## Table of contents

### Constructors

- [constructor](ReactGeovistoMap.md#constructor)

### Properties

- [context](ReactGeovistoMap.md#context)
- [m](ReactGeovistoMap.md#m)
- [props](ReactGeovistoMap.md#props)
- [refs](ReactGeovistoMap.md#refs)
- [state](ReactGeovistoMap.md#state)
- [contextType](ReactGeovistoMap.md#contexttype)

### Methods

- [UNSAFE\_componentWillMount](ReactGeovistoMap.md#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](ReactGeovistoMap.md#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](ReactGeovistoMap.md#unsafe_componentwillupdate)
- [componentDidCatch](ReactGeovistoMap.md#componentdidcatch)
- [componentDidMount](ReactGeovistoMap.md#componentdidmount)
- [componentDidUpdate](ReactGeovistoMap.md#componentdidupdate)
- [componentWillMount](ReactGeovistoMap.md#componentwillmount)
- [componentWillReceiveProps](ReactGeovistoMap.md#componentwillreceiveprops)
- [componentWillUnmount](ReactGeovistoMap.md#componentwillunmount)
- [componentWillUpdate](ReactGeovistoMap.md#componentwillupdate)
- [forceUpdate](ReactGeovistoMap.md#forceupdate)
- [getDefaultClass](ReactGeovistoMap.md#getdefaultclass)
- [getDefaultId](ReactGeovistoMap.md#getdefaultid)
- [getMap](ReactGeovistoMap.md#getmap)
- [getSnapshotBeforeUpdate](ReactGeovistoMap.md#getsnapshotbeforeupdate)
- [render](ReactGeovistoMap.md#render)
- [setState](ReactGeovistoMap.md#setstate)
- [shouldComponentUpdate](ReactGeovistoMap.md#shouldcomponentupdate)

## Constructors

### constructor

• **new ReactGeovistoMap**(`props`): [`ReactGeovistoMap`](ReactGeovistoMap.md)

Initializes object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IReactGeovistoMapProps` |

#### Returns

[`ReactGeovistoMap`](ReactGeovistoMap.md)

#### Overrides

Component\&lt;IReactGeovistoMapProps, Record\&lt;string, never\&gt;\&gt;.constructor

#### Defined in

[src/react/ReactGeovistoMap.tsx:27](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L27)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`See`**

https://react.dev/reference/react/Component#context

#### Inherited from

Component.context

#### Defined in

node_modules/@types/react/index.d.ts:472

___

### m

• `Private` **m**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Defined in

[src/react/ReactGeovistoMap.tsx:20](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L20)

___

### props

• `Readonly` **props**: `Readonly`\<`IReactGeovistoMapProps`\> & `Readonly`\<\{ `children?`: `ReactNode`  }\>

#### Inherited from

Component.props

#### Defined in

node_modules/@types/react/index.d.ts:497

___

### refs

• **refs**: `Object`

**`Deprecated`**

https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:503

___

### state

• **state**: `Readonly`\<`Record`\<`string`, `never`\>\>

#### Inherited from

Component.state

#### Defined in

node_modules/@types/react/index.d.ts:498

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`\<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`See`**

https://react.dev/reference/react/Component#static-contexttype

#### Inherited from

Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:454

## Methods

### UNSAFE\_componentWillMount

▸ **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

**`Deprecated`**

16.3, use componentDidMount or the constructor instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:710

___

### UNSAFE\_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:742

___

### UNSAFE\_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `nextState` | `Readonly`\<`Record`\<`string`, `never`\>\> |
| `nextContext` | `any` |

#### Returns

`void`

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:770

___

### componentDidCatch

▸ **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:639

___

### componentDidMount

▸ **componentDidMount**(): `void`

Draw map after component is rendered

#### Returns

`void`

#### Overrides

Component.componentDidMount

#### Defined in

[src/react/ReactGeovistoMap.tsx:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L60)

___

### componentDidUpdate

▸ **componentDidUpdate**(): `void`

Redraw map after component is updated

#### Returns

`void`

#### Overrides

Component.componentDidUpdate

#### Defined in

[src/react/ReactGeovistoMap.tsx:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L68)

___

### componentWillMount

▸ **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Returns

`void`

**`Deprecated`**

16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:696

___

### componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `nextContext` | `any` |

#### Returns

`void`

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:725

___

### componentWillUnmount

▸ **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

Component.componentWillUnmount

#### Defined in

node_modules/@types/react/index.d.ts:634

___

### componentWillUpdate

▸ **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `nextState` | `Readonly`\<`Record`\<`string`, `never`\>\> |
| `nextContext` | `any` |

#### Returns

`void`

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`See`**

 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Inherited from

Component.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:755

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

Component.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:489

___

### getDefaultClass

▸ **getDefaultClass**(): `string`

It returns a default class name used for Geovisto map container.

#### Returns

`string`

#### Defined in

[src/react/ReactGeovistoMap.tsx:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L53)

___

### getDefaultId

▸ **getDefaultId**(): `string`

It returns a default id used for Geovisto map container.

#### Returns

`string`

#### Defined in

[src/react/ReactGeovistoMap.tsx:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L46)

___

### getMap

▸ **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

It returns Geovisto map.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../modules.md#imapprops), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../modules.md#imapconfig)\>, [`IMapConfig`](../modules.md#imapconfig), [`IMapInitProps`](../modules.md#imapinitprops)\<[`IMapConfig`](../modules.md#imapconfig)\>\>

#### Defined in

[src/react/ReactGeovistoMap.tsx:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L39)

___

### getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `prevState` | `Readonly`\<`Record`\<`string`, `never`\>\> |

#### Returns

`any`

#### Inherited from

Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:675

___

### render

▸ **render**(): `Element`

The render function prepares a wrapper which will be used by Geovisto/Leaflet to render the map.

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/react/ReactGeovistoMap.tsx:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/react/ReactGeovistoMap.tsx#L76)

___

### setState

▸ **setState**\<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| `Record`\<`string`, `never`\> \| (`prevState`: `Readonly`\<`Record`\<`string`, `never`\>\>, `props`: `Readonly`\<`IReactGeovistoMapProps`\>) => ``null`` \| `Record`\<`string`, `never`\> \| `Pick`\<`Record`\<`string`, `never`\>, `K`\> \| `Pick`\<`Record`\<`string`, `never`\>, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:484

___

### shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`\<`IReactGeovistoMapProps`\> |
| `nextState` | `Readonly`\<`Record`\<`string`, `never`\>\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:629
