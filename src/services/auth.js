import axios from "axios"

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const url = "https://accounts.spotify.com/api/token"

export async function fetchAccessToken() {
    try {
        const { data } = await axios.post(
            url,
            new URLSearchParams({
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret
            }),
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        const token = data.access_token
        const expiresIn = Date.now() + data.expires_in * 1000 //expires_in в секундах, поэтому умножаем на 1000, чтоб перевести на милисекунды
        localStorage.setItem("token", token)
        localStorage.setItem("expiresIn", expiresIn)

        return token;
    } catch (error) {
        console.log(error);
    }
}

export async function checkAccessToken() {
    try {
        const token = localStorage.getItem("token")
        const expiresIn = localStorage.getItem("expiresIn")

        if (token && expiresIn && Date.now() < expiresIn) {
            return token
        }

        return await fetchAccessToken()
    } catch (error) {
        console.log(error);
    }
}