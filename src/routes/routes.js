import configs from '../configs/configs';
import MainLayout from '../layouts/main-layout/MainLayout';
import Home from '../pages/home/Home';
import Search from '../pages/home/Home';
import Collection from '../pages/home/Home';
import Playlist from '../pages/home/Home';

const publicRoutes = [
    {
        path: configs.routes.home,
        component: Home,
        layout: MainLayout,
    },
    {
        path: configs.routes.search,
        component: Home,
        layout: MainLayout,
    },
    {
        path: configs.routes.collection,
        component: '',
        layout: MainLayout,
    },
    {
        path: configs.routes.playlist,
        component: '',
        layout: MainLayout,
    },
];

export { publicRoutes };
