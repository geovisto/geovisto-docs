**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDownloaderToolMapForm

# Class: GeoDownloaderToolMapForm

Form for DownloaderTool.

## Author

Vojtěch Malý

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new GeoDownloaderToolMapForm()

> **new GeoDownloaderToolMapForm**(`tool`): [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Parameters

• **tool**: [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Returns

[`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:21](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L21)

## Properties

### control

> `private` **control**: [`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:18](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L18)

***

### currentZoom

> `private` **currentZoom**: `HTMLDivElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:17](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L17)

***

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L16)

***

### searchBtn

> **searchBtn**: `null` \| `HTMLButtonElement` = `null`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:19](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L19)

## Methods

### changeCurrentZoom()

> **changeCurrentZoom**(`newZoom`): `void`

Change displayed zoom number.

#### Parameters

• **newZoom**: `number`

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L79)

***

### createFetchButton()

> `protected` **createFetchButton**(): `HTMLButtonElement`

Creates button, on click fetches selected value.

#### Returns

`HTMLButtonElement`

Button

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:89](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L89)

***

### getContent()

> **getContent**(): `HTMLDivElement`

Returns html div elemnt of hierarchy tool. If not defined, creates one.

#### Returns

`HTMLDivElement`

Main div form element.

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L32)

***

### getMapObject()

> `protected` **getMapObject**(): [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Returns

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)

***

### stateChange()

> **stateChange**(`enable`): `void`

Method for enabling and disabling tool.
Method can't be used for clearing saved data.

#### Parameters

• **enable**: `boolean`

True if going from disabled to enabled status.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:102](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L102)
