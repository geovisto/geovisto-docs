**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / DrawingLayerToolTabState

# Class: DrawingLayerToolTabState

This class manages the state of the sidebar tab.
It wraps the state since the sidebar tab can work with state objects which needs to be explicitly serialized.

## Author

Andrej Tlcina

## Implements

- `TabState`

## Constructors

### new DrawingLayerToolTabState()

> **new DrawingLayerToolTabState**(`tabControl`): [`DrawingLayerToolTabState`](DrawingLayerToolTabState.md)

It creates a tab control state.

#### Parameters

• **tabControl**: `DrawingForm`

#### Returns

[`DrawingLayerToolTabState`](DrawingLayerToolTabState.md)

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L30)

## Properties

### controls

> **controls**: `Controls`

#### Implementation of

`TabState.controls`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L26)

***

### enabledTool

> **enabledTool**: `null` \| `TAbstractTool`

#### Implementation of

`TabState.enabledTool`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:24](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L24)

***

### guideLayers

> **guideLayers**: `any`[]

#### Implementation of

`TabState.guideLayers`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:25](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L25)

***

### tabControl

> **tabControl**: `DrawingForm`

#### Implementation of

`TabState.tabControl`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:23](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L23)

## Methods

### appendToIconSrcs()

> **appendToIconSrcs**(`iconUrl`): `void`

method if defined for easier access through tabControlState class/object

#### Parameters

• **iconUrl**: `string`

#### Returns

`void`

#### Implementation of

`TabState.appendToIconSrcs`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:96](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L96)

***

### callIdentifierChange()

> **callIdentifierChange**(`haveToCheckFilters`): `void`

method if defined for easier access through tabControlState class/object

#### Parameters

• **haveToCheckFilters**: `boolean`= `false`

#### Returns

`void`

#### Implementation of

`TabState.callIdentifierChange`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:88](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L88)

***

### getEnabledTool()

> **getEnabledTool**(): `null` \| `TAbstractTool`

getter

#### Returns

`null` \| `TAbstractTool`

#### Implementation of

`TabState.getEnabledTool`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:126](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L126)

***

### getIntersectActivated()

> **getIntersectActivated**(): `boolean`

method for easier access through tabControlState class/object

#### Returns

`boolean`

#### Implementation of

`TabState.getIntersectActivated`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:104](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L104)

***

### getSelectedColor()

> **getSelectedColor**(): `string`

method if defined for easier access through tabControlState class/object

#### Returns

`string`

#### Implementation of

`TabState.getSelectedColor`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:60](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L60)

***

### getSelectedIcon()

> **getSelectedIcon**(): `string`

method if defined for easier access through tabControlState class/object

#### Returns

`string`

#### Implementation of

`TabState.getSelectedIcon`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:76](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L76)

***

### getSelectedStroke()

> **getSelectedStroke**(): `number`

method if defined for easier access through tabControlState class/object

#### Returns

`number`

#### Implementation of

`TabState.getSelectedStroke`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:68](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L68)

***

### initializeControls()

> **initializeControls**(): `void`

method initializes controls for objects manipulation

#### Returns

`void`

#### Implementation of

`TabState.initializeControls`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:42](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L42)

***

### pushGuideLayer()

> **pushGuideLayer**(`layer`): `void`

adds guide layer for snapping

#### Parameters

• **layer**: `any`

#### Returns

`void`

#### Implementation of

`TabState.pushGuideLayer`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:111](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L111)

***

### setEnabledTool()

> **setEnabledTool**(`val`): `void`

setter for enabledTool variable

#### Parameters

• **val**: `null` \| `TAbstractTool`

#### Returns

`void`

#### Implementation of

`TabState.setEnabledTool`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:118](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L118)

***

### setSelectedIcon()

> **setSelectedIcon**(`icon`): `void`

#### Parameters

• **icon**: `string`

#### Returns

`void`

#### Implementation of

`TabState.setSelectedIcon`

#### Source

[tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts:81](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/layers/drawing/sidebar/DrawingLayerToolMapFormState.ts#L81)
