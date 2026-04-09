<script lang="ts" setup>
import { DCell } from "dc-mobile-ui";
</script>

<template>
  <DCard>
      <DCell title="姓名" value="王大锤" is-link value-layout="left">
        <template #label>
          <span>test</span>
        </template>
      </DCell>
      <DCell title="性别" value="男"></DCell>
      <DCell title="家庭住址" value="北京市朝阳区"></DCell>
      <DCell title="我是一个很长很长很长的标题,可能溢出" is-link value="只要相信同一个故事，大批陌生人就能成功合作。任何大规模的人类合作——无论是现代国家、中世纪教堂、古老的城市还是远古部落——都植根于只存在于人们集体想象中的共同神话。"></DCell>
    </DCard>
</template>
