<script setup lang="ts">
import type { AdvisorInfo } from '@/advisor'
import { ref } from 'vue'
import AdvisorService from '../service/AdvisorService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import BaseInput from '../components/BaseInput.vue'
import ImageUpload from '../components/ImageUpload.vue'
import Swal from 'sweetalert2'

const store = useMessageStore()


const router = useRouter()
function saveAdvisor() {
  AdvisorService.saveAdvisor(advisor.value)
        .then((response) => {
            console.log(response.data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have successfully added a new Advisor!!',
                showConfirmButton: false,
                timer: 2000
            });
            router.push({
                name: 'advisor',
                params: { id: response.data.id }
            });
            store.updateMessage('You have successfully added a new Advisor!!');
            setTimeout(() => {
                store.resetMessage();
            }, 3000);

        }).catch(() => {
            router.push({ name: 'network-error' });
        });
}

const advisor = ref<AdvisorInfo>({
    id: 0,
    name: '',
    surname: '',
    academic_position: '',
    department: '',
    images: [],
    ownStudents: []
})

</script>

<template>
<div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn">
  <h2 class="text-2xl font-semibold mb-4">Add Advisor</h2>
  <form @submit.prevent="saveAdvisor">
    <div class="mb-4">

      <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
      <BaseInput
          v-model="advisor.name"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="surname" class="block text-sm font-medium text-gray-600">Surname:</label>
      <BaseInput
          v-model="advisor.surname"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="academicposition" class="block text-sm font-medium text-gray-600">Academic Posiotion:</label>
      <BaseInput
          v-model="advisor.academic_position"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="department" class="block text-sm font-medium text-gray-600">Department:</label>
      <BaseInput
          v-model="advisor.department"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <h3>Add the image here</h3>
    <image-upload v-model="advisor.images" />
    <button
      type="submit"
      class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      Add Advisor
    </button>
  </form>

</div>

</template>

