import axios from "axios";

export const getUsersList = async () =>
    (await axios.get)("https://jsonplaceholder.typicode.com/users");