import classNamesBinding from 'classnames/bind';
import Heading from './heading/Heading';

import styles from './Section.module.scss';

const css = classNamesBinding.bind(styles);

const Section = ({ heading, children }) => {
    return (
        <section className={css('wrapper')}>
            <Heading
                title={heading.title}
                href={heading.href}
                large={heading.large}
            />
            <div className={css('content')}>{children}</div>
        </section>
    );
};

export default Section;
