import fs from 'fs';
import matter from 'gray-matter';
import { Typography, Card, CardContent, Grid, CardMedia, Stack, Menu } from '@mui/material';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';
import { BiPlanet } from 'react-icons/bi';
import Link from '../../components/Link';
import ChipLink from '../../components/ChipLink';
import TitleMetaTags from '../../components/TitleMetaTags';
import readingTime from '../../scripts/readingTime';

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

function PostCard({ title, description, readTime, imageURL, date, tags, slug }) {
    const dateObj = new Date(date);

    return (
        <Card elevation={3} sx={{ display: 'flex', height: 150 }}>
            <Link
                href={slug}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: { lg: 270, md: 200, sm: 150, xs: 150 },
                        height: '100%',
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
                                color: 'info.main'
                            }
                        }}
                    >
                        {title}
                    </Typography>
                </Link>
                <Typography
                    sx={{ mt: 1, mb: 1.5 }}
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
                    {readTime && (
                        <span style={{ marginLeft: 10 }}>
                            <AiOutlineClockCircle style={{ marginBottom: -2, marginRight: 4 }} />
                            {readTime} min read
                        </span>
                    )}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

function Blog({ posts }) {
    return (<>
        <TitleMetaTags
            pageTitle={'nomomon | blog'}
            title={'nomomon\'s blog'}
            description={'Nurmukhambetov Mansur\'s technical blog on data science, machine learning and web dev.'}
            pageType='website'
        />
        <Typography
            variant="h4"
            sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 3 }}
        >
            Blog
        </Typography>
        <Stack direction={'row'} alignItems={'baseline'} sx={{ width: '100%' }}>
            {
                [
                    [
                        'Telegram channel',
                        'https://t.me/pigeorge',
                        BiPlanet
                    ]
                ].map(([label, link, icon], index) => (
                    <ChipLink
                        label={label}
                        link={link}
                        icon={icon}
                        key={index}
                        sx={{ mb: 3, '&:hover': { textDecoration: 'underline' } }}
                        props
                    />
                ))
            }
        </Stack >
        <Grid
            container
            spacing={5}
            direction="column"
        >
            {posts.sort(sortByDate).map(({ slug, frontmatter }) => (
                <Grid item key={slug}>
                    {PostCard({ ...frontmatter, slug: `/blog/${slug}` })}
                </Grid>
            ))}
        </Grid>
    </>)
}

export async function getStaticProps() {
    const files = fs.readdirSync('src/posts');

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        const readTime = readingTime(content);
        frontmatter.readTime = readTime;
        return {
            slug,
            frontmatter,
        };
    }).filter(({ frontmatter }) => (!!frontmatter.title));

    return {
        props: {
            posts,
        },
    };
}

export default Blog;