import React, {PureComponent} from 'react'
import {Row, Col, Input} from 'antd'
import Link from 'next/link'
import headerLess from  './header.less'

const Search = Input.Search

export default class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      searchVal: ''
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
    return (
      <div className="header">
        <Row className={headerLess.header} type="flex" align='middle' justify="start">
          <Col offset={2} span={4}>
            <div className={headerLess.logo}>
              <Link href='/home' >
                <img src="../../static/img/logo.jpg" alt="堂森安放-防身器材专卖（全国货到付款）"/>
              </Link>
            </div>
          </Col>
          <Col offset={1} span={7}>
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
          <Col offset={1} span={7}>
            <div className={headerLess.goodsInfo}>
              <Link href='/home'>
                <img src="../../static/img/home/webintro-ico.jpg" alt="正品保障,100%正品低价;30天退换货,购物有保障;满99就包邮,闪电发货"/>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className={headerLess.nav}  type="flex" align='middle' justify='start'>
          <Col offset={2} span={2}>
            <Link href='/atomization' rel="nofollow">全部商品分类</Link>
          </Col>
          <Col className={headerLess.active} span={2}>
            <Link href='/home'>首页</Link>
          </Col>
          <Col span={2}>
            <Link href='/carries' rel="nofollow">随身电棍</Link>
          </Col>
          <Col span={2}>
            <Link href='/long' rel="nofollow">加长电棍</Link>
          </Col>
          <Col span={2}>
            <Link href='/female' rel="nofollow">女子防身</Link>
          </Col>
          <Col span={2}>
            <Link href='/atomization' rel="nofollow">防身喷雾</Link>
          </Col>
        </Row>
      </div>
    )
  }
}
