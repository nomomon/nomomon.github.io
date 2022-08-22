import { Avatar, Typography, Chip, Stack, Tooltip, useMediaQuery, Link } from '@mui/material';
import { MdOutlinePlace, MdWorkOutline } from 'react-icons/md';
import { BsLinkedin, BsGithub, BsStackOverflow, BsTelegram } from 'react-icons/bs';
import Head from 'next/head';

function About() {
    const desktop = useMediaQuery('(min-width:700px)');

    return (<>
        <Head>
            <title>nomomon | about</title>
        </Head>
        <Stack
            direction={desktop ? 'row' : 'column'}
            spacing={1}
            alignItems="center"
        >
            <Avatar
                alt="Mansur Nurmukhambetov"
                src="/images/me.png"
                sx={{
                    width: 250, height: 250, mr: desktop ? 2 : 'auto', ml: desktop ? 0 : 'auto'
                }}
            />
            < Stack
                direction="column"
                spacing={1}
                alignItems={desktop ? "flex-start" : "center"}
                sx={{ textAlign: desktop ? 'left' : 'center' }}
            >
                <Typography
                    variant="h5"
                    sx={{ fontWeight: 800, textTransform: 'uppercase' }}
                >
                    Mansur Nurmukhambetov
                </Typography>
                <Typography
                    sx={{ fontWeight: 'fontWeightLight', mb: 1 }}
                    color="text.secondary"
                >
                    <MdWorkOutline style={{ marginBottom: -2, marginRight: 4 }} />
                    Data Scientist / Developer @ Researchable
                </Typography>
                <Typography
                    sx={{ fontWeight: 'fontWeightLight', mb: 1 }}
                >
                    About me in 2 words
                </Typography>
                <Typography
                    sx={{ fontWeight: 'fontWeightLight', mb: 1 }}
                    color="text.secondary"
                >
                    <MdOutlinePlace style={{ marginBottom: -2, marginRight: 4 }} />
                    Groningen, The Netherlands
                </Typography>
                <Stack direction="row" spacing={1}>
                    {
                        [
                            "Python",
                            "DS/ML stack",
                            "JavaScript",
                            "React"
                        ].map((item, index) => {
                            if (index == 1) {
                                return (
                                    <Tooltip
                                        title="Numpy, Pandas, Scikit Learn, Tensorflow, Keras, etc."
                                        placement="top"
                                        key={index}
                                    >
                                        <Chip
                                            key={index}
                                            label={item}
                                        />
                                    </Tooltip>
                                )
                            } else {
                                return (
                                    <Chip
                                        key={index}
                                        label={item}
                                    />
                                )

                            }
                        })
                    }
                </Stack>
                <br />
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ fontSize: 24 }}
                    alignItems="center"
                >
                    {[[
                        <BsLinkedin key={0} />,
                        'https://www.linkedin.com/in/nomomon/'
                    ], [
                        <BsGithub key={0} />,
                        'https://github.com/nomomon'
                    ], [
                        <BsStackOverflow key={0} />,
                        'https://stackoverflow.com/users/15930948/mansur'
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
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'info.main',
                                }
                            }}
                        >
                            {icon}
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </Stack >

        <Typography sx={{ mt: 4, fontWeight: 'fontWeightLight' }}>
            {"I'm Mansur, team-oriented and creative data scientist with two years of experience in data processing and machine learning. Certified student pursuing a bachelor’s degree in artificial intelligence offering expertise in statistics and mathematics, research and data analysis. I develop ML models and deploy them to progressive web apps (PWAs). I like to find and make interesting applications of existing machine learning models."}
        </Typography>
    </>)
}

export default About;