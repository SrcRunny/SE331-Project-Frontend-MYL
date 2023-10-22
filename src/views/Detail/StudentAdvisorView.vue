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
  <RouterLink  :to="{name: 'advisordetail', params:{id: student?.advisor.id}}" >

  <div class="hover:bg-gray-200 hover:shadow-md transition duration-300 card lg:card-side bg-base-100 shadow-xl animate__animated animate__zoomIn">
    <div v-if="student?.advisor?.images && student?.advisor?.images.length > 0">
      <img :src="student?.advisor?.images[0]" class="rounded-md w-13 h-13 mt-4" />
    </div>    
    <div class="card-body">
      <h2 class="card-title">Adviser</h2>
      <p>Name: {{ student?.advisor.name }} {{ student?.advisor.surname }}</p>
      <p>Position: {{ student?.advisor.academic_position }}</p>
      <p>Department: {{ student?.advisor.department}}</p>
    </div>


  </div>
  </RouterLink>
</template>

<style scoped>
img{

  width: 350px;
  height: 300px;

}
</style>