import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';
import LazyLoad from 'react-lazyload';
import MainSection from '../components/MainSection/MainSection';
import ContactSection from '../components/ContactSection/ContactSection';
import PictureSection from '../components/PictureSection/PictureSection';
import PressSection from '../components/PressSection/PressSection';
import HistorySection from '../components/HistorySection/HistorySection';
// import EventsSection from '../components/EventsSection/EventsSection';
import '../style/index.scss';
import image from './1.jpg';
import applFavicon from '../favicon/apple-touch-icon.png';
import favicon from '../favicon/favicon-32x32.png';
import favicon16 from '../favicon/favicon-16x16.png';
import faviconSvg from '../favicon/safari-pinned-tab.svg';

const YANDEX_METRIKA_ID = 57001429;
const isDevelop = process.env.NODE_ENV === 'development';
const LAZY_LOAD_CONFIG = {
    offset: 100
}

const Index = () => <>
    {!isDevelop && <YMInitializer
        accounts={[YANDEX_METRIKA_ID]}
        options={{ webvisor: false }}
    />}
    <Head>
        <meta name="description" content="Помогите спасти Грушевский сквер. Множество деревьев хотят срубить и построить дом. Только вместе мы сможем остановить их." />
        <meta property="og:title" content="Грушевский сквер в опасности" />
        <meta property="og:image" content={image} />
        <title>Грушевский сквер в опасности</title>
        <link rel="apple-touch-icon" sizes="180x180" href={applFavicon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="mask-icon" href={faviconSvg} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <LazyLoad {...LAZY_LOAD_CONFIG}>
        <MainSection />
    </LazyLoad>
    <LazyLoad {...LAZY_LOAD_CONFIG}>
        <HistorySection />
    </LazyLoad>
    <LazyLoad {...LAZY_LOAD_CONFIG}>
        <PictureSection />
    </LazyLoad>
    <LazyLoad {...LAZY_LOAD_CONFIG}>
        <PressSection />
    </LazyLoad>
    <LazyLoad {...LAZY_LOAD_CONFIG}>
        <ContactSection />
    </LazyLoad>
    {/* <EventsSection /> */}
</>;

export default Index;
