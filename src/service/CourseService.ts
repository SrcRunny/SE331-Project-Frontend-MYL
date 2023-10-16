import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { CourseInfo } from '@/course'

export default{
    getCourse(perPage: number, page:number): Promise<AxiosResponse<CourseInfo[]>>{
        return apiClient.get<CourseInfo[]>('/courses?_limit=' + perPage + '&_page=' + page)
    },
    getCourseById(id: number): Promise<AxiosResponse<CourseInfo>>{
        return apiClient.get<CourseInfo>('courses/' + id.toString())
    },
    saveCourse(course: CourseInfo): Promise<AxiosResponse<CourseInfo>> {
        return apiClient.post<CourseInfo>('/courses', course)
    },
    getCoursesByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<CourseInfo[]>> {
        return apiClient.get<CourseInfo[]>('/courses?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    }     
}