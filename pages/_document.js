import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>

          <meta name="Generator" content="ECSHOP v2.7.3" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="Keywords" content="高压电棍，高压电棒，防身电棍，防身电棒" />
          <meta name="Description" content="防身器材，防身电棍，高压电击棍专卖-全国货到付款" />
          <title>堂森安放-防身器材专卖（全国货到付款）</title>
          <link rel="shortcut icon" href="../assets/img/favicon.ico" />
          <link rel="icon" href="../assets/img/animated_favicon.gif" type="image/gif" />
          {/*<link href="./assets/themes/style.css" rel="stylesheet" type="text/css" />*/}
          {/*<link href="./assets/themes/index.css" rel="stylesheet" type="text/css" />*/}
          {/*<link rel="alternate" type="application/rss+xml" title="RSS|堂森安放-防身器材专卖（全国货到付款）" href="http://ab.anhuibaifen.com/feed.php" />*/}
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='stylesheet' href='../static/style/antd-global.css' />
          <link rel='stylesheet' href='../static/style/antd.min.css' />
          <link rel='stylesheet' href='../static/style/base.css' />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
