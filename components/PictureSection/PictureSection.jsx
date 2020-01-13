import style from './style.scss';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';

const imageArray = [image1, image2, image3, image4, image5, image6]

const PictureSection = () => <section>
    <h2 className={style['picture-section_title']}>Фотографии с места событий</h2>
    <ul className={style['picture-section_image-container']}>
        {imageArray.map((item, index) => <li key={index} className={style['picture-section_image-item']}>
            <img
                className={style['picture-section_image']}
                src={item}
                alt="Фотография сквера" />
        </li>
        )}
    </ul>
</section>

export default PictureSection