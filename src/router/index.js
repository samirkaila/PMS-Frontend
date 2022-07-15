import { createWebHistory, createRouter } from "vue-router";
import VueRouteMiddleware from 'vue-route-middleware';
import AuthMiddleware from "../middleware/auth-middleware";
import AdminMiddleware from "../middleware/admin-middleware";
import SuperAdminMiddleware from "../middleware/superadmin-middleware";
import Home from "@/components/Home.vue";
import login from "@/components/login.vue";
import PageNotExist from "@/components/PageNotExist.vue";
import adminProject from "@/components/admin/project/indexProject.vue";
import TaskCreate from "@/components/admin/task/TaskCreate.vue";
import adminCreateProject from "@/components/admin/project/createProject.vue";
import adminCategory from "@/components/admin/Category.vue";
import completeTask from "@/components/admin/CompleteTask.vue";
import UsersList from "@/components/admin/user/UserIndex.vue";
import UsersEdit from "@/components/admin/user/UserEdit.vue";
import AdminEdit from "@/components/admin/admin/AdminEdit.vue";
import UserCreate from "@/components/admin/user/UserCreate.vue";
import UserAvailability from "@/components/admin/user/UserAvailibility.vue";
import UserDetail from "@/components/admin/user/UserDetail.vue";
import ManagerCreate from "@/components/admin/admin/AdminCreate.vue";
import AdminList from "@/components/admin/admin/AdminIndex.vue";
import TaskReview from "@/components/admin/task/TaskReview.vue";
import TaskEdit from "@/components/admin/task/TaskEdit.vue";
import ProjectEdit from "@/components/admin/project/ProjectEdit.vue";
import ProjectPipeline from "@/components/admin/project/ProjectPipeline.vue";
import TaskIndex from "@/components/admin/task/TaskIndex.vue";
import userProject from "@/components/user/Project.vue";
import userCompleteTask from "@/components/user/CompleteTask.vue";
import userReviewTask from "@/components/user/ReviewTasks.vue";
import Profile from "@/components/Profile.vue";
const routes = [
  {
    path: "/",
    name: "home.all",
    component: Home
  },
  {
    path: "/admin/project",
    name: "admin.project",
    component: adminProject,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/task/create",
    name: "task.create",
    component: TaskCreate,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/project/create",
    name: "project.create",
    component: adminCreateProject,
    meta: {
      middleware: [ AdminMiddleware ]
    }
    
  },
  {
    path: "/completetask",
    name: "user.complete.task",
    component: userCompleteTask,
    
  },
  {
    path: "/review-task",
    name: "user.review.task",
    component: userReviewTask,
    
  },
  {
    path: "/admin/completetask",
    name: "admin.complete.task",
    component: completeTask,
    meta: {
      middleware: [ AdminMiddleware ]
    }
    
  },
  {
    path: "/admin/category",
    name: "admin.category",
    component: adminCategory,
    meta: {
      middleware: [ AdminMiddleware ]
    }
    
  },
  {
    path: "/admin/users",
    name: "admin.users",
    component: UsersList,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/user/:id",
    name: "user.edit",
    component: UsersEdit,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/task/:id",
    name: "task.edit",
    component: TaskEdit,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/project/:id",
    name: "project.edit",
    component: ProjectEdit,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/project-pipeline",
    name: "project.pipeline",
    component: ProjectPipeline,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/user-availability",
    name: "user.availability",
    component: UserAvailability,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/user-detail/:id",
    name: "user.detail",
    component: UserDetail,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/task",
    name: "admin.task",
    component: TaskIndex,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/manager/:id",
    name: "admin.edit",
    component: AdminEdit,
    meta: {
      middleware: [ SuperAdminMiddleware ]
    }
  },
  {
    path: "/admin/admins",
    name: "admin.admins",
    component: AdminList,
    meta: {
      middleware: [ SuperAdminMiddleware ]
    }
  },
  {
    path: "/admin/task-review",
    name: "task.review",
    component: TaskReview,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/user/create",
    name: "user.create",
    component: UserCreate,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/admin/manager/create",
    name: "manager.create",
    component: ManagerCreate,
    meta: {
      middleware: [ AdminMiddleware ]
    }
  },
  {
    path: "/user/project",
    name: "user.project",
    component: userProject,
    
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      middleware: [ AuthMiddleware ]
    }
  },
  {
    path: '/404',
    name: "NotExist",
    component: PageNotExist,
  },
  {
    path: '/:catchAll(.*)',
    name: "PageNotExist",
    component: PageNotExist,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(VueRouteMiddleware({AuthMiddleware}));
router.beforeEach((to, from, next) => {
	const publicPages = ['/login'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');
	if (authRequired && !loggedIn) {next('/login');
	}else{
	next();
	}
  });
export default router;