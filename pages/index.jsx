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
