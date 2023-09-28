import {createRouter, createWebHashHistory} from "vue-router";
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
    history: createWebHashHistory()
})

export default router
