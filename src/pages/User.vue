<template>
    <div class="nav">
        <h1>{{ userName }}</h1>
        <ul>
            <li class="point" @click="$router.go(-1)">
                <div class="textBack">назад</div>
            </li>
            <router-link
                :to="{ path: `/user/${this.id}/albums` }"
                v-if="slug !== 'albums'"
            >
                <li class="point">
                    <div class="text">показать АЛЬБОМЫ</div>
                </li>
            </router-link>
            <router-link
                :to="{ path: `/user/${this.id}/posts` }"
                v-if="slug !== 'posts'"
            >
                <li class="point">
                    <div class="text">показать ПОСТЫ</div>
                </li>
            </router-link>
        </ul>
    </div>

    <div class="conteiner" v-if="slug === 'albums'">
        <h1>АЛЬБОМЫ</h1>
        <div class="item">
            <ul>
                <li v-for="album in albumsList" :key="album.id">
                    <Slider :album="album" />
                </li>
            </ul>
        </div>
    </div>

    <div class="conteiner" v-if="slug === 'posts'">
        <h1>ПОСТЫ</h1>
        <div class="item">
            <ul>
                <li v-for="post in postsList" :key="post.id">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
    name: "user",
    props: ["id", "slug"],
    components: {
        Slider,
    },
    beforeMount() {
        this.$store.dispatch("getAlbums", this.id);
        this.$store.dispatch("getPosts", this.id);
        this.$store.dispatch("getUsers");
    },
    computed: {
        postsList() {
            return this.$store.getters.postsList;
        },
        albumsList() {
            const src = this.$store.getters.albumsList;
            const result = [];
            for (let s = 0, e = 10; s < src.length; s += 10, e += 10)
                result.push(src.slice(s, e));
            return result;
        },
        userName() {
            return this.$store.getters.usersList.filter(
                (user) => user.id == this.id
            )[0]?.name;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.nav {
    list-style: none;
    width: 100%;
    background-color: white;
    padding: 20px 50px;
    position: relative;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 10px;
        .point {
            display: flex;
            cursor: pointer;
            height: 30px;
            background-color: #fac300;
            padding: 10px 20px;
            border-radius: 50px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 15px;
            position: relative;

            &:hover {
                background-color: #fcd034;
            }

            .text {
                display: flex;
                width: 250px;
                font-size: 20px;
                letter-spacing: 1px;
                font-weight: 600;
                justify-content: center;
                text-transform: uppercase;
            }

            .textBack {
                display: flex;
                color: green;
                width: 60px;
                font-size: 20px;
                letter-spacing: 1px;
                font-weight: 600;
                justify-content: center;
                text-transform: uppercase;
            }
        }
    }
}

.conteiner {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 100%;
    padding: 10px;
    gap: 15px;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        color: rgb(92, 92, 92);
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(73, 73, 73);

        ul {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 10px;

            li {
                width: 100%;
                padding: 8px;
                border-bottom: 1px solid black;
                border-radius: 12px;
                background-color: WHITE;

                h3 {
                    margin-bottom: 5px;
                }
            }
        }
    }
}
</style>
