<script setup lang="ts">
import type { Ref } from 'vue'
import type { AdvisorInfo } from '@/advisor'
import type {PropType} from 'vue'

defineProps({
    advisor: {
        type: Object as PropType<AdvisorInfo>,
            require: true
    }
})
</script>

<template>
    <div class="card lg:card-side bg-base-100 shadow-xl animate__animated animate__zoomIn">
      <img v-for="image in advisor?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
  <div class="card-body">
    <h2 class="card-title">Profile</h2>
    <p>Name : {{ advisor?.name }} {{ advisor?.surname }}</p>
    <p>Academic Position : {{ advisor?.academic_position  }}</p>
    <p>Department : {{ advisor?.department  }}</p>
  </div>
</div>
</template>

<style scoped>
img{
  
  width: 350px;
  height: 300px;

}
</style>