import { createRouter, createWebHistory } from 'vue-router'
import AdvisorListView from '../views/AdvisorListView.vue'
import CourseListView from '../views/CourseListView.vue'
import StudentListView from '../views/StudentListView.vue'
import StudentDetailView from '../views/Detail/StudentDetail.vue'
import StudentLayoutView from '../views/Detail/StudentLayoutView.vue'
import StudentService from '../service/StudentService'
import { useStudentStore } from '@/stores/student'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1' )})

    },
    {
      path: '/course',
      name: 'course',
      component: CourseListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1' )})

    },
    {
      path: '/',
      name: 'student',
      component: StudentListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1' )})
    },
    {
      path: '/student/:id',
      name: 'studentlayout',
      component: StudentLayoutView, 
      props: true,
        beforeEnter: (to) => {
          const id: number = parseInt(to.params.id as string)
          const studentStore = useStudentStore()
          return StudentService.getStudentById(id)
          .then((response) => {
            studentStore.setStudent(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404){
              return{
                name: '404-resource',
                params: { resource: 'student'}
              }
            }else{
              return { name: 'network-error'}
            }
          })
        },
      children:[
        {
          path:'',
          name: 'studentdetail',
          component: StudentDetailView,
          props: true
        }
      ]
    },
    
  ]
})

export default router
