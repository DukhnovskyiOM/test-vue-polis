import { createStore } from "vuex";
import { getUsersList } from "../api/getUsersList";
import { getPostsList } from "../api/getPostsList";
import { getAlbumsList } from "../api/getAlbumsList";

const store = createStore({
    state() {
        return {
            usersList: [],
            albumsList: [],
            postsList: [],
        };
    },
    getters: {
        usersList(state) {
            return state.usersList;
        },
        albumsList(state) {
            return state.albumsList;
        },
        postsList(state) {
            return state.postsList;
        },
    },
    mutations: {
        loadUsersList(state, users) {
            state.usersList = users;
        },
        loadPostsList(state, posts) {
            state.postsList = posts;
        },
        loadAlbumsList(state, albums) {
            state.albumsList = albums;
        },
    },
    actions: {
        async getUsers({ commit }) {
            try {
                const res = (await getUsersList()).data;
                commit("loadUsersList", res);
            } catch (error) {
                alert(error);
            }
        },
        async getPosts({ commit }, id) {
            try {
                const res = (await getPostsList(id)).data;
                commit("loadPostsList", res);
            } catch (error) {
                alert(error);
            }
        },
        async getAlbums({ commit }, id) {
            try {
                const res = (await getAlbumsList(id)).data;
                commit("loadAlbumsList", res);
            } catch (error) {
                alert(error);
            }
        },
    },
});

export default store;
