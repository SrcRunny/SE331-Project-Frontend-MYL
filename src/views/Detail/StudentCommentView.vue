<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CommentService from '@/service/CommentService';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import BaseInput from '@/components/BaseInput.vue';
import Swal from 'sweetalert2';
import type { CommentInfo } from '@/comment';
import CommentCard from "@/components/CommentCard.vue";

const store = useMessageStore();
const router = useRouter();
const comments = ref<CommentInfo[]>([]);
const comment = ref<CommentInfo>({
    id: 0,
    description: ''
});

function saveComment() {
    CommentService.saveComment(comment.value)
    .then((response) => {
        console.log(response.data);
        const savedComment = response.data;

        comments.value.push(savedComment);

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
            <label for="commentdescription" class="block text-sm font-medium text-gray-600">Comment Here</label>
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
    :key="comment.id"
    :comment="comment"
  ></CommentCard>
</template>
