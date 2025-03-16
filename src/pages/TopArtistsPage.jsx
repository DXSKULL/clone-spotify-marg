import React from "react";
import ArtistList from "../components/artists/ArtistList";

const TopArtistsPage = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Популярные артисты</h1>
      <ArtistList />
    </div>
  );
};

export default TopArtistsPage;
