**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ReactGeovistoMap

# Class: ReactGeovistoMap

React component which wraps Geovisto map.

## Author

Jiri Hynek

## Extends

- `unknown`\<`IReactGeovistoMapProps`, `Record`\<`string`, `never`\>\>

## Constructors

### new ReactGeovistoMap()

> **new ReactGeovistoMap**(`props`): [`ReactGeovistoMap`](ReactGeovistoMap.md)

Initializes object.

#### Parameters

• **props**: `IReactGeovistoMapProps`

#### Returns

[`ReactGeovistoMap`](ReactGeovistoMap.md)

#### Overrides

`Component<IReactGeovistoMapProps, Record<string, never>>.constructor`

#### Source

[react/ReactGeovistoMap.tsx:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L27)

## Properties

### m

> `private` **m**: [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Source

[react/ReactGeovistoMap.tsx:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L20)

## Methods

### componentDidMount()

> **componentDidMount**(): `void`

Draw map after component is rendered

#### Returns

`void`

#### Source

[react/ReactGeovistoMap.tsx:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L60)

***

### componentDidUpdate()

> **componentDidUpdate**(): `void`

Redraw map after component is updated

#### Returns

`void`

#### Source

[react/ReactGeovistoMap.tsx:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L68)

***

### getDefaultClass()

> `private` **getDefaultClass**(): `string`

It returns a default class name used for Geovisto map container.

#### Returns

`string`

#### Source

[react/ReactGeovistoMap.tsx:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L53)

***

### getDefaultId()

> `private` **getDefaultId**(): `string`

It returns a default id used for Geovisto map container.

#### Returns

`string`

#### Source

[react/ReactGeovistoMap.tsx:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L46)

***

### getMap()

> **getMap**(): [`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

It returns Geovisto map.

#### Returns

[`IMap`](../interfaces/IMap.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapState`](../interfaces/IMapState.md)\<[`IMapProps`](../type-aliases/IMapProps.md), [`IMapDefaults`](../interfaces/IMapDefaults.md), [`IMapConfig`](../type-aliases/IMapConfig.md)\>, [`IMapConfig`](../type-aliases/IMapConfig.md), [`IMapInitProps`](../type-aliases/IMapInitProps.md)\<[`IMapConfig`](../type-aliases/IMapConfig.md)\>\>

#### Source

[react/ReactGeovistoMap.tsx:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L39)

***

### render()

> **render**(): `Element`

The render function prepares a wrapper which will be used by Geovisto/Leaflet to render the map.

#### Returns

`Element`

#### Source

[react/ReactGeovistoMap.tsx:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/react/ReactGeovistoMap.tsx#L76)
