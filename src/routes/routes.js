import configs from '../configs/configs';
import MainLayout from '../layouts/main-layout/MainLayout';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Collection from '../pages/collection/Collection';
import Playlist from '../pages/playlist/Playlist';
import Artist from '../pages/artist/Artist';
import Queue from '../pages/queue/Queue';

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
        layout: MainLayout,
    },
    {
        path: configs.routes.search,
        component: Search,
        layout: MainLayout,
    },
    {
        path: configs.routes.collection,
        component: Collection,
        layout: MainLayout,
    },
    {
        path: configs.routes.playlist,
        component: Playlist,
        layout: MainLayout,
    },
    {
        path: configs.routes.artist,
        component: Artist,
        layout: MainLayout,
    },
    {
        path: configs.routes.queue,
        component: Queue,
        layout: MainLayout,
    },
];

export { publicRoutes };
