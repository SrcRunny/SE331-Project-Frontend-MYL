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

  <div class="flex justify-center items-start min-h-screen animate__animated animate__zoomIn">
    <div v-for="advisees in advisor?.ownStudents" :key="advisees.id" class="card bg-base-100 shadow-xl lg:w-96 p-6 m-5">
      <RouterLink  :to="{name: 'studentdetail', params:{id: advisees.id}}">

      <div class="card-body">
        <img v-for="image in advisees.images" :key="image" :src="image" alt="student image"/>
        
        <h2 class="card-title text-xl font-semibold mb-2">{{ advisees.name }} {{ advisees.surname }}</h2>
        <p>Student ID: {{ advisees.studentid }}</p>
        <p>Department: {{ advisees.department }}</p>
        <p>Location: {{ advisees.location }}</p>
      </div>
    </RouterLink>

    </div>
  </div>
</template>


<style scoped>
img{
  
  width: 350px;
  height: 300px;
  border-radius: 10px;

}

</style>
