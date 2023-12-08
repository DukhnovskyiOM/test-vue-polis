import { createRouter, createWebHashHistory } from "vue-router";
import UsersList from "../pages/UsersList.vue";
import User from "../pages/User.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "usersList",
            props: true,
            component: UsersList,
        },
        {
            path: "/user/:id/:slug",
            name: "user",
            props: true,
            component: User,
        },
    ],
});
