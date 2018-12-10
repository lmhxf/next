import React, {PureComponent} from 'react'
import { Row, Carousel } from 'antd'
import {goods} from "../../static/API/goods"
import { withRouter } from 'next/router'
import Router from 'next/router'
import less from './goodBanner.less'

@withRouter
export default class GoodBanner extends PureComponent {
  constructor (props) {
    super(props)

    const goodId = this.props.router && this.props.router.query && this.props.router.query.goodId || ''
    goods.map(item => {
      item.data.map(data => {
        if (data.prod === goodId) this.bannerSource = data.detail.banner
      })
    })

    this.state = {
      curImg:0,
      width:0
    }
    this.afterChange = this.afterChange.bind(this)
    this.clickThumbnail = this.clickThumbnail.bind(this)
  }

  afterChange(cur){
    this.setState({
      curImg: cur
    })
  }

  clickThumbnail(to) {
    this.el.goTo(to)
  }

  componentDidMount(){
    this.setState({
      width: (document.querySelector(".carouselDetail").offsetWidth - 40)/5
    })
  }

  render() {
    return (
      <div ref={el => this.dev = el} className={`carouselDetail ${less.goodBanner_md}`}>
        <Carousel dots={false} autoplay={true} ref={el => this.el = el} afterChange={(cur) => this.afterChange(cur)} >
          {this.bannerSource.map((item, index) => (
            <div key={index} className={less.currentImg}>
              <img src={`../../static/img/goods/${item}.jpg`} alt={item}/>
            </div>
          ))}
        </Carousel>
        <div className="thumbnail-block">
          {this.bannerSource.map((item,index) => (
            <div key={index} onClick={() => this.clickThumbnail(index)} className={`${index == this.state.curImg ? less.thumbnailActive : ''} ${less.imgWrap}`}>
              <img src={`../../static/img/goods/${item}.jpg`} alt={item}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
