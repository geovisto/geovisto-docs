**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMarker

# Interface: IMarker\<T\>

This intreface extends Leaflet Marker in order to work with generic icon type.

## Author

Jiri Hynek

## Extends

- `unknown`

## Type parameters

• **T** *extends* [`IMarkerIcon`](IMarkerIcon.md)\<[`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)\>

## Methods

### getIcon()

> **getIcon**(): `T`

It returns the marker icon.

#### Returns

`T`

#### Source

[tools/layers/marker/model/types/marker/IMarker.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/marker/IMarker.ts#L32)

***

### getOptions()

> **getOptions**(): `any`

It returns the marker options.

#### Returns

`any`

#### Source

[tools/layers/marker/model/types/marker/IMarker.ts:20](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/marker/IMarker.ts#L20)

***

### setIcon()

> **setIcon**(`icon`): `this`

It sets the marker icon.

#### Parameters

• **icon**: `T`

#### Returns

`this`

#### Source

[tools/layers/marker/model/types/marker/IMarker.ts:27](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/marker/IMarker.ts#L27)
