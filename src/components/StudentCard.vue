<script setup lang="ts">
import type { StudentInfo } from '@/student'
import type { PropType } from 'vue'

const props = defineProps({
    student: {
        type: Object as PropType<StudentInfo>,
        require: true    
    }
})

</script>

<template>
<div class="card w-96 bg-base-100 shadow-xl box animate__animated animate__fadeInLeft">
  <img v-for="image in student?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
    <div class="card-body">
    <h2 class="card-title">{{ student?.name  }} {{ student?.surname }}</h2>
    <p>StudentID : {{ student?.studentid  }}</p>


    <RouterLink  :to="{name: 'studentdetail', params:{id: student?.id}}">
    <div class="card-actions justify-end  mt-3">
      <button class="btn btn-primary">View Detail</button>
    </div>
  </RouterLink>

  </div>
</div>
</template>

<style scoped>
.box{
    margin: 2%;
}

img{
  width: 350x;
  height: 350px;
}

</style>