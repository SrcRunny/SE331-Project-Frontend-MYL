export interface StudentInfo{
    id: number
    studentid: string
    name: string
    surname: string
    department: string
    location: string
    images: string[]
    advisor: StudentAdvisorDTO
    courses: StudentCourseDTO[]
}

export interface StudentAdvisorDTO{
    id: number
    name: string
    surname: string
    academic_position: string
    department: string
    images: string[]
    roles: string[]
}

export interface StudentCourseDTO{
    courseid: string
    name: string
    description: string 
    images: string[]
}

export interface UserLogin{
    username : string
    email: string
    password : String
    roles: string[]
}