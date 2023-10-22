import apiClient from './AxiosClient'
import type { AxiosResponse } from 'axios'
import type { CommentInfo } from '@/comment'

export default{
    getComment(perPage: number, page:number): Promise<AxiosResponse<CommentInfo[]>>{
        return apiClient.get<CommentInfo[]>('/comments?_limit=' + perPage + '&_page=' + page)
    },
    getCommentById(id: number): Promise<AxiosResponse<CommentInfo>>{
        return apiClient.get<CommentInfo>('comments/' + id.toString())
    },
    saveComment(comment: CommentInfo): Promise<AxiosResponse<CommentInfo>> {
        return apiClient.post<CommentInfo>('/comments', comment)
    },
    getCommentsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<CommentInfo[]>> {
        return apiClient.get<CommentInfo[]>('/comments?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    }     
}