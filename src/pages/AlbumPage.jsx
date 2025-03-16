import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";
import { axiosInstance } from "../services/axios";

export default function AlbumPage() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [albumTracks, setAlbumTracks] = useState([]);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/albums/${id}?market=KZ`);
        // console.log(data);
        setAlbumData(res.data);
        setAlbumTracks(res.data.tracks.items);
        // console.log("Tracks.items: ", data.tracks.items);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbumData();
  }, [id]);

  return (
    <div className="wrapper">
      <div className="album-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="album-header">
              {albumData.images && albumData.images[0]?.url && (
                <img
                  src={albumData.images[0].url}
                  alt={albumData.name}
                  className="album-img"
                />
              )}
              <div className="album-content">
                <p className="album-content__type">Альбом</p>
                <h1 className="album-content__name">{albumData.name}</h1>
                <div className="album-content__author">
                  {albumData.artists && (
                    <span>
                      {albumData.artists.map((item) => `${item.name} `)}
                    </span>
                  )}
                  <div className="album-content__circle"></div>
                  <p>
                    {albumData.release_date &&
                      albumData.release_date.substring(0, 4)}
                  </p>
                  <div className="album-content__circle"></div>
                  <p>{albumData.total_tracks} треков, 42 мин. 31 сек.</p>
                </div>
              </div>
            </div>
            <div className="track-table">
              <div className="track-table__header">
                <div className="track-header__text">
                  <MdNumbers />
                </div>
                <div className="track-header__text">Название</div>
                <div className="track-header__text">
                  <FaRegClock />
                </div>
              </div>
              <div className="track-table__body">
                {albumTracks.map((track, index) => (
                  <TrackItem
                    key={track.id}
                    trackName={track.name}
                    trackIndex={index}
                    trackAuthor={track.artists && track.artists}
                    trackDuration={track.duration_ms}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
