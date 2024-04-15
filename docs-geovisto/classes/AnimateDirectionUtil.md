[geovisto-map](../README.md) / [Exports](../modules.md) / AnimateDirectionUtil

# Class: AnimateDirectionUtil

Help class which provide animating of direction in connections.

**`Author`**

Krystof Rykala

**`Author`**

Jiri Hynek - converted to Typescript and moved to util class

## Table of contents

### Constructors

- [constructor](AnimateDirectionUtil.md#constructor)

### Properties

- [animationInterval](AnimateDirectionUtil.md#animationinterval)
- [tool](AnimateDirectionUtil.md#tool)

### Methods

- [animateDirection](AnimateDirectionUtil.md#animatedirection)

## Constructors

### constructor

• **new AnimateDirectionUtil**(`tool`): [`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\> |

#### Returns

[`AnimateDirectionUtil`](AnimateDirectionUtil.md)

#### Defined in

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:19](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L19)

## Properties

### animationInterval

• `Private` **animationInterval**: ``null`` \| `Timeout`

#### Defined in

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:17](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L17)

___

### tool

• `Private` **tool**: [`IConnectionLayerTool`](../interfaces/IConnectionLayerTool.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolState`](../interfaces/IConnectionLayerToolState.md)\<[`IConnectionLayerToolProps`](../modules.md#iconnectionlayertoolprops), [`IConnectionLayerToolDefaults`](../interfaces/IConnectionLayerToolDefaults.md), [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), \{ `direction?`: `boolean` ; `from?`: `string` ; `geoData?`: `string` ; `to?`: `string`  }, \{ `direction`: [`IMapTypeDimension`](../interfaces/IMapTypeDimension.md)\<`boolean`, [`ITypeManager`](../interfaces/ITypeManager.md)\<`boolean`\>\> ; `from`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\> ; `geoData`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IGeoData`](../interfaces/IGeoData.md)\> ; `to`: [`IMapDomainDimension`](../interfaces/IMapDomainDimension.md)\<[`IMapDataDomain`](../interfaces/IMapDataDomain.md)\>  }\>, [`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig), [`IMapToolInitProps`](../modules.md#imaptoolinitprops)\<[`IConnectionLayerToolConfig`](../modules.md#iconnectionlayertoolconfig)\>\>

#### Defined in

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:16](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L16)

## Methods

### animateDirection

▸ **animateDirection**(`animate`): `void`

It changes the styles of connection (enables/disables animation).

#### Parameters

| Name | Type |
| :------ | :------ |
| `animate` | `boolean` |

#### Returns

`void`

#### Defined in

[src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts:28](https://github.com/geovisto/geovisto-map/blob/e22d774889dbc28cc1ec62933ecf6bab6690f172/src/tools/layers/connection/model/internal/util/AnimateDirectionUtil.ts#L28)
