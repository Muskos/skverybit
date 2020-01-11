import style from './style.scss';

const ExternalLink = (props) => <a
    target="_blank"
    className={style['external-link']}
    {...props}
>
    {props.children}
</a>

export default ExternalLink;