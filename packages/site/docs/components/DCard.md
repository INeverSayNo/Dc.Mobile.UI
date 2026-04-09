# 卡片

### 使用说明

一个简单的Card组件，包含基础容器使用

### 基本使用

<demo src="../demo/DCard/index.vue" title="" desc=""></demo>

### Props

|      参数      |       类型        |    默认值    | isRequired |                                                   说明                                                   |
| :------------: | :---------------: | :----------: | :--------: | :------------------------------------------------------------------------------------------------------: |
|  footerLayout  |      string       |   between    |   false    |            卡片底部布局，可选值<code>between</code>、<code>center</code>、<code>right</code>             |
|  footerTitle   |      string       | 查看更多信息 |   false    |                                               卡片底部文本                                               |
| dividerDashed  |      boolean      |    false     |   false    |                                            是否使用虚线分割线                                            |
| isShowCollapse |      boolean      |    false     |   false    | 是否在卡片内展开更多内容，如果为<code>true</code>,会在点击<b>footer</b>同时触发展开<code>more</code>插槽 |
|     shadow     |      boolean      |    false     |   false    |                                          是否为卡片添加阴影效果                                          |
|  customClass   | string\| string[] |      ""      |   false    |                                              自定义样式类名                                              |

### Events

|   事件名    |                                               说明                                               | 回调参数 |
| :---------: | :----------------------------------------------------------------------------------------------: | :------: |
| clickHeader |                                       点击顶部内容区域触发                                       |    无    |
| clickFooter | 点击底部内容区域触发，如果<code>isShowCollapse</code>为<b>true</b>,还将展开<code>more</code>插槽 |    无    |

### Slots

|  名称   |                       说明                       |
| :-----: | :----------------------------------------------: |
| header  |                   卡片顶部插槽                   |
| footer  |                   卡片底部插槽                   |
|  more   | 更多内容插槽， 与<code>isShowCollapse</code>联动 |
| default |                 卡片中间默认插槽                 |
