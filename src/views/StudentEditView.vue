<script setup lang="ts">
import type { StudentInfo } from '@/student'
import { ref } from 'vue'
import StudentService from '../service/StudentService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import BaseInput from '../components/BaseInput.vue'
import ImageUpload from '../components/ImageUpload.vue'
import Swal from 'sweetalert2'

const store = useMessageStore()


const router = useRouter()
function saveStudent() {
  StudentService.saveStudent(student.value)
  .then((response) => {
            console.log(response.data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully add a new Student!!',
                showConfirmButton: false,
                timer: 2000
            });
            router.push({
                name: 'student',
                params: { id: response.data.id }
            });
            store.updateMessage('You are successfully add a new Student!!')
            setTimeout(() => {
                store.resetMessage()
            }, 3000)

        }).catch(() => {
            router.push({ name: 'network-error' })
        })
}

const student = ref<StudentInfo>({
    id: 0,
    studentid: '',
    name: '',
    surname: '',
    department: '',
    location: '',
    images: [],
    advisor: { id: 1,name:'',surname:'', academic_position:'',department: '', images:[],roles: []},
    courses: [{courseid:'', name:'',description:'',images:[] }]
})

</script>

<template>
<div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeIn">
  <h2 class="text-2xl font-semibold mb-4">Edit Student</h2>
  <form @submit.prevent="saveStudent">
    <div class="mb-4">
      <label for="studentid" class="block text-sm font-medium text-gray-600">Student ID:</label>
      <BaseInput
          v-model="student.studentid"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"
           />
    </div>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
      <BaseInput
          v-model="student.name"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="surname" class="block text-sm font-medium text-gray-600">Surname:</label>
      <BaseInput
          v-model="student.surname"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="department" class="block text-sm font-medium text-gray-600">Department:</label>
      <BaseInput
          v-model="student.department"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <div class="mb-4">
      <label for="location" class="block text-sm font-medium text-gray-600">Location:</label>
      <BaseInput
          v-model="student.location"
           type="text"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>
    <h3>Add the image here</h3>
    <image-upload v-model="student.images" />
    <button
      type="submit"
      class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      Edit Student
    </button>
  </form>

</div>

</template>

