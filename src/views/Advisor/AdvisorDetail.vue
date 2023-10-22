<script setup lang="ts">
import type { Ref } from 'vue'
import type { AdvisorInfo } from '@/advisor'
import type {PropType} from 'vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()

defineProps({
    advisor: {
        type: Object as PropType<AdvisorInfo>,
            require: true
    }
})
</script>

<template>
    <div class="card lg:card-side bg-base-100 shadow-xl animate__animated animate__zoomIn">
      <img v-for="image in advisor?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
  <div class="card-body">
    <h2 class="card-title">Profile</h2>
    <p>Name : {{ advisor?.name }} {{ advisor?.surname }}</p>
    <p>Academic Position : {{ advisor?.academic_position  }}</p>
    <p>Department : {{ advisor?.department  }}</p>
    <div>    
      
      <RouterLink  :to="{name: 'advisoredit'}">
      <button v-if="authStore.isAdvisor || authStore.isAdmin" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit Adviser Here</button>
    </RouterLink>

    <RouterLink v-if="authStore.isAdvisor" :to="{name: 'annouce'}">
      <button type="button" class="text-white bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Post Here</button>
    </RouterLink>


    </div>
  </div>
</div>
</template>

<style scoped>
img{
  
  width: 350px;
  height: 300px;

}
</style>