import classNamesBinding from 'classnames/bind';

import { useContext, useRef, useState } from 'react';
import images from '../../../assets/images/images';
import thumbnail from '../../../assets/images/vo-tuyet-voi-nhat_thumbnail.jpg';
import TracksContext from '../../../contexts/TracksContext';
import styles from './NowPlaying.module.scss';
import { Link } from 'react-router-dom';
import useStore from '../../../hooks/useStore';

const css = classNamesBinding.bind(styles);
const HeartIcon = images.nowPlaying.heartIconSvg;
const NoHeartIcon = images.nowPlaying.noHeartIconSvg;
const PicInPicIcon = images.nowPlaying.picInPicIconSvg;

const ShuffleIcon = images.nowPlaying.shuffleIconSvg;
const PreviousIcon = images.nowPlaying.previousIconSvg;
const PlayIcon = images.nowPlaying.playIconSvg;
const PauseIcon = images.nowPlaying.pauseIconSvg;
const NextIcon = images.nowPlaying.nextIconSvg;
const RepeatIcon = images.nowPlaying.repeatIconSvg;

const LyricsIcon = images.nowPlaying.lyricsIconSvg;
const DevicePickerIcon = images.nowPlaying.devicePickerIconSvg;
const VolumeIcon = images.nowPlaying.volumeIconSvg;
const QueueIcon = images.nowPlaying.queueIconSvg;

const NowPlaying = () => {
    const [playing, setPlaying] = useState(false);
    const [state, dispatch] = useStore();
    const audioRef = useRef();

    const queuePlayingTrack = state.queueTracks.find(
        (track) =>
            track.code ===
            /* state.queueTrackPlayingCode */ 'Tu-Su-Orange-3a15dO145N4ZNN20'
    );

    const handleBtnPlay = (e) => {
        if (!playing) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setPlaying((prev) => !prev);
    };

    return (
        <div className={css('wrapper')}>
            <div className={css('now-playing')}>
                <div className={css('track')}>
                    <div className={css('track-thumbnail')}>
                        <img src={thumbnail} alt="" />
                    </div>
                    <div className={css('track-info')}>
                        <a href="/" className={css('track-title')}>
                            Vợ tuyệt vời nhất
                        </a>
                        <a href="/" className={css('track-artist')}>
                            Vũ Duy Khánh
                        </a>
                    </div>
                    <button className={css('btn')}>
                        <HeartIcon />
                    </button>
                    <button className={css('btn')}>
                        <PicInPicIcon />
                    </button>
                </div>
            </div>

            <div className={css('player-controls')}>
                <div className={css('control-buttons')}>
                    <div className={css('control-buttons-left')}>
                        <button className={css('btn')}>
                            <ShuffleIcon />
                        </button>
                        <button className={css('btn')}>
                            <PreviousIcon />
                        </button>
                    </div>
                    <button
                        className={css('btn', 'btn-play')}
                        onClick={handleBtnPlay}
                    >
                        {playing ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <div className={css('control-buttons-right')}>
                        <button className={css('btn')}>
                            <NextIcon />
                        </button>
                        <button className={css('btn')}>
                            <RepeatIcon />
                        </button>
                    </div>
                </div>
                <div className={css('playback-bar')}>
                    <div className={css('time-elapsed')}>01:45</div>
                    <div className={css('progressbar-wrapper')}>
                        <div className={css('progressbar')}></div>
                    </div>
                    <div className={css('track-duration')}>05:01</div>
                </div>
            </div>
            <div className={css('player-toolbar')}>
                <button className={css('btn')}>
                    <LyricsIcon />
                </button>
                <Link className={css('btn')} to={'/queue'}>
                    <QueueIcon />
                </Link>
                <button className={css('btn')}>
                    <DevicePickerIcon />
                </button>
                <button className={css('btn')}>
                    <VolumeIcon />
                </button>

                <div
                    className={css('progressbar-wrapper', 'progressbar-volume')}
                >
                    <div className={css('progressbar')}></div>
                </div>
            </div>
            <audio
                ref={audioRef}
                src={queuePlayingTrack?.links[1]?.href}
                onEnded={(e) => setPlaying((prev) => !prev)}
            />
        </div>
    );
};

export default NowPlaying;
