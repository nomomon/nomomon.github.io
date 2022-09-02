import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import * as mdk from 'markdown-it-katex';
import * as mdh from 'markdown-it-highlightjs';
import * as mdi from 'markdown-it-id-and-toc';
import { Container, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { AiOutlineCalendar } from 'react-icons/ai'
import TitleMetaTags from '../../components/TitleMetaTags';


// const styles = require('../../styles/Notebook.css')

const mdSettings = {
    html: true,
    linkify: true,
}

const idSettings = {
    idPrefix: ''
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

function Tags({ tags }) {
    return (
        <Stack direction='row' spacing={1} sx={{ mt: 6, mb: -6 }}>
            {
                tags.map((tool, index) => (
                    <Chip label={tool} key={index} />
                ))
            }
        </Stack>
    )
}

function DateRow({ date }) {
    const dateObj = new Date(date);

    return <Typography
        sx={{ mt: 1, mb: 1.5 }}
        variant="subtitle1"
        color="text.secondary"
    >
        <AiOutlineCalendar
            style={{ marginBottom: -2, marginRight: 4 }}
        />
        {
            dateObj.toLocaleDateString('en-En', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            })
        }
    </Typography>
}

function BlogPost({ frontmatter: fm, content }) {
    const markdown = md(mdSettings)
        .use(mdi, idSettings)
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
            <Container maxWidth='md' >
                <h1 id={fm.title.toLowerCase().split(' ').join('-')}>{fm.title}</h1>

                <DateRow date={fm.date} />

                <article className='markdown-body' dangerouslySetInnerHTML={{ __html: markdown }} />

                <Tags tags={fm.tags} />
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