import classNamesBinding from 'classnames/bind';

import styles from './MainLayout.module.scss';
import Navbar from '../components/sidebar/Navbar';
import NowPlaying from '../components/now-playing/NowPlaying';

const css = classNamesBinding.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div class={css('container')}>
            <div class={css('navbar')}>
                <Navbar />
            </div>
            <div class={css('content')}>
                <h1>This is content</h1>
            </div>
            <footer class={css('footer')}>
                <NowPlaying />
            </footer>
        </div>
    );
};

export default MainLayout;
