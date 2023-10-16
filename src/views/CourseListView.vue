<script setup lang="ts">
import { ref , computed } from 'vue'
import type { Ref } from 'vue'
import type { AxiosResponse } from 'axios'
import CourseCard from '../components/CourseCard.vue'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import type { CourseInfo } from '@/course'
import CourseService from '../service/CourseService'

const courses: Ref<CourseInfo[]> = ref([])
const router = useRouter()

const keyword = ref('')

const totalCourse = ref<number>(0)
const perPage = ref<number>(2)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

CourseService.getCourse(3, props.page)
.then((response: AxiosResponse<CourseInfo[]>) => {
  courses.value = response.data
  totalCourse.value = response.headers['x-total-count']
}).catch(() => {
  router.push({ name: 'NetworkError' })
})

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  	let queryFunction;
  	if (keyword.value === null || keyword.value === '') {
	    	queryFunction = CourseService.getCourse(3, toPage)
	}else{
    		queryFunction = CourseService.getCoursesByKeyword(keyword.value, 3, toPage)
  	}   
    queryFunction
  .then((response: AxiosResponse<CourseInfo[]>) => {
    courses.value = response.data
    totalCourse.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError'})
  })
})

const hasNextPage = computed(()=>{
  const totalPages = Math.ceil(totalCourse.value / 3)
  return props.page.valueOf() < totalPages
})

</script>

<template>
<div class="flex justify-center items-center flex-wrap mb-5">
      <h1 class="text-3xl font-semibold tracking-wide">Course List</h1>
    </div>
    <div class="flex justify-center items-center flex-wrap ">
        <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      class="mb-4"
    ></CourseCard>
    </div>
    <div class="flex justify-center items-center flex-wrap mr-5 ml-5">
    <RouterLink
        :to="{ name: 'course', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="text-left mr-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
      >
        Prev Page
      </RouterLink>
      <RouterLink
        :to="{ name: 'course', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        id="page-next"
        class="text-right ml-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
      >
        Next Page
      </RouterLink>
    </div>
</template>

