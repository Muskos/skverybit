import style from './style.scss';
import video from "./hrushauka.mp4"

const HistorySection = () => <section className={style['history-section']}>
    <h2>История событий</h2>
    <div className={style['history-section_container']}>
        <div className={style['history-section_tree']} />
        <video
            className={style['history-section_video']}
            src={video}
            autoPlay
            loop
        />
        <ul>
            <li className={style['history-section_item']}>В 2004 году был принят план детального проектирования района в границах пр.Дзержинского-пр.Жукова-ул.Железнодорожная, в котором содержались и границы Грушевского сквера.</li>
            <li className={style['history-section_item']}>В декабре 2008 скверу собственно было присвоено название Грушевский сквер.</li>
            <li className={style['history-section_item']}>В ноябре 2012 сквер был передан на баланс зеленстрою Московского района, по документам площадь составила 2,16 Га.</li>
            <li className={style['history-section_item']}>В ноябре 2016 ДатчСтару во временное пользование выдали часть сквера площадью 0,2 Га для постройки газовой котельной с ее последующим демонтажом.</li>
            <li className={style['history-section_item']}>31.12.16 вступает в силу обновленный закон о растительном мире, в частности введена ст.33-1, по которой в скверах, парках и бульварах нельзя ничего строить, кроме детсадов, академий и университетов, питомников и оранжерей, а также до утверждения схемы озелененных территорий запрещается уменьшение площадей данных территорий, особенно, если не выполняется норматив по озелененности и обеспеченности жителей озелененными территориями общего пользования.</li>
            <li className={style['history-section_item']}>В апреле 2018 мингорисполком меняет своим решением площадь сквера с 2,16 до 1,72 Га, а в июне того же года в нарушение закона о растительном мире вместо котельной организует временную до 30.06.2019 автостоянку для жильцов строящегося дома. При этом два независимых друг от друга органа власти (комитет архитектуры и комитет природных ресурсов) подтверждают в ответах на мои обращения тот факт, что уменьшение площади сквера было вызвано необходимостью вместить строящийся дом.</li>
            <li className={style['history-section_item']}>20.07.2018 в администрации московского района происходит обсуждение доклада экологической оценки схемы озелененных территорий, на котором площадь Грушевского сквера была озвучена как 1,6 Га, а его форма стала напоминать прописную букву г. Кстати, такой формы сквер быть не может в силу того, что участок, на котором планировалось размещение части сквера, был отдан ДатчСтару для строительства и обслуживание дома еще в феврале 2018 (сейчас на нем расположена стоянка и детская площадка, поэтому озелененной территорией считать нельзя).
                Итого с апреля по июль 2018 площадь сквера умудрились сократить на 0,56 Га.
                При этом обеспеченность озелененными территориями общего пользования жителей Московского района составила 3,5 м2/чел при нормативе 8-10 м2/чел. Но самое интересное то, что в нашем микрорайоне на данный момент обеспеченность озелененными территориями общего пользования - 1,2 м2/чел или 13,3% от норматива, а уровень общей озелененности состваляет 40,4%.
                То есть по факту схема озелененных территорий еще не была утверждена (официально она действует с 10.01.2019), а сквер уменьшили в нарушение ст.33-1 закона о растительном мире.</li>
            <li className={style['history-section_item']}>В мае 2019 администрацией уже не Московского, а почему-то Цетрального района срок эксплуатации временной стоянки в границах сквера был продлен до 30.04.2020.
                При этом по новой редакции закона о растительном мире в существующих скверах, парках запрещено любое строительство и размещение любых сооружений, кроме малых архитектурных форм и другого благоустройства.</li>
        </ul>
    </div>
</section>

export default HistorySection;