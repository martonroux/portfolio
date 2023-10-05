import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home/Home.vue";
import Contact from "../views/Contact/Contact.vue";
import Work from "@/views/Work.vue";
import Stack from "@/views/Stack.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/work',
            name: 'work',
            component: Work
        },
        {
            path: '/stack',
            name: 'stack',
            component: Stack
        }
    ],
    history: createWebHistory(),
    scrollBehavior(_) {
        return { x: 0, y: 0 };
    }
})

export default router
