import { createRouter, createWebHistory } from 'vue-router'
import AdvisorListView from '../views/AdvisorListView.vue'
import CourseListView from '../views/CourseListView.vue'
import StudentListView from '../views/StudentListView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import StudentDetailView from '../views/Detail/StudentDetail.vue'
import StudentFormView from '../views/StudentFormView.vue'
import AdvisorFormView from '../views/AdvisorFormView.vue'
import StudentLayoutView from '../views/Detail/StudentLayoutView.vue'
import StudentAdvisorView from '../views/Detail/StudentAdvisorView.vue'
import StudentCourseView from '../views/Detail/StudentCourseView.vue'
import StudentCommentView from '../views/Detail/StudentCommentView.vue'
import StudentService from '../service/StudentService'
import AdvisorLayoutView from '../views/Advisor/AdvisorLayoutView.vue'
import AdvisorDetailView from '../views/Advisor/AdvisorDetail.vue'
import AdvisorStudentView from '../views/Advisor/AdvisorStudentView.vue'
import AdvisorService from '@/service/AdvisorService'
import StudentEditView from '../views/StudentEditView.vue'
import AdvisorEditView from '../views/AdvisorEditView.vue'
import AnnoucementView from '../views/AnnoucementView.vue'
import AnnoucementStudentView from '../views/AnnoucementStudentView.vue'
import CommentCardView from '../components/CommentCard.vue'
import { useStudentStore } from '@/stores/student'
import { useAdvisorStore } from '@/stores/advisor'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorListView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/course',
      name: 'course',
      component: CourseListView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/studentform',
      name: 'studentform',
      component: StudentFormView
    },
    {
      path: '/advisorform',
      name: 'advisorform',
      component: AdvisorFormView
    },
    {
      path: '/studentedit/:id',
      name: 'studentedit',
      component: StudentEditView,
      props:true

    },
    {
      path: '/advisoredit/:id',
      name: 'advisoredit',
      component: AdvisorEditView,
      props:true
    },
    {
      path: '/annouce',
      name: 'annouce',
      component: AnnoucementView
    },
    {
      path: '/commentcard',
      name: 'commentcard',
      component: CommentCardView
    },
    {
      path: '/annoucestudent',
      name: 'annoucestudent',
      component: AnnoucementStudentView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') }),
      // beforeEnter: () => {
      //   const authStore = useAuthStore()
      //   const id = authStore.getID
      //   console.log(id)
      //   if (authStore.isStudent) {
      //     return router.push({
      //       name: 'studentdetail',
      //       params: { id: authStore.getID }
      //     })
      //   } else {
      //     return router.push({
      //       name: 'advisor'
      //     })
      //   }
      // }
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
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'student' }
              }
            } else {
              return { name: 'network-error' }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'studentdetail',
          component: StudentDetailView,
          props: true
        },
        {
          path: '/studentadvisor',
          name: 'studentadvisor',
          component: StudentAdvisorView,
          props: true
        },
        {
          path: '/studentcourse',
          name: 'studentcourse',
          component: StudentCourseView,
          props: true
        },
        {
          path: '/studentcomment',
          name: 'studentcomment',
          component: StudentCommentView,
          props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
        }
      ]
    },
    {
      path: '/advisor/:id',
      name: 'advisorlayout',
      component: AdvisorLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const advisorStore = useAdvisorStore()
        return AdvisorService.getAdvisorById(id)
          .then((response) => {
            advisorStore.setAdvisor(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'advisor' }
              }
            } else {
              return { name: 'network-error' }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'advisordetail',
          component: AdvisorDetailView,
          props: true
        },
        {
          path: '/advisorstudent',
          name: 'advisorstudent',
          component: AdvisorStudentView,
          props: true
        }
      ]
    }
  ]
})

export default router
