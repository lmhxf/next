import {PureComponent} from 'react'
import {Flex} from 'antd-mobile'
import Link from 'next/link'
import less from './footer.less'

export default class Footer extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Flex className={less.footer} direction='column'>
        <Flex className={less.icon} justify='center'>
          <img src="../../static/img/ft-svr1.gif" alt="正品质量保障"/>
          <img src="../../static/img/ft-svr2.gif" alt="服务质量保障"/>
          <img src="../../static/img/ft-svr3.gif" alt="商品退换货保障"/>
          <img src="../../static/img/ft-svr4.gif" alt="安全支付保障"/>
        </Flex>
        <div>
          <Link href='/home'>
            <a  rel="nofollow" className={`${less.link} ${less.line}`}>免责条款</a>
          </Link>
          <Link href='/home' rel="nofollow">
            <a  rel="nofollow" className={`${less.link} ${less.line}`}>隐私保护</a>
          </Link>
          <Link href='/home' rel="nofollow">
            <a  rel="nofollow" className={`${less.link} ${less.line}`}>公司简介</a>
          </Link>
          <Link href='/home'>
            <a  rel="nofollow" className={`${less.link}`}>联系我们</a>
          </Link>
        </div>
        <p>© 2005-2018 安徽百分环境发展有限公司 版权所有，并保留所有权利。ICP备案证书号：</p>
        <Flex className={less.speInfo} align='center' justify='center'>
          <p>服务时间：09:00-23:00</p>
          <p>
            <label htmlFor="">微信号: </label>
            <strong>yerengu688</strong>
          </p>
        </Flex>
      </Flex>
    )
  }
}
