import {PureComponent} from 'react'
import {Row, Card} from 'antd'
import Link from 'next/link'
import less from './home.less'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from "../../components/Banner";
import {goods} from "../../static/API/goods";

export default class Home extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      current: 'default'
    }
  }

  renderRecommend() {
    const recommend = goods.filter(item => item.type === 'recommend')[0]
    return (
      <Row type='flex' justify='center' className={less.recommend}>
        <h2 className={less.title}>今天推荐了哪些精品？</h2>
        <ul className={less.recommendCard}>
          {recommend && recommend.data.map((item, index) => (
            <Link key={item.id} href={`/goods/${item.prod}`}>
              <li className={`${less.recommendCard_item} ${index%2 ? less.noMargin : ''}`}>
                <div className={less.recommendCard_img}>
                  <img src={`../../static/img/goods/${item.imgFile}/${item.id}.jpg`} alt={item.name} />
                </div>
                <div className={less.recommendCard_info}>
                  <h3 className={less.info_title}>{item.name}</h3>
                  <p className={less.info_name}>
                    <img src='../../static/img/home/jingxuan.png' alt='精品' />
                    <em>¥ {item.price}</em>
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Row>
    )
  }

  renderGoods() {
    const goodType = {carries: '随身电棍', long: '加长电棍', female: '女子防身', atomization: '防身喷雾'}
    const goodsRel = goods.filter(item => item.type !== 'recommend')
    return goodsRel.map(good => (
      <div className={less.goods} key={good.type}>
        <div className={less.firstGood}>
          <Link href={`/goods/${good.data[0].prod}`}>
            <div>
              <div className={less.goodType}>
                <h2>{goodType[good.type]}</h2>
              </div>
              <div className={less.firstImg}>
                <img src={`../../static/img/goods/${good.data[0].imgFile}/${good.data[0].id}.jpg`} alt={good.data[0].name}/>
              </div>
            </div>
          </Link>
        </div>
        <div className={less.goodCard}>
          {good.data.map((item, index) => {
            if (index) {
              return (
                <Link key={item.prod} href={`/goods/${item.prod}`}>
                  <Card
                    className={`${less.card} ${index%3 ? '' : less.noBorder}`}
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
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    ))
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className={less.home_md}>
          <Banner />
          {this.renderRecommend()}
          {this.renderGoods()}
        </div>
        <Footer />
      </div>
    )
  }
}
