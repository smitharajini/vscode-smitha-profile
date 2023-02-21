import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Smitha Rajini a creative girl who wants to bring many colourful changes in everyone's life"
      />
      <meta
        name="keywords"
        content="smitha rajini, smitha, rajini, web developer portfolio, smitha web developer, developer, mern stack, smitha's portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nitin Ranganath's Portfolio" />
      <meta
        property="og:description"
        content="usage"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Smitha Rajini',
};
