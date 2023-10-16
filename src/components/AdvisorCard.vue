<script setup lang="ts">
import type { AdvisorInfo } from '@/advisor'
import type { PropType } from 'vue'

const props = defineProps({
    advisor: {
        type: Object as PropType<AdvisorInfo>,
        require: true    
    }
})
</script>

<template>
<div class="card w-96 bg-base-100 shadow-xl box animate__animated animate__fadeInLeft">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{ advisor?.name  }} {{ advisor?.surname }}</h2>
    <p>Department : {{ advisor?.department  }}</p>
    <p>Position : {{ advisor?.academic_position  }}</p>



    <div class="card-actions justify-end  mt-3">
      <button class="btn btn-primary">View Detail</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.box{
  display: inline-block;
  margin: 1%;
}

</style>