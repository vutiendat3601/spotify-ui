import { createContext } from 'react';

const tracks = [
    {
        title: 'Nơi Này Có Anh',
        code: 'Noi-Nay-Co-Anh-Son-Tung-M-TP-N2Ncdcb0a3ZZN5T0',
        thumbnail: 'noi-nay-co-anh_thumbnail-1T3MT1MMaUb4UMNa.jpg',
        publishedYear: 2016,
        listenCnt: 24,
    },
];

const TracksContext = createContext(tracks);

export default TracksContext;
