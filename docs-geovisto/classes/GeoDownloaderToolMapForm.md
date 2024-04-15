[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDownloaderToolMapForm

# Class: GeoDownloaderToolMapForm

Form for DownloaderTool.

**`Author`**

Vojtěch Malý

## Hierarchy

- [`MapObjectForm`](MapObjectForm.md)\<[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)\>

  ↳ **`GeoDownloaderToolMapForm`**

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Table of contents

### Constructors

- [constructor](GeoDownloaderToolMapForm.md#constructor)

### Properties

- [control](GeoDownloaderToolMapForm.md#control)
- [currentZoom](GeoDownloaderToolMapForm.md#currentzoom)
- [htmlContent](GeoDownloaderToolMapForm.md#htmlcontent)
- [searchBtn](GeoDownloaderToolMapForm.md#searchbtn)

### Methods

- [changeCurrentZoom](GeoDownloaderToolMapForm.md#changecurrentzoom)
- [createFetchButton](GeoDownloaderToolMapForm.md#createfetchbutton)
- [getContent](GeoDownloaderToolMapForm.md#getcontent)
- [getMapObject](GeoDownloaderToolMapForm.md#getmapobject)
- [stateChange](GeoDownloaderToolMapForm.md#statechange)

## Constructors

### constructor

• **new GeoDownloaderToolMapForm**(`tool`): [`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md) |

#### Returns

[`GeoDownloaderToolMapForm`](GeoDownloaderToolMapForm.md)

#### Overrides

[MapObjectForm](MapObjectForm.md).[constructor](MapObjectForm.md#constructor)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:21](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L21)

## Properties

### control

• `Private` **control**: [`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:18](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L18)

___

### currentZoom

• `Private` **currentZoom**: `HTMLDivElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L17)

___

### htmlContent

• `Private` **htmlContent**: `HTMLDivElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L16)

___

### searchBtn

• **searchBtn**: ``null`` \| `HTMLButtonElement` = `null`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L19)

## Methods

### changeCurrentZoom

▸ **changeCurrentZoom**(`newZoom`): `void`

Change displayed zoom number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newZoom` | `number` |

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:79](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L79)

___

### createFetchButton

▸ **createFetchButton**(): `HTMLButtonElement`

Creates button, on click fetches selected value.

#### Returns

`HTMLButtonElement`

Button

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:89](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L89)

___

### getContent

▸ **getContent**(): `HTMLDivElement`

Returns html div elemnt of hierarchy tool. If not defined, creates one.

#### Returns

`HTMLDivElement`

Main div form element.

#### Implementation of

[IMapForm](../interfaces/IMapForm.md).[getContent](../interfaces/IMapForm.md#getcontent)

#### Overrides

[MapObjectForm](MapObjectForm.md).[getContent](MapObjectForm.md#getcontent)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L32)

___

### getMapObject

▸ **getMapObject**(): [`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Returns

[`IGeoDownloaderTool`](../interfaces/IGeoDownloaderTool.md)

#### Inherited from

[MapObjectForm](MapObjectForm.md).[getMapObject](MapObjectForm.md#getmapobject)

#### Defined in

[src/model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/internal/form/MapObjectForm.ts#L16)

___

### stateChange

▸ **stateChange**(`enable`): `void`

Method for enabling and disabling tool.
Method can't be used for clearing saved data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | True if going from disabled to enabled status. |

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts:102](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapForm.ts#L102)
