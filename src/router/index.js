import { createRouter, createWebHashHistory } from "vue-router";
import UsersList from "../pages/UsersList.vue";
import User from "../pages/User.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/test-vue-polis",
            name: "usersList",
            props: true,
            component: UsersList,
        },
        {
            path: "/test-vue-polis/user/:id/:slug",
            name: "user",
            props: true,
            component: User,
        },
    ],
});
