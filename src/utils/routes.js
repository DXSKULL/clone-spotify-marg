import { ROUTES } from "../utils/consts";
import TopAlbumsPage from "../pages/TopAlbumsPage";
import TopArtistsPage from "../pages/TopArtistsPage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";
import AlbumPage from "../pages/AlbumPage";
import ArtistPage from "../pages/ArtistPage";
import SearchPage from "../pages/SearchPage";

export const routes = [
    {
        path: ROUTES.TOP_ALBUMS_PAGE,
        element: TopAlbumsPage
    },
    {
        path: ROUTES.ARTISTS_PAGE,
        element: TopArtistsPage
    },
    {
        path: ROUTES.SETTINGS_PAGE,
        element: SettingsPage
    },
    {
        path: ROUTES.ALBUMS_PAGE,
        element: AlbumPage
    },
    {
        path: ROUTES.SINGLE_ARTIST_PAGE,
        element: ArtistPage
    },
    {
        path: ROUTES.SEARCH_PAGE,
        element: SearchPage
    },
    {
        path: "*",
        element: NotFoundPage
    }
]