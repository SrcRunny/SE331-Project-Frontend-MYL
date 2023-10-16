<script setup lang="ts">
import { ref , computed } from 'vue'
import type { Ref } from 'vue'
import type { AxiosResponse } from 'axios'
import AdvisorCard from '../components/AdvisorCard.vue'
import type { AdvisorInfo } from '@/advisor'
import { onBeforeRouteUpdate } from 'vue-router'
import AdvisorService from '../service/AdvisorService'
import { useRouter } from 'vue-router'

const advisors: Ref<AdvisorInfo[]> = ref([])
const router = useRouter()

const keyword = ref('')


const totalAdvisor = ref<number>(0)
const perPage = ref<number>(2)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})


AdvisorService.getAdvisor(3, props.page)
.then((response: AxiosResponse<AdvisorInfo[]>) => {
  advisors.value = response.data
  totalAdvisor.value = response.headers['x-total-count']
}).catch(() => {
  router.push({ name: 'NetworkError' })
})

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  	let queryFunction;
  	if (keyword.value === null || keyword.value === '') {
	    	queryFunction = AdvisorService.getAdvisor(3, toPage)
	}else{
    		queryFunction = AdvisorService.getAdvisorsByKeyword(keyword.value, 3, toPage)
  	}   
    queryFunction
  .then((response: AxiosResponse<AdvisorInfo[]>) => {
    advisors.value = response.data
    totalAdvisor.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError'})
  })
})

const hasNextPage = computed(()=>{
  const totalPages = Math.ceil(totalAdvisor.value / 3)
  return props.page.valueOf() < totalPages
})



</script>

<template>
<div class="flex justify-center items-center flex-wrap mb-5">
      <h1 class="text-3xl font-semibold tracking-wide">Advisor List</h1>
    </div>
  <div class="flex justify-center items-center flex-wrap ">
      <AdvisorCard
    v-for="advisor in advisors"
    :key="advisor.id"
    :advisor="advisor"
    class="mb-4"
  ></AdvisorCard>
  </div>
  <div class="flex justify-center items-center flex-wrap mr-5 ml-5">
  <RouterLink
      :to="{ name: 'advisor', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      id="page-prev"
      class="text-left mr-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
    >
      Prev Page
    </RouterLink>
    <RouterLink
      :to="{ name: 'advisor', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      id="page-next"
      class="text-right ml-auto text-3xl hover:text-green-500 transition duration-300 ease-in-out"
    >
      Next Page
    </RouterLink>
  </div>
</template>
