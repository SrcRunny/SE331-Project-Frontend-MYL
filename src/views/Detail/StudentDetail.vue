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
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">Profile</h2>
    <p>Name : {{ student?.name }} {{ student?.surname }}</p>
    <p>StudentID : {{ student?.studentid  }}</p>
    <p>Location : {{ student?.location  }}</p>
    <p>Department : {{ student?.department  }}</p>
  </div>
</div>
</template>