import classNamesBinding from 'classnames/bind';

import styles from './Header.module.scss';
import avatar from '../../../assets/images/AvatarIcon.jpg';
import images from '../../../assets/images/images';

const BackButtonIcon = images.header.backButtonIcon;
const ForwardButtonIcon = images.header.forwardButtonIcon;
const ArrowDownIcon = images.header.arrowDownIcon;

const css = classNamesBinding.bind(styles);

const Header = ({ children }) => {
    return (
        <header className={css('wrapper')}>
            <div className={css('left-controls')}>
                <button className={css('btn')}>
                    <BackButtonIcon />
                </button>
                <button className={css('btn')}>
                    <ForwardButtonIcon />
                </button>
            </div>
            <div className={css('content')}>{}</div>
            <div className={css('right-controls')}>
                <button className={css('btn')}>Upgrade</button>
                <button className={css('btn', 'profile')}>
                    <figure className={css('avatar')}>
                        <img
                            src={avatar}
                            alt="Elephant at sunset"
                            width="28px"
                            height="28px"
                        />
                    </figure>
                    <span className={css('profile-name')}>Dat Vu</span>
                    <div className={css('arrow-down')}>
                        <ArrowDownIcon />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
