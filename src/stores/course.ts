import type { CourseInfo } from '@/course'
import { defineStore } from 'pinia'
export const useCourseStore = defineStore('course', {
    state: () => ({
        course: null as CourseInfo | null
    }),
    actions: {
        setCourse(course: CourseInfo){
            this.course = course
        }
    }
})