import React from 'react';
import ReactPlayer from 'react-player'
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
                <h1 className={style['main-section_title']}>Скверу быть</h1>
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