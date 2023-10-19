export interface CourseInfo{
    id: number
    description: string
    courseid: string
    name: string
    studentHistory: CourseStudentDTO
    images: String[]
}

export interface CourseStudentDTO{
    id: number
    name: string
    surname: string
    department: string
    location: string
}