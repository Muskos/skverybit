import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss';

const PressSection = () => <section className={style['press-section']}>
    <h2>Публикации в сми</h2>
    <ul>
        <li className={style['press-section_item']}>
            <h3>Помогите спасти Грушевский сквер!</h3>
            <ExternalLink
                title="Публикация о сквере в telegra.ph"
                href="https://telegra.ph/Grushevskij-skver-07-08"
            >telegra.ph</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>У Грушевского сквера строят временную парковку, на месте кинотеатра Авангард будет детский сад</h3>
            <ExternalLink
                title="Публикация о сквере в tut.by"
                href="https://realty.tut.by/news/offtop-realty/598699.html"
            >
                Tut.by
            </ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>Жители Грушевки: если тронете сквер, привяжем себя к деревьям</h3>
            <ExternalLink
                title="Публикация о сквере в sputnik"
                href="https://sputnik.by/society/20180723/1036714667/zhiteli-grushevki-gotovy-borotsya-za-skver.html"
            >
                sputnik.by
            </ExternalLink>
        </li>
    </ul>
</section>

export default PressSection;