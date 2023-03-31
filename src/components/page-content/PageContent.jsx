import classNamesBinding from 'classnames/bind';

import styles from './PageContent.module.scss';
import HeaderBackground from './header-background/HeaderBackground';

const css = classNamesBinding.bind(styles);

const PageContent = ({ header, children }) => {
    return (
        <div className={css('wrapper')}>
            <div className={css('header-bg')}>
                <HeaderBackground
                    img={header.img}
                    bgColor={header.bgColor}
                />
            </div>
            <div className={css('header-spacer')}></div>
            <div className={css('content')}>{children}</div>
        </div>
    );
};

export default PageContent;
