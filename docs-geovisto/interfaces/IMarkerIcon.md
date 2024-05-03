**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / IMarkerIcon

# Interface: IMarkerIcon\<T\>

This intreface extends Leaflet Icon in order to work with generic icon type.

## Author

Jiri Hynek

## Extends

- `unknown`\<`T`\>

## Type parameters

• **T** *extends* [`IMarkerIconOptions`](../type-aliases/IMarkerIconOptions.md)

## Methods

### updateData()

> **updateData**(`values`, `animateOptions`): `void`

It updates the data of the marker icon.

#### Parameters

• **values**: [`IMarkerIconValueOptions`](../type-aliases/IMarkerIconValueOptions.md)

• **animateOptions**: [`IDataChangeAnimateOptions`](../type-aliases/IDataChangeAnimateOptions.md)

#### Returns

`void`

#### Source

[tools/layers/marker/model/types/marker/IMarkerIcon.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/marker/model/types/marker/IMarkerIcon.ts#L26)
