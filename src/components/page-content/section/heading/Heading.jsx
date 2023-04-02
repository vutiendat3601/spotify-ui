import classNamesBinding from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Heading.module.scss';

const css = classNamesBinding.bind(styles);

const Heading = ({ title, href, large = false }) => {
    const Comp = href ? Link : 'div';

    return (
        <div className={css('wrapper')}>
            <Comp className={css('title')} to={href}>
                <h2 className={css('title-text',{ 'hover-underline': href, large })}>
                    {title}
                </h2>
            </Comp>
            {href && (
                <a className={css('href')} href={href}>
                    Show all
                </a>
            )}
        </div>
    );
};

export default Heading;
