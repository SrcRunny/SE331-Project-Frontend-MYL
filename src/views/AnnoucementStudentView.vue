<script setup lang="ts">
import { ref , computed } from 'vue'
import type { Ref } from 'vue'
import type { AxiosResponse } from 'axios'
import AnnouceCard from '../components/AnnouceCard.vue'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'
import type { AnnouceInfo } from '@/annouce'
import AnnouceService from '../service/StudentService'
import BaseInput from '../components/BaseInput.vue'
import { useAuthStore } from '../stores/auth';

const annouces: Ref<AnnouceInfo[]> = ref([])
const router = useRouter()
const authStore = useAuthStore()


</script>

<template>
    <div class="flex justify-center items-center flex-wrap ">
        <AnnouceCard
      v-for="annouce in annouces"
      :key="annouce.id"
      :annouce="annouce"
      class="mb-  "
    ></AnnouceCard>
    </div>
</template>