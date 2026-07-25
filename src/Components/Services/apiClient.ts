import axios from "axios";



const apiClient = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASE_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        Accept: "application/json"
    }
})
 
export default apiClient



