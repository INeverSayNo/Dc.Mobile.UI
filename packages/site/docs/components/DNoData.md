# 单元格

### 使用说明

一个简单的<b>NoData</b>

### 基本使用

<demo src="../demo/DNoData/index.vue" title="" desc=""></demo>

### Props

|   参数    |  类型  |  默认值  | isRequired |                              说明                               |
| :-------: | :----: | :------: | :--------: | :-------------------------------------------------------------: |
|  layout   | string | vertical |   false    | 整体布局方式, 支持<code>vertical</code> <code>horizontal</code> |
|   type    | string | noSearch |   false    |     默认图片, 支持<code>noSearch</code> <code>noData</code>     |
|  errImg   | string |          |   false    |                   你可以传入自定义的Error图片                   |
|   tips    | string | '暂无数据' |   false    |                           下方提示语                            |
| className | string |          |   false    |                           自定义样式                            |

### Emits

| 事件名 |     说明     | 回调参数 |
| :----: | :----------: | :------: |
| click  | 组件点击事件 |    无    |

### Slots

|  名称   |            说明             |
| :-----: | :-------------------------: |
| default | 自定义内部 error 图片与文本 |
