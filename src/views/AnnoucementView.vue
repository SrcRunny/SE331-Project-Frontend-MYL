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
                name: 'annoucement',
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



</script>


<template>
    <div v-if="authStore.isAdvisor" class="animate__animated animate__zoomIn">
<div class="heading text-center font-bold text-2xl m-5 text-gray-800 " >Add Post</div>
  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text">
    <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    
    <!-- icons -->
    <h3 class="mt-5 mb-5">Add File Here</h3>
    <!-- <image-upload v-model="annouce.images" /> -->
    <!-- buttons -->
    <div class="buttons flex">
      <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-auto bg-indigo-500">Post</div>
    </div>
  </div>
</div>
</template>