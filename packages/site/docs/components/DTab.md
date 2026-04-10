# 单元格

### 使用说明

基于 <code>Vant</code> 的 <code>Tabs</code> 与 <code>Tab</code>, 用法基本一致, 仅针对指示器的色调与位置进行微调, 满足UI设计稿需要

### 基本使用

<demo src="../demo/DTab/index.vue" title="" desc=""></demo>

### Tabs

#### Props

在 <code>Vant</code> 的 <a href="https://vant-ui.github.io/vant/#/zh-CN/tab#api">Props</a> 上新增两个参数

|    参数     |       类型       | 默认值 | isRequired |        说明        |
| :---------: | :--------------: | :----: | :--------: | :----------------: |
| transparent |     boolean      |  true  |   false    |    是否透明背景    |
| customClass | string\|string[] |        |   false    | 支持传入自定义类名 |

#### Emits

参照 <code>Vant</code> 的 <a href="https://vant-ui.github.io/vant/#/zh-CN/tab#tabs-events">Tabs Event</a>

#### Slots

参照 <code>Vant</code> 的 <a href="https://vant-ui.github.io/vant/#/zh-CN/tab#tabs-slots">Tabs Event</a>

### Tab

未进行任何修改, 请参考 <code>Vant</code> 中的 <code>Tab</code> 使用说明