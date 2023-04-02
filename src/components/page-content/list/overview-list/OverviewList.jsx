import classNamesBinding from 'classnames/bind';
import ListItem from './list-item/ListItem';

import styles from './OverviewList.module.scss';

const css = classNamesBinding.bind(styles);

const OverviewList = ({ items }) => {
    return (
        <div className={css('wrapper')}>
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </div>
    );
};

export default OverviewList;
