import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { StudentInfo } from '@/student'

export default{
    getStudent(perPage: number, page:number): Promise<AxiosResponse<StudentInfo[]>>{
        return apiClient.get<StudentInfo[]>('/students?_limit=' + perPage + '&_page=' + page)
    },
    getStudentById(id: number): Promise<AxiosResponse<StudentInfo>>{
        return apiClient.get<StudentInfo>('students/' + id.toString())
    },
    saveStudent(student: StudentInfo): Promise<AxiosResponse<StudentInfo>> {
        return apiClient.post<StudentInfo>('/students', student)
    },
    getStudentsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<StudentInfo[]>> {
        return apiClient.get<StudentInfo[]>('/students?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    }     

}