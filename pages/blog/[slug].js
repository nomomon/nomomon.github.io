import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as mdk from 'markdown-it-katex';
import { Container, Chip } from '@mui/material';
import { Stack } from '@mui/system';
import TitleMetaTags from '../../components/TitleMetaTags';


// const styles = require('../../styles/Notebook.css')

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

function BlogPost({ frontmatter: fm, content }) {
    const markdown = md(mdSettings).use(mdk, katexSettings).render(content);

    return (
        <>
            <TitleMetaTags
                pageTitle={`nomomon | ${fm.title.toLowerCase()}`}
                title={fm.title}
                description={fm.description}
                image={fm.imageURL}
                pageType='article'
            />
            <Container maxWidth='md' >
                <h1>{fm.title}</h1>
                <article className='markdown-body' dangerouslySetInnerHTML={{ __html: markdown }} />

                <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
                    {
                        fm.tags.map((tag, index) => (
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