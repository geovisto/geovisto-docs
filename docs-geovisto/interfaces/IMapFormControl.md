[geovisto-map](../README.md) / [Exports](../modules.md) / IMapFormControl

# Interface: IMapFormControl

This interface declares functions which needs to be implemented when
a map object (e. g., tool) wants to provide a form control.

**`Author`**

Jiri Hynek

## Implemented by

- [`BubbleLayerTool`](../classes/BubbleLayerTool.md)
- [`ChoroplethLayerTool`](../classes/ChoroplethLayerTool.md)
- [`ConnectionLayerTool`](../classes/ConnectionLayerTool.md)
- [`DotLayerTool`](../classes/DotLayerTool.md)
- [`DrawingLayerTool`](../classes/DrawingLayerTool.md)
- [`DummyTabTool`](../classes/DummyTabTool.md)
- [`FiltersTool`](../classes/FiltersTool.md)
- [`GeoDownloaderTool`](../classes/GeoDownloaderTool.md)
- [`HeatLayerTool`](../classes/HeatLayerTool.md)
- [`HierarchyTool`](../classes/HierarchyTool.md)
- [`InfoTool`](../classes/InfoTool.md)
- [`MarkerLayerTool`](../classes/MarkerLayerTool.md)
- [`SelectionTool`](../classes/SelectionTool.md)
- [`SpikeLayerTool`](../classes/SpikeLayerTool.md)
- [`ThemesTool`](../classes/ThemesTool.md)
- [`TilesLayerTool`](../classes/TilesLayerTool.md)
- [`TimelineTool`](../classes/TimelineTool.md)

## Table of contents

### Methods

- [getMapForm](IMapFormControl.md#getmapform)

## Methods

### getMapForm

▸ **getMapForm**(): [`IMapForm`](IMapForm.md)

It returns a map control.

#### Returns

[`IMapForm`](IMapForm.md)

#### Defined in

[src/model/types/form/IMapFormControl.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/model/types/form/IMapFormControl.ts#L16)
