import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Animals from "@/views/Animals.vue";
import Animal from "@/views/Animal.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:type",
    name: "Animals",
    component: Animals,
    props: true,
  },
  {
    path: "/animal/:type/:id",
    component: Animal,
    name: "Animal",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
