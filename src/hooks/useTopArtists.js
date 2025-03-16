import { axiosInstance } from "../services/axios";
import { useEffect, useState } from "react";
import { artistsLinks } from "../utils/consts";

export function useTopArtists() {
    const [artists, setArtists] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        async function getArtists() {
            try {
                setLoading(true);
                const artistIds = artistsLinks.join(",");
                const res = await axiosInstance.get(`/artists?ids=${artistIds}`);
                setArtists(res.data.artists);
                // console.log(res.data.artists);
            } catch (error) {
                console.log("Error: ", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getArtists();
    }, []);

    return {artists, isLoading, isError}
}