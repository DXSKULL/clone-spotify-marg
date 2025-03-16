import React from "react";
import AlbumList from "../components/albums/AlbumList";

const TopAlbumsPage = () => {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Популярные альбомы</h1>
      <AlbumList />
    </div>
  );
};

export default TopAlbumsPage;
