import React from 'react';
import YouTube from 'react-youtube';
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

        return (
            <div className={style['main-section']}>
                <h1 className={style['main-section_title']}>Скверу быть</h1>
                <div className={style['main-section_video-background']}>
                    <YouTube
                        videoId="O0HeLd4vrdA"
                        opts={opts}
                        containerClassName={style['main-section_video-container']}
                        className={style['main-section_video']}
                        onReady={this._onReady}
                    />
                </div>
            </div>
        );
    }

    _onReady(event) {
        // event.target.pauseVideo();
        event.target.setVolume(0);
        event.target.playVideo();
    }
}

export default MainSection;