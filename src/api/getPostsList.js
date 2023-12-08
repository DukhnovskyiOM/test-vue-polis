import axios from "axios";

export const getPostsList = async (id) =>
    (await axios.get)(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );