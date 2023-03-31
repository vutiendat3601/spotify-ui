import classNamesBinding from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '../../../assets/images/images';
import routes from '../../../configs/routes';
import styles from './Navbar.module.scss';

const AppLogo = images.sidebar.appLogoSvg;
const HomeIcon = images.sidebar.homeIconSvg;
const SearchIcon = images.sidebar.searchIconSvg;
const CollectionIcon = images.sidebar.collectionIconSvg;
const CreatePlaylistIcon = images.sidebar.createPlaylistIconSvg;
const LikedSongsIcon = images.sidebar.likedSongsIconSvg;
const YourEpisodesIcon = images.sidebar.yourEpisodesSvg;

const css = classNamesBinding.bind(styles);
const Navbar = () => {
    return (
        <nav className={css('wrapper')}>
            <div className={css('inner')}>
                <Link className={css('logo')} to={routes.home}>
                    <AppLogo />
                </Link>
                <ul className={css('navbar', 'main-navbar')}>
                    <li className={css('nav-item')}>
                        <Link className={css('nav-link')} to={routes.home}>
                            <div className={css('nav-icon')}>
                                <HomeIcon />
                            </div>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={css('nav-item')}>
                        <Link className={css('nav-link')} to={routes.search}>
                            <div className={css('nav-icon')}>
                                <SearchIcon />
                            </div>
                            <span>Search</span>
                        </Link>
                    </li>
                    <li className={css('nav-item')}>
                        <Link
                            className={css('nav-link')}
                            to={routes.collection}
                        >
                            <div className={css('nav-icon')}>
                                <CollectionIcon />
                            </div>
                            <span>Your Library</span>
                        </Link>
                    </li>
                </ul>
                <div className={css('navbar-wrapper')}>
                    <ul className={css('navbar', 'second-navbar')}>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <div className={css('nav-icon')}>
                                    <CreatePlaylistIcon />
                                </div>
                                <span>Create Playlist</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <div
                                    className={css(
                                        'nav-icon',
                                        'liked-songs-icon'
                                    )}
                                >
                                    <LikedSongsIcon />
                                </div>
                                <span>Liked Songs</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <div
                                    className={css(
                                        'nav-icon',
                                        'your-episodes-icon'
                                    )}
                                >
                                    <YourEpisodesIcon />
                                </div>
                                <span>Your Episodes</span>
                            </Link>
                        </li>
                    </ul>
                    <div className={css('seperator')}>
                        <div className={css('seperator-line')}></div>
                    </div>
                    <ul className={css('navbar', 'playlist-navbar')}>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>
                                    My Playlist #1My Playlist #1My Playlist #1My
                                    Playlist #1My Playlist #1
                                </span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                        <li className={css('nav-item')}>
                            <Link className={css('nav-link')}>
                                <span>My Playlist #1</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={css('resizer')}></div>
        </nav>
    );
};

export default Navbar;
