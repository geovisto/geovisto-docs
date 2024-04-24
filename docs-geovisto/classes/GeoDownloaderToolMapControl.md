**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / GeoDownloaderToolMapControl

# Class: GeoDownloaderToolMapControl

Controler for Downloader tool. 
Manages almost everything around downloading geo objects from Overpass API.
Can generate automatic hierarchy definition from downloaded objects.

## Author

Vojtěch Malý

## Constructors

### new GeoDownloaderToolMapControl()

> **new GeoDownloaderToolMapControl**(`map`): [`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Parameters

• **map**: `any`

#### Returns

[`GeoDownloaderToolMapControl`](GeoDownloaderToolMapControl.md)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:62](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L62)

## Properties

### adminLevelDIV

> `private` **adminLevelDIV**: `HTMLElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:37](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L37)

***

### adminLevelMAP

> `private` **adminLevelMAP**: `Map`\<[`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md), `string`\>

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:38](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L38)

***

### countriesList

> `private` **countriesList**: `countriesTYPE`[]

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:45](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L45)

***

### countryInput

> `private` **countryInput**: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:36](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L36)

***

### data

> `private` **data**: `object`

#### geo

> **geo**: `any`[]

#### geoFIltered

> **geoFIltered**: `FeatureCollection`[]

#### level

> **level**: `number`[]

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:48](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L48)

***

### downloadGeojsonBTN

> **downloadGeojsonBTN**: `HTMLButtonElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:32](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L32)

***

### downloadHierarchyBTN

> **downloadHierarchyBTN**: `HTMLButtonElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L33)

***

### hierarchy

> `private` **hierarchy**: `hierarchyConfig`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:54](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L54)

***

### hierarchyEditToolDiv

> **hierarchyEditToolDiv**: `HTMLDivElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:34](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L34)

***

### hierarchyPreviewButtons

> `private` **hierarchyPreviewButtons**: [`LabeledCheckboxFormInput`](LabeledCheckboxFormInput.md)[] = `[]`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:41](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L41)

***

### hierarchySliders

> `private` **hierarchySliders**: [`LabeledSliderFormInput`](LabeledSliderFormInput.md)[] = `[]`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L42)

***

### inProcess

> `private` **inProcess**: `boolean` = `false`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:44](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L44)

***

### leafletMap

> `private` **leafletMap**: `any`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:59](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L59)

***

### levelMap

> `private` **levelMap**: `Map`\<`string`, `administrativeLevelsTYPE`\>

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:56](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L56)

***

### objectTypeInput

> **objectTypeInput**: [`LabeledAutocompleteFormInput`](LabeledAutocompleteFormInput.md)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:31](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L31)

***

### previewGeo

> `private` **previewGeo**: `Map`\<`number`, `GeoJSON`\>

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:57](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L57)

***

### progressBar

> **progressBar**: `HTMLProgressElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:35](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L35)

***

### selectedValue

> `private` **selectedValue**: `string` = `""`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:46](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L46)

***

### simplifyInputScale

> `private` **simplifyInputScale**: `HTMLDivElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:39](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L39)

***

### simplifyInputScaleRange

> `private` **simplifyInputScaleRange**: [`LabeledSliderFormInput`](LabeledSliderFormInput.md)

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L40)

***

### tableOfLevels

> `private` **tableOfLevels**: `administrativeLevelsTYPE`[]

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:55](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L55)

***

### valueNameMap

> `private` **valueNameMap**: `Map`\<`string`, `string`\>

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:53](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L53)

## Methods

### changeLevel()

> `protected` **changeLevel**(`level`): `void`

Change zoom level in hierarchy for certain administrative level.

#### Parameters

• **level**: `number`

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:370](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L370)

***

### changeToNormal()

> `protected` **changeToNormal**(): `void`

Change state of tool to normal -> download finished.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:662](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L662)

***

### changeToWait()

> `protected` **changeToWait**(): `void`

Change state of tool to -> waiting for download to finish

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:652](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L652)

***

### createAdminLevelSelection()

> **createAdminLevelSelection**(): `HTMLElement`

Create chcekboxes with custom labels based on OpenStreetMap table.
If not defined in table, creates clasic number labels.

#### Returns

`HTMLElement`

Div element containing buttons.

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:130](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L130)

***

### createSelection()

> **createSelection**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:758](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L758)

***

### createSimplifyNumberInput()

> **createSimplifyNumberInput**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:698](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L698)

***

### disableLast()

> **disableLast**(): `void`

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:452](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L452)

***

### downloadGeo()

> **downloadGeo**(): `void`

Callback function for downloading GeoJSON

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:674](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L674)

***

### downloadHierarchy()

> **downloadHierarchy**(): `void`

Callback function for downloading Hierarchy definition.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:687](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L687)

***

### enableLast()

> **enableLast**(): `void`

Method for making selected previews visible.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:442](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L442)

***

### fetchGeo()

> `protected` **fetchGeo**(`countryID`, `admin_levels`): `Promise`\<`any`\>

Asynchronous function to download geoobjects.

#### Parameters

• **countryID**: `string`

ID of country

• **admin\_levels**: `number`[]

Array of levels to be downloaded.

#### Returns

`Promise`\<`any`\>

Promise

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:403](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L403)

***

### fetchHandle()

> **fetchHandle**(): `void`

Call back function for start of download.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:209](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L209)

***

### filterGeo()

> `protected` **filterGeo**(): `void`

Filters and simplify downloaded data.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:458](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L458)

***

### generateHierarchy()

> `protected` **generateHierarchy**(): `void`

Automatic generator of hierarchy definition.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:497](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L497)

***

### generateHierarchyEdit()

> `protected` **generateHierarchyEdit**(): `void`

Generate hierarchy editation interface

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:275](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L275)

***

### getParent()

> `protected` **getParent**(`centerCHild`, `iterator`): `string`

Function to reslove childs parent in automatic generating of hierarchy.

#### Parameters

• **centerCHild**: `Feature`

• **iterator**: `number`

#### Returns

`string`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:545](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L545)

***

### getSelectedValuesFromMutliple()

> `protected` **getSelectedValuesFromMutliple**(): `string`[]

Returns selected administrative levels.

#### Returns

`string`[]

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:386](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L386)

***

### getSimplifyScaled()

> `protected` **getSimplifyScaled**(`input`): `number`

From input number (0 - 10) converts to coefficient of simplification compatible with

#### Parameters

• **input**: `number`

#### Returns

`number`

#### Turf

funciton.

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:730](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L730)

***

### makeIDsPretty()

> `protected` **makeIDsPretty**(): `void`

Generate new IDs for geoobjects.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:581](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L581)

***

### mergeToGeo()

> `protected` **mergeToGeo**(): `string`

Merge all administrative layers in one GeoJSON

#### Returns

`string`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:611](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L611)

***

### previewCleaner()

> `private` **previewCleaner**(): `void`

Method to hide all previewed objects.

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:196](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L196)

***

### simplifyDisable()

> **simplifyDisable**(): `void`

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:717](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L717)

***

### simplifyFeature()

> `protected` **simplifyFeature**(`feature`, `simplifyIndex`?): `Feature`

#### Parameters

• **feature**: `AllGeoJSON`

• **simplifyIndex?**: `number`

#### Returns

`Feature`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:643](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L643)

***

### togglePreview()

> `protected` **togglePreview**(`level`): `void`

Show or clear prewiev of downloaded data.

#### Parameters

• **level**: `number`

#### Returns

`void`

#### Source

[tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts:313](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/geo-downloader/model/internal/form/GeoDownloaderToolMapControl.ts#L313)
