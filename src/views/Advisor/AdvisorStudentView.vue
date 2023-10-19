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
  <div class="flex justify-center items-start min-h-screen pt-16 animate__animated animate__zoomIn">
    
    <div v-for="advisees in advisor?.ownStudents" :key="advisees.id" class="card-body">
      <img v-for="studentimage in advisor?.ownStudents" :key="studentimage.images"  class="rounded-md w-13 h-13 "/>
      <div class="card-body">
        <h2 class="card-title text-xl font-semibold mb-2">{{ advisees.name }} {{ advisees.surname }}</h2>
        <p>Student ID: {{ advisees.studentid }}</p>
        <p>Department: {{ advisees.department }}</p>
        <p>Location: {{ advisees.location }}</p>

      </div>
    </div>
  </div>
</template>
