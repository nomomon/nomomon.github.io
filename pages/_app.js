import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

// google analytics
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-E0JLTSVL8T";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            // Send pageview with a custom path
            ReactGA.send({ hitType: "pageview", page: "/my-path" });
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, []);


    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Container>
        </>
    )
}

export default MyApp;
