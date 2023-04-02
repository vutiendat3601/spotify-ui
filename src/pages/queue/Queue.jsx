import classNamesBinding from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';

import TracksContext from '../../contexts/TracksContext';
import styles from './Queue.module.scss';
import useStore from '../../hooks/useStore';

const css = classNamesBinding.bind(styles);

const Queue = () => {
    const [state, dispatch] = useStore();

    return (
        <div className={css('wrapper')}>
            {/* <ul>
                {tracks.map((track, index) => {
                    return (
                        <li key={index}>
                            <h5>{track.title}</h5>
                            <h5>Listen: {track.listenCnt}</h5>
                            <h5>Code: {track.code}</h5>
                            <audio
                                ref={(el) =>
                                    (trackAudioRef.current[index] = el)
                                }
                                controls
                                src={track.links[1].href}
                                onEnded={(e) => {
                                    fetch(
                                        `http://localhost:8080/api/tracks/listen-cnt-increment/${track.code}`,
                                        { method: 'put' }
                                    );
                                    if (Date.now() < stopDate) {
                                        trackAudioRef.current[
                                            index < tracks.length - 1
                                                ? index + 1
                                                : 0
                                        ].play();
                                    }
                                }}
                            />
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
};

export default Queue;
