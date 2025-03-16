import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";


export function useArtistData(id) {
    const [artistData, setArtistData] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        async function fetchArtistData() {
            try {
                setLoading(true);
                const resArtist = await axiosInstance.get(`/artists/${id}`);
                setArtistData(resArtist.data);
                const resTracks = await axiosInstance(
                    `/artists/${id}/top-tracks?market=KZ`
                );
                setTopTracks(resTracks.data.tracks);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchArtistData();
    }, [id]);

    return {artistData, isLoading, topTracks}
}