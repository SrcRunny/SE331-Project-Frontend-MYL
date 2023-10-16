export interface StudentInfo{
    id: number
    studentid: string
    name: string
    surname: string
    department: string
    location: string
    images: string[]
    advisor: StudentAdvisorDTO
    courses: StudentCourseDTO
}

export interface StudentAdvisorDTO{
    id: number
    name: string
    academic_position: string
    department: string
}

export interface StudentCourseDTO{
    courseid: string
    name: string
    description: string 
}