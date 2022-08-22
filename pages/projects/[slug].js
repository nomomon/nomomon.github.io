import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import katex from 'katex';
import { Container, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';

const mdSettings = {
    html: true,
    linkify: true,
}

function ProjectPost({ frontmatter, content }) {
    const markdown = md(mdSettings).render(content);
    const latex = katex.renderToString(markdown, {
        throwOnError: false,
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "p"]
    })

    return (
        <>
            <Head>
                <title>
                    nomomon | {frontmatter.title.toLowerCase()}
                </title>
            </Head>
            <Container maxWidth='md'>
                <h1>{frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: latex }} />

                <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
                    {
                        frontmatter.tools.map((tag, index) => (
                            <Chip label={tag} key={index} />
                        ))
                    }
                </Stack>
            </Container>
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