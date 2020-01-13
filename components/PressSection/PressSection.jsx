import ym from 'react-yandex-metrika';
import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss';

const PressSection = () => <section className={style['press-section']}>
    <h2>Публикации в сми</h2>
    <ul>
        <li className={style['press-section_item']}>
            <h3>Помните шарфы на деревьях в Грушевке? Их больше нет, и вот почему</h3>
            <ExternalLink
                title="Публикация о сквере в citydog"
                href="https://citydog.by/post/zaden-gryshevsky-park-problem/"
                onClick={() => {
                    ym('reachGoal', 'open_link_citydog');
                }}
            >https://citydog.by/post/zaden-gryshevsky-park-problem/</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>Жыхары Грушаўкі абвязалі дрэвы шалікамі супраць забудовы сквэра. Фотарэпартаж</h3>
            <ExternalLink
                title="Публикация о сквере в svaboda"
                href="https://www.svaboda.org/a/30373012.html"
                onClick={() => {
                    ym('reachGoal', 'open_link_svaboda');
                }}
            >https://www.svaboda.org/a/30373012.html</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>«Часть сквера отдают для строительства дома!» Жители Грушевки вышли на улицу, чтобы «обогреть» деревья, которые могут спилить</h3>
            <ExternalLink
                title="Публикация о сквере в onliner"
                href="https://realt.onliner.by/2020/01/12/skver-12"
                onClick={() => {
                    ym('reachGoal', 'open_link_onliner');
                }}
            >https://realt.onliner.by/2020/01/12/skver-12</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>Местные жители надели на деревья в Грушевском парке шарфы. Зачем?</h3>
            <ExternalLink
                title="Публикация о сквере в citydog"
                href="https://citydog.by/post/zaden-gryshevsky-park/"
                onClick={() => {
                    ym('reachGoal', 'open_link_citydog');
                }}
            >https://citydog.by/post/zaden-gryshevsky-park/</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>Помогите спасти Грушевский сквер!</h3>
            <ExternalLink
                title="Публикация о сквере в telegra.ph"
                href="https://telegra.ph/Grushevskij-skver-07-08"
                onClick={() => {
                    ym('reachGoal', 'open_link_telegraph');
                }}
            >telegra.ph</ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>У Грушевского сквера строят временную парковку, на месте кинотеатра Авангард будет детский сад</h3>
            <ExternalLink
                title="Публикация о сквере в tut.by"
                href="https://realty.tut.by/news/offtop-realty/598699.html"
                onClick={() => {
                    ym('reachGoal', 'open_link_tutby');
                }}
            >
                Tut.by
            </ExternalLink>
        </li>
        <li className={style['press-section_item']}>
            <h3>Жители Грушевки: если тронете сквер, привяжем себя к деревьям</h3>
            <ExternalLink
                title="Публикация о сквере в sputnik"
                href="https://sputnik.by/society/20180723/1036714667/zhiteli-grushevki-gotovy-borotsya-za-skver.html"
                onClick={() => {
                    ym('reachGoal', 'open_link_sputnik');
                }}
            >
                sputnik.by
            </ExternalLink>
        </li>
    </ul>
</section>

export default PressSection;