[geovisto-map](../README.md) / [Exports](../modules.md) / Marker

# Class: Marker\<T\>

This intreface extends Leaflet Marker in order to work with generic icon type.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\> |

## Hierarchy

- `Marker`

  ↳ **`Marker`**

## Implements

- [`IMarker`](../interfaces/IMarker.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](Marker.md#constructor)

### Properties

- [\_map](Marker.md#_map)
- [\_shadow](Marker.md#_shadow)
- [dragging](Marker.md#dragging)
- [feature](Marker.md#feature)
- [options](Marker.md#options)

### Methods

- [addEventListener](Marker.md#addeventlistener)
- [addEventParent](Marker.md#addeventparent)
- [addInteractiveTarget](Marker.md#addinteractivetarget)
- [addOneTimeEventListener](Marker.md#addonetimeeventlistener)
- [addTo](Marker.md#addto)
- [beforeAdd](Marker.md#beforeadd)
- [bindPopup](Marker.md#bindpopup)
- [bindTooltip](Marker.md#bindtooltip)
- [clearAllEventListeners](Marker.md#clearalleventlisteners)
- [closePopup](Marker.md#closepopup)
- [closeTooltip](Marker.md#closetooltip)
- [fire](Marker.md#fire)
- [fireEvent](Marker.md#fireevent)
- [getAttribution](Marker.md#getattribution)
- [getElement](Marker.md#getelement)
- [getEvents](Marker.md#getevents)
- [getIcon](Marker.md#geticon)
- [getLatLng](Marker.md#getlatlng)
- [getOptions](Marker.md#getoptions)
- [getPane](Marker.md#getpane)
- [getPopup](Marker.md#getpopup)
- [getTooltip](Marker.md#gettooltip)
- [hasEventListeners](Marker.md#haseventlisteners)
- [isPopupOpen](Marker.md#ispopupopen)
- [isTooltipOpen](Marker.md#istooltipopen)
- [listens](Marker.md#listens)
- [off](Marker.md#off)
- [on](Marker.md#on)
- [onAdd](Marker.md#onadd)
- [onRemove](Marker.md#onremove)
- [once](Marker.md#once)
- [openPopup](Marker.md#openpopup)
- [openTooltip](Marker.md#opentooltip)
- [remove](Marker.md#remove)
- [removeEventListener](Marker.md#removeeventlistener)
- [removeEventParent](Marker.md#removeeventparent)
- [removeFrom](Marker.md#removefrom)
- [removeInteractiveTarget](Marker.md#removeinteractivetarget)
- [setIcon](Marker.md#seticon)
- [setLatLng](Marker.md#setlatlng)
- [setOpacity](Marker.md#setopacity)
- [setPopupContent](Marker.md#setpopupcontent)
- [setTooltipContent](Marker.md#settooltipcontent)
- [setZIndexOffset](Marker.md#setzindexoffset)
- [toGeoJSON](Marker.md#togeojson)
- [togglePopup](Marker.md#togglepopup)
- [toggleTooltip](Marker.md#toggletooltip)
- [unbindPopup](Marker.md#unbindpopup)
- [unbindTooltip](Marker.md#unbindtooltip)
- [addInitHook](Marker.md#addinithook)
- [callInitHooks](Marker.md#callinithooks)
- [extend](Marker.md#extend)
- [include](Marker.md#include)
- [mergeOptions](Marker.md#mergeoptions)

## Constructors

### constructor

• **new Marker**\<`T`\>(`latlng`, `options?`): [`Marker`](Marker.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMarkerIcon`](../interfaces/IMarkerIcon.md)\<[`IMarkerIconOptions`](../modules.md#imarkericonoptions)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLngExpression` |
| `options?` | [`IMarkerOptions`](../modules.md#imarkeroptions) |

#### Returns

[`Marker`](Marker.md)\<`T`\>

#### Overrides

LMarker.constructor

#### Defined in

[src/tools/layers/marker/model/internal/marker/Marker.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/Marker.ts#L19)

## Properties

### \_map

• `Protected` **\_map**: `Map`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[_map](../interfaces/IMarker.md#_map)

#### Inherited from

LMarker.\_map

#### Defined in

node_modules/@types/leaflet/index.d.ts:1228

___

### \_shadow

• `Protected` **\_shadow**: `undefined` \| `HTMLElement`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[_shadow](../interfaces/IMarker.md#_shadow)

#### Inherited from

LMarker.\_shadow

#### Defined in

node_modules/@types/leaflet/index.d.ts:2532

___

### dragging

• `Optional` **dragging**: `Handler`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[dragging](../interfaces/IMarker.md#dragging)

#### Inherited from

LMarker.dragging

#### Defined in

node_modules/@types/leaflet/index.d.ts:2529

___

### feature

• `Optional` **feature**: `Feature`\<`Point`, `any`\>

#### Implementation of

[IMarker](../interfaces/IMarker.md).[feature](../interfaces/IMarker.md#feature)

#### Inherited from

LMarker.feature

#### Defined in

node_modules/@types/leaflet/index.d.ts:2530

___

### options

• **options**: `MarkerOptions`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[options](../interfaces/IMarker.md#options)

#### Inherited from

LMarker.options

#### Defined in

node_modules/@types/leaflet/index.d.ts:2528

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventListener](../interfaces/IMarker.md#addeventlistener)

#### Inherited from

LMarker.addEventListener

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

[IMarker](../interfaces/IMarker.md).[addEventParent](../interfaces/IMarker.md#addeventparent)

#### Inherited from

LMarker.addEventParent

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

[IMarker](../interfaces/IMarker.md).[addInteractiveTarget](../interfaces/IMarker.md#addinteractivetarget)

#### Inherited from

LMarker.addInteractiveTarget

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addOneTimeEventListener](../interfaces/IMarker.md#addonetimeeventlistener)

#### Inherited from

LMarker.addOneTimeEventListener

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

[IMarker](../interfaces/IMarker.md).[addTo](../interfaces/IMarker.md#addto)

#### Inherited from

LMarker.addTo

#### Defined in

node_modules/@types/leaflet/index.d.ts:1193

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

[IMarker](../interfaces/IMarker.md).[beforeAdd](../interfaces/IMarker.md#beforeadd)

#### Inherited from

LMarker.beforeAdd

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

[IMarker](../interfaces/IMarker.md).[bindPopup](../interfaces/IMarker.md#bindpopup)

#### Inherited from

LMarker.bindPopup

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

[IMarker](../interfaces/IMarker.md).[bindTooltip](../interfaces/IMarker.md#bindtooltip)

#### Inherited from

LMarker.bindTooltip

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

[IMarker](../interfaces/IMarker.md).[clearAllEventListeners](../interfaces/IMarker.md#clearalleventlisteners)

#### Inherited from

LMarker.clearAllEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1091

___

### closePopup

▸ **closePopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[closePopup](../interfaces/IMarker.md#closepopup)

#### Inherited from

LMarker.closePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1205

___

### closeTooltip

▸ **closeTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[closeTooltip](../interfaces/IMarker.md#closetooltip)

#### Inherited from

LMarker.closeTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1215

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

[IMarker](../interfaces/IMarker.md).[fire](../interfaces/IMarker.md#fire)

#### Inherited from

LMarker.fire

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

[IMarker](../interfaces/IMarker.md).[fireEvent](../interfaces/IMarker.md#fireevent)

#### Inherited from

LMarker.fireEvent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1148

___

### getAttribution

▸ **getAttribution**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getAttribution](../interfaces/IMarker.md#getattribution)

#### Inherited from

LMarker.getAttribution

#### Defined in

node_modules/@types/leaflet/index.d.ts:1225

___

### getElement

▸ **getElement**(): `undefined` \| `HTMLElement`

#### Returns

`undefined` \| `HTMLElement`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getElement](../interfaces/IMarker.md#getelement)

#### Inherited from

LMarker.getElement

#### Defined in

node_modules/@types/leaflet/index.d.ts:2525

___

### getEvents

▸ **getEvents**(): `Object`

#### Returns

`Object`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getEvents](../interfaces/IMarker.md#getevents)

#### Inherited from

LMarker.getEvents

#### Defined in

node_modules/@types/leaflet/index.d.ts:1224

___

### getIcon

▸ **getIcon**(): `T`

It returns the marker icon.

#### Returns

`T`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getIcon](../interfaces/IMarker.md#geticon)

#### Overrides

LMarker.getIcon

#### Defined in

[src/tools/layers/marker/model/internal/marker/Marker.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/Marker.ts#L42)

___

### getLatLng

▸ **getLatLng**(): `LatLng`

#### Returns

`LatLng`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getLatLng](../interfaces/IMarker.md#getlatlng)

#### Inherited from

LMarker.getLatLng

#### Defined in

node_modules/@types/leaflet/index.d.ts:2519

___

### getOptions

▸ **getOptions**(): [`IMarkerOptions`](../modules.md#imarkeroptions)

It returns the marker options.

#### Returns

[`IMarkerOptions`](../modules.md#imarkeroptions)

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getOptions](../interfaces/IMarker.md#getoptions)

#### Defined in

[src/tools/layers/marker/model/internal/marker/Marker.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/Marker.ts#L26)

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

[IMarker](../interfaces/IMarker.md).[getPane](../interfaces/IMarker.md#getpane)

#### Inherited from

LMarker.getPane

#### Defined in

node_modules/@types/leaflet/index.d.ts:1196

___

### getPopup

▸ **getPopup**(): `undefined` \| `Popup`

#### Returns

`undefined` \| `Popup`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getPopup](../interfaces/IMarker.md#getpopup)

#### Inherited from

LMarker.getPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1209

___

### getTooltip

▸ **getTooltip**(): `undefined` \| `Tooltip`

#### Returns

`undefined` \| `Tooltip`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[getTooltip](../interfaces/IMarker.md#gettooltip)

#### Inherited from

LMarker.getTooltip

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

[IMarker](../interfaces/IMarker.md).[hasEventListeners](../interfaces/IMarker.md#haseventlisteners)

#### Inherited from

LMarker.hasEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1155

___

### isPopupOpen

▸ **isPopupOpen**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[isPopupOpen](../interfaces/IMarker.md#ispopupopen)

#### Inherited from

LMarker.isPopupOpen

#### Defined in

node_modules/@types/leaflet/index.d.ts:1207

___

### isTooltipOpen

▸ **isTooltipOpen**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[isTooltipOpen](../interfaces/IMarker.md#istooltipopen)

#### Inherited from

LMarker.isTooltipOpen

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[listens](../interfaces/IMarker.md#listens)

#### Inherited from

LMarker.listens

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:869

▸ **off**(): `this`

Removes all listeners to all events on the object.

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[off](../interfaces/IMarker.md#off)

#### Inherited from

LMarker.off

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[on](../interfaces/IMarker.md#on)

#### Inherited from

LMarker.on

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

[IMarker](../interfaces/IMarker.md).[onAdd](../interfaces/IMarker.md#onadd)

#### Inherited from

LMarker.onAdd

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

[IMarker](../interfaces/IMarker.md).[onRemove](../interfaces/IMarker.md#onremove)

#### Inherited from

LMarker.onRemove

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[once](../interfaces/IMarker.md#once)

#### Inherited from

LMarker.once

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

[IMarker](../interfaces/IMarker.md).[openPopup](../interfaces/IMarker.md#openpopup)

#### Inherited from

LMarker.openPopup

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

[IMarker](../interfaces/IMarker.md).[openTooltip](../interfaces/IMarker.md#opentooltip)

#### Inherited from

LMarker.openTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1214

___

### remove

▸ **remove**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[remove](../interfaces/IMarker.md#remove)

#### Inherited from

LMarker.remove

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventListener](../interfaces/IMarker.md#removeeventlistener)

#### Inherited from

LMarker.removeEventListener

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

[IMarker](../interfaces/IMarker.md).[removeEventParent](../interfaces/IMarker.md#removeeventparent)

#### Inherited from

LMarker.removeEventParent

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

[IMarker](../interfaces/IMarker.md).[removeFrom](../interfaces/IMarker.md#removefrom)

#### Inherited from

LMarker.removeFrom

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

[IMarker](../interfaces/IMarker.md).[removeInteractiveTarget](../interfaces/IMarker.md#removeinteractivetarget)

#### Inherited from

LMarker.removeInteractiveTarget

#### Defined in

node_modules/@types/leaflet/index.d.ts:1199

___

### setIcon

▸ **setIcon**(`icon`): `this`

It sets the marker icon.

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `T` |

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[setIcon](../interfaces/IMarker.md#seticon)

#### Overrides

LMarker.setIcon

#### Defined in

[src/tools/layers/marker/model/internal/marker/Marker.ts:35](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/internal/marker/Marker.ts#L35)

___

### setLatLng

▸ **setLatLng**(`latlng`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLngExpression` |

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[setLatLng](../interfaces/IMarker.md#setlatlng)

#### Inherited from

LMarker.setLatLng

#### Defined in

node_modules/@types/leaflet/index.d.ts:2520

___

### setOpacity

▸ **setOpacity**(`opacity`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opacity` | `number` |

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[setOpacity](../interfaces/IMarker.md#setopacity)

#### Inherited from

LMarker.setOpacity

#### Defined in

node_modules/@types/leaflet/index.d.ts:2524

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

[IMarker](../interfaces/IMarker.md).[setPopupContent](../interfaces/IMarker.md#setpopupcontent)

#### Inherited from

LMarker.setPopupContent

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

[IMarker](../interfaces/IMarker.md).[setTooltipContent](../interfaces/IMarker.md#settooltipcontent)

#### Inherited from

LMarker.setTooltipContent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1218

___

### setZIndexOffset

▸ **setZIndexOffset**(`offset`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[setZIndexOffset](../interfaces/IMarker.md#setzindexoffset)

#### Inherited from

LMarker.setZIndexOffset

#### Defined in

node_modules/@types/leaflet/index.d.ts:2521

___

### toGeoJSON

▸ **toGeoJSON**(`precision?`): `Feature`\<`Point`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `number` \| ``false`` |

#### Returns

`Feature`\<`Point`, `any`\>

#### Implementation of

[IMarker](../interfaces/IMarker.md).[toGeoJSON](../interfaces/IMarker.md#togeojson)

#### Inherited from

LMarker.toGeoJSON

#### Defined in

node_modules/@types/leaflet/index.d.ts:2518

___

### togglePopup

▸ **togglePopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[togglePopup](../interfaces/IMarker.md#togglepopup)

#### Inherited from

LMarker.togglePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1206

___

### toggleTooltip

▸ **toggleTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[toggleTooltip](../interfaces/IMarker.md#toggletooltip)

#### Inherited from

LMarker.toggleTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1216

___

### unbindPopup

▸ **unbindPopup**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[unbindPopup](../interfaces/IMarker.md#unbindpopup)

#### Inherited from

LMarker.unbindPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1203

___

### unbindTooltip

▸ **unbindTooltip**(): `this`

#### Returns

`this`

#### Implementation of

[IMarker](../interfaces/IMarker.md).[unbindTooltip](../interfaces/IMarker.md#unbindtooltip)

#### Inherited from

LMarker.unbindTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1213

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

LMarker.addInitHook

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

LMarker.addInitHook

#### Defined in

node_modules/@types/leaflet/index.d.ts:27

___

### callInitHooks

▸ **callInitHooks**(): `void`

#### Returns

`void`

#### Inherited from

LMarker.callInitHooks

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

LMarker.extend

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

LMarker.include

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

LMarker.mergeOptions

#### Defined in

node_modules/@types/leaflet/index.d.ts:24
