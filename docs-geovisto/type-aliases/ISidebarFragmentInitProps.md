**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / ISidebarFragmentInitProps

# Type alias: ISidebarFragmentInitProps\<TConfig, TTool\>

> **ISidebarFragmentInitProps**\<`TConfig`, `TTool`\>: [`IMapObjectInitProps`](IMapObjectInitProps.md)\<`TConfig`\> & `object`

This type provides the specification of the sidebar fragment props model used in its initialization.

## Author

Jiri Hynek

## Type declaration

### sidebarTab

> **sidebarTab**: [`ISidebarTab`](../interfaces/ISidebarTab.md)

### tool

> **tool**: `TTool`

## Type parameters

• **TConfig** *extends* [`ISidebarFragmentConfig`](ISidebarFragmentConfig.md) = [`ISidebarFragmentConfig`](ISidebarFragmentConfig.md)

• **TTool** *extends* [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md) = [`IMapTool`](../interfaces/IMapTool.md) & [`IMapFormControl`](../interfaces/IMapFormControl.md)

## Source

[tools/sidebar/model/types/fragment/ISidebarFragmentProps.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/sidebar/model/types/fragment/ISidebarFragmentProps.ts#L26)
