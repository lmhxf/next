import {PureComponent} from 'react'
import {Layout, Card} from 'antd'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {goods} from "../../static/API/goods";
import less from '../../static/style/card.less'
const {Sider, Content } = Layout

export default class Carries extends PureComponent {
  constructor (props) {
    super(props)
  }

  renderGoods() {
    const goodsRel = goods.filter(item => item.type === 'carries')
    return goodsRel.map(good => (
      <div className={less.goodCard}>
        {good.data.map((item, index) => (
          <Link key={item.prod} href={`/goods?goodId=${item.prod}`}>
            <Card
              className={`${less.card} ${(index+1) % 3 ? '' : less.noBorder}`}
              cover={
                <div className={less.cardImg}>
                  <img
                    src={`../../static/img/goods/${item.imgFile}/${item.id}.jpg`}
                    alt={item.name}
                  />
                </div>
              }
            >
              <Card.Meta
                title={<h3 className={less.cardName}>{item.name}</h3>}
                description={<p className={less.cardPrice}>¥ {item.price} 元</p>}
              />
            </Card>
          </Link>
        ))}
      </div>
    ))
  }

  render () {
    return (
      <div>
        <Header />
        <div className={less.card_md}>
          <div className={less.breadcrumb}>
            <Link href='/home'>首页</Link>
            <span> > </span>
            <Link href='/carries'>随身电棍</Link>
          </div>
          <div className={less.goods}>
            {this.renderGoods()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
