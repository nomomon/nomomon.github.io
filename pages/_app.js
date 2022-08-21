import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/globals.css'
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
    return (
        <StyledEngineProvider>
            <Header />
            <Container maxWidth='lg'>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Container>
        </StyledEngineProvider>
    )
}

export default MyApp
