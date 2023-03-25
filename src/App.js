import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import images from './assets/images/images';
import { publicRoutes } from './routes/routes';

function App() {
    const SidebarLogo = images.sidebarLogoSvg;
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
