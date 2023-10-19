<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentInfo } from '@/student'
import type {PropType} from 'vue'

defineProps({
    student: {
        type: Object as PropType<StudentInfo>,
            require: true
    }
})
</script>

<template>
  <div class="flex justify-center items-start min-h-screen pt-16 animate__animated animate__zoomIn">
    <div v-for="course in student?.courses" :key="course.courseid" class="card bg-base-100 shadow-xl lg:w-96 p-6 m-5">
      <figure><img src="https://www.dictionary.com/e/wp-content/uploads/2021/02/20210202_atw_stonks_800x800.png" alt="Movie" class="w-full h-32 object-cover mb-4" /></figure>
      <div class="card-body">
        <h2 class="card-title text-xl font-semibold mb-2">{{ course.name }}</h2>
        <p><strong>Course ID:</strong> {{ course.courseid }}</p>
      </div>
    </div>
  </div>
</template>
