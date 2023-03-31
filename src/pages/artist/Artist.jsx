import classNamesBinding from 'classnames/bind';
import PageContent from '../../components/page-content/PageContent';

import styles from './Artist.module.scss';

const img =
    'https://i.scdn.co/image/ab67618600001016ed253d846adc9f7919795c73';

const css = classNamesBinding.bind(styles);

const Artist = () => {
    return (
        <div className={css('wrapper')}>
            <PageContent headerimg={img}>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
                <h1>Day la page Artist</h1>
            </PageContent>
        </div>
    );
};

export default Artist;
