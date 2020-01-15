import React from 'react';
import ReactPlayer from 'react-player'
import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss'

class MainSection extends React.Component {
    render() {
        const opts = {
            playerVars: {
                autoplay: 1,
                controls: 0,
                frameborder: 0,
                allowfullscreen: 1,
                showinfo: 0,
                rel: 0,
                loop: 1,
                start: 0
            }
        };
        const reactPlayerOptions = {
            url: 'https://youtu.be/O0HeLd4vrdA',
            playing: true,
            muted: true,
            loop: true,
            className: 'main-section_video',
            width: '100%',
            height: '100%',
        };

        return (
            <div className={style['main-section']}>
                <div className={style['main-section_content']}>
                    <h1>Скверу быть</h1>
                    <h2 className={style['main-section_sub-title']}>Присоединяйтесь в Telegram <br />
                        <ExternalLink
                            href="https://t.me/skverubyt"
                            title="Ссылка на Telegram чат"
                            onClick={() => {
                                ym('reachGoal', 'open_telegram_chanel');
                            }}
                        >https://t.me/skverubyt</ExternalLink></h2>
                </div>
                <div className={style['main-section_video-background']}>
                    <div className={style['main-section_video-container']}>
                        <ReactPlayer {...reactPlayerOptions} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainSection;