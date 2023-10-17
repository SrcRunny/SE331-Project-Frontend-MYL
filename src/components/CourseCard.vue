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
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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
    </style>