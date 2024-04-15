[geovisto-map](../README.md) / [Exports](../modules.md) / MarkerIcon

# Class: MarkerIcon

This class represents custom div icon which is used to mark center of countries.
It overrides L.DivIcon.

**`Author`**

Jiri Hynek

## Hierarchy

- `Icon`\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

  ↳ **`MarkerIcon`**

## Implements

- [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\>

## Table of contents

### Constructors

- [constructor](MarkerIcon.md#constructor)

### Properties

- [\_map](MarkerIcon.md#_map)
- [options](MarkerIcon.md#options)
- [sizeBasic](MarkerIcon.md#sizebasic)
- [sizeDonut](MarkerIcon.md#sizedonut)
- [sizeGroup](MarkerIcon.md#sizegroup)
- [svgGroup](MarkerIcon.md#svggroup)
- [svgLabel](MarkerIcon.md#svglabel)

### Methods

- [addEventListener](MarkerIcon.md#addeventlistener)
- [addEventParent](MarkerIcon.md#addeventparent)
- [addInteractiveTarget](MarkerIcon.md#addinteractivetarget)
- [addOneTimeEventListener](MarkerIcon.md#addonetimeeventlistener)
- [addTo](MarkerIcon.md#addto)
- [arc](MarkerIcon.md#arc)
- [beforeAdd](MarkerIcon.md#beforeadd)
- [bindPopup](MarkerIcon.md#bindpopup)
- [bindTooltip](MarkerIcon.md#bindtooltip)
- [clearAllEventListeners](MarkerIcon.md#clearalleventlisteners)
- [closePopup](MarkerIcon.md#closepopup)
- [closeTooltip](MarkerIcon.md#closetooltip)
- [createIcon](MarkerIcon.md#createicon)
- [createShadow](MarkerIcon.md#createshadow)
- [fire](MarkerIcon.md#fire)
- [fireEvent](MarkerIcon.md#fireevent)
- [formatValue](MarkerIcon.md#formatvalue)
- [getAttribution](MarkerIcon.md#getattribution)
- [getColor](MarkerIcon.md#getcolor)
- [getEvents](MarkerIcon.md#getevents)
- [getLevel](MarkerIcon.md#getlevel)
- [getPane](MarkerIcon.md#getpane)
- [getPieSubvalues](MarkerIcon.md#getpiesubvalues)
- [getPopup](MarkerIcon.md#getpopup)
- [getSize](MarkerIcon.md#getsize)
- [getTooltip](MarkerIcon.md#gettooltip)
- [hasEventListeners](MarkerIcon.md#haseventlisteners)
- [isPopupOpen](MarkerIcon.md#ispopupopen)
- [isTooltipOpen](MarkerIcon.md#istooltipopen)
- [listens](MarkerIcon.md#listens)
- [off](MarkerIcon.md#off)
- [on](MarkerIcon.md#on)
- [onAdd](MarkerIcon.md#onadd)
- [onRemove](MarkerIcon.md#onremove)
- [once](MarkerIcon.md#once)
- [openPopup](MarkerIcon.md#openpopup)
- [openTooltip](MarkerIcon.md#opentooltip)
- [remove](MarkerIcon.md#remove)
- [removeEventListener](MarkerIcon.md#removeeventlistener)
- [removeEventParent](MarkerIcon.md#removeeventparent)
- [removeFrom](MarkerIcon.md#removefrom)
- [removeInteractiveTarget](MarkerIcon.md#removeinteractivetarget)
- [round](MarkerIcon.md#round)
- [setPopupContent](MarkerIcon.md#setpopupcontent)
- [setTooltipContent](MarkerIcon.md#settooltipcontent)
- [togglePopup](MarkerIcon.md#togglepopup)
- [toggleTooltip](MarkerIcon.md#toggletooltip)
- [unbindPopup](MarkerIcon.md#unbindpopup)
- [unbindTooltip](MarkerIcon.md#unbindtooltip)
- [updateData](MarkerIcon.md#updatedata)
- [addInitHook](MarkerIcon.md#addinithook)
- [callInitHooks](MarkerIcon.md#callinithooks)
- [extend](MarkerIcon.md#extend)
- [include](MarkerIcon.md#include)
- [mergeOptions](MarkerIcon.md#mergeoptions)

## Constructors

### constructor

• **new MarkerIcon**(`options`): [`MarkerIcon`](MarkerIcon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MarkerIconOptions`](../modules.md#markericonoptions) |

#### Returns

[`MarkerIcon`](MarkerIcon.md)

#### Overrides

Icon\&lt;IMarkerIconOptions\&gt;.constructor

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:61](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L61)

## Properties

### \_map

• `Protected` **\_map**: `Map`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[_map](../interfaces/IMarkerIcon.md#_map)

#### Inherited from

Icon.\_map

#### Defined in

node_modules/@types/leaflet/index.d.ts:1228

___

### options

• **options**: [`IMarkerIconOptions`](../modules.md#imarkericonoptions)

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[options](../interfaces/IMarkerIcon.md#options)

#### Inherited from

Icon.options

#### Defined in

node_modules/@types/leaflet/index.d.ts:2456

___

### sizeBasic

• `Private` **sizeBasic**: `number` = `32`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:54](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L54)

___

### sizeDonut

• `Private` **sizeDonut**: `number` = `48`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:56](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L56)

___

### sizeGroup

• `Private` **sizeGroup**: `number` = `36`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:55](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L55)

___

### svgGroup

• `Private` `Optional` **svgGroup**: `Selection`\<`SVGGElement`, `unknown`, ``null``, `undefined`\>

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:59](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L59)

___

### svgLabel

• `Private` `Optional` **svgLabel**: `Selection`\<`SVGTextElement`, `unknown`, ``null``, `undefined`\>

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:58](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L58)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

Alias for on(...)

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:993

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:995

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:997

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1002

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1004

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1006

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1008

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1010

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1012

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1015

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1017

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1019

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1021

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn` | `TileErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1023

▸ **addEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1025

▸ **addEventListener**(`eventMap`): `this`

Alias for on(...)

Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1032

▸ **addEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:213

▸ **addEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventListener](../interfaces/IMarkerIcon.md#addeventlistener)

#### Inherited from

Icon.addEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:214

___

### addEventParent

▸ **addEventParent**(`obj`): `this`

Adds an event parent - an Evented that will receive propagated events

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Evented` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addEventParent](../interfaces/IMarkerIcon.md#addeventparent)

#### Inherited from

Icon.addEventParent

#### Defined in

node_modules/@types/leaflet/index.d.ts:977

___

### addInteractiveTarget

▸ **addInteractiveTarget**(`targetEl`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetEl` | `HTMLElement` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addInteractiveTarget](../interfaces/IMarkerIcon.md#addinteractivetarget)

#### Inherited from

Icon.addInteractiveTarget

#### Defined in

node_modules/@types/leaflet/index.d.ts:1198

___

### addOneTimeEventListener

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1099

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1101

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1103

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1108

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1110

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1112

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1114

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1116

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1118

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1121

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1123

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1125

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1127

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn` | `TileErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1129

▸ **addOneTimeEventListener**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1131

▸ **addOneTimeEventListener**(`eventMap`): `this`

Alias for once(...)

Behaves as on(...), except the listener will only get fired once and then removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1138

▸ **addOneTimeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:219

▸ **addOneTimeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addOneTimeEventListener](../interfaces/IMarkerIcon.md#addonetimeeventlistener)

#### Inherited from

Icon.addOneTimeEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:220

___

### addTo

▸ **addTo**(`map`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` \| `LayerGroup`\<`any`\> |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[addTo](../interfaces/IMarkerIcon.md#addto)

#### Inherited from

Icon.addTo

#### Defined in

node_modules/@types/leaflet/index.d.ts:1193

___

### arc

▸ **arc**(`size`): `Arc`\<`unknown`, `PieArcDatum`\<`number` \| \{ `valueOf`: () => `number`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Arc`\<`unknown`, `PieArcDatum`\<`number` \| \{ `valueOf`: () => `number`  }\>\>

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L111)

___

### beforeAdd

▸ **beforeAdd**(`map`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[beforeAdd](../interfaces/IMarkerIcon.md#beforeadd)

#### Inherited from

Icon.beforeAdd

#### Defined in

node_modules/@types/leaflet/index.d.ts:1226

___

### bindPopup

▸ **bindPopup**(`content`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Popup` \| `Content` \| (`layer`: `Layer`) => `Content` |
| `options?` | `PopupOptions` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[bindPopup](../interfaces/IMarkerIcon.md#bindpopup)

#### Inherited from

Icon.bindPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1202

___

### bindTooltip

▸ **bindTooltip**(`content`, `options?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Content` \| `Tooltip` \| (`layer`: `Layer`) => `Content` |
| `options?` | `TooltipOptions` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[bindTooltip](../interfaces/IMarkerIcon.md#bindtooltip)

#### Inherited from

Icon.bindTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1212

___

### clearAllEventListeners

▸ **clearAllEventListeners**(): `this`

Alias for off()

Removes all listeners to all events on the object.

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[clearAllEventListeners](../interfaces/IMarkerIcon.md#clearalleventlisteners)

#### Inherited from

Icon.clearAllEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1091

___

### closePopup

▸ **closePopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[closePopup](../interfaces/IMarkerIcon.md#closepopup)

#### Inherited from

Icon.closePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1205

___

### closeTooltip

▸ **closeTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[closeTooltip](../interfaces/IMarkerIcon.md#closetooltip)

#### Inherited from

Icon.closeTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1215

___

### createIcon

▸ **createIcon**(`oldIcon?`): `HTMLElement`

It creates the icon. The method overrides the super method of Icon.

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldIcon?` | `HTMLElement` |

#### Returns

`HTMLElement`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[createIcon](../interfaces/IMarkerIcon.md#createicon)

#### Overrides

Icon.createIcon

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:130](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L130)

___

### createShadow

▸ **createShadow**(`oldIcon?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldIcon?` | `HTMLElement` |

#### Returns

`HTMLElement`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[createShadow](../interfaces/IMarkerIcon.md#createshadow)

#### Inherited from

Icon.createShadow

#### Defined in

node_modules/@types/leaflet/index.d.ts:2454

___

### fire

▸ **fire**(`type`, `data?`, `propagate?`): `this`

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[fire](../interfaces/IMarkerIcon.md#fire)

#### Inherited from

Icon.fire

#### Defined in

node_modules/@types/leaflet/index.d.ts:882

___

### fireEvent

▸ **fireEvent**(`type`, `data?`, `propagate?`): `this`

Alias for fire(...)

Fires an event of the specified type. You can optionally provide a data
object — the first argument of the listener function will contain its properties.
The event might can optionally be propagated to event parents.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `data?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[fireEvent](../interfaces/IMarkerIcon.md#fireevent)

#### Inherited from

Icon.fireEvent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1148

___

### formatValue

▸ **formatValue**(`value`, `level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `level` | `number` |

#### Returns

`string`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:74](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L74)

___

### getAttribution

▸ **getAttribution**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[getAttribution](../interfaces/IMarkerIcon.md#getattribution)

#### Inherited from

Icon.getAttribution

#### Defined in

node_modules/@types/leaflet/index.d.ts:1225

___

### getColor

▸ **getColor**(`level`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |

#### Returns

`string`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:90](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L90)

___

### getEvents

▸ **getEvents**(): `Object`

#### Returns

`Object`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[getEvents](../interfaces/IMarkerIcon.md#getevents)

#### Inherited from

Icon.getEvents

#### Defined in

node_modules/@types/leaflet/index.d.ts:1224

___

### getLevel

▸ **getLevel**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:98](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L98)

___

### getPane

▸ **getPane**(`name?`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[getPane](../interfaces/IMarkerIcon.md#getpane)

#### Inherited from

Icon.getPane

#### Defined in

node_modules/@types/leaflet/index.d.ts:1196

___

### getPieSubvalues

▸ **getPieSubvalues**(): `PieArcDatum`\<`number` \| \{ `valueOf`: () => `number`  }\>[]

#### Returns

`PieArcDatum`\<`number` \| \{ `valueOf`: () => `number`  }\>[]

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L118)

___

### getPopup

▸ **getPopup**(): `undefined` \| `Popup`

#### Returns

`undefined` \| `Popup`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[getPopup](../interfaces/IMarkerIcon.md#getpopup)

#### Inherited from

Icon.getPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1209

___

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:107](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L107)

___

### getTooltip

▸ **getTooltip**(): `undefined` \| `Tooltip`

#### Returns

`undefined` \| `Tooltip`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[getTooltip](../interfaces/IMarkerIcon.md#gettooltip)

#### Inherited from

Icon.getTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1219

___

### hasEventListeners

▸ **hasEventListeners**(`type`): `boolean`

Alias for listens(...)

Returns true if a particular event type has any listeners attached to it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[hasEventListeners](../interfaces/IMarkerIcon.md#haseventlisteners)

#### Inherited from

Icon.hasEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1155

___

### isPopupOpen

▸ **isPopupOpen**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[isPopupOpen](../interfaces/IMarkerIcon.md#ispopupopen)

#### Inherited from

Icon.isPopupOpen

#### Defined in

node_modules/@types/leaflet/index.d.ts:1207

___

### isTooltipOpen

▸ **isTooltipOpen**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[isTooltipOpen](../interfaces/IMarkerIcon.md#istooltipopen)

#### Inherited from

Icon.isTooltipOpen

#### Defined in

node_modules/@types/leaflet/index.d.ts:1217

___

### listens

▸ **listens**(`type`, `propagate?`): `boolean`

Returns true if a particular event type has any listeners attached to it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` \| ``"layeradd"`` \| ``"layerremove"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` \| ``"resize"`` \| ``"popupopen"`` \| ``"tooltipopen"`` \| ``"tooltipclose"`` \| ``"locationerror"`` \| ``"locationfound"`` \| ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` \| ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` \| ``"zoomanim"`` \| ``"dragend"`` \| ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` \| ``"tileerror"`` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:888

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn` | `LayersControlEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:896

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn` | `LayerEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:898

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:900

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn` | `ResizeEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:905

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn` | `PopupEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:907

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn` | `TooltipEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:909

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn` | `ErrorEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:911

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn` | `LocationEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:913

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:915

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:918

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:920

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn` | `DragEndEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:922

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:924

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:926

▸ **listens**(`type`, `fn`, `context?`, `propagate?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |
| `propagate?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[listens](../interfaces/IMarkerIcon.md#listens)

#### Inherited from

Icon.listens

#### Defined in

node_modules/@types/leaflet/index.d.ts:928

___

### off

▸ **off**(`type`, `fn?`, `context?`): `this`

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn?` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:831

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn?` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:833

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn?` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:835

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn?` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:840

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn?` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:842

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn?` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:844

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn?` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:846

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn?` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:848

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn?` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:850

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn?` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:853

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn?` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:855

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn?` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:857

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn?` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:859

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn?` | `TileErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:861

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn?` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:863

▸ **off**(`eventMap`): `this`

Removes a set of type/listener pairs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:869

▸ **off**(): `this`

Removes all listeners to all events on the object.

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:874

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:207

▸ **off**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[off](../interfaces/IMarkerIcon.md#off)

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:208

___

### on

▸ **on**(`type`, `fn`, `context?`): `this`

Adds a listener function (fn) to a particular event type of the object.
You can optionally specify the context of the listener (object the this
keyword will point to). You can also pass several space-separated types
(e.g. 'click dblclick').

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:784

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:786

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:788

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:793

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:795

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:797

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:799

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:801

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:803

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:806

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:808

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:810

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:812

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn` | `TileErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:814

▸ **on**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:816

▸ **on**(`eventMap`): `this`

Adds a set of type/listener pairs, e.g. {click: onClick, mousemove: onMouseMove}

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet/index.d.ts:821

▸ **on**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:204

▸ **on**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[on](../interfaces/IMarkerIcon.md#on)

#### Inherited from

Icon.on

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:205

___

### onAdd

▸ **onAdd**(`map`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[onAdd](../interfaces/IMarkerIcon.md#onadd)

#### Inherited from

Icon.onAdd

#### Defined in

node_modules/@types/leaflet/index.d.ts:1222

___

### onRemove

▸ **onRemove**(`map`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[onRemove](../interfaces/IMarkerIcon.md#onremove)

#### Inherited from

Icon.onRemove

#### Defined in

node_modules/@types/leaflet/index.d.ts:1223

___

### once

▸ **once**(`type`, `fn`, `context?`): `this`

Behaves as on(...), except the listener will only get fired once and then removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:934

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:936

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:938

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:943

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:945

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:947

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:949

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:951

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:953

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:956

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:958

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:960

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:962

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:964

▸ **once**(`type`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:966

▸ **once**(`eventMap`): `this`

Behaves as on(...), except the listener will only get fired once and then removed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet/index.d.ts:971

▸ **once**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:210

▸ **once**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[once](../interfaces/IMarkerIcon.md#once)

#### Inherited from

Icon.once

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:211

___

### openPopup

▸ **openPopup**(`latlng?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng?` | `LatLngExpression` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[openPopup](../interfaces/IMarkerIcon.md#openpopup)

#### Inherited from

Icon.openPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1204

___

### openTooltip

▸ **openTooltip**(`latlng?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng?` | `LatLngExpression` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[openTooltip](../interfaces/IMarkerIcon.md#opentooltip)

#### Inherited from

Icon.openTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1214

___

### remove

▸ **remove**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[remove](../interfaces/IMarkerIcon.md#remove)

#### Inherited from

Icon.remove

#### Defined in

node_modules/@types/leaflet/index.d.ts:1194

___

### removeEventListener

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

Alias for off(...)

Removes a previously added listener function. If no function is specified,
it will remove all the listeners of that particular event from the object.
Note that if you passed a custom context to on, you must pass the same context
to off in order to remove the listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"baselayerchange"`` \| ``"overlayadd"`` \| ``"overlayremove"`` |
| `fn?` | `LayersControlEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1044

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"layeradd"`` \| ``"layerremove"`` |
| `fn?` | `LayerEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1046

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoom"`` \| ``"zoomlevelschange"`` \| ``"unload"`` \| ``"viewreset"`` \| ``"load"`` \| ``"zoomstart"`` \| ``"movestart"`` \| ``"move"`` \| ``"zoomend"`` \| ``"moveend"`` \| ``"autopanstart"`` \| ``"dragstart"`` \| ``"drag"`` \| ``"add"`` \| ``"remove"`` \| ``"loading"`` \| ``"error"`` \| ``"update"`` \| ``"down"`` \| ``"predrag"`` |
| `fn?` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1048

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"resize"`` |
| `fn?` | `ResizeEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1053

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"popupopen"`` \| ``"popupclose"`` |
| `fn?` | `PopupEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1055

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tooltipopen"`` \| ``"tooltipclose"`` |
| `fn?` | `TooltipEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1057

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationerror"`` |
| `fn?` | `ErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1059

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"locationfound"`` |
| `fn?` | `LocationEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1061

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"click"`` \| ``"dblclick"`` \| ``"mousedown"`` \| ``"mouseup"`` \| ``"mouseover"`` \| ``"mouseout"`` \| ``"mousemove"`` \| ``"contextmenu"`` \| ``"preclick"`` |
| `fn?` | `LeafletMouseEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1063

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"keypress"`` \| ``"keydown"`` \| ``"keyup"`` |
| `fn?` | `LeafletKeyboardEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1066

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"zoomanim"`` |
| `fn?` | `ZoomAnimEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1068

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dragend"`` |
| `fn?` | `DragEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1070

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileunload"`` \| ``"tileloadstart"`` \| ``"tileload"`` \| ``"tileabort"`` |
| `fn?` | `TileEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1072

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"tileerror"`` |
| `fn?` | `TileErrorEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1074

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `fn?` | `LeafletEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1076

▸ **removeEventListener**(`eventMap`): `this`

Alias for off(...)

Removes a set of type/listener pairs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventMap` | `LeafletEventHandlerFnMap` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet/index.d.ts:1083

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"spiderfied"`` \| ``"unspiderfied"`` |
| `fn?` | `SpiderfyEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:216

▸ **removeEventListener**(`type`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"animationend"`` |
| `fn?` | `AnimationEndEventHandlerFn` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventListener](../interfaces/IMarkerIcon.md#removeeventlistener)

#### Inherited from

Icon.removeEventListener

#### Defined in

node_modules/@types/leaflet.markercluster/index.d.ts:217

___

### removeEventParent

▸ **removeEventParent**(`obj`): `this`

Removes an event parent, so it will stop receiving propagated events

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Evented` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeEventParent](../interfaces/IMarkerIcon.md#removeeventparent)

#### Inherited from

Icon.removeEventParent

#### Defined in

node_modules/@types/leaflet/index.d.ts:982

___

### removeFrom

▸ **removeFrom**(`map`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeFrom](../interfaces/IMarkerIcon.md#removefrom)

#### Inherited from

Icon.removeFrom

#### Defined in

node_modules/@types/leaflet/index.d.ts:1195

___

### removeInteractiveTarget

▸ **removeInteractiveTarget**(`targetEl`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetEl` | `HTMLElement` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[removeInteractiveTarget](../interfaces/IMarkerIcon.md#removeinteractivetarget)

#### Inherited from

Icon.removeInteractiveTarget

#### Defined in

node_modules/@types/leaflet/index.d.ts:1199

___

### round

▸ **round**(`value`, `align`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `align` | `number` |

#### Returns

`number`

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:70](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L70)

___

### setPopupContent

▸ **setPopupContent**(`content`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Popup` \| `Content` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[setPopupContent](../interfaces/IMarkerIcon.md#setpopupcontent)

#### Inherited from

Icon.setPopupContent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1208

___

### setTooltipContent

▸ **setTooltipContent**(`content`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Content` \| `Tooltip` |

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[setTooltipContent](../interfaces/IMarkerIcon.md#settooltipcontent)

#### Inherited from

Icon.setTooltipContent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1218

___

### togglePopup

▸ **togglePopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[togglePopup](../interfaces/IMarkerIcon.md#togglepopup)

#### Inherited from

Icon.togglePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1206

___

### toggleTooltip

▸ **toggleTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[toggleTooltip](../interfaces/IMarkerIcon.md#toggletooltip)

#### Inherited from

Icon.toggleTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1216

___

### unbindPopup

▸ **unbindPopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[unbindPopup](../interfaces/IMarkerIcon.md#unbindpopup)

#### Inherited from

Icon.unbindPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1203

___

### unbindTooltip

▸ **unbindTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[unbindTooltip](../interfaces/IMarkerIcon.md#unbindtooltip)

#### Inherited from

Icon.unbindTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1213

___

### updateData

▸ **updateData**(`values`, `animateOptions`): `void`

It updates the data of the marker icon.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`IMarkerIconValueOptions`](../modules.md#imarkericonvalueoptions) |
| `animateOptions` | [`IDataChangeAnimateOptions`](../modules.md#idatachangeanimateoptions) |

#### Returns

`void`

#### Implementation of

[IMarkerIcon](../interfaces/IMarkerIcon.md).[updateData](../interfaces/IMarkerIcon.md#updatedata)

#### Defined in

[src/tools/layers/marker/model/internal/marker/MarkerIcon.ts:215](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/MarkerIcon.ts#L215)

___

### addInitHook

▸ **addInitHook**(`initHookFn`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initHookFn` | () => `void` |

#### Returns

`any`

#### Inherited from

Icon.addInitHook

#### Defined in

node_modules/@types/leaflet/index.d.ts:26

▸ **addInitHook**(`methodName`, `...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `...args` | `any`[] |

#### Returns

`any`

#### Inherited from

Icon.addInitHook

#### Defined in

node_modules/@types/leaflet/index.d.ts:27

___

### callInitHooks

▸ **callInitHooks**(): `void`

#### Returns

`void`

#### Inherited from

Icon.callInitHooks

#### Defined in

node_modules/@types/leaflet/index.d.ts:29

___

### extend

▸ **extend**(`props`): (...`args`: `any`[]) => `any` & typeof `Class`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

(...`args`: `any`[]) => `any` & typeof `Class`

#### Inherited from

Icon.extend

#### Defined in

node_modules/@types/leaflet/index.d.ts:22

___

### include

▸ **include**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`any`

#### Inherited from

Icon.include

#### Defined in

node_modules/@types/leaflet/index.d.ts:23

___

### mergeOptions

▸ **mergeOptions**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Returns

`any`

#### Inherited from

Icon.mergeOptions

#### Defined in

node_modules/@types/leaflet/index.d.ts:24
