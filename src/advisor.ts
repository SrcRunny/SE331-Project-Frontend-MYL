export interface AdvisorInfo{
    id: number
    name: string
    surname: string
    academic_position: string
    department: string
    images: string[]
    students: AdvisorStudentDTO
}

export interface AdvisorStudentDTO{
    id: number
    name: string
    surname: string
    department: string
    location: string
}
