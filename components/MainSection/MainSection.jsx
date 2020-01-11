import style from './style.scss'

const MainSection = () => <div>
    <iframe
        className={style['main-section_video']}
        src={`https://www.youtube.com/embed/TeRcQ3GS2wk`}
        frameBorder="0"
    />
</div>;

export default MainSection;