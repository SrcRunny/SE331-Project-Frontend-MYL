<script setup lang="ts">
// import type { StudentInfo } from '@/student'
import type { PropType } from 'vue'

// const props = defineProps({
//     student: {
//         type: Object as PropType<StudentInfo>,
//         require: true    
//     }
// })

</script>

<template>
<!-- comment form -->
<div class="flex justify-center items-center flex-wrap">  
  <div class="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg">
     <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
        <div class="flex flex-wrap -mx-3 mb-6">
           <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg"> <strong>Comment from advisor</strong> </h2>
           <div class="w-full md:w-full px-3 mb-2 mt-2">
            <h1>Description</h1>           
            </div>
           <div class="w-full md:w-full flex items-start md:w-full px-3">
           </div>
        </div>
      </form>
  </div>
</div>
</template>
