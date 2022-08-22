import { getStaticPaths as getStaticBlogPaths } from '/pages/blog/[slug]';

const Sitemap = () => {
    return null;
};


export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://nomomon.github.io';

    const staticPaths = ['', '/', '/blog', '/projects'];
    const blogPaths = (await getStaticBlogPaths()).paths.map(e => '/blog/' + e.params.slug);

    const allPaths = [...staticPaths, ...blogPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
            .map((url) => {
                return `
                <url>
                  <loc>${BASE_URL + url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
            })
            .join("")}
        </urlset>
    `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;