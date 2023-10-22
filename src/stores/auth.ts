import { defineStore } from "pinia";
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { StudentAdvisorDTO } from "@/student"
import type { UserLogin } from "@/student"

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as UserLogin | null,
        // id : null as number | null
    }),
    getters: {
        currentUserName(): string {
            return this.user?.username || ''
        },
        isAdmin(): boolean{
            return this.user?.roles.includes('ROLE_ADMIN') || false
        },
        isAdvisor(): boolean{
            return this.user?.roles.includes('ROLE_ADVISOR') || false
        },
        isStudent(): boolean{
            return this.user?.roles.includes('ROLE_STUDENT') || false
        },
        getID(): number{
            return this.user?.id || 0
        }
    },
    actions: {
        login(username: string, password: string){
            return apiClient
            .post('/api/v1/auth/authenticate', {
                username: username,
                password: password
            })
            .then((response) => {
                this.token = response.data.access_token
                this.user = response.data.user
                // this.id = response.data.student.id
                localStorage.setItem('access_token', this.token as string)
                localStorage.setItem('user', JSON.stringify(this.user))
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                return response
            })  
        },
        logout(){
            console.log('logout')
            this.token = null
            this.user = null
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
          },
          reload(token: string, user: UserLogin){
            this.token = token
            this.user = user
          },
          register(email: string, password: string, firstname: string, lastname: string, username: string){
            return apiClient
            .post('/api/v1/auth/register', {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                username: username
            })
        }
    }
})