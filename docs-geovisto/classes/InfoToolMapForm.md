**geovisto-map** • [Readme](../README.md) \| [API](../globals.md)

***

[geovisto-map](../README.md) / InfoToolMapForm

# Class: InfoToolMapForm

This class provides controls for management of info map form inputs.

## Author

Jiri Hynek

## Author

Tomas Koscielniak

## Extends

- [`MapObjectForm`](MapObjectForm.md)\<[`IInfoTool`](../interfaces/IInfoTool.md)\>

## Implements

- [`IMapForm`](../interfaces/IMapForm.md)

## Constructors

### new InfoToolMapForm()

> **new InfoToolMapForm**(`tool`): [`InfoToolMapForm`](InfoToolMapForm.md)

It creates new map form with respect to the given props.

#### Parameters

• **tool**: [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

#### Returns

[`InfoToolMapForm`](InfoToolMapForm.md)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`constructor`](MapObjectForm.md#constructors)

#### Source

[tools/info/model/internal/form/InfoToolMapForm.ts:33](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/form/InfoToolMapForm.ts#L33)

## Properties

### htmlContent

> `private` **htmlContent**: `HTMLDivElement`

TODO: exclude class variables to the defaults and state.

#### Source

[tools/info/model/internal/form/InfoToolMapForm.ts:26](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/form/InfoToolMapForm.ts#L26)

## Methods

### getContent()

> **getContent**(): `HTMLDivElement`

It returns a HTML div element containing the form.

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMapForm`](../interfaces/IMapForm.md).[`getContent`](../interfaces/IMapForm.md#getcontent)

#### Overrides

[`MapObjectForm`](MapObjectForm.md).[`getContent`](MapObjectForm.md#getcontent)

#### Source

[tools/info/model/internal/form/InfoToolMapForm.ts:47](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/form/InfoToolMapForm.ts#L47)

***

### getDataManager()

> `protected` **getDataManager**(): `undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

A help function which returns data manager

#### Returns

`undefined` \| [`IMapDataManager`](../interfaces/IMapDataManager.md)

#### Source

[tools/info/model/internal/form/InfoToolMapForm.ts:40](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/tools/info/model/internal/form/InfoToolMapForm.ts#L40)

***

### getMapObject()

> `protected` **getMapObject**(): [`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

#### Returns

[`IInfoTool`](../interfaces/IInfoTool.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolState`](../interfaces/IInfoToolState.md)\<[`IInfoToolProps`](../type-aliases/IInfoToolProps.md), [`IInfoToolDefaults`](../interfaces/IInfoToolDefaults.md), [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>, [`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md), [`IMapToolInitProps`](../type-aliases/IMapToolInitProps.md)\<[`IInfoToolConfig`](../type-aliases/IInfoToolConfig.md)\>\>

#### Inherited from

[`MapObjectForm`](MapObjectForm.md).[`getMapObject`](MapObjectForm.md#getmapobject)

#### Source

[model/internal/form/MapObjectForm.ts:16](https://github.com/geovisto/geovisto-map/blob/5ee2cb5d45c19062fc8fc6beefa2848c076518b6/src/model/internal/form/MapObjectForm.ts#L16)
