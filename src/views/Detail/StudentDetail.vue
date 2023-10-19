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
      <img v-for="image in student?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
  <div class="card-body">
    <h2 class="card-title">Profile</h2>
    <p>Name : {{ student?.name }} {{ student?.surname }}</p>
    <p>StudentID : {{ student?.studentid  }}</p>
    <p>Location : {{ student?.location  }}</p>
    <p>Department : {{ student?.department  }}</p>
  </div>
</div>
</template>

<style scoped>
img{
  width: 250px;
  height: 300px;
}
</style>