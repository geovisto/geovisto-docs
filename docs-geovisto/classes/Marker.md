**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / Marker

# Class: Marker\<T\>

This intreface extends Leaflet Marker in order to work with generic icon type.

## Author

Jiri Hynek

## Extends

- `unknown`

## Type parameters

• **T** *extends* [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)\>

## Implements

- [`IMarker`](../interfaces/IMarker.md)\<`T`\>

## Constructors

### new Marker()

> **new Marker**\<`T`\>(`latlng`, `options`?): [`Marker`](Marker.md)\<`T`\>

#### Parameters

• **latlng**: `LatLngExpression`

• **options?**: `any`

#### Returns

[`Marker`](Marker.md)\<`T`\>

#### Overrides

`LMarker.constructor`

#### Source

[tools/layers/marker/model/internal/marker/Marker.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/Marker.ts#L19)

## Methods

### getIcon()

> **getIcon**(): `T`

It returns the marker icon.

#### Returns

`T`

#### Implementation of

[`IMarker`](../interfaces/IMarker.md).[`getIcon`](../interfaces/IMarker.md#geticon)

#### Source

[tools/layers/marker/model/internal/marker/Marker.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/Marker.ts#L42)

***

### getOptions()

> **getOptions**(): `any`

It returns the marker options.

#### Returns

`any`

#### Implementation of

[`IMarker`](../interfaces/IMarker.md).[`getOptions`](../interfaces/IMarker.md#getoptions)

#### Source

[tools/layers/marker/model/internal/marker/Marker.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/Marker.ts#L26)

***

### setIcon()

> **setIcon**(`icon`): `this`

It sets the marker icon.

#### Parameters

• **icon**: `T`

#### Returns

`this`

#### Implementation of

[`IMarker`](../interfaces/IMarker.md).[`setIcon`](../interfaces/IMarker.md#seticon)

#### Source

[tools/layers/marker/model/internal/marker/Marker.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/internal/marker/Marker.ts#L35)
