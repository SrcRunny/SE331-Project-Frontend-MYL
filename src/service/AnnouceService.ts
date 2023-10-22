import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { AnnouceInfo } from '@/annouce'

export default{
    getAnnouce(perPage: number, page:number): Promise<AxiosResponse<AnnouceInfo[]>>{
        return apiClient.get<AnnouceInfo[]>('/annouces?_limit=' + perPage + '&_page=' + page)
    },
    getAnnouceById(id: number): Promise<AxiosResponse<AnnouceInfo>>{
        return apiClient.get<AnnouceInfo>('annouces/' + id.toString())
    },
    saveAnnouce(annouce: AnnouceInfo): Promise<AxiosResponse<AnnouceInfo>> {
        return apiClient.post<AnnouceInfo>('/annouces', annouce)
    },
    getAnnoucesByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AnnouceInfo[]>> {
        return apiClient.get<AnnouceInfo[]>('/annouces?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    },
    editAnnouce(id:number,annouce: AnnouceInfo): Promise<AxiosResponse<AnnouceInfo>> {
        return apiClient.post<AnnouceInfo>('/annouces/'+id.toString(), annouce)
    }   

}