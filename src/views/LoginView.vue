<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import * as yup from 'yup'
// import { ref } from 'vue'
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message';
import Swal from 'sweetalert2'

const messageStore = useMessageStore()
const router = useRouter()

const authStore = useAuthStore()

const validationSchema = yup.object({
  username: yup.string().required('The username is required'),
  password: yup.string().required('The password is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    username: '',
    password: ''
  }
})

const { value: username } = useField<string>('username')
const { value: password } = useField<string>('password')
const onSubmit = handleSubmit((values) => {
  authStore.login(values.username, values.password)
  .then((response) => {
    Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'WELCOME!!!',
                showConfirmButton: false,
                timer: 2000
            });
    console.log(response.data)
    
    router.push({ name: 'student'})
  }).catch((err) => {
    messageStore.updateMessage('Could not login')
    setTimeout(() => {
      messageStore.resetMessage()
    }, 3000)
  })
})

</script>




<template>
  
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    
	<div class="relative py-3 sm:max-w-xl sm:mx-auto ">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl ">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 animate__animated animate__rotateIn">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-4">
      <img class="mx-auto h-10 w-auto" 
      src="https://cdn.discordapp.com/attachments/1025435978799784061/1163476048567095437/Untitled_design-modified-removebg-preview.png?ex=653fb682&is=652d4182&hm=738c9a9aa60b7f245caa42800286e90e397b1cd89ba7cb831f000418b2cf2c4f&" alt="Your Company">
      </div>
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login HERE into the MhokYongLing</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<form class="space-y-6" @submit.prevent="onSubmit">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <InputText type="text" v-model="username" :error="errors['username']"></InputText>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <InputText type="password" v-model="password" :error="errors['password']"></InputText>
      </div>
      <div>

        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
        <p class="mt-10 text-center text-sm text-gray-500">
      Not a member? 
      <router-link :to="{name:'register'}">
         <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register Here</a>
</router-link>
    </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

