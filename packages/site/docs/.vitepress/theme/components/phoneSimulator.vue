<script setup>
import { useRoute } from "vitepress";
import { Loading } from "vant";
import { computed, ref, onMounted, watch } from "vue";

const route = useRoute();

// 从当前路由推断 demo 预览路径
// /components/DCard → /demo/DCard/preview.html
const previewUrl = computed(() => {
  const match = route.path.match(/\/components\/(\w+)/);
  if (match) {
    return `/demo/${match[1]}/preview.html`;
  }
  return "";
});

const time = ref(
  `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")}`,
);

const updateTime = () => {
  time.value = `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")}`;
};

setInterval(updateTime, 1000);

const isLoading = ref(true);

const loadIframe = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
};

watch(previewUrl, () => {
  isLoading.value = true;
});

</script>

<template>
  <div class="phone-simulator" v-if="previewUrl">
    <div class="phone-frame">
      <div class="phone-frame-content">
        <div class="phone-frame-header">
          <span>{{ time }}</span>
          <span style="font-size: 14px;font-weight: bold; color:#145ca8">道臣智运</span>
        </div>
        <div class="phone-frame-container">
          <div v-if="isLoading" class="iframe-loading">
            <Loading size="40px" type="spinner" color="#1989fa"/>
            <span>加载中...</span>
          </div>
          <iframe
            v-show="!isLoading"
            :src="previewUrl"
            frameborder="0"
            @load="loadIframe"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.phone-simulator {
  position: fixed;
  right: 2rem;
  top: calc(var(--vp-nav-height) + 2rem);
  z-index: 10;
}

.phone-frame {
  width: 375px;
  height: 760px;
  background: url("/mobile-phone-bg.png") no-repeat center center;
  background-size: contain;
  position: relative;
  padding: 40px 25px 28px; /* 根据手机边框调整 */
  overflow: hidden;
}

.phone-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  overflow: hidden;
}
.phone-frame-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
}
.phone-frame-content {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.phone-frame-container {
  flex-grow: 1;
  background: aliceblue;
  padding: 0 10px;
  overflow: hidden;
  padding-top: 36px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.iframe-loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
}
</style>
