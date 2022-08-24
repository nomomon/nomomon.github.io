import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as mdk from 'markdown-it-katex';
import * as mdh from 'markdown-it-highlightjs';
import { Container, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import { FiAward, FiGithub, FiPlay } from 'react-icons/fi';
import Link from '../../components/Link';
import Head from 'next/head';

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

function ProjectPost({ frontmatter, content }) {
    const markdown = md(mdSettings)
        .use(mdk, katexSettings)
        .use(mdh, highlightSettings)
        .render(content);

    return (
        <>
            <Head>
                <title>{`nomomon | ${frontmatter.title.toLowerCase()}`}</title>
                <meta name="title" content={frontmatter.title} />
                <meta name="description" content={frontmatter.description} />
            </Head>
            <Container maxWidth='md' className='markdown-body'>
                <h1>{frontmatter.title}</h1>

                <Stack spacing={1} direction='row' sx={{ mb: 2 }}>
                    {
                        'sourceLink' in frontmatter && frontmatter.sourceLink &&
                        <Link href={frontmatter.sourceLink} underline={'none'}>
                            <Chip
                                icon={<FiGithub style={{ marginLeft: 8 }} />}
                                label={'Github'}
                                variant='outlined'
                                sx={{ cursor: 'pointer' }}
                            />
                        </Link>
                    }
                    {
                        'demoLink' in frontmatter && frontmatter.demoLink &&
                        <Link href={frontmatter.demoLink} underline={'none'}>
                            <Chip
                                icon={<FiPlay style={{ marginLeft: 8 }} />}
                                label={'Demo'}
                                variant='outlined'
                                sx={{ cursor: 'pointer' }}
                            />
                        </Link>
                    }
                    {
                        'achievements' in frontmatter && frontmatter.achievements > 0 &&
                        <Link href={'#achievements'} underline={'none'}>
                            <Chip
                                icon={<FiAward style={{ marginLeft: 8 }} />}
                                label={'Achievements'}
                                variant='outlined'
                                sx={{ cursor: 'pointer' }}
                            />
                        </Link>
                    }
                </Stack >

                <div dangerouslySetInnerHTML={{ __html: markdown }} />

                <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
                    {
                        frontmatter.tools.map((tag, index) => (
                            <Chip label={tag} key={index} />
                        ))
                    }
                </Stack>
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