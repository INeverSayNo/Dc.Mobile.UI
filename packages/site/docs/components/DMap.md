# 地图

### 使用说明

基于百度地图与自建<code>Geoserver</code>, 主要加入铁路元素

### 基本使用

<demo src="../demo/DMap/index.vue" title="" desc=""></demo>

### Props

|        参数        |  类型   |   默认值    | isRequired |            说明             |
| :----------------: | :-----: | :---------: | :--------: | :-------------------------: |
|       height       | string  |    100vh    |   false    | 地图高度, 请传入合法的css值 |
|       width        | string  |    100vw    |   false    | 地图高度, 请传入合法的css值 |
|     className      | string  |             |   false    |       自定义地图类名        |
|       mapId        | string  | 'dcPureMap' |   false    |         地图元素ID          |
|      minZoom       | number  |      4      |   false    |      地图缩放最小级别       |
|      maxZoom       | number  |     18      |   false    |      地图缩放最大级别       |
|     copyright      | string  |  ©道臣智运  |   false    |       地图右下角版权        |
|   showCopyRight    | boolean |    false    |   false    |     是否显示右下角版权      |
| useLargeCopyright  | boolean |    false    |   false    |  右下角角标是否超大杯展示   |
|  scrollWheelZoom   | boolean |    true     |   false    |      是否禁用滚动缩放       |
|  showRailwayLine   | boolean |    true     |   false    |      是否显示铁路路线       |
| showRailwayStation | boolean |    true     |   false    |      是否显示铁路站点       |
| showRailwayBureau  | boolean |    true     |   false    |      是否显示铁路路局       |
|    showTerrain     | boolean |    false    |   false    |      是否显示卫星图层       |

### Events

|       事件名       |          说明          |           回调参数           |
| :----------------: | :--------------------: | :--------------------------: |
|        init        |   地图初始化完成事件   |              无              |
|      zoomEnd       | 地图缩放完成后回调事件 |              无              |
|      moveEnd       | 地图移动完成后回调事件 |              无              |
|       click        |      地图点击事件      |   (payload: BMapGL.Point)    |
|  railwayLineClick  |      路线点击事件      |  (payload: RailwayLineItem)  |
| railwayBureauClick |      路局点击事件      | (payload: RailwayBureauItem) |
| railwayPointClick  |      站点点击事件      | (payload: RailwayPointItem)  |

### 方法

通过 ref 可以获取到 <code>DMap</code> 实例并调用实例方法, 详见⬇️组件实例方法

|          事件名          |        说明        | 回调参数 |
| :----------------------: | :----------------: | :------: |
|         initMap          |   重新初始化地图   |    无    |
|  addRailwayBureauLayer   |  手动添加路局图层  |    无    |
| removeRailwayBureauLayer |  手动删除路局图层  |    无    |
|   addRailwayLineLayer    |  手动添加路线图层  |    无    |
|  removeRailwayLineLayer  |  手动删除路线图层  |    无    |
|       setMapCenter       |   重设地图中心点   |    无    |
|          reload          | 销毁并重新创建地图 |    无    |
|        destoryMap        |      销毁地图      |    无    |

你也可以使用ref来获取真实百度地图实例

```Typescript

const MapInstance = computed(()=>DMapRef.value.MapInstance)

```

### ts 类型一览 <TypesDialog url="DMap"/>
