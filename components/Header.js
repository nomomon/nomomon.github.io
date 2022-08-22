import Head from 'next/head';

function Header() {
    return (<>
        <Head>
            <title>nomomon | </title>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
            />
        </Head>
    </>)
}

export default Header;