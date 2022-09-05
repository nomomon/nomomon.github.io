import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as mdmj from 'markdown-it-mathjax3';
import * as mdh from 'markdown-it-highlightjs';
import * as mdi from 'markdown-it-id-and-toc';
import { Container, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import { FiAward, FiGithub, FiPlay } from 'react-icons/fi';
import ChipLink from '../../components/ChipLink';
import TitleMetaTags from '../../components/TitleMetaTags';

const mdSettings = {
    html: true,
    linkify: true,
}

const idSettings = {
    idPrefix: ''
}

const highlightSettings = {
    inline: false,
}

function ChipLinks({ frontmatter: fm }) {
    const showSourceLink = ('sourceLink' in fm) && fm.sourceLink;
    const showDemoLink = ('demoLink' in fm) && fm.demoLink;
    const showAchievementsLink = ('achievements' in fm) && fm.achievements > 0;


    return (
        <Stack spacing={1} direction='row' sx={{ mb: 2 }}>
            {
                [
                    [showSourceLink, 'Github', fm.sourceLink, FiGithub],
                    [showDemoLink, 'Demo', fm.demoLink, FiPlay],
                    [showAchievementsLink, 'Achievements', '#achievements', FiAward],
                ]
                    .filter(([show]) => show)
                    .map(([show, label, link, icon], index) => (
                        <ChipLink
                            label={label}
                            link={link}
                            icon={icon}
                            key={index}
                        />)
                    )
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
        .use(mdi, idSettings)
        .use(mdmj, {})
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
            <Container maxWidth='md' className='markdown-body' >
                <h1 id={fm.title.toLowerCase().split(' ').join('-')}>{fm.title}</h1>

                <ChipLinks frontmatter={fm} />

                <article dangerouslySetInnerHTML={{ __html: markdown }} />

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