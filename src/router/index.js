import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from "../views/Create.vue"
import Tag from "../views/Tag.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import { projectAuth } from "../firebase/config";

const requireAuth = (from, to, next) => {
  const user = projectAuth.currentUser;

  if (user) {
    next();

  } else {
    next({ name: "Login" });

  }
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
