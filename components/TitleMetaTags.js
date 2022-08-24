import Head from "next/head";


function TitleMetaTags({
    pageTitle = 'nomomon | website',
    title = 'nomomon\'s website',
    description = 'Hi, I\'m Nurmukhambetov Mansur. I\'m a software engineer and a data scientist. I\'m interested in machine learning, data science, and web development.',
    image,
    pageType = 'article'
}) {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta property="og:title" name="title" content={title} />
            <meta property="og:description" name="description" content={description} />
            {image && <meta property="og:image" name="image" content={image} />}
            <meta property="og:type" content={pageType} />
            <meta property="og:locale" content="en_US" />
        </Head>
    )
}

export default TitleMetaTags;