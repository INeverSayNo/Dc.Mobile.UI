// index.js
import gulp from 'gulp'
import { resolve,dirname } from 'path'
import { fileURLToPath } from 'url'
import autoprefixer from 'gulp-autoprefixer'
import shell from 'shelljs'

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../')

const { src, dest } = gulp

// 删除打包产物
export const removeDist = async () => {
  shell.rm('-rf', `${componentPath}/lib`)
  shell.rm('-rf', `${componentPath}/es`)
  shell.rm('-rf', `${componentPath}/types`)
}

// 构建css
// export const buildRootStyle = () => {
//   return src(`${componentPath}/src/style.less`)
//     .pipe(
//       autoprefixer()
//     )
//     .pipe(dest(`${componentPath}/es`))
//     .pipe(dest(`${componentPath}/lib`))
// }

// 构建每个组件下单独的css
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(
      autoprefixer()
    )
    .pipe(dest(`${componentPath}/es`))
    .pipe(dest(`${componentPath}/lib`))
}

// 打包组件
export const buildComponent = async () => {
  shell.cd(componentPath)
  shell.exec('vite build')
}


import { readFileSync, writeFileSync } from 'fs'

export const buildGlobalDts = async () => {
  const content = readFileSync(`${componentPath}/src/components.ts`, 'utf-8')
  // 匹配所有 export * from "./XXX" 中的目录名
  const dirs = [...content.matchAll(/export\s+\*\s+from\s+["']\.\/(\w+)["']/g)].map(m => m[1])

  // 从每个组件的 index.ts 中提取 export const 的名称
  const components = []
  for (const dir of dirs) {
    const indexContent = readFileSync(`${componentPath}/src/${dir}/index.ts`, 'utf-8')
    const match = indexContent.match(/export\s+const\s+(\w+)/)
    if (match) components.push(match[1])
  }

  const dts = `declare module "vue" {
  export interface GlobalComponents {
${components.map(name => `    ${name}: (typeof import("dc-mobile-ui"))["${name}"];`).join('\n')}
  }

  interface ComponentCustomProperties {}
}

export {};
`
  writeFileSync(`${componentPath}/global.d.ts`, dts)
}