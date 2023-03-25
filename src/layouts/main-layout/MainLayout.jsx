import classNamesBinding from 'classnames/bind';

import Sidebar from '../components/sidebar/Sidebar';
import MediaControl from '../components/media-control/MediaControl';
import styles from './MainLayout.module.scss';
import Header from '../components/header/Header';

const css = classNamesBinding.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={css('wrapper')}>
            <div className={css('container')}>
                <Sidebar />
                <div className={css('content-wrapper')}>
                    <Header />
                    <div className={css('content')}>{children}</div>
                </div>
            </div>
            <MediaControl />
        </div>
    );
};

export default MainLayout;
