import classNamesBinding from 'classnames/bind';

import styles from './Header.module.scss';

const css = classNamesBinding.bind(styles);

const Header = () => {
    return <div className={css('wrapper')}>Header dayl ban oi</div>;
};

export default Header;
