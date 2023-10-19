export interface CourseInfo{
    id: number
    description: string
    courseid: string
    name: string
    studentHistory: CourseStudentDTO
    images: string[]
}

export interface CourseStudentDTO{
    id: number
    name: string
    surname: string
    department: string
    location: string
}