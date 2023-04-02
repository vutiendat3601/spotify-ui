import { FETCH_QUEUE_TRACKS } from './constants';

const initState = {
    queueTracks: [
        {
            title: '',
            thumbnail: '',
            code: '',
            listenCnt: 0,
            publishedYear: -1,
            links: [],
            artists: [],
        },
    ],
    queueTrackPlayingCode: '',
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_QUEUE_TRACKS:
            return { ...state, queueTracks: payload };
        default:
            console.log(action);
    }
};

export { initState };
export default reducer;
