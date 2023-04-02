import { useReducer, useState } from 'react';
import StoreContext from './StoreContext';
import reducer, { initState } from './reducer';
import TrackService from '../services/TrackService';
import { fetchQueueTracks } from './actions';

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    useState(() => {
        (async () => {
            const trackPage = await TrackService.getTracks(1, 4);
            dispatch(fetchQueueTracks(trackPage.content));
        })();
    }, []);

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
