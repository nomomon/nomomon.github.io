import { Stack } from '@mui/material';
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'
import Link from './Link';

function Footer() {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{ fontSize: 20, width: '100%', justifyContent: 'center', mt: 12, mb: 10 }}
            alignItems="center"
        >
            {[[
                <BsLinkedin key={0} />,
                'https://www.linkedin.com/in/nomomon/'
            ], [
                <BsGithub key={0} />,
                'https://github.com/nomomon'
            ], [
                <BsTelegram key={0} />,
                'https://t.me/nomomon'
            ]].map(([icon, href], index) => (
                <Link
                    href={href}
                    target="_blank"
                    key={index}
                    sx={{
                        transition: 'color 0.2s ease-in-out',
                        color: 'black',
                        '&:hover': {
                            color: 'info.main',
                        }
                    }}
                >
                    {icon}
                </Link>
            ))}
        </Stack>
    )
}

export default Footer;