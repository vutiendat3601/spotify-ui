// import configs from '../configs/configs';
import storeRequest from '../utils/request';

// const api = `http://${configs.storeHost}/api/tracks`;

const TrackService = {
    async getTracks(page, size) {
        const tracks = await storeRequest.get('/tracks', {
            params: { page, size },
        });
        return tracks.data;
    },
};

export default TrackService;
