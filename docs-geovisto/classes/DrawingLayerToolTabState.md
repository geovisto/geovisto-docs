[geovisto-map](../README.md) / [Exports](../modules.md) / DrawingLayerToolTabState

# Class: DrawingLayerToolTabState

This class manages the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

**`Author`**

Andrej Tlcina

## Implements

- `TabState`

## Table of contents

### Constructors

- [constructor](DrawingLayerToolTabState.md#constructor)

### Properties

- [controls](DrawingLayerToolTabState.md#controls)
- [enabledTool](DrawingLayerToolTabState.md#enabledtool)
- [guideLayers](DrawingLayerToolTabState.md#guidelayers)
- [tabControl](DrawingLayerToolTabState.md#tabcontrol)

### Methods

- [appendToIconSrcs](DrawingLayerToolTabState.md#appendtoiconsrcs)
- [callIdentifierChange](DrawingLayerToolTabState.md#callidentifierchange)
- [getEnabledTool](DrawingLayerToolTabState.md#getenabledtool)
- [getIntersectActivated](DrawingLayerToolTabState.md#getintersectactivated)
- [getSelectedColor](DrawingLayerToolTabState.md#getselectedcolor)
- [getSelectedIcon](DrawingLayerToolTabState.md#getselectedicon)
- [getSelectedStroke](DrawingLayerToolTabState.md#getselectedstroke)
- [initializeControls](DrawingLayerToolTabState.md#initializecontrols)
- [pushGuideLayer](DrawingLayerToolTabState.md#pushguidelayer)
- [setEnabledTool](DrawingLayerToolTabState.md#setenabledtool)
- [setSelectedIcon](DrawingLayerToolTabState.md#setselectedicon)

## Constructors

### constructor

• **new DrawingLayerToolTabState**(`tabControl`): [`DrawingLayerToolTabState`](DrawingLayerToolTabState.md)

It creates a tab control state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tabControl` | `DrawingForm` |

#### Returns

[`DrawingLayerToolTabState`](DrawingLayerToolTabState.md)

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:30](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L30)

## Properties

### controls

• **controls**: `Controls`

#### Implementation of

TabState.controls

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:26](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L26)

___

### enabledTool

• **enabledTool**: ``null`` \| `TAbstractTool`

#### Implementation of

TabState.enabledTool

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:24](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L24)

___

### guideLayers

• **guideLayers**: `DrawnObject`[]

#### Implementation of

TabState.guideLayers

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:25](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L25)

___

### tabControl

• **tabControl**: `DrawingForm`

#### Implementation of

TabState.tabControl

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:23](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L23)

## Methods

### appendToIconSrcs

▸ **appendToIconSrcs**(`iconUrl`): `void`

method if defined for easier access through tabControlState class/object

#### Parameters

| Name | Type |
| :------ | :------ |
| `iconUrl` | `string` |

#### Returns

`void`

#### Implementation of

TabState.appendToIconSrcs

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:96](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L96)

___

### callIdentifierChange

▸ **callIdentifierChange**(`haveToCheckFilters?`): `void`

method if defined for easier access through tabControlState class/object

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `haveToCheckFilters` | `boolean` | `false` |

#### Returns

`void`

#### Implementation of

TabState.callIdentifierChange

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:88](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L88)

___

### getEnabledTool

▸ **getEnabledTool**(): ``null`` \| `TAbstractTool`

getter

#### Returns

``null`` \| `TAbstractTool`

#### Implementation of

TabState.getEnabledTool

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:126](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L126)

___

### getIntersectActivated

▸ **getIntersectActivated**(): `boolean`

method for easier access through tabControlState class/object

#### Returns

`boolean`

#### Implementation of

TabState.getIntersectActivated

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:104](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L104)

___

### getSelectedColor

▸ **getSelectedColor**(): `string`

method if defined for easier access through tabControlState class/object

#### Returns

`string`

#### Implementation of

TabState.getSelectedColor

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:60](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L60)

___

### getSelectedIcon

▸ **getSelectedIcon**(): `string`

method if defined for easier access through tabControlState class/object

#### Returns

`string`

#### Implementation of

TabState.getSelectedIcon

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:76](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L76)

___

### getSelectedStroke

▸ **getSelectedStroke**(): `number`

method if defined for easier access through tabControlState class/object

#### Returns

`number`

#### Implementation of

TabState.getSelectedStroke

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:68](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L68)

___

### initializeControls

▸ **initializeControls**(): `void`

method initializes controls for objects manipulation

#### Returns

`void`

#### Implementation of

TabState.initializeControls

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:42](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L42)

___

### pushGuideLayer

▸ **pushGuideLayer**(`layer`): `void`

adds guide layer for snapping

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `DrawnObject` |

#### Returns

`void`

#### Implementation of

TabState.pushGuideLayer

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:111](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L111)

___

### setEnabledTool

▸ **setEnabledTool**(`val`): `void`

setter for enabledTool variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | ``null`` \| `TAbstractTool` |

#### Returns

`void`

#### Implementation of

TabState.setEnabledTool

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:118](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L118)

___

### setSelectedIcon

▸ **setSelectedIcon**(`icon`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |

#### Returns

`void`

#### Implementation of

TabState.setSelectedIcon

#### Defined in

[src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:81](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L81)
