# 搜索框

基于vant 的<code>Search</code>

### 使用说明
与vant中<a href="https://vant-ui.github.io/vant/#/zh-CN/search" target="_blank">Search</a>使用一致，仅针对样式做了通用处理。内部色调依赖传入的 <code>theme</code> 中的<code>primary</code>


### 基本使用

<demo src="../demo/DSearch/index.vue" title="" desc=""></demo>

### 注意
你可以使用如下方法来获取<code>Search</code>实例，内部的透明代理机制会将你消费的 <code>Instance</code> 链接到真实的<code>vant</code>组件

``` typescript
import {DSearch} from "dc-mobile-ui"

// vue3.5+
const DSearchInstance = useTemplateRef("DSearchRef") 

// vue3.x
const DSearchInstance = shallowRef<InstanceType<typeof DSearch>()

// it's working
DSearchInstance.value.focus() 

```