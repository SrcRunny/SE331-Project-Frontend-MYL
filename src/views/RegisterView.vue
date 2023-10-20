<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import * as yup from 'yup'
// import { ref } from 'vue'
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message';

const messageStore = useMessageStore()
const router = useRouter()

const authStore = useAuthStore()

const validationSchema = yup.object({
  email: yup.string().required('The email is required'),
  password: yup.string().required('The password is required'),
  firstname: yup.string().required('The firstname is required'),
  lastname: yup.string().required('The lastname is required'),
  username: yup.string().required('The username is required')

})

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    email: '',
    password: '',
    firstname:'',
    lastname:'',
    username:''
  }
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')
const { value: firstname } = useField<string>('firstname')
const { value: lastname } = useField<string>('lastname')
const { value: username } = useField<string>('username')

const onSubmit = handleSubmit((values) => {
  authStore.register(values.email, values.password, values.firstname, values.lastname,values.username)
  .then(() => {
    router.push({ name: 'login'})
  }).catch((err) => {
    messageStore.updateMessage('Could not login')
    setTimeout(() => {
      messageStore.resetMessage()
    }, 3000)
  })
})

</script>


<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://cdn.discordapp.com/attachments/1025435978799784061/1163476048567095437/Untitled_design-modified-removebg-preview.png?ex=653fb682&is=652d4182&hm=738c9a9aa60b7f245caa42800286e90e397b1cd89ba7cb831f000418b2cf2c4f&" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <InputText type="text" v-model="email" :error="errors['email']"></InputText>
        </div>
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">StudentID</label>
          <InputText type="text" v-model="username" :error="errors['username']"></InputText>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <InputText type="password" v-model="password" :error="errors['password']"></InputText>
        </div>
        <div>
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <InputText type="text" v-model="firstname" :error="errors['firstname']"></InputText>
        </div>
        <div>
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <InputText type="text" v-model="lastname" :error="errors['lastname']"></InputText>
        </div>
        
        
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
    </div>
  </div>
  
  </template>
  
  <style scoped>
  .background{
    
  }

</style>