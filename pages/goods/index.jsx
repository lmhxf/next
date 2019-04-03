import React, {PureComponent} from 'react'
import {Row, Col} from 'antd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GoodBanner from '../../components/GoodBanner'
import {goods} from '../../static/API/goods'
import less from  './goods.less'

export default class Goods extends PureComponent {
  constructor (props) {
    super(props)
    const goodId = this.props.url && this.props.url.query && this.props.url.query.goodId || ''
    goods.map(item => {
      item.data.map(data => {
        if (data.prod === goodId) {
          this.goodSource = data
        }
      })
    })
    this.pay = this.pay.bind(this)
  }

  componentDidMount() {

  }

  pay() {
    alert('请添加微信17121138176购买')
  }

  renderGoodInfo() {
    return (
      <div className={less.goodInfo}>
        <h1>{this.goodSource.name}</h1>
        <h2>商品贷号： <em>{this.goodSource.detail.goodId}</em></h2>
        <h2>市场价： <del>{this.goodSource.detail.buyPrice}</del></h2>
        <h2>本店价： <strong>¥ {this.goodSource.price} 元</strong></h2>
        <h2>库存： <em>{this.goodSource.detail.cash}</em></h2>
        <button onClick={this.pay}>立即订购</button>
      </div>
    )
  }

  renderDetail() {
    return (
      <div className={less.detail}>
        <div className={less.info}>
          <h1>商品详情</h1>
          <Row align='start' justify='middle' type='flex'>
            <h2>产品名称：{this.goodSource.name}</h2>
          </Row>
          <Row align='center' justify='middle' type='flex'>
            <img src={`../../static/img/goods/${this.goodSource.detail.goodImg}.png`} alt={`${this.goodSource.name}参数`} />
          </Row>
        </div>
        <div className={less.desc}>
          <p>
            邦盾护卫-（专业防身用品研发生产）<br/>
            <strong>微信：17121138176</strong><br/>
            加微信更多防身产品朋友圈视频演示
          </p>
        </div>
        <div className={less.detailImg}>
          {this.goodSource.detail.detailImg.map(item => (
            <Row key={item} align='center' justify='middle' type='flex'>
              <img src={`../../static/img/goods/${item.indexOf('.') > -1 ? item : `${item}.jpg`}`} alt={item} />
            </Row>
          ))}
        </div>
        <div className={less.care}>
          <p>
            <strong>注意事项：</strong><br/>
            1、电击产品是瞬间产生超高直流电压，以电击人体四肢为宜，电击时间一般不超过3秒，可瞬间使歹徒丧失防抗能力，不会造成生命危险。（请勿长时间电击人体头部、心脏等重要脏器部位；请勿触有心脏病或装有心脏起勃器者。）<br/>
            2、请勿放存潮湿处，不要日晒、雨淋，不要存放高低温环境中。<br/>
            3、用所配专用充电器进行充电，充电电流不能过大；充电器极性不能接反；充电时间（6-8小时）不宜过长，否则将缩短电池寿命。<br/>
            4、严禁小孩玩耍，严禁使用在非法用途上，造成的后果由客户自行承担，我们不承担任何责任。<br/>
          </p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={less.goods_md}>
        <Header />
        <div className={less.goods}>
          <Row className={less.goodHeader} type='flex' justify='center' align='start'>
            <Col><GoodBanner /></Col>
            <Col>{this.renderGoodInfo()}</Col>
          </Row>
          {this.renderDetail()}
        </div>
        <Footer />
      </div>
    )
  }
}
