import React, {PureComponent} from 'react'
import {Row, Col, Input} from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import headerLess from  './header.less'

const Search = Input.Search

@withRouter
export default class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      searchVal: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange (val) {
    this.setState({searchVal: val})
  }

  handleSearch() {
    console.log(this.state.searchVal)
  }
  render() {
    const pathname = this.props.router.pathname
    return (
      <div className={headerLess.header}>
        <Row type="flex" align='middle' justify="center">
          <Row className={headerLess.logoRow} type="flex" align='middle' justify="start">
            <Col span={5}>
              <div className={headerLess.logo}>
                <Link href='/home' >
                  <img src="../../static/img/logo.jpg" alt="堂森安放-防身器材专卖（全国货到付款）"/>
                </Link>
              </div>
            </Col>
            <Col offset={1} span={8}>
              <div className={headerLess.search}>
                <Search
                  placeholder="请输入要搜索的商品"
                  enterButton="搜索"
                  size="large"
                  onSearch={(val) => this.handleChange(val)}
                />
                <div className={headerLess.weixin}>
                  <Link href='/home'>
                    <h1>搜索榜：加微信 yerengu688 更多防身产品视频演示</h1>
                  </Link>
                </div>
              </div>
            </Col>
            <Col offset={1} span={9}>
              <div className={headerLess.goodsInfo}>
                <Link href='/home'>
                  <img src="../../static/img/home/webintro-ico.jpg" alt="正品保障,100%正品低价;30天退换货,购物有保障;满99就包邮,闪电发货"/>
                </Link>
              </div>
            </Col>
          </Row>
        </Row>
        <Row className={headerLess.navWrap} type="flex" align='middle' justify='center'>
          <Row className={headerLess.nav}  type="flex" align='middle' justify='start'>
            <Col className={pathname === '/home' ? headerLess.active : ''} span={3}>
              <Link href='/home'><a href="/home">首页</a></Link>
            </Col>
            <Col className={pathname === '/carries' ? headerLess.active : ''} span={3}>
              <Link href='/carries'><a href="/carries">随身电棍</a></Link>
            </Col>
            <Col className={pathname === '/long' ? headerLess.active : ''} span={3}>
              <Link href='/long'><a href="/long">加长电棍</a></Link>
            </Col>
            <Col className={pathname === '/female' ? headerLess.active : ''}  span={3}>
              <Link href='/female'><a href="/female">女子防身</a></Link>
            </Col>
            <Col className={pathname === '/atomization' ? headerLess.active : ''} span={3}>
              <Link href='/atomization'><a href="/atomization">防身喷雾</a></Link>
            </Col>
          </Row>
        </Row>
      </div>
    )
  }
}
