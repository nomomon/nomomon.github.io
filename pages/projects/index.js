import fs from 'fs';
import matter from 'gray-matter';
import { Typography, Card, CardContent, Grid, CardMedia, Button, Stack, Chip, Badge } from '@mui/material';
import Link from '../../components/Link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiGithub, FiPlay } from 'react-icons/fi';
import Head from 'next/head';

function sortByDate(a, b) {
    let a_ = new Date(a.frontmatter.date), b_ = new Date(b.frontmatter.date);
    if (a_ < b_) {
        return 1;
    }
    if (a_ > b_) {
        return -1;
    }
    return 0;
}

function ProjectCard({
    title,
    metaDesc,
    socialImage,
    date,
    tools = [],
    demoLink = "",
    sourceLink = "",
    slug
}) {
    const dateObj = new Date(date);

    return (
        <Card elevation={3}>
            <Link
                href={slug}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: "100%",
                        height: "6rem",
                        transition: 'transform .2s',
                        '&:hover': {
                            transform: 'scale(1.01)'
                        }
                    }}
                    image={socialImage}
                    alt={title}
                />
            </Link>
            <CardContent>
                <Link
                    href={slug}
                    color="inherit"
                    underline='none'
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            transition: 'color 0.2s ease-in-out',
                            '&:hover': {
                                color: 'info.main',
                            }
                        }}
                    >
                        {title}
                    </Typography>
                </Link>
                <Typography
                    sx={{ mt: 1, mb: 1.5 }}
                    variant="subtitle1"
                    color="text.secondary"
                >
                    <AiOutlineCalendar
                        style={{ marginBottom: -2, marginRight: 4 }}
                    />
                    {
                        dateObj.toLocaleDateString('en-En', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })
                    }
                </Typography>
                <Typography variant="body2" sx={{
                    height: '4.5em',
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                }}>
                    {metaDesc}
                </Typography>
                <br />
                <Stack direction="row" spacing={1}>
                    {
                        tools.map(tool => (
                            <Chip key={tool} label={tool} />
                        ))
                    }
                </Stack>
                <br />
                <Stack direction={'row'} spacing={2} minHeight={"2.2em"}>
                    {
                        demoLink && (
                            <Link
                                href={demoLink}
                                underline='none'
                            >
                                <Button variant="outlined" color="info">
                                    <FiPlay
                                        style={{ marginBottom: 0, marginRight: 4 }}
                                    /> Demo
                                </Button>
                            </Link>
                        )
                    }
                    {
                        sourceLink && (
                            <Link
                                href={sourceLink}
                                target='_blank'
                                underline='none'
                            >
                                <Button variant="outlined" color="info">
                                    <FiGithub
                                        style={{ marginBottom: 0, marginRight: 4 }}
                                    /> Source Code
                                </Button>
                            </Link>
                        )
                    }
                </Stack>
            </CardContent>
        </Card >
    )
}


function Projects({ projects }) {
    return (<>
        <Head>
            <title>nomomon | projects</title>
            <meta name="title" content="nomomon's projects" />
            <meta name="description" content="List of Nurmukhambetov Mansur's technical projects on data science, machine learning and web development." />
        </Head>
        <Typography
            variant="h4"
            sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 6 }}
        >
            Projects
        </Typography>
        <Grid
            container
            spacing={5}
            columns={{ lg: 3, md: 2, sm: 1, xs: 1 }}
        >
            {projects.sort(sortByDate).map(({ slug, frontmatter }) => (
                <Grid item xs={1} key={slug}>
                    {ProjectCard({ ...frontmatter, slug: `/projects/${slug}` })}
                </Grid>
            ))}
        </Grid>
    </>)
}

export async function getStaticProps() {
    const files = fs.readdirSync('src/projects');

    const projects = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`src/projects/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        return {
            slug,
            frontmatter,
        };
    }).filter(({ frontmatter }) => (!!frontmatter.title));

    return {
        props: {
            projects,
        },
    };
}

export default Projects;