import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
