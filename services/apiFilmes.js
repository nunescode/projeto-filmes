import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQwOTA2NzgzMDNiMjRiNGFlOTU5OTFmNmM5YWVmMyIsInN1YiI6IjY0MzQ5MWU4OTJlNTViMDBiNjhhZGFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Piybkq_RO7FkiLQKor8yw9fJxe68rV6oF3mImiScw8s' 
    }
})

export default apiFilmes