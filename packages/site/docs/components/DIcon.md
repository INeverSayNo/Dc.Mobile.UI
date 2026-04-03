# 机构选择

用于快速选择机构

## 使用说明

请务必绑定<code>v-model</code>，否则组件将无法使用，该值也将用作回显

### 基本使用

<demo src="../demo/DcCompanySelect/index.vue" title="" desc=""></demo>

### API 说明

|       参数        |         类型          |                                                                             默认值                                                                             | isRequired |         说明         |
| :---------------: | :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :------------------: |
|      v-model      | string\|number\|Array |                                                                               ''                                                                               |    true    |    绑定的机构 Id     |
|      filter       |        boolean        |                                                                               --                                                                               |   false    |    组件是否可筛选    |
| is-access-control |        boolean        |                                                                               --                                                                               |   false    | 是否开启接口权限验证 |
|     def-props     |        object         | <el-tooltip effect="light" content="{label:'name', value:'organizationId'}" placement="top-start"><el-icon size="18"><Warning /></el-icon></el-tooltip> |   false    |  绑定至 el-options   |

🚩 由于组件基于<code>element-plus</code>的<code>Select</code>组件，所以可以绑定其他<code>Select</code>的属性，可以点击[这里](https://element-plus.org/zh-CN/component/select.html)查阅更多文档

### Event 说明

| 事件名 |                                                                                                                     参数                                                                                                                      |       说明       |
| :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------: |
| change | <el-tooltip effect="dark" content="(value: string\|string[],payload:APIDcCompanySelect.CompanyItem \| APIDcCompanySelect.CompanyItem[] \| null)" placement="top-start"><span>Function<ElIcon size="18"><Warning /></ElIcon></span></el-tooltip> | 切换机构选择回调 |

### ts 类型一览 <TypesDialog url="DcCompanySelect"/>
