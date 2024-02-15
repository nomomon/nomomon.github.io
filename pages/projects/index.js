import fs from 'fs';
import matter from 'gray-matter';
import { Typography, Card, CardContent, Grid, CardMedia, Button, Stack, Chip } from '@mui/material';
import Link from '../../components/Link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiGithub, FiPlay } from 'react-icons/fi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import TitleMetaTags from '../../components/TitleMetaTags';

function sortByDate(a, b, date = 'startDate') {
    let a_ = new Date(a.frontmatter[date]), b_ = new Date(b.frontmatter[date]);
    if (a_ < b_) {
        return 1;
    }
    if (a_ > b_) {
        return -1;
    }
    return 0;
}

function DateRow({ startDate, endDate }) {
    const startDateObj = new Date(startDate);
    const endDateObj = (endDate == 'now') ? new Date() : new Date(endDate);

    // show end date if it exists and the month is different from the start date
    const showEndDate = endDate && (
        endDateObj.getMonth() !== startDateObj.getMonth() ||
        endDateObj.getFullYear() !== startDateObj.getFullYear()
    );

    return (
        <Typography
            sx={{ mt: 1, mb: 1.5 }}
            variant="subtitle1"
            color="text.secondary"
        >
            <AiOutlineCalendar
                style={{ marginBottom: -2, marginRight: 4 }}
            />
            {
                startDateObj.toLocaleDateString('en-En', {
                    month: 'short',
                    year: 'numeric'
                })
            }
            {
                showEndDate && (<>
                    <HiOutlineArrowNarrowRight
                        style={{ marginBottom: -2, marginRight: 2, marginLeft: 1 }}
                    />
                    {
                        endDateObj.toLocaleDateString('en-En', {
                            month: 'short',
                            year: 'numeric'
                        })
                    }
                </>)
            }
        </Typography>
    )
}

function ProjectCard({
    title,
    description,
    imageURL,
    startDate,
    endDate = "",
    tools = [],
    demoLink = "",
    sourceLink = "",
    slug
}) {
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
                    image={imageURL}
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
                <DateRow startDate={startDate} endDate={endDate} />
                <Typography variant="body2" sx={{
                    height: '4.5em',
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                }}>
                    {description}
                </Typography>
                <br />
                <Stack direction="row" spacing={1}>
                    {
                        tools.filter((tool, i) => i < 3).map(tool => (
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
        <TitleMetaTags
            pageTitle={'nomomon | projects'}
            title={'nomomon\'s projects'}
            description={'Nurmukhambetov Mansur\'s technical projects on data science, machine learning and web dev.'}
            pageType='website'
        />
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