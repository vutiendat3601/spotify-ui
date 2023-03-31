import classNamesBinding from 'classnames/bind';

import styles from './ListItem.module.scss';

const css = classNamesBinding.bind(styles);

const ListItem = ({ item }) => {
    const { artists, name, href, thumbnail, description } = item;

    return (
        <div className={css('wrapper')}>
            <div className={css('thumbnail')}>
                <img src={item.thumbnail} alt="Item thumbnail" />
            </div>
            <div className={css('content')}>
                <h1 className={css('title')}>{item.name}</h1>
                <h1 className={css('description')}>
                    {artists ? artists.join(', ') + ' and more': description}
                </h1>
            </div>
        </div>
    );
};

export default ListItem;
