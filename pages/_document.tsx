import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { description, applicationName, keywords, author, image, site, type, publishedTime } from 'public/config'
import { ServerStyleSheet } from 'styled-components'

interface IProps {
  styleTags: React.ReactElement<{}>[]
}

class AppDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/**
           * Web Fonts from Google Fonts
           * * 배달의민족 도현 - https://fonts.google.com/specimen/Do+Hyeon
           * * 송명 - https://fonts.google.com/specimen/Song+Myung
           * * 나눔 고딕 - https://fonts.google.com/specimen/Nanum+Gothic
           * * 나눔 명조 - https://fonts.google.com/specimen/Nanum+Myeongjo
           * * 나눔손글씨 펜 - https://fonts.google.com/specimen/Nanum+Pen+Script
           * * 검은고딕 - https://fonts.google.com/specimen/Black+Han+Sans
           * Use the following CSS rules to specify these families: font-family: 'Black Han Sans', sans-serif;
           * */}
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <!-- Google Adsense --> */}
          <script
            data-ad-client="ca-pub-9994255438328666"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          {/* <!-- Basic --> */}
          <meta name="application-name" content={applicationName} />
          <meta name="description" content={description} />
          <meta name="author" content={author} />
          <meta name="keywords" content={keywords} />
          {/* <!-- Schema.org markup for Google+ --> */}
          <meta itemProp="name" content={applicationName} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={image} />
          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content={image} />
          <meta name="twitter:site" content={site} />
          <meta name="twitter:title" content={applicationName} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content={author} />
          {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
          <meta name="twitter:image:src" content={image} />
          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content={applicationName} />
          <meta property="og:type" content={type} />
          <meta property="og:url" content={site} />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={applicationName} />
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={new Date().toISOString()} />
          <meta property="article:section" content="Main" />
          <meta property="article:tag" content={keywords} />
          {this.props.styleTags}
        </Head>
        <body>
          <script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
