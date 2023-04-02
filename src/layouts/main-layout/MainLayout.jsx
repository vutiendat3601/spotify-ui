import { useState, useEffect } from 'react';
import classNamesBinding from 'classnames/bind';

import Header from '../components/header/Header';
import NowPlaying from '../components/now-playing/NowPlaying';
import Navbar from '../components/sidebar/Navbar';
import styles from './MainLayout.module.scss';
import TracksContext from '../../contexts/TracksContext';
import useStore from '../../hooks/useStore';
import actions, { setNowPlayingTrack } from '../../store/actions';

const css = classNamesBinding.bind(styles);

const MainLayout = ({ children }) => {
    return (
        <div className={css('container')}>
            <div className={css('navbar')}>
                <Navbar />
            </div>
            <div className={css('topbar')}>
                <Header />
            </div>
            <div className={css('content')}>{children}</div>
            <footer className={css('footer')}>
                <NowPlaying />
            </footer>
        </div>
    );
};

export default MainLayout;
