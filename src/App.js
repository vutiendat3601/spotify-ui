import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

/* import styles from './App.module.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(styles); */

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout;
                        return (
                            <Route
                                index
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
