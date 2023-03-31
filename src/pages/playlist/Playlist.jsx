import classNamesBinding from 'classnames/bind';

import styles from './Playlist.module.scss';

const css = classNamesBinding.bind(styles);

const Playlist = () => {
    return <div className={css('wrapper')}>Day la page Playlist</div>;
};

export default Playlist;
