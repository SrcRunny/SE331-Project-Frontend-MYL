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
    <div class="card lg:card-side bg-base-100 shadow-xl animate__animated animate__zoomIn">
      <img v-for="image in student?.advisor" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
  <div class="card-body">
    <h2 class="card-title">Adviser</h2>
    <p>Name : {{ student?.advisor.name }} {{ student?.advisor.surname  }}</p>
    <p>Position : {{ student?.advisor.academic_position  }}</p>
    <p>Department : {{  student?.advisor.department }} </p>
  </div>
</div>
</template>

