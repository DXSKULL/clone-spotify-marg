import React from "react";
import ArtistItem from "./ArtistItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { useTopArtists } from "../../hooks/useTopArtists";

const ArtistList = () => {
  const { artists, isLoading, isError } = useTopArtists();
  return (
    <div className="artist-wrapper">
      <div className="artist-grid">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          artists.map((item) => (
            <ArtistItem
              artistImage={item.images[0].url}
              artistName={item.name}
              key={item.id}
              id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ArtistList;
