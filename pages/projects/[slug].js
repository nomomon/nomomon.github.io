import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as mdk from 'markdown-it-katex';
import * as mdh from 'markdown-it-highlightjs';
import { Container, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import { FiAward, FiGithub, FiPlay } from 'react-icons/fi';
import Link from '../../components/Link';
import TitleMetaTags from '../../components/TitleMetaTags';

const mdSettings = {
    html: true,
    linkify: true,
}

const katexSettings = {
    throwOnError: false,
    delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
    ],
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "p"]
}

const highlightSettings = {
    inline: false,
}

function ChipLinks({ frontmatter: fm }) {
    const showSourceLink = ('sourceLink' in fm) && fm.sourceLink;
    const showDemoLink = ('demoLink' in fm) && fm.demoLink;
    const showAchievementsLink = ('achievements' in fm) && fm.achievements > 0;

    function ChipLink({ label, link, icon }) {
        const renderedIcon = icon({
            style: {
                marginLeft: '0.5em',
            }
        })

        return (
            <Link href={link} underline={'none'}>
                <Chip
                    icon={renderedIcon}
                    label={label}
                    variant='outlined'
                    sx={{ cursor: 'pointer' }}
                />
            </Link>
        );
    }

    return (
        <Stack spacing={1} direction='row' sx={{ mb: 2 }}>
            {
                [
                    [showSourceLink, 'Github', fm.sourceLink, FiGithub],
                    [showDemoLink, 'Demo', fm.demoLink, FiPlay],
                    [showAchievementsLink, 'Achievements', '#achievements', FiAward],
                ].map(([show, label, link, icon], index) => (<>
                    {show && (
                        <ChipLink
                            label={label}
                            link={link}
                            icon={icon}
                            key={index}
                        />
                    )}
                </>))
            }
        </Stack >
    )
}

function Tools({ tools }) {
    return (
        <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
            {
                tools.map((tool, index) => (
                    <Chip label={tool} key={index} />
                ))
            }
        </Stack>
    )
}

function ProjectPost({ frontmatter: fm, content }) {
    const markdown = md(mdSettings)
        .use(mdk, katexSettings)
        .use(mdh, highlightSettings)
        .render(content);

    return (
        <>
            <TitleMetaTags
                pageTitle={`nomomon | ${fm.title.toLowerCase()}`}
                title={fm.title}
                description={fm.description}
                image={fm.imageURL}
                pageType='article'
            />
            <Container maxWidth='md' className='markdown-body'>
                <h1>{fm.title}</h1>

                <ChipLinks frontmatter={fm} />

                <div dangerouslySetInnerHTML={{ __html: markdown }} />

                <Tools tools={fm.tools} />
            </Container >
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync('src/projects');
    const paths = files.filter(fileName => fileName != 'template.md').map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`src/projects/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default ProjectPost;