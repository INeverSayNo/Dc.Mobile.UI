import { watch, type ShallowRef } from "vue"
import { DMapIProps, DMapEmits } from "../type"

export default function useSatelliteMap(
  props: DMapIProps,
  emits: DMapEmits,
  mapInstance: ShallowRef<BMapGL.Map | null>,
) {
  const setSatelliteLayer = ([showTerrain, mapInstance]: [
    boolean,
    BMapGL.Map | null,
  ]) => {
    if (!mapInstance) return
    if (showTerrain) {
      mapInstance.setMapType(BMAP_SATELLITE_MAP)
    } else {
      mapInstance.setMapType(BMAP_NORMAL_MAP)
    }
  }
  watch([() => props.showTerrain, () => mapInstance.value], setSatelliteLayer, {
    immediate: true,
  })
}
