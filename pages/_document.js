import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href="/sia_logo.jpeg" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
            crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet" />
          <title>Safia Abugisseisa Law Firm</title>
          <meta property="description" content="We at Safia Abu Gisseisa, understand the importance of staying ahead in today's interconnected global business landscape. Our commitment to leveraging technology and innovation allows us to provide tailored legal solutions that meet the evolving needs of our clients." />
          <meta property="og:image" content="/sia_logo.jpeg"></meta>
          <meta property="og:site_name" content="Safia Abugisseisa Law Firm"></meta>
          <meta property="og:title" content="Safia Abugisseisa Law Firm"></meta>
          <meta property="og:url" content="www.safiaabugisseisa.com"></meta>
          <meta property="og:description" content="We at Safia Abu Gisseisa, understand the importance of staying ahead in today's interconnected global business landscape. Our commitment to leveraging technology and innovation allows us to provide tailored legal solutions that meet the evolving needs of our clients." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
