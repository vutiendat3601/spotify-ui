import classNamesBinding from 'classnames/bind';

import styles from './Search.module.scss';

const css = classNamesBinding.bind(styles);

const Search = () => {
    return <div className={css('wrapper')}>Day la page Search</div>;
};

export default Search;
