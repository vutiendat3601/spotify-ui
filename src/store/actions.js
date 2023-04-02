import { FETCH_QUEUE_TRACKS } from './constants';

const fetchQueueTracks = (payload) => ({
    type: FETCH_QUEUE_TRACKS,
    payload,
});

export { fetchQueueTracks };
