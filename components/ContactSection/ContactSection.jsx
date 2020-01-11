import ExternalLink from '../ExternalLink/ExternalLink';
import style from './style.scss';

const ContactSection = () => <section className={style['contact-section']}>
    <h2>Контакты</h2>
    <p className={style['contact-section_text']}>С нами можно связаться в Telegram чате:</p>
    <ExternalLink href="https://t.me/skverubyt" title="Ссылка на Telegram чат">https://t.me/skverubyt</ExternalLink>
</section>

export default ContactSection;