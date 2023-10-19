<script setup lang="ts">
import type { CourseInfo } from '@/course'
import type { PropType } from 'vue'

const props = defineProps({
    course: {
        type: Object as PropType<CourseInfo>,
        require: true    
    }
})
</script>


<template>
    <div class="card w-96 bg-base-100 shadow-xl box animate__animated animate__fadeInLeft">
      <img v-for="image in course?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
      <div class="card-body">
        <h2 class="card-title">{{ course?.name  }}</h2>
        <p>"{{ course?.description  }}"</p>
    
      </div>
    </div>
    </template>
    
    <style scoped>
    .box{
        margin: 2%;
    }
    img{
  width: 350x;
  height: 300px;
}
    </style>