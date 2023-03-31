import classNamesBinding from 'classnames/bind';

import styles from './HeaderBackground.module.scss';

const css = classNamesBinding.bind(styles);

const HeaderBackground = ({ img, bgColor }) => {
    return (
        <div
            className={css('wrapper', {
                'no-img': !img,
            })}
            style={{ backgroundColor: bgColor }}
        >
            {img && (
                <img className={css('bg-img')} src={img} alt="img" />
            )}
        </div>
    );
};

export default HeaderBackground;
