import {PureComponent} from 'react'
import {Flex, SearchBar} from 'antd-mobile'
import Link from 'next/link'
import headerLess from  './header.less'

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
  render () {
    return (
      <Flex className='header' direction='column'>
        <Flex className={headerLess.header} justify='start'>
          <div className={headerLess.logo}>
            <img src="../../static/img/logo.jpg" alt="logo"/>
          </div>
          <Flex className={headerLess.search} direction='column'>
            <SearchBar
              value={this.state.searchVal}
              placeholder="搜索..."
              onSubmit={this.handleSearch}
              cancelText=' '
              onChange={(val) => this.handleChange(val)}
            />
            <div className={headerLess.weixin}>
              加微信 yerengu688 更多防身产品视频演示
            </div>
          </Flex>
          <img className={headerLess.goodsInfo} src="../../static/img/webintro-ico.jpg" alt="商家保障"/>
        </Flex>
        <Flex justify='center' className={headerLess.nav}>
          <div className="all">全部商品分类：</div>
          <Link href='/home' rel="nofollow">首页</Link>
          <Link href='/carries' rel="nofollow">随身电棍</Link>
          <Link href='/long' rel="nofollow">加长电棍</Link>
          <Link href='/female' rel="nofollow">女子防身</Link>
          <Link href='/atomization' rel="nofollow">防身喷雾</Link>
        </Flex>
      </Flex>
    )
  }
}
