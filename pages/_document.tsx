import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
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
