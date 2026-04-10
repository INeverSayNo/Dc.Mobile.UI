import { ShallowRef } from "vue"

const calcDpi = (realZoom: number): number => {
  const fraction = realZoom - Math.floor(realZoom)
  return fraction> 0.5?120:180
}

const baseUrl = `https://gateway.dczhiyun.com/geo/geoserver/osm/wms`


/**
 * 创建响应式 DPI 补偿图层
 * 监听缩放变化，自动重建图层以匹配当前 DPI
 */
export const createReactiveDpiLayer = (
  baseOptions: {
    layerName: string
    paneName: string
    maxZoom: number
    minZoom: number
  },
  mapInstance: ShallowRef<BMapGL.Map | null>,
  otherOptions?: Record<string, any>,
) => {
  const { layerName, maxZoom, minZoom } = baseOptions
  let currentLayer: BMapGL.XYZLayer | null = null
  let lastDpi = 180

  const buildUrl = (dpi: number) => {
    const params: Record<string, any> = {
      layers: `osm:${layerName}`,
      service: "WMS",
      request: "GetMap",
      format: "image/png8",
      transparent: true,
      version: "1.1.0",
      srs: "EPSG:3857",
      width: 512,
      height: 512,
      tiled: true,
      FORMAT_OPTIONS: `dpi:${dpi}`,
    }
    if (otherOptions) {
      for (const key in otherOptions) {
        params[key] = otherOptions[key]
      }
    }
    const qs = new URLSearchParams()
    for (const key in params) qs.append(key, params[key])
    return `${baseUrl}?${qs.toString()}&BBOX=[b]`
  }

  const rebuild = () => {
    const map = mapInstance.value
    if (!map) return

    const realZoom = map.getZoom()
    const dpi = calcDpi(realZoom)

    const newLayer = new BMapGL.XYZLayer({
      tileUrlTemplate: buildUrl(dpi),
      minZoom,
      maxZoom,
    })

    // 先加新图层
    map.addTileLayer(newLayer)
    newLayer.setTop(9999)

    // 延迟移除旧图层减少闪烁
    const oldLayer = currentLayer
    if (oldLayer) {
      setTimeout(() => map.removeTileLayer(oldLayer), 300)
    }

    currentLayer = newLayer
    lastDpi = dpi
  }

  const getLayer = () => currentLayer

  const remove = () => {
    if (currentLayer) {
      mapInstance.value?.removeTileLayer(currentLayer)
      currentLayer = null
      lastDpi = 0
    }
  }

  // 初始创建
  rebuild()

  return { rebuild, getLayer, remove }
}