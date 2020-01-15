import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';
import MainSection from '../components/MainSection/MainSection';
import ContactSection from '../components/ContactSection/ContactSection';
import PictureSection from '../components/PictureSection/PictureSection';
import PressSection from '../components/PressSection/PressSection';
import '../style/index.scss';
import image from './1.jpg';

const YANDEX_METRIKA_ID = 57001429;
const isDevelop = process.env.NODE_ENV === 'development';

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
    <MainSection />
    <PictureSection />
    <PressSection />
    <ContactSection />
</>;

export default Index;
