import React, { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";
import Loader from "../components/shared/Loader";
import { useSearchParams } from "react-router-dom";
import TrackItem from "../components/tracks/TrackItem";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const [isLoading, setLoading] = useState(false);
  const [searchedTracks, setSearchedTracks] = useState([]);

  useEffect(() => {
    async function fetchSearchTracks() {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get("/search?", {
          params: {
            q: searchParams.get("query"),
            type: "track",
            market: "KZ",
            limit: 10,
          },
        });
        console.log(data.tracks.items);
        setSearchedTracks(data.tracks.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSearchTracks();
  }, [searchParams.get("query"), searchParams]);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="wrapper-title">Результаты поиска</h1>
          <div className="search-list">
            {searchedTracks.map((track, i) => (
              <TrackItem
                key={track.id}
                trackName={track.name}
                trackAuthor={track.artists && track.artists}
                trackIndex={i}
                trackDuration={track.duration_ms}
                isExtended={true}
                trackImage={
                  track.album &&
                  track.album.images &&
                  track.album.images[0]?.url &&
                  track.album.images[0].url
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
