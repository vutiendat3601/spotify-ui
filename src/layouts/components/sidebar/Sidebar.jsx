import classNamesBinding from 'classnames/bind';

import styles from './Sidebar.module.scss';
import images from '../../../assets/images/images';

const SidebarLogo = images.sidebar.sidebarLogoSvg;
const SidebarHomeIcon = images.sidebar.sidebarHomeIconSvg;
const SidebarSearchIcon = images.sidebar.sidebarSearchIconSvg;
const SidebarCollectionIcon = images.sidebar.sidebarCollectionIconSvg;
const SidebarCreatePlaylistIcon = images.sidebar.sidebarCreatePlaylistIconSvg;
const SidebarLikedSongsIcon = images.sidebar.sidebarLikedSongsIconSvg;
const SidebarYourEpisodesIcon = images.sidebar.sidebarYourEpisodesSvg;

console.log(SidebarLogo);
const css = classNamesBinding.bind(styles);
const Sidebar = () => {
    return (
        <nav
            className={css('wrapper')}
            onMouseDown={(e) => {
                console.log(e.clientX);
            }}
        >
            <a className={css('logo')} href="#">
                <SidebarLogo />
            </a>
            <ul className={css('navbar', 'main-navbar')}>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <SidebarHomeIcon className={css('nav-icon')} />
                        <span>Home</span>
                    </a>
                </li>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <SidebarSearchIcon className={css('nav-icon')} />
                        <span>Search</span>
                    </a>
                </li>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <SidebarCollectionIcon className={css('nav-icon')} />
                        <span>Your Library</span>
                    </a>
                </li>
            </ul>
            <div className={css('navbar', 'second-navbar')}>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <div
                            className={css(
                                'nav-icon-wrapper',
                                'create-playlist-icon-wrapper'
                            )}
                        >
                            <SidebarCreatePlaylistIcon />
                        </div>
                        <span>Create Playlist</span>
                    </a>
                </li>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <div
                            className={css(
                                'nav-icon-wrapper',
                                'liked-songs-icon-wrapper'
                            )}
                        >
                            <SidebarLikedSongsIcon
                                className={css('nav-icon')}
                            />
                        </div>
                        <span>Liked Songs</span>
                    </a>
                </li>
                <li className={css('nav-item')}>
                    <a className={css('nav-link')}>
                        <div
                            className={css(
                                'nav-icon-wrapper',
                                'your-episodes-icon-wrapper'
                            )}
                        >
                            <SidebarYourEpisodesIcon
                                className={css('nav-icon')}
                            />
                        </div>
                        <span>Your Episodes</span>
                    </a>
                </li>
                <div className={css('seperator')}>
                    <div className={css('seperator-shape')}></div>
                </div>
                <ul className={css('my-playlist')}>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                    <li className={css('nav-item')}>
                        <a className={css('nav-link')}>
                            <span>My Playlist #1</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
