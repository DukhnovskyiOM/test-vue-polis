<template>
    <div class="wrapper">
        <h1>Список пользователей</h1>
        <ul class="content">
            <li v-for="user in usersList" :key="user.id">
                <router-link :to="{ path: `/user/${user.id}/albums` }"  class="itemWrapp">{{
                    user.name
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'usersList',
  beforeMount() {
    this.$store.dispatch("getUsers")
  },
  computed: {
    usersList() {
      return this.$store.getters.usersList
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.wrapper {
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 20px;

    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .itemWrapp {
            padding: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: start;
            background-color: #fac300;

            &:hover {
                background-color: #fcd034;
            }
        }
    }
}
</style>
