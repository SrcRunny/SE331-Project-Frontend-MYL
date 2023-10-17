<script setup lang="ts">
import { ref } from 'vue'
import { useAdvisorStore } from '@/stores/advisor';
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router';

const store = useAdvisorStore()
const advisor = storeToRefs(store).advisor
const id = ref(advisor?.value?.id)
const router = useRouter()

</script>
<template>
    <div v-if="advisor" >
      <div id="nav" class="flex justify-center">
        <router-link :to="{ name: 'advisordetail', params: { id } }" class="mr-4 hover:text-green-500 hover:text-l pr-4 border-r">Details</router-link>
        <router-link :to="{ name: 'advisorstudent', params: { id } }" class="mr-4 hover:text-green-500 hover:text-l pr-4 border-r">Student</router-link>
      </div>
      <router-view :advisor="advisor"></router-view>
    </div>
  </template>
