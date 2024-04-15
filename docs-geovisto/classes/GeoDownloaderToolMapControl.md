[geovisto-map](../README.md) / [Exports](../modules.md) / GeoDownloaderToolMapControl

# Class: GeoDownloaderToolMapControl

Controler for Downloader tool. 
Manages almost everything around downloading geo objects from Overpass API.
Can generate automatic hierarchy definition from downloaded objects.

**`Author`**

Vojtěch Malý

## Table of contents

### Constructors

- [constructor](GeoDownloaderToolMapControl.md#constructor)

### Properties

- [adminLevelDIV](GeoDownloaderToolMapControl.md#adminleveldiv)
- [adminLevelMAP](GeoDownloaderToolMapControl.md#adminlevelmap)
- [countriesList](GeoDownloaderToolMapControl.md#countrieslist)
- [countryInput](GeoDownloaderToolMapControl.md#countryinput)
- [data](GeoDownloaderToolMapControl.md#data)
- [downloadGeojsonBTN](GeoDownloaderToolMapControl.md#downloadgeojsonbtn)
- [downloadHierarchyBTN](GeoDownloaderToolMapControl.md#downloadhierarchybtn)
- [hierarchy](GeoDownloaderToolMapControl.md#hierarchy)
- [hierarchyEditToolDiv](GeoDownloaderToolMapControl.md#hierarchyedittooldiv)
- [hierarchyPreviewButtons](GeoDownloaderToolMapControl.md#hierarchypreviewbuttons)
- [hierarchySliders](GeoDownloaderToolMapControl.md#hierarchysliders)
- [inProcess](GeoDownloaderToolMapControl.md#inprocess)
- [leafletMap](GeoDownloaderToolMapControl.md#leafletmap)
- [levelMap](GeoDownloaderToolMapControl.md#levelmap)
- [objectTypeInput](GeoDownloaderToolMapControl.md#objecttypeinput)
- [previewGeo](GeoDownloaderToolMapControl.md#previewgeo)
- [progressBar](GeoDownloaderToolMapControl.md#progressbar)
- [selectedValue](GeoDownloaderToolMapControl.md#selectedvalue)
- [simplifyInputScale](GeoDownloaderToolMapControl.md#simplifyinputscale)
- [simplifyInputScaleRange](GeoDownloaderToolMapControl.md#simplifyinputscalerange)
- [tableOfLevels](GeoDownloaderToolMapControl.md#tableoflevels)
- [valueNameMap](GeoDownloaderToolMapControl.md#valuenamemap)

### Methods

- [changeLevel](GeoDownloaderToolMapControl.md#changelevel)
- [changeToNormal](GeoDownloaderToolMapControl.md#changetonormal)
- [changeToWait](GeoDownloaderToolMapControl.md#changetowait)
- [createAdminLevelSelection](GeoDownloaderToolMapControl.md#createadminlevelselection)
- [createSelection](GeoDownloaderToolMapControl.md#createselection)
- [createSimplifyNumberInput](GeoDownloaderToolMapControl.md#createsimplifynumberinput)
- [disableLast](GeoDownloaderToolMapControl.md#disablelast)
- [downloadGeo](GeoDownloaderToolMapControl.md#downloadgeo)
- [downloadHierarchy](GeoDownloaderToolMapControl.md#downloadhierarchy)
- [enableLast](GeoDownloaderToolMapControl.md#enablelast)
- [fetchGeo](GeoDownloaderToolMapControl.md#fetchgeo)
- [fetchHandle](GeoDownloaderToolMapControl.md#fetchhandle)
- [filterGeo](GeoDownloaderToolMapControl.md#filtergeo)
- [generateHierarchy](GeoDownloaderToolMapControl.md#generatehierarchy)
- [generateHierarchyEdit](GeoDownloaderToolMapControl.md#generatehierarchyedit)
- [getParent](GeoDownloaderToolMapControl.md#getparent)
- [getSelectedValuesFromMutliple](GeoDownloaderToolMapControl.md#getselectedvaluesfrommutliple)
- [getSimplifyScaled](GeoDownloaderToolMapControl.md#getsimplifyscaled)
- [makeIDsPretty](GeoDownloaderToolMapControl.md#makeidspretty)
- [mergeToGeo](GeoDownloaderToolMapControl.md#mergetogeo)
- [previewCleaner](GeoDownloaderToolMapControl.md#previewcleaner)
- [simplifyDisable](GeoDownloaderToolMapControl.md#simplifydisable)
- [simplifyFeature](GeoDownloaderToolMapControl.md#simplifyfeature)
- [togglePreview](GeoDownloaderToolMapControl.md#togglepreview)

## Constructors

### constructor

• **new GeoDownloaderToolMapControl**(`map`): [`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `undefined` \| `Map` |

#### Returns

[`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:62](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L62)

## Properties

### adminLevelDIV

• `Private` **adminLevelDIV**: `HTMLElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:37](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L37)

___

### adminLevelMAP

• `Private` **adminLevelMAP**: `Map`\<[`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md), `string`\>

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:38](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L38)

___

### countriesList

• `Private` **countriesList**: `countriesTYPE`[]

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:45](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L45)

___

### countryInput

• `Private` **countryInput**: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:36](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L36)

___

### data

• `Private` **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `geo` | `any`[] |
| `geoFIltered` | `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>[] |
| `level` | `number`[] |

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:48](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L48)

___

### downloadGeojsonBTN

• **downloadGeojsonBTN**: `HTMLButtonElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:32](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L32)

___

### downloadHierarchyBTN

• **downloadHierarchyBTN**: `HTMLButtonElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:33](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L33)

___

### hierarchy

• `Private` **hierarchy**: `hierarchyConfig`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L54)

___

### hierarchyEditToolDiv

• **hierarchyEditToolDiv**: `HTMLDivElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:34](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L34)

___

### hierarchyPreviewButtons

• `Private` **hierarchyPreviewButtons**: [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)[] = `[]`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:41](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L41)

___

### hierarchySliders

• `Private` **hierarchySliders**: [`LabeledSliderFormInput`](LabeledSliderFormInput.md)[] = `[]`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L42)

___

### inProcess

• `Private` **inProcess**: `boolean` = `false`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:44](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L44)

___

### leafletMap

• `Private` **leafletMap**: `undefined` \| `Map`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L59)

___

### levelMap

• `Private` **levelMap**: `Map`\<`string`, `administrativeLevelsTYPE`\>

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L56)

___

### objectTypeInput

• **objectTypeInput**: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:31](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L31)

___

### previewGeo

• `Private` **previewGeo**: `Map`\<`number`, `GeoJSON`\<`any`, `Geometry`\>\>

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:57](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L57)

___

### progressBar

• **progressBar**: `HTMLProgressElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L35)

___

### selectedValue

• `Private` **selectedValue**: `string` = `""`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:46](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L46)

___

### simplifyInputScale

• `Private` **simplifyInputScale**: `HTMLDivElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:39](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L39)

___

### simplifyInputScaleRange

• `Private` **simplifyInputScaleRange**: [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:40](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L40)

___

### tableOfLevels

• `Private` **tableOfLevels**: `administrativeLevelsTYPE`[]

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L55)

___

### valueNameMap

• `Private` **valueNameMap**: `Map`\<`string`, `string`\>

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:53](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L53)

## Methods

### changeLevel

▸ **changeLevel**(`level`): `void`

Change zoom level in hierarchy for certain administrative level.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:370](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L370)

___

### changeToNormal

▸ **changeToNormal**(): `void`

Change state of tool to normal -> download finished.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:662](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L662)

___

### changeToWait

▸ **changeToWait**(): `void`

Change state of tool to -> waiting for download to finish

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:652](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L652)

___

### createAdminLevelSelection

▸ **createAdminLevelSelection**(): `HTMLElement`

Create chcekboxes with custom labels based on OpenStreetMap table.
If not defined in table, creates clasic number labels.

#### Returns

`HTMLElement`

Div element containing buttons.

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L130)

___

### createSelection

▸ **createSelection**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:758](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L758)

___

### createSimplifyNumberInput

▸ **createSimplifyNumberInput**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:698](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L698)

___

### disableLast

▸ **disableLast**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:452](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L452)

___

### downloadGeo

▸ **downloadGeo**(): `void`

Callback function for downloading GeoJSON

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:674](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L674)

___

### downloadHierarchy

▸ **downloadHierarchy**(): `void`

Callback function for downloading Hierarchy definition.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:687](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L687)

___

### enableLast

▸ **enableLast**(): `void`

Method for making selected previews visible.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:442](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L442)

___

### fetchGeo

▸ **fetchGeo**(`countryID`, `admin_levels`): `Promise`\<`any`\>

Asynchronous function to download geoobjects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `countryID` | `string` | ID of country |
| `admin_levels` | `number`[] | Array of levels to be downloaded. |

#### Returns

`Promise`\<`any`\>

Promise

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:403](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L403)

___

### fetchHandle

▸ **fetchHandle**(): `void`

Call back function for start of download.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:209](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L209)

___

### filterGeo

▸ **filterGeo**(): `void`

Filters and simplify downloaded data.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:458](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L458)

___

### generateHierarchy

▸ **generateHierarchy**(): `void`

Automatic generator of hierarchy definition.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:497](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L497)

___

### generateHierarchyEdit

▸ **generateHierarchyEdit**(): `void`

Generate hierarchy editation interface

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:275](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L275)

___

### getParent

▸ **getParent**(`centerCHild`, `iterator`): `string`

Function to reslove childs parent in automatic generating of hierarchy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `centerCHild` | `Feature`\<`Geometry` \| `GeometryCollection`, `Properties`\> |
| `iterator` | `number` |

#### Returns

`string`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:545](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L545)

___

### getSelectedValuesFromMutliple

▸ **getSelectedValuesFromMutliple**(): `string`[]

Returns selected administrative levels.

#### Returns

`string`[]

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:386](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L386)

___

### getSimplifyScaled

▸ **getSimplifyScaled**(`input`): `number`

From input number (0 - 10) converts to coefficient of simplification compatible with

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `number` |

#### Returns

`number`

**`Turf`**

funciton.

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:730](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L730)

___

### makeIDsPretty

▸ **makeIDsPretty**(): `void`

Generate new IDs for geoobjects.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:581](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L581)

___

### mergeToGeo

▸ **mergeToGeo**(): `string`

Merge all administrative layers in one GeoJSON

#### Returns

`string`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:611](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L611)

___

### previewCleaner

▸ **previewCleaner**(): `void`

Method to hide all previewed objects.

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:196](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L196)

___

### simplifyDisable

▸ **simplifyDisable**(): `void`

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:717](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L717)

___

### simplifyFeature

▸ **simplifyFeature**(`feature`, `simplifyIndex?`): `Feature`\<`Geometry`, `GeoJsonProperties`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AllGeoJSON` |
| `simplifyIndex?` | `number` |

#### Returns

`Feature`\<`Geometry`, `GeoJsonProperties`\>

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:643](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L643)

___

### togglePreview

▸ **togglePreview**(`level`): `void`

Show or clear prewiev of downloaded data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`void`

#### Defined in

[src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:313](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L313)
