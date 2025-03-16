import { PiSealCheckFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";
import { useArtistData } from "../hooks/useArtistData";

export default function ArtistPage() {
  const { id } = useParams();
  const { artistData, isLoading, topTracks } = useArtistData(id);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="artist-wrapper">
          <div className="artist-header">
            {artistData.images && artistData.images[0]?.url && (
              <img
                src={artistData.images[0].url}
                alt={artistData.name}
                className="artist-img"
              />
            )}
            <div className="artist-content">
              <p className="artist-content__verify">
                <PiSealCheckFill />
                Подтвержденный исполнитель
              </p>
              <h1 className="artist-content__name">{artistData.name}</h1>
              <div className="artist-content__audience">
                {artistData.followers && artistData.followers.total} слушателей
                за месяц
              </div>
            </div>
          </div>
          <div className="track-table">
            <h2 className="track-table__title">Популярные треки</h2>
            <div className="track-table__body">
              {topTracks.map((item, index) => (
                <TrackItem
                  key={item.id}
                  isExtended={true}
                  trackName={item.name}
                  trackIndex={index}
                  trackDuration={item.duration_ms}
                  trackImage={
                    item.album &&
                    item.album.images &&
                    item.album.images[0]?.url &&
                    item.album.images[0].url
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
