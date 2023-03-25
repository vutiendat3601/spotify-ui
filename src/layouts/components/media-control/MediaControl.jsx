import classNamesBinding from 'classnames/bind';

import styles from './MediaControl.module.scss';

const css = classNamesBinding.bind(styles);

const MediaControl = () => {
    return <footer className={css('wrapper')}>MediaControl</footer>;
};

export default MediaControl;
