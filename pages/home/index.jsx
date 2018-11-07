import {PureComponent} from 'react'
import Link from 'next/link'
import './home.less'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from "../../components/Banner";

export default class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      current: 'default'
    }
  }
  render () {
    return (
      <div id='root'>
        <Header />
        <Banner />
        {/*<Link asPath='/' href='/home'>首页</Link>*/}
        <Footer />
      </div>
    )
  }
}
