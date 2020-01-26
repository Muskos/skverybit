import ym from 'react-yandex-metrika';
import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss';

const isDevelop = process.env.NODE_ENV === 'development';
const news = [
    {
        title: 'Грушевка будет каменной? Жители воюют за последний сквер: "Тут 1,2 кв м озелененности на человека, при норме в 8-10"',
        linkTitle: 'Публикация о сквере в realt.by',
        onClick: () => ym('reachGoal', 'open_link_realtby'),
        href: 'https://realt.by/news/article/26594/',
    },
    {
        title: 'Жители Грушевки ждут Наталью Кочанову: на деревьях в сквере появились необычные таблички',
        linkTitle: 'Публикация о сквере в blizko.by',
        onClick: () => ym('reachGoal', 'open_link_blizkoby'),
        href: 'https://blizko.by/notes/zhiteli-grushevki-zhdut-natalyu-kochanovu-na-derevyah-v-skvere-poyavilis-neobychnye-tablichki',
    },
    {
        title: 'Наталья Кочанова и глава Минска Анатолий Сивак прогулялись по Грушевскому скверу и сказали остановить вырубку деревьев',
        linkTitle: 'Публикация о сквере в kp.by',
        onClick: () => ym('reachGoal', 'open_link_kpby'),
        href: 'https://www.kp.by/online/news/3744549/',
    },
    {
        title: 'Грушевский сквер, новые детсады, снос: замглавы администрации Московского района пообщался с жителями о будущем Грушевки',
        linkTitle: 'Публикация о сквере в minsknews.by',
        onClick: () => ym('reachGoal', 'open_link_minsknewsby'),
        href: 'https://minsknews.by/grushevskij-skver-novye-detsady-snos-zamglavy-administraczii-moskovskogo-rajona-poobshhalsya-s-zhitelyami-o-budushhem-grushevki/',
    },
    {
        title: '"Мы не хотим здесь эти 5 подъездов!" Местные жители отстаивают Грушевский сквер, но чиновники утверждают, что все "по закону"',
        linkTitle: 'Публикация о сквере в realt.by',
        onClick: () => ym('reachGoal', 'open_link_realtby'),
        href: 'https://realt.by/news/article/26594/',
    },
    {
        title: 'Посмотрите, как перед приездом Кочановой марафетят Грушевку',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://news.tut.by/society/669979.html',
    },
    {
        title: 'Бацька адказвае ў Маскоўскім раёне за будоўлю, а сын працуе ў кампаніі, якой аддалі пад забудову Грушаўскі сквер',
        linkTitle: 'Публикация о сквере в Наша Нива',
        onClick: () => ym('reachGoal', 'open_link_nn'),
        href: 'https://m.nn.by/articles/244935/',
    },
    {
        title: '«Не вырубать, пока не приживутся новые деревья». Минчане обсудили с чиновниками судьбу Грушевского сквера',
        linkTitle: 'Публикация о сквере в onliner',
        onClick: () => ym('reachGoal', 'open_link_onliner'),
        href: 'https://realt.onliner.by/2020/01/24/grushevskogo-skvera',
    },
    {
        title: 'Бурная встреча жителей Грушевки с чиновниками после общения с Кочановой: «Это же преступление!»',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://realty.tut.by/news/building/669862.html',
    },
    {
        title: 'Качанава паабяцала пратэстоўцам прыехаць у Грушаўскі сквер',
        linkTitle: 'Публикация о сквере в Наша Нива',
        onClick: () => ym('reachGoal', 'open_link_nn'),
        href: 'https://m.nn.by/articles/244930/',
    },
    {
        title: 'Бурная встреча жителей Грушевки с чиновниками после общения с Кочановой: «Это же преступление!»',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://realty.tut.by/news/building/669862.html',
    },
    {
        title: 'Активисты Грушевки ходили в Администрацию президента. Вот что там сказали',
        linkTitle: 'Публикация о сквере в citydog',
        onClick: () => ym('reachGoal', 'open_link_citydog'),
        href: 'https://citydog.by/post/gryshevsky-park-kochanova/',
    },
    {
        title: 'Защитники Грушевского сквера встретились с Натальей Кочановой',
        linkTitle: 'Публикация о сквере в naviny.by',
        onClick: () => ym('reachGoal', 'open_link_navinyby'),
        href: 'https://naviny.by/new/20200123/1579794790-zashchitniki-grushevskogo-skvera-vstretilis-s-nataley-kochanovoy',
    },
    {
        title: 'Людзі працягваюць пратэст супраць будоўлі ў менскім сквэры',
        linkTitle: 'Публикация о сквере в svaboda',
        onClick: () => ym('reachGoal', 'open_link_svaboda'),
        href: 'https://www.svaboda.org/a/30391809.html',
    },
    {
        title: '«Нам не паказалі ніводнай паперы». Жыхары дабіваюцца праўды пра высечку ў Грушаўскім сквэры',
        linkTitle: 'Публикация о сквере в svaboda',
        onClick: () => ym('reachGoal', 'open_link_svaboda'),
        href: 'https://www.svaboda.org/a/30391657.html',
    },
    {
        title: 'Конфликт по Грушевскому скверу. Застройщик рассказал, сколько деревьев вырубят, а сколько сохранят',
        linkTitle: 'Публикация о сквере в news.21.by',
        onClick: () => ym('reachGoal', 'open_link_news21by'),
        href: 'https://news.21.by/society/2020/01/22/1965559.html',
    },
    {
        title: 'Минчане просят Лукашенко спасти от вырубки Грушевский сквер',
        linkTitle: 'Публикация о сквере в opr.news',
        onClick: () => ym('reachGoal', 'open_link_oprnews'),
        href: 'http://opr.news/279e7929200122ru_by',
    },
    {
        title: 'Абураны народ выйшаў уначы | Гневный народ вышел ночью',
        linkTitle: 'Публикация о сквере в belsat',
        onClick: () => ym('reachGoal', 'open_link_belsat'),
        href: 'https://www.youtube.com/watch?v=WJjSVxBheK4&feature=youtu.be',
    },
    {
        title: 'Не все деревья вырубят? «Датч Стар» прокомментировал конфликт с застройкой у Грушевского сквера',
        linkTitle: 'Публикация о сквере в realt.by',
        onClick: () => ym('reachGoal', 'open_link_realtby'),
        href: 'https://m.realt.by/news/article/26576/',
    },
    {
        title: 'Строители под покровом темноты пытались поставить забор вокруг Грушевского сквера. Местные вызвали милицию',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://news.tut.by/society/669609.html',
    },
    {
        title: 'Будаўнікі ў цемры ставяць плот вакол Грушаўскага сквэру. Жыхары выклікаюць міліцыю. ФОТА',
        linkTitle: 'Публикация о сквере в svaboda',
        onClick: () => ym('reachGoal', 'open_link_svaboda'),
        href: 'https://www.svaboda.org/a/30389849.html',
    },
    {
        title: 'Вакол Грушаўскага скверу будуюць плот: дрэвы да канца знішчаць?',
        linkTitle: 'Публикация о сквере в belsat',
        onClick: () => ym('reachGoal', 'open_link_belsat'),
        href: 'https://belsat.eu/news/vakol-grushauskaga-skveru-buduyuts-plot-drevy-da-kantsa-znishchats/',
    },
    {
        title: 'Под покровом темноты рабочие ставят забор вокруг сносимого Грушевского сквера',
        linkTitle: 'Публикация о сквере в onliner',
        onClick: () => ym('reachGoal', 'open_link_onliner'),
        href: 'https://realt.onliner.by/2020/01/21/skver-13',
    },
    {
        title: 'Жители Грушевки попросили помощи у президента: «Никто другой нашу проблему решить не может»',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://realty.tut.by/news/building/669474.html',
    },
    {
        title: 'Абаронцы Грушаўскага сквэру ў Менску зьвярнуліся да Лукашэнкі. ВІДЭА',
        linkTitle: 'Публикация о сквере в svaboda',
        onClick: () => ym('reachGoal', 'open_link_svaboda'),
        href: 'https://www.svaboda.org/a/30388600.html',
    },
    {
        title: 'Жители Грушевки записали видеобращение, чтобы спасти сквер (видео)',
        linkTitle: 'Публикация о сквере в citydog',
        onClick: () => ym('reachGoal', 'open_link_citydog'),
        href: 'https://citydog.by/post/zaden-grushevskiy-skver-video/',
    },
    {
        title: '«Просим остановить уничтожение единственного зеленого островка». Жители Грушевки записали видеообращение к президенту',
        linkTitle: 'Публикация о сквере в onliner',
        onClick: () => ym('reachGoal', 'open_link_onliner'),
        href: 'https://realt.onliner.by/2020/01/21/videoobrashhenie-3',
    },
    {
        title: '«Адзіная магчымасць абараніць сквер». Жыхары Грушаўкі запісалі зварот да Лукашэнкі',
        linkTitle: 'Публикация о сквере в belsat',
        onClick: () => ym('reachGoal', 'open_link_belsat'),
        href: 'https://belsat.eu/in-focus/adzinaya-magchymasts-abaranits-skver-zhyhary-grushauki-zapisali-zvarot-da-lukashenki/',
    },
    {
        title: '«Долго они провисеть не смогли». Вчера жители Грушевки «обогревали» сквер, а уже сегодня коммунальщики поснимали все шарфики',
        linkTitle: 'Публикация о сквере в onliner',
        onClick: () => ym('reachGoal', 'open_link_onliner'),
        href: 'https://realt.onliner.by/2020/01/13/grushevka-5',
    },
    {
        title: 'Помните шарфы на деревьях в Грушевке? Их больше нет, и вот почему',
        linkTitle: 'Публикация о сквере в citydog',
        onClick: () => ym('reachGoal', 'open_link_citydog'),
        href: 'https://citydog.by/post/zaden-gryshevsky-park-problem/',
    },
    {
        title: 'Жыхары Грушаўкі абвязалі дрэвы шалікамі супраць забудовы сквэра. Фотарэпартаж',
        linkTitle: 'Публикация о сквере в svaboda',
        onClick: () => ym('reachGoal', 'open_link_svaboda'),
        href: 'https://www.svaboda.org/a/30373012.html',
    },
    {
        title: '«Часть сквера отдают для строительства дома!» Жители Грушевки вышли на улицу, чтобы «обогреть» деревья, которые могут спилить',
        linkTitle: 'Публикация о сквере в onliner',
        onClick: () => ym('reachGoal', 'open_link_onliner'),
        href: 'https://realt.onliner.by/2020/01/12/skver-12',
    },
    {
        title: 'Местные жители надели на деревья в Грушевском парке шарфы. Зачем?',
        linkTitle: 'Публикация о сквере в citydog',
        onClick: () => ym('reachGoal', 'open_link_citydog'),
        href: 'https://citydog.by/post/zaden-gryshevsky-park/',
    },
    {
        title: 'Помогите спасти Грушевский сквер!',
        linkTitle: 'Публикация о сквере в telegra.ph',
        onClick: () => ym('reachGoal', 'open_link_telegraph'),
        href: 'https://telegra.ph/Grushevskij-skver-07-08',
    },
    {
        title: 'У Грушевского сквера строят временную парковку, на месте кинотеатра Авангард будет детский сад',
        linkTitle: 'Публикация о сквере в tut.by',
        onClick: () => ym('reachGoal', 'open_link_tutby'),
        href: 'https://realty.tut.by/news/offtop-realty/598699.html',
    },
    {
        title: 'Жители Грушевки: если тронете сквер, привяжем себя к деревьям',
        linkTitle: 'Публикация о сквере в sputnik',
        onClick: () => ym('reachGoal', 'open_link_sputnik'),
        href: 'https://sputnik.by/society/20180723/1036714667/zhiteli-grushevki-gotovy-borotsya-za-skver.html',
    }
]

const PressSection = () => <section className={style['press-section']}>
    <h2>Публикации в сми</h2>
    <ul>
        {news.map(((newsItem, index) => <li
            key={index}
            className={style['press-section_item']}
        >
            <h3>{newsItem.title}</h3>
            <ExternalLink
                title={newsItem.linkTitle}
                href={newsItem.href}
                onClick={() => !isDevelop ? newsItem.onClick : {}}
            >{newsItem.href}</ExternalLink>
        </li>))}
    </ul>
</section>

export default PressSection;