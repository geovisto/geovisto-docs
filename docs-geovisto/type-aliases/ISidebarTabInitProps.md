**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarTabInitProps

# Type alias: ISidebarTabInitProps\<TConfig, TTool\>

> **ISidebarTabInitProps**\<`TConfig`, `TTool`\>: [`IMapObjectInitProps`](IMapObjectInitProps.md)\<`TConfig`\> & `object`

This type provides the specification of sidebar tab tool props model used in its initialization.

## Author

Jiri Hynek

## Type declaration

### sidebarTool

> **sidebarTool**: [`ISidebarTool`](../interfaces/ISidebarTool.md)

### tool

> **tool**: `TTool`

## Type parameters

• **TConfig** *extends* [`ISidebarTabConfig`](ISidebarTabConfig.md) = [`ISidebarTabConfig`](ISidebarTabConfig.md)

• **TTool** *extends* [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md) = [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Source

[tools/sidebar/model/types/tab/ISidebarTabProps.ts:30](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/tab/ISidebarTabProps.ts#L30)
