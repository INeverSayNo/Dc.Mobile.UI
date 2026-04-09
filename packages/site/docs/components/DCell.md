# 单元格

### 使用说明

类似于 <code>vant</code> 的 <code>cell</code> 组件, 仅针对样式做了微调

### 基本使用

<demo src="../demo/DCell/index.vue" title="" desc=""></demo>

### Props

你可以传入<code>Vant</code>中 <a href="https://vant-ui.github.io/vant/#/zh-CN/cell">Cell</a> 所有Props，以下是新增的属性

|    参数     |  类型  | 默认值 | isRequired |                                      说明                                       |
| :---------: | :----: | :----: | :--------: | :-----------------------------------------------------------------------------: |
| valueLayout | string | right  |   false    | value的布局方式, 可选值<code>left</code>.<code>center</code>.<code>right</code> |

### Emits

| 事件名 |      说明      | 回调参数 |
| :----: | :------------: | :------: |
| click  | 单元格点击事件 |    无    |
