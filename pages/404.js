import { Typography } from '@mui/material'
import Head from 'next/head';

export default function NotFound() {
    return <>
        <Head>
            <title>nomomon | not found {':('}</title>
        </Head>
        <Typography
            variant="h4"
            sx={{ fontWeight: 800, textTransform: 'uppercase' }}
        >
            Page not found
        </Typography>
    </>
}