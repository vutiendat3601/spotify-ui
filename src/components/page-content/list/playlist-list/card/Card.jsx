import classNamesBinding from 'classnames/bind';

import styles from './Card.module.scss';

const css = classNamesBinding.bind(styles);

const Card = ({ thumbnail, title, description }) => {
    return (
        <div className={css('wrapper')}>
            <div className={css('thumbnail')}>
                <img src={thumbnail} alt="Item thumbnail" />
            </div>
            <div className={css('content')}>
                <h1 className={css('title')}>{title}</h1>
                <h1 className={css('description')}>{description}</h1>
            </div>
        </div>
    );
};

export default Card;
