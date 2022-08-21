import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import katex from 'katex';
import { Container, Divider, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import Head from 'next/head';


// const styles = require('../../styles/Notebook.css')

const mdSettings = {
    html: true,
    linkify: true,
}

function BlogPost({ frontmatter, content }) {
    const markdown = md(mdSettings).render(content);

    return (
        <>
            <Head>
                <title>
                    nomomon | {frontmatter.title.toLowerCase()}
                </title>
            </Head>
            <Container maxWidth='md'>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: markdown }} />

                <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
                    {
                        frontmatter.tags.map((tag, index) => (
                            <Chip label={tag} key={index} />
                        ))
                    }
                </Stack>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync('src/posts');
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
    const fileName = fs.readFileSync(`src/posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default BlogPost;