import classNamesBinding from 'classnames/bind';
import OverviewList from '../../components/page-content/list/overview-list/OverviewList';
import PlaylistList from '../../components/page-content/list/playlist-list/PlaylistList';
import PageContent from '../../components/page-content/PageContent';
import Section from '../../components/page-content/section/Section';
import styles from './Home.module.scss';

const img = 'https://i.scdn.co/image/ab67618600001016ed253d846adc9f7919795c73';

const css = classNamesBinding.bind(styles);
const Home = () => {
    return (
        <div className={css('wrapper')}>
            <PageContent
                header={{
                    bgColor: 'rgb(72, 32, 176)',
                }}
            >
                <Section
                    heading={{
                        title: 'Good evening',
                        large: true,
                    }}
                >
                    <OverviewList items={overviews} />
                </Section>
                <Section
                    heading={{
                        title: 'Made For Dat Vu',
                        size: 'medium',
                        href: 'https://www.google.com',
                    }}
                >
                    <PlaylistList items={madeForYouList} />
                </Section>
                {/*   <Section
                    heading={{
                        title: 'Your top mixes',
                        size: 'medium',
                        href: 'https://www.google.com',
                    }}
                />
                <Section
                    heading={{
                        title: 'Recently played',
                        size: 'medium',
                        href: 'https://www.google.com',
                    }}
                />
                <Section
                    heading={{
                        title: 'Episodes for you',
                        size: 'medium',
                        href: 'https://www.google.com',
                    }}
                /> */}
            </PageContent>
        </div>
    );
};

export default Home;

/* Dummy */
const overviews = [
    {
        thumbnail:
            'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
        content: 'Liked songs',
    },
    {
        thumbnail:
            'https://i.scdn.co/image/ab6761610000e5ebd5ea41fc0fe1da072c750097',
        content: 'AMEE',
    },
    {
        thumbnail:
            'https://i.scdn.co/image/ab67706c0000da84a3ec644f64fca0f22a4af9c0',
        content: 'World Cup Songs 🏆 Qatar 2022 Football Anthems',
    },
    {
        thumbnail:
            'https://i.scdn.co/image/ab6761610000e5eb1036554ddc5f791a4f5dcfc3',
        content: 'Sơn Tùng M-TP',
    },
    {
        thumbnail:
            'https://i.scdn.co/image/ab6761610000e5eb1036554ddc5f791a4f5dcfc3',
        content: 'Sơn Tùng M-TP',
    },
    {
        thumbnail:
            'https://i.scdn.co/image/ab6761610000e5eb1036554ddc5f791a4f5dcfc3',
        content: 'Sơn Tùng M-TP',
    },
];

const madeForYouList = [
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
    {
        name: 'Daily Mix 3',
        artists: ['Sơn Tùng M-TP', 'Đen', 'AMEE'],
        thumbnail:
            'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb3c02f4fb4cc9187c488afd50/3/en/default',
        href: 'https://open.spotify.com/playlist/37i9dQZF1E3a3kI0Aqsn4t',
        description: 'This is description',
    },
];
