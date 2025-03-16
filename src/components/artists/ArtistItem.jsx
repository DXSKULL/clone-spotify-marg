import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/consts";

export default function ArtistItem({id, artistImage, artistName}) {
  return (
    <Link to={ROUTES.SINGLE_ARTIST_PAGE.replace(":id", id)} className="artist-item">
      <img
        src={artistImage}
        alt={artistName}
        className="artist-poster"
      />
      <h4 className="artist-name">{artistName}</h4>
      <p className="artist-type">Исполнитель</p>
    </Link>
  );
}
