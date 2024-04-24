**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / MapObjectForm

# Class: `abstract` MapObjectForm\<T\>

The interface declares functions for management of form inputs.

## Author

Jiri Hynek

## Extended by

- [`MapLayerToolForm`](MapLayerToolForm.md)
- [`FiltersToolMapForm`](FiltersToolMapForm.md)
- [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)
- [`HieararchyToolMapForm`](HieararchyToolMapForm.md)
- [`InfoToolMapForm`](InfoToolMapForm.md)
- [`SelectionToolMapForm`](SelectionToolMapForm.md)
- [`DummyTabToolMapForm`](DummyTabToolMapForm.md)
- [`ThemesToolMapForm`](ThemesToolMapForm.md)

## Type parameters

• **T** *extends* [`IMapObject`](../interfaces/IMapObject.md)

## Constructors

### new MapObjectForm()

> **new MapObjectForm**\<`T`\>(`mapObject`): [`MapObjectForm`](MapObjectForm.md)\<`T`\>

#### Parameters

• **mapObject**: `T`

#### Returns

[`MapObjectForm`](MapObjectForm.md)\<`T`\>

#### Source

[model/internal/form/MapObjectForm.ts:12](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L12)

## Properties

### mapObject

> `private` **mapObject**: `T`

#### Source

[model/internal/form/MapObjectForm.ts:10](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L10)

## Methods

### getContent()

> `abstract` **getContent**(): `HTMLDivElement`

It returns a HTML div element conatining the form.

#### Returns

`HTMLDivElement`

#### Source

[model/internal/form/MapObjectForm.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L23)

***

### getMapObject()

> `protected` **getMapObject**(): `T`

#### Returns

`T`

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)
