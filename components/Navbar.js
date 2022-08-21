import { useRouter } from 'next/router';
import { Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
function Navbar() {
    const router = useRouter();

    return (<>
        <Stack
            direction="row"
            spacing={2}
            sx={{ width: '100%', mb: 6, mt: 3 }}
        >
            <Link
                href="/"
                color="inherit"
                underline='none'
            >
                <Typography
                    sx={{
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        fontSize: '.8em'
                    }}
                >
                    nomomon
                </Typography>
            </Link>
            <Divider orientation='vertical' flexItem></Divider>
            {[[
                'About', '/'
            ], [
                'Projects', '/projects'
            ], [
                'Blog', '/blog'
            ]].map(([pageTitle, href], index) => {
                const isActive = href == '/' ?
                    href === router.asPath :
                    router.asPath.includes(href);

                return (
                    <Link
                        href={href}
                        color="inherit"
                        underline='none'
                        key={index}
                    >
                        <Typography
                            sx={{
                                fontWeight: isActive ? 800 : 400,
                                textTransform: 'uppercase',
                                fontSize: '.8em',
                                transition: 'color 0.2s ease-in-out',
                                '&:hover': {
                                    color: 'info.main',
                                    cursor: 'pointer',
                                }
                            }}
                        >
                            {pageTitle}
                        </Typography>
                    </Link>
                )
            })}
        </Stack>
    </>)
}

export default Navbar;