<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentInfo } from '@/student'
import type {PropType} from 'vue'
import { useAuthStore } from '@/stores/auth'


const authStore = useAuthStore()

defineProps({
    student: {
        type: Object as PropType<StudentInfo>,
            require: true
    }
})
</script>

<template>
  <div class="max-w-md mx-auto p-4">
  <!-- Chat Container -->
  <div class="bg-white rounded-lg shadow-md p-4">
    <!-- Chat Header -->
    <div class="flex items-center mb-4">
        <div class="h-12 w-12 rounded-full overflow-hidden">
          <div v-if="student?.advisor?.images && student?.advisor?.images.length > 0">
            <img
              :src="student?.advisor?.images[0]"
              alt="Advisor Picture"
              class="object-cover h-full w-full"
            />
          </div>
        </div>
      <div class="ml-3 ">

        <p class="text-xl font-medium">{{ student?.advisor.name }}</p>
        <p class="text-gray-500">Online</p>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="space-y-4 border-t pb-2">
      <!-- Received Message -->
      <div class="flex items-start mt-5">
         <div class="h-10 w-10 rounded-full overflow-hidden">
          <div v-if="student?.advisor?.images && student?.advisor?.images.length > 0">
            <img
              :src="student?.advisor?.images[0]"
              alt="Advisor Picture"
              class="object-cover h-full w-full"
            />
          </div>
        </div>
        <div class="ml-3 bg-gray-100 p-3 rounded-lg">
          <p class="text-sm text-gray-800">Hello! How can I help you today?</p>
        </div>
      </div>

      <!-- Sent Message -->
      <div class="flex items-end justify-end">
        <div class="bg-blue-500 p-3 rounded-lg mr-2">
          <p class="text-sm text-white">Sure, I have a question.</p>
        </div>
        <div class="h-10 w-10 rounded-full overflow-hidden">
          <div v-if="student?.advisor?.images && student?.advisor?.images.length > 0">
            <img v-for="image in student?.images" :key="image" :src="image" class="rounded-md w-13 h-13 "/>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="mt-4 flex items-center">
      <input
        type="text"
        placeholder="Type your message..."
        class="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
      />
      <button class="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600">Send</button>
    </div>
  </div>
</div>
 </template>
 