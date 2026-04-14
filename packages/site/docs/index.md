---
layout: home

title: DC.Mobile.UI
titleTemplate: PC端业务组件库

hero:
  name: DC.Mobile.UI
  actions:
    - theme: alt
      text: 组件库列表
      link: /components/DSearch
features:
  
---

## 快速上手

本节将介绍如何在项目中使用 Dc.Mobile.UI. 


### 安装

推荐使用全局安装, 因为新版组件库依旧依赖初始化传入的配置项. 以下是一个简单的示例, 该配置将注入至全局的<code>Pinia</code>, 并将初始化<code>Id</code>为<code>hostStore</code>的状态库. 所以请勿在项目内配置相同名称的<code>Pinia</code>状态库

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import DcMobileUI from 'dc-mobile-ui';
import 'dc-mobile-ui/lib/style.css';
import App from './App.vue';

const app = craeteApp();
app.use(DcUI, {
  theme: {
    primary:"#145ca8",
    success:"#07c160",
    danger:"#ed6a0c",
    error:"#ee0a24"
  },
  request: {
    base_url: GETWAY_URL,
    login_url: LOGIN_URL,
    file_url: `${GETWAY_URL}/api/files/static/resource/p`,
    getfile_url: `${GETWAY_URL}/api/abp/minio`,
    tokenName: 'JsToken',
  },
});
```

### config解读

  <code>theme</code>默认使用vant原始字段, 你可以手动传入, 这将覆盖原始配置. 

### postToRem

  本组件库默认使用375设计稿作为基准值, 在项目中, 如使用其他基准值, 请配置排除列表. 以下为<code>vite.config.ts</code>配置示例

```Typescript
import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

function postcssRemToPx(options: { include: RegExp; rootValue?: number }) {
  const rootValue = options.rootValue ?? 16
  return {
    postcssPlugin: "postcss-rem-to-px",
    Once(css: any) {
      const filePath = css.source?.input?.file || ""
      if (!options.include.test(filePath)) return  // 不匹配直接返回, 无共享状态
      css.walkDecls((decl: any) => {
        if (!decl.value.includes("rem")) return
        decl.value = decl.value.replace(
          /(\d*\.?\d+)rem/g,
          (_: string, val: string) => `${parseFloat(val) * rootValue}px`
        )
      })
    },
  }
}

function postcssPxToRemSafe(options: {
  rootValue: number | ((input: any) => number)
  unitPrecision?: number
  minPixelValue?: number
  exclude?: RegExp | string | ((file: string) => boolean)
}) {
  const unitPrecision = options.unitPrecision ?? 5
  const minPixelValue = options.minPixelValue ?? 0

  function toFixed(number: number, precision: number) {
    const multiplier = Math.pow(10, precision + 1)
    const wholeNumber = Math.floor(number * multiplier)
    return (Math.round(wholeNumber / 10) * 10) / multiplier
  }

  function isExcluded(filePath: string) {
    const exclude = options.exclude
    if (!exclude) return false
    if (typeof exclude === "function") return exclude(filePath)
    if (typeof exclude === "string") return filePath.includes(exclude)
    if (exclude instanceof RegExp) return exclude.test(filePath)
    return false
  }

  const pxRegex =
    /"[^"]+"|'[^']+'|url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g

  return {
    postcssPlugin: "postcss-pxtorem-safe",
    Once(css: any) {
      const filePath = css.source?.input?.file || ""
      if (isExcluded(filePath)) return
      const rootValue =
        typeof options.rootValue === "function"
          ? options.rootValue(css.source?.input)
          : options.rootValue

      css.walkDecls((decl: any) => {
        if (!decl.value.includes("px")) return
        decl.value = decl.value.replace(
          pxRegex,
          (match: string, px: string) => {
            if (!px) return match
            const pixels = parseFloat(px)
            if (pixels < minPixelValue) return match
            const fixedVal = toFixed(pixels / rootValue, unitPrecision)
            return fixedVal === 0 ? "0" : `${fixedVal}rem`
          }
        )
      })
    },
  }
}

export default defineConfig(async ({ mode }) => {
  return {
    // other config
    css: {
      postcss: {
        plugins: [
           postcssRemToPx({ include: /dc-mobile-ui/, rootValue: 16 }),
           postcssPxToRemSafe({
            rootValue({ file }) {
              // Vant 文件用 37.5, 业务代码用 75
              return file?.includes("node_modules/vant") ? 37.5 : 75
            },
            propList: ["*"],
            minPixelValue: 2,
            exclude: /dc-mobile-ui/
          }),
        ],
      },
    },
  }
})
```

### 注意⚠️

 基于<code>Vant</code>的组件均采用透明代理机制, 你可以使用 <code>Ref</code> 直接获取底层 <code>Vant</code> 组件的 <code>Instance</code> 来消费

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>