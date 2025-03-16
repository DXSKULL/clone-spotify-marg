import axios from "axios"
import { fetchAccessToken } from "./auth"

export const axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

axiosInstance.interceptors.request.use(
    async (config) => {
        let token = localStorage.getItem("token")
        const expires_in = localStorage.getItem("expiresIn")

        // Если нет токена или текущая дата больше чем дата срока токена, 
        // то сделай новый запрос на access token
        if (!token || Date.now() >= +expires_in) {
            token = await fetchAccessToken()
        }

        config.headers.Authorization = `Bearer ${token}`

        return config
    },
    (error) => {
        console.log("Error from axios: ", error);
        return null
    }
)