import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { AdvisorInfo } from '@/advisor'

export default{
    getAdvisor(perPage: number, page:number): Promise<AxiosResponse<AdvisorInfo[]>>{
        return apiClient.get<AdvisorInfo[]>('/advisors?_limit=' + perPage + '&_page=' + page)
    },
    getAdvisorById(id: number): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.get<AdvisorInfo>('advisors/' + id.toString())
    },
    saveAdvisor(advisor: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>> {
        return apiClient.post<AdvisorInfo>('/advisors', advisor)
    },
    getAdvisorsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>> {
        return apiClient.get<AdvisorInfo[]>('/advisors?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    }     
}