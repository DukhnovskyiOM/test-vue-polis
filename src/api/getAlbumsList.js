import axios from "axios";

export const getAlbumsList = async (id) =>
    (await axios.get)(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );