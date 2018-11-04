import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='keyword' content='svwcop' />
          <meta name='description' content='svwcop----svwcop' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='stylesheet' href='../static/style/antd-mobile.min.css' />
          <link rel='stylesheet' href='../static/style/antd-global.css' />
          <link rel='stylesheet' href='../static/style/base.css' />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
          <script>
            {/*if ('addEventListener' in document) {*/}
              {/*document.addEventListener('DOMContentLoaded', function() {*/}
                {/*FastClick.attach(document.body)*/}
              {/*}, false)*/}
            {/*}*/}
            {/*if(!window.Promise) {*/}
              {/*document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>')*/}
            {/*}*/}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
