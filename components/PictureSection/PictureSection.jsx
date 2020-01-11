import style from './style.scss';
import image1 from './1.jpg';
import image2 from './2.jpg';

const PictureSection = () => <section>
    <h2 className={style['picture-section_title']}>Фотографии с места событий</h2>
    <ul className={style['picture-section_image-container']}>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src={image1}
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src={image2}
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src="https://picsum.photos/1024/768"
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src="https://picsum.photos/1024/768"
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src="https://picsum.photos/1024/768"
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src="https://picsum.photos/1024/768"
                alt="Фотография сквера" />
        </li>
        <li className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src="https://picsum.photos/1024/768"
                alt="Фотография сквера" />
        </li>
    </ul>
</section>

export default PictureSection