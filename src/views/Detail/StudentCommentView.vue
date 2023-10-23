<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CommentService from '@/service/CommentService';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import BaseInput from '@/components/BaseInput.vue';
import Swal from 'sweetalert2';
import type { CommentInfo } from '@/comment';
import CommentCard from "@/components/CommentCard.vue";
import { useCommentStore } from '@/stores/comment';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore()
const commentStore = useCommentStore();
const store = useMessageStore();
const router = useRouter();
const comments = ref<CommentInfo[]>([]);
const comment = ref<CommentInfo>({
    id: 0,
    advisorId: 0,
    description: ''
});

CommentService.getAllComment(authStore.getID).then((response)=>{
    console.log(response.data)
})

function saveComment() {
    CommentService.saveComment(comment.value)
    .then((response) => {
        console.log(response.data);
        const savedComment = response.data;
        comments.value.push(savedComment);
        commentStore.setComment(response.data);
        localStorage.setItem('savedComment', JSON.stringify(response.data));
        CommentService.getAllComment(authStore.getID).then((response)=>{
        console.log(response.data)
})

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successful add the comment!!',
            showConfirmButton: false,
            timer: 2000
        });

        router.push({
            name: 'studentcomment',
        });

        store.updateMessage('You are successfully add a new Student!!');
        setTimeout(() => {
            store.resetMessage();
        }, 3000);
    })
    .catch(() => {
        router.push({ name: 'network-error' });
    });
}


// onMounted(() => {
//     const savedComment = localStorage.getItem('savedComment');
//     if (savedComment) {
//         const parsedComment = JSON.parse(savedComment);
//         commentStore.setComment(parsedComment);
//     }
// });


</script>

<template>
<!-- comment form -->
<div class="flex justify-center items-center flex-wrap">  
  <!-- Form for adding a new comment -->
  <div class="flex mx-auto items-center justify-center shadow-lg mt-5 mx-8 mb-4 max-w-lg">
     <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2"  @submit.prevent="saveComment">
        <div class="flex flex-wrap -mx-3 mb-6">
           <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
           <div class="w-full md:w-full px-3 mb-2 mt-2">
            <label for="commentdescription" class="block text-sm font-medium text-gray-600"><strong>Comment Here</strong></label>
                <BaseInput
                v-model="comment.description"
                type="text"
                 class="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300 mt-1"
           />           
        </div>
           <div class="w-full md:w-full flex items-start md:w-full px-3">
              <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              </div>
              <button
                type="submit"
                class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Add Comment
              </button>
           </div>
        </div>
        
      </form>
  </div>
</div>

<CommentCard
    v-for="comment in comments"
    :key="comment.advisorId "
    :comment="comment"
  ></CommentCard>
</template>
