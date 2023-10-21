<script setup lang="ts">
import { ref , computed } from 'vue'
import type { Ref } from 'vue'
import type { AxiosResponse } from 'axios'
import StudentCard from '../components/StudentCard.vue'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import type { StudentInfo } from '@/student'
import StudentService from '../service/StudentService'
import BaseInput from '../components/BaseInput.vue'
import { useAuthStore } from '../stores/auth';

const students: Ref<StudentInfo[]> = ref([])
const router = useRouter()
const authStore = useAuthStore()

const keyword = ref('')

const totalStudent = ref<number>(0)
const perPage = ref<number>(2)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

StudentService.getStudent(3, props.page)
.then((response: AxiosResponse<StudentInfo[]>) => {
  students.value = response.data
  totalStudent.value = response.headers['x-total-count']
}).catch(() => {
  router.push({ name: 'NetworkError' })
})

function updateKeyword () {
  let queryFunction;
  if (keyword.value === ''){
    queryFunction = StudentService.getStudent(3, 1)
  }else {
    queryFunction = StudentService.getStudentsByKeyword(keyword.value, 3, 1)
  }
  queryFunction
  .then((response: AxiosResponse<StudentInfo[]>) => {
    students.value = response.data
    console.log('students',students.value)
    totalStudent.value = response.headers['x-total-count']
    console.log('totalStudent',totalStudent.value)
  }).catch(() => {
    router.push({ name: 'NetworkError' })
  })
}

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  	let queryFunction;
  	if (keyword.value === null || keyword.value === '') {
	    	queryFunction = StudentService.getStudent(3, toPage)
	}else{
    		queryFunction = StudentService.getStudentsByKeyword(keyword.value, 3, toPage)
  	}   
    queryFunction
  .then((response: AxiosResponse<StudentInfo[]>) => {
    students.value = response.data
    totalStudent.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError'})
  })
})

const hasNextPage = computed(()=>{
  const totalPages = Math.ceil(totalStudent.value / 3)
  return props.page.valueOf() < totalPages
})




</script>

<template>
    <div class="flex justify-center items-center flex-wrap">
      <h1 class="text-3xl font-semibold tracking-wide">Student List</h1>
    </div>
    <div class="flex justify-end items-center flex-wrap mr-6">
      <router-link :to="{name:'studentform'}">
      <button  v-if="authStore.isStudent || authStore.isAdmin" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto">
        + Add Student
      </button>
    </router-link>
    </div>
    <div class="flex justify-center items-center flex-wrap ">
      <div class="w-64 text-center">
        <BaseInput
        v-model="keyword"
        type="text"
        class="w-full h-10 px-4 pr-10 border rounded focus:outline-none focus:ring focus:border-blue-300"
        label="Search       "
        @input="updateKeyword"
      />      
    </div>
  </div>


    <div class="flex justify-center items-center flex-wrap ">
        <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
      class="mb-  "
    ></StudentCard>
    </div>
    <div class="flex justify-center items-center flex-wrap mr-5 ml-5">
    <RouterLink
        :to="{ name: 'student', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="text-left mr-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
      >
        Prev Page
      </RouterLink>
      <RouterLink
        :to="{ name: 'student', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        id="page-next"
        class="text-right ml-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
      >
        Next Page
      </RouterLink>
    </div>
    
    
</template>

