import { watch, type ShallowRef } from "vue"
import { IProps, IEmits } from "../type"

export default function useSatelliteMap(
  props: IProps,
  emits: IEmits,
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
