[geovisto-map](../README.md) / [Exports](../modules.md) / IMarkerIcon

# Interface: IMarkerIcon\<T\>

This intreface extends Leaflet Icon in order to work with generic icon type.

**`Author`**

Jiri Hynek

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IMarkerIconOptions`](../modules.md#imarkericonoptions) |

## Hierarchy

- `Icon`\<`T`\>

  ↳ **`IMarkerIcon`**

## Implemented by

- [`MarkerIcon`](../classes/MarkerIcon.md)

## Table of contents

### Properties

- [\_map](IMarkerIcon.md#_map)
- [options](IMarkerIcon.md#options)

### Methods

- [addEventListener](IMarkerIcon.md#addeventlistener)
- [addEventParent](IMarkerIcon.md#addeventparent)
- [addInteractiveTarget](IMarkerIcon.md#addinteractivetarget)
- [addOneTimeEventListener](IMarkerIcon.md#addonetimeeventlistener)
- [addTo](IMarkerIcon.md#addto)
- [beforeAdd](IMarkerIcon.md#beforeadd)
- [bindPopup](IMarkerIcon.md#bindpopup)
- [bindTooltip](IMarkerIcon.md#bindtooltip)
- [clearAllEventListeners](IMarkerIcon.md#clearalleventlisteners)
- [closePopup](IMarkerIcon.md#closepopup)
- [closeTooltip](IMarkerIcon.md#closetooltip)
- [createIcon](IMarkerIcon.md#createicon)
- [createShadow](IMarkerIcon.md#createshadow)
- [fire](IMarkerIcon.md#fire)
- [fireEvent](IMarkerIcon.md#fireevent)
- [getAttribution](IMarkerIcon.md#getattribution)
- [getEvents](IMarkerIcon.md#getevents)
- [getPane](IMarkerIcon.md#getpane)
- [getPopup](IMarkerIcon.md#getpopup)
- [getTooltip](IMarkerIcon.md#gettooltip)
- [hasEventListeners](IMarkerIcon.md#haseventlisteners)
- [isPopupOpen](IMarkerIcon.md#ispopupopen)
- [isTooltipOpen](IMarkerIcon.md#istooltipopen)
- [listens](IMarkerIcon.md#listens)
- [off](IMarkerIcon.md#off)
- [on](IMarkerIcon.md#on)
- [onAdd](IMarkerIcon.md#onadd)
- [onRemove](IMarkerIcon.md#onremove)
- [once](IMarkerIcon.md#once)
- [openPopup](IMarkerIcon.md#openpopup)
- [openTooltip](IMarkerIcon.md#opentooltip)
- [remove](IMarkerIcon.md#remove)
- [removeEventListener](IMarkerIcon.md#removeeventlistener)
- [removeEventParent](IMarkerIcon.md#removeeventparent)
- [removeFrom](IMarkerIcon.md#removefrom)
- [removeInteractiveTarget](IMarkerIcon.md#removeinteractivetarget)
- [setPopupContent](IMarkerIcon.md#setpopupcontent)
- [setTooltipContent](IMarkerIcon.md#settooltipcontent)
- [togglePopup](IMarkerIcon.md#togglepopup)
- [toggleTooltip](IMarkerIcon.md#toggletooltip)
- [unbindPopup](IMarkerIcon.md#unbindpopup)
- [unbindTooltip](IMarkerIcon.md#unbindtooltip)
- [updateData](IMarkerIcon.md#updatedata)

## Properties

### \_map

• `Protected` **\_map**: `Map`

#### Inherited from

Icon.\_map

#### Defined in

node_modules/@types/leaflet/index.d.ts:1228

___

### options

• **options**: `T`

#### Inherited from

Icon.options

#### Defined in

node_modules/@types/leaflet/index.d.ts:2456

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

#### Inherited from

Icon.addTo

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

#### Inherited from

Icon.clearAllEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1091

___

### closePopup

▸ **closePopup**(): `this`

#### Returns

`this`

#### Inherited from

Icon.closePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1205

___

### closeTooltip

▸ **closeTooltip**(): `this`

#### Returns

`this`

#### Inherited from

Icon.closeTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1215

___

### createIcon

▸ **createIcon**(`oldIcon?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldIcon?` | `HTMLElement` |

#### Returns

`HTMLElement`

#### Inherited from

Icon.createIcon

#### Defined in

node_modules/@types/leaflet/index.d.ts:2453

___

### createShadow

▸ **createShadow**(`oldIcon?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldIcon?` | `HTMLElement` |

#### Returns

`HTMLElement`

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

#### Inherited from

Icon.fireEvent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1148

___

### getAttribution

▸ **getAttribution**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

Icon.getAttribution

#### Defined in

node_modules/@types/leaflet/index.d.ts:1225

___

### getEvents

▸ **getEvents**(): `Object`

#### Returns

`Object`

#### Inherited from

Icon.getEvents

#### Defined in

node_modules/@types/leaflet/index.d.ts:1224

___

### getPane

▸ **getPane**(`name?`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`undefined` \| `HTMLElement`

#### Inherited from

Icon.getPane

#### Defined in

node_modules/@types/leaflet/index.d.ts:1196

___

### getPopup

▸ **getPopup**(): `undefined` \| `Popup`

#### Returns

`undefined` \| `Popup`

#### Inherited from

Icon.getPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1209

___

### getTooltip

▸ **getTooltip**(): `undefined` \| `Tooltip`

#### Returns

`undefined` \| `Tooltip`

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

#### Inherited from

Icon.hasEventListeners

#### Defined in

node_modules/@types/leaflet/index.d.ts:1155

___

### isPopupOpen

▸ **isPopupOpen**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Icon.isPopupOpen

#### Defined in

node_modules/@types/leaflet/index.d.ts:1207

___

### isTooltipOpen

▸ **isTooltipOpen**(): `boolean`

#### Returns

`boolean`

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

#### Inherited from

Icon.off

#### Defined in

node_modules/@types/leaflet/index.d.ts:869

▸ **off**(): `this`

Removes all listeners to all events on the object.

#### Returns

`this`

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

#### Inherited from

Icon.openTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1214

___

### remove

▸ **remove**(): `this`

#### Returns

`this`

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

#### Inherited from

Icon.removeInteractiveTarget

#### Defined in

node_modules/@types/leaflet/index.d.ts:1199

___

### setPopupContent

▸ **setPopupContent**(`content`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Popup` \| `Content` |

#### Returns

`this`

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

#### Inherited from

Icon.setTooltipContent

#### Defined in

node_modules/@types/leaflet/index.d.ts:1218

___

### togglePopup

▸ **togglePopup**(): `this`

#### Returns

`this`

#### Inherited from

Icon.togglePopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1206

___

### toggleTooltip

▸ **toggleTooltip**(): `this`

#### Returns

`this`

#### Inherited from

Icon.toggleTooltip

#### Defined in

node_modules/@types/leaflet/index.d.ts:1216

___

### unbindPopup

▸ **unbindPopup**(): `this`

#### Returns

`this`

#### Inherited from

Icon.unbindPopup

#### Defined in

node_modules/@types/leaflet/index.d.ts:1203

___

### unbindTooltip

▸ **unbindTooltip**(): `this`

#### Returns

`this`

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

#### Defined in

[src/tools/layers/marker/model/types/marker/IMarkerIcon.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/marker/model/types/marker/IMarkerIcon.ts#L26)
