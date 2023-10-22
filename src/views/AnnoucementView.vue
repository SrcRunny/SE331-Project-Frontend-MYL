<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import BaseInput from '../components/BaseInput.vue'
import ImageUpload from '../components/ImageUpload.vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useMessageStore } from '@/stores/message'
import { ref } from 'vue'
import AnnoceService from '../service/AnnouceService'
import type { AnnouceInfo } from '@/annouce'



const authStore = useAuthStore()
const store = useMessageStore()
const props = defineProps({
    id: String
})

const annouce = ref<AnnouceInfo>({
    id: 0,
    file: [],
    title:'',
    description:''
})
// id: number
//     file: string[]
//     title: string
//     description: string

const router = useRouter()
function saveAnnouce() {
    AnnoceService.saveAnnouce(annouce.value)
        .then((response) => {
            console.log(response.data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Post!!',
                showConfirmButton: false,
                timer: 2000
            });
            router.push({
                name: 'advisordetail',
            });
            store.updateMessage('You have successfully added a new Advisor!!');
            setTimeout(() => {
                store.resetMessage();
            }, 3000);

        }).catch(() => {
            router.push({ name: 'network-error' });
        });
}



</script>


<template>
    <div v-if="authStore.isAdvisor" class="animate__animated animate__zoomIn">
<div class="heading text-center font-bold text-2xl m-5 text-gray-800 " >Add Post</div>
<form @submit.prevent="saveAnnouce">

  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <div class="mb-4">

<label for="title" class="block text-sm font-medium text-gray-600">Title</label>
<BaseInput
    v-model="annouce.title"
     type="title"
     class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"
     />
</div>    
<div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-600">Description</label>
      <BaseInput
          v-model="annouce.description"
           type="description"
           class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"

           />
    </div>    
    <!-- icons -->
    <h3 class="mb-4">Add File Here</h3>
    <image-upload v-model="annouce.file" />
    <!-- buttons -->
    <button
      type="submit"
      class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
    >
      Upload Post
    </button>
    
  </div>
</form>

</div>
</template>