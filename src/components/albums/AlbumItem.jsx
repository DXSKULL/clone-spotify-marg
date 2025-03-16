import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/consts";

export default function AlbumItem({
  imageUrl,
  authorName,
  albumName,
  albumId,
}) {
  return (
    <Link
      to={ROUTES.ALBUMS_PAGE.replace(":id", albumId)}
      className="album-item"
    >
      <img src={imageUrl} alt={authorName} className="album-poster" />
      <h4 className="album-title">{albumName}</h4>
      <p className="album-artist">{authorName}</p>
    </Link>
  );
}
