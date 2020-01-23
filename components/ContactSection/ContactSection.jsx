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
    >Telegram</ExternalLink>
    <br /> <br />
    <p className={style['contact-section_text']}>За новостями можно следить в Viber чате:</p>
    <ExternalLink
        href="https://invite.viber.com/?g2=AQBKuET7rc2MBkruMUBObAgBmTzGRRm6JrGe7Vp2vGAB%2FXqiHHSA%2BMeamvcTy%2FTv"
        title="Ссылка на Viber канал"
        onClick={() => {
            ym('reachGoal', 'open_Viber_chanel');
        }}
    >Viber</ExternalLink>

</section>

export default ContactSection;