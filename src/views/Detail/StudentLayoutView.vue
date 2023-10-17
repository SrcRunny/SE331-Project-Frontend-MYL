<script setup lang="ts">
import { ref } from 'vue'
import { useStudentStore } from '@/stores/student';
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router';

const store = useStudentStore()
const student = storeToRefs(store).student
const id = ref(student?.value?.id)
const router = useRouter()

</script>
<template>
    <div v-if="student" >
      <div id="nav" class="flex justify-center">
        <router-link :to="{ name: 'studentdetail', params: { id } }" class="mr-4 hover:text-green-500 hover:text-l pr-4 border-r">Details</router-link>
        <router-link :to="{ name: 'studentadvisor', params: { id } }" class="mr-4 hover:text-green-500 hover:text-l pr-4 border-r">Advisor</router-link>
        <router-link :to="{ name: 'studentcourse', params: { id } }" class="mr-4 hover:text-green-500 hover:text-l pr-4 border-r">Course</router-link>
        <router-link :to="{ name: 'studentcomment', params: { id } }" class="hover:text-green-500 hover:text-l pr-4 border-r">Comment</router-link>
      </div>
      <router-view :student="student"></router-view>
    </div>
  </template>
