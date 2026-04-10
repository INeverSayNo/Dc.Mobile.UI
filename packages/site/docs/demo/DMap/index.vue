<script lang="ts" setup>
import { computed, ref, shallowRef } from "vue";
import { DMap, DcIcon } from "dc-mobile-ui";

const DMapRef = shallowRef<InstanceType<typeof DMap>>();
const MapInstance = computed(() => DMapRef.value?.MapInstance);
const showTerrain = ref(false);
const showBureauLayer = ref(false);
const showRailwayLine = ref(false);

const showChinaFullMap = () => {
  MapInstance.value?.centerAndZoom(
    new BMapGL.Point(106.91447225790056, 32.49688939112507),
    3,
  );
};
</script>
<template>
  <div class="dc-h-600px dc-flex dc-flex-col">
    <DMap
      ref="DMapRef"
      :show-railway-line="showRailwayLine"
      :show-railway-bureau="showBureauLayer"
      :show-terrain="showTerrain"
    />
    <div
      class="dc-bg-#fff dc-b-rd-6px dc-w-full dc-px-12px dc-py-4px dc-flex dc-items-center dc-justify-between dc-cursor-pointer"
    >
      <div
        class="dc-font-size-12px dc-flex dc-items-center dc-flex-col dc-c-#333"
        v-auth="'MP-OpenCloseMountainShadowLayer'"
        @click="showTerrain = !showTerrain"
      >
        <DcIcon
          width="18"
          height="18"
          icon-name="a-shouye-shanying2"
          :fill-color="showTerrain ? '#145ca8' : '#333'"
        ></DcIcon>
        <span
          class="dc-flex dc-flex-col dc-whitespace-nowrap"
          :class="{ 'dc-c-#145ca8': showTerrain }"
        >
          <i class="dc-font-not-italic">山影</i>
        </span>
      </div>
      <div
        class="dc-font-size-12px dc-flex dc-items-center dc-flex-col"
        @click="showChinaFullMap"
      >
        <DcIcon width="18" height="18" icon-name="a-shouye-quanguo2"></DcIcon>
        <span class="dc-flex dc-flex-col dc-whitespace-nowrap">
          <i class="dc-font-not-italic">全国</i>
        </span>
      </div>
      <div
        class="dc-font-size-12px dc-flex dc-items-center dc-flex-col"
        v-auth="'MP-OpenCloseRailwayBureauLayer'"
        @click="showBureauLayer = !showBureauLayer"
      >
        <DcIcon
          width="18"
          height="18"
          icon-name="shouye-luju"
          :fill-color="showBureauLayer ? '#145ca8' : '#333'"
        ></DcIcon>
        <span
          class="dc-flex dc-flex-col dc-whitespace-nowrap"
          :class="{ 'dc-c-#145ca8': showBureauLayer }"
        >
          <i class="dc-font-not-italic">路局</i>
        </span>
      </div>
      <div
        class="dc-font-size-12px dc-flex dc-items-center dc-flex-col"
        v-auth="'MP-OpenCloseLineLayer'"
        @click="showRailwayLine = !showRailwayLine"
      >
        <DcIcon
          v-show="showRailwayLine"
          width="18"
          height="18"
          icon-name="shouye-luxian"
        ></DcIcon>
        <DcIcon
          v-show="!showRailwayLine"
          width="18"
          height="18"
          icon-name="shouye-luxian1"
        ></DcIcon>
        <span
          class="dc-flex dc-flex-col dc-whitespace-nowrap"
          :class="{ 'dc-c-#145ca8': showRailwayLine }"
        >
          <i class="dc-font-not-italic">路线</i>
        </span>
      </div>
    </div>
  </div>
</template>
