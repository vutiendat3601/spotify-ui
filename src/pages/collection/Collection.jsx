import classNamesBinding from 'classnames/bind';

import styles from './Collection.module.scss';

const css = classNamesBinding.bind(styles);

const Collection = () => {
    return (<div className={css('wrapper')}>
        Day la collection
    </div>)
};

export default Collection;