import classNamesBinding from 'classnames/bind';

import styles from './ListItem.module.scss';
import images from '../../../../../assets/images/images';

const css = classNamesBinding.bind(styles);

const PlayButtonIcon = images.pageContent.playButtonIcon;

const ListItem = ({ item }) => {
    console.log(item);
    return (
        <div className={css('wrapper')}>
            <div className={css('thumbnail')}>
                <img src={item.thumbnail} alt="Item thumbnail" />
            </div>
            <div className={css('content')}>
                <p className={css('content-detail')}>{item.content}</p>
                <div className={css('btn-play')}>
                    <PlayButtonIcon />
                </div>
            </div>
        </div>
    );
};

export default ListItem;
