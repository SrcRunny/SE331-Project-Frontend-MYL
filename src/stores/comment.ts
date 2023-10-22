import type { CommentInfo } from '@/comment'
import { defineStore } from 'pinia'
export const useCommentStore = defineStore('comment', {
    state: () => ({
        comment: null as CommentInfo | null
    }),
    actions: {
        setComment(comment: CommentInfo){
            this.comment = comment
        }
    }
})