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
  <div class="card-body">
    <h2 class="card-title">Comment</h2>

  </div>
</div>
</template>