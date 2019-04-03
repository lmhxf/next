import React, {PureComponent} from 'react'
import {Row, Col} from 'antd'
import Link from 'next/link'
import less from './footer.less'

export default class Footer extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={less.footer}>
        <Row className={less.iconWrap} type="flex" align='middle' justify='center'>
          <Row className={less.icon} type="flex" align='middle' justify='start'>
            <Col span={6}>
              <img src="../../static/img/home/ft-svr1.gif" alt="正品质量保障"/>
            </Col>
            <Col span={6}>
              <img src="../../static/img/home/ft-svr2.gif" alt="服务质量保障"/>
            </Col>
            <Col span={6}>
              <img src="../../static/img/home/ft-svr3.gif" alt="商品退换货保障"/>
            </Col>
            <Col span={6}>
              <img src="../../static/img/home/ft-svr4.gif" alt="安全支付保障"/>
            </Col>
          </Row>
        </Row>
        <Row type="flex" align='middle' justify='center'>
          <Col>
            <Link href='/home'>
              <a  rel="nofollow" className={`${less.link} ${less.line}`}>免责条款</a>
            </Link>
          </Col>
          <Col>
            <Link href='/home' rel="nofollow">
              <a  rel="nofollow" className={`${less.link} ${less.line}`}>隐私保护</a>
            </Link>
          </Col>
          <Col>
            <Link href='/home' rel="nofollow">
              <a  rel="nofollow" className={`${less.link} ${less.line}`}>公司简介</a>
            </Link>
          </Col>
          <Col>
            <Link href='/home'>
              <a  rel="nofollow" className={`${less.link}`}>联系我们</a>
            </Link>
          </Col>
        </Row>
        <Row type="flex" align='middle' justify='center'>
          <p>© 2005-2018 安徽百分环境发展有限公司 版权所有，并保留所有权利。ICP备案证书号：</p>
        </Row>
        <Row className={less.speInfo} type="flex" align='middle' justify='center'>
          <p>服务时间：09:00-23:00</p>
          <p>
            <label htmlFor="">微信号: </label>
            <strong>17121138176</strong>
          </p>
        </Row>
      </div>
    )
  }
}
