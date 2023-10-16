<script setup lang="ts">
import { ref } from 'vue'
// import type { Ref } from 'vue'
// import { type EventItem } from '@/type'
// import EventService from '@/services/EventService';
// const event = ref<EventItem | null> (null)
import { useStudentStore } from '@/stores/student';
import { storeToRefs } from 'pinia';
import {useRouter} from 'vue-router';

const store = useStudentStore()
const student = storeToRefs(store).student
const id = ref(student?.value?.id)
const router = useRouter()

</script>
<template>
    <div v-if="student">
        <div id="nav">
            <router-link :to="{name: 'studentdetail', params:{id}}">Details</router-link>
        </div>
        <router-view :student="student"></router-view>
    </div>
</template>
