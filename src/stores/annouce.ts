import type { AnnouceInfo } from '@/annouce'
import { defineStore } from 'pinia'
export const useAnnouceStore = defineStore('annouce', {
    state: () => ({
        annouce: null as AnnouceInfo | null
    }),
    actions: {
        setAnnouce(annouce: AnnouceInfo){
            this.annouce = annouce
        }
    }
})