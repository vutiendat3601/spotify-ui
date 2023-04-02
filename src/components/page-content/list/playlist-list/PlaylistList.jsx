import classNamesBinding from 'classnames/bind';
import Card from './card/Card';

import styles from './PlaylistList.module.scss';

const css = classNamesBinding.bind(styles);

const PlaylistList = ({ items }) => {
    return (
        <div className={css('wrapper')}>
            {items.map((item, index) => (
                <Card
                    key={index}
                    thumbnail={item.thumbnail}
                    title={item.name}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default PlaylistList;
