import Head from 'next/head' // 引入内置组件
import {PureComponent} from 'react'

export default class SetMeta extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <Head>
          <title>index page</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div>this is index page</div>
      </div>
    )
  }
}
