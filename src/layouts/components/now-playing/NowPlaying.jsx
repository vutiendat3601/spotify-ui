import classNamesBinding from 'classnames/bind';

import styles from './NowPlaying.module.scss';
import thumbnail from '../../../assets/images/vo-tuyet-voi-nhat_thumbnail.jpg';
import images from '../../../assets/images/images';

const css = classNamesBinding.bind(styles);
const HeartIcon = images.mediaControl.heartIconSvg;
const NoHeartIcon = images.mediaControl.noHeartIconSvg;
const PicInPicIcon = images.mediaControl.picInPicIconSvg;

const ShuffleIcon = images.mediaControl.shuffleIconSvg;
const PreviousIcon = images.mediaControl.previousIconSvg;
const PauseIcon = images.mediaControl.pauseIconSvg;
const NextIcon = images.mediaControl.nextIconSvg;
const RepeatIcon = images.mediaControl.repeatIconSvg;

const LyricsIcon = images.mediaControl.lyricsIconSvg;
const DevicePickerIcon = images.mediaControl.devicePickerIconSvg;
const VolumeIcon = images.mediaControl.volumeIconSvg;
const QueueIcon = images.mediaControl.queueIconSvg;

const NowPlaying = () => {
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
                    <button className={css('btn', 'btn-pause')}>
                        <PauseIcon />
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
                <button className={css('btn')}>
                    <QueueIcon />
                </button>
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
        </div>
    );
};

export default NowPlaying;
