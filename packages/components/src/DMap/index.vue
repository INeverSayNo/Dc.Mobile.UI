<script lang="ts" setup>
import type {
  DMapIProps,
  DMapEmits
} from "./type"
import usePureBmapLogic from "./hooks/usePureBmapLogic"


defineOptions({
  name: "DMap",
})

const props = withDefaults(defineProps<DMapIProps>(), {
  width: "100vw",
  height: "100vh",
  className: "",
  mapId: "dcPureMap",
  center: [39.91210293174053, 116.40334681632915],
  zoomLevel: 13,
  minZoom: 4,
  maxZoom: 18,
  showRailwayStation: true,
  showRailwayLine: true,
  showRailwayBureau: true,
  copyright: "©道臣智运",
  showAttribution: true,
  stationLevel: 6,
  showCopyRight: false
})
const emits = defineEmits<DMapEmits>()

const {
  MapId,
  MapInstance,
  initMap,
  setMapCenter,
  addRailwayBureauLayer,
  addRailwayLineLayer,
  removeRailwayLineLayer,
  removeRailwayBureauLayer,
  reload,
  destoryMap,
  setLocationIcon,
} = usePureBmapLogic(props, emits)
defineExpose({
  MapInstance,
  initMap,
  addRailwayBureauLayer,
  removeRailwayBureauLayer,
  removeRailwayLineLayer,
  addRailwayLineLayer,
  setMapCenter,
  reload,
  destoryMap,
  setLocationIcon,
})
</script>
<template>
  <div
    :id="MapId"
    :style="{ height, width }"
    :class="className"
    class="dc-pure-map"
  ></div>
</template>
