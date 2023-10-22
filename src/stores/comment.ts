import type { StudentInfo } from '@/student'
import { defineStore } from 'pinia'
export const useStudentStore = defineStore('student', {
    state: () => ({
        student: null as StudentInfo | null
    }),
    actions: {
        setStudent(student: StudentInfo){
            this.student = student
        }
    }
})