import ym from 'react-yandex-metrika';
import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss';

const ContactSection = () => <section className={style['contact-section']}>
    <h2>Контакты</h2>
    <p className={style['contact-section_text']}>С нами можно связаться в Telegram чате:</p>
    <ExternalLink
        href="https://t.me/skverubyt"
        title="Ссылка на Telegram чат"
        onClick={() => {
            ym('reachGoal', 'open_telegram_chanel');
        }}
    >https://t.me/skverubyt</ExternalLink>
</section>

export default ContactSection;