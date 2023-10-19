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
    <div class="card lg:card-side bg-base-100 shadow-xl animate__animated animate__zoomIn">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Album"/></figure>
  <div v-for="advisees in advisor?.ownStudents" :key="advisees.id" class="card-body">
    <h2 class="card-title">Advisees</h2>
    <p>Name : {{ advisees.name }} {{ advisees.surname }}</p>
    <p>Location : {{ advisees.location }}</p>
    <p>Department : {{  advisees.department }} </p>
  </div>
</div>
</template>