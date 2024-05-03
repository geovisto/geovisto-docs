**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / instanceOfMapForm

# Function: instanceOfMapForm()

> **instanceOfMapForm**\<`T`\>(`tool`): `tool is IMapFormControl`

Help function which tests whether the tool implements
getMapForm function of the IMapFormControl interface.

## Type parameters

• **T** *extends* [`IMapObject`](../interfaces/IMapObject.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectState`](../interfaces/IMapObjectState.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectDefaults`](../interfaces/IMapObjectDefaults.md)\<[`IMapObjectProps`](../type-aliases/IMapObjectProps.md), [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>, [`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md), [`IMapObjectInitProps`](../type-aliases/IMapObjectInitProps.md)\<[`IMapObjectConfig`](../type-aliases/IMapObjectConfig.md)\>\>

## Parameters

• **tool**: [`IMapFormControl`](../interfaces/IMapFormControl.md) \| `T`

## Returns

`tool is IMapFormControl`

## Source

[model/types/form/IMapFormControl.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/types/form/IMapFormControl.ts#L26)
