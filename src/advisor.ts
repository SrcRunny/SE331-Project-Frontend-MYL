export interface AdvisorInfo{
    id: number
    name: string
    surname: string
    academic_position: string
    department: string
    images: string[]
    ownStudents: AdvisorStudentDTO[]
}

export interface AdvisorStudentDTO{
    id: number
    studentid: string
    name: string
    surname: string
    department: string
    location: string
    images: string[]
}

export interface AdvisorAnnouceDTO{
    id: number
    file: string[]
    title: string
    description: string
}