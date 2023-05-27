import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.THEMVDB_API_KEY 
    }
})

export default apiFilmes