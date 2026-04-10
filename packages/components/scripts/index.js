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