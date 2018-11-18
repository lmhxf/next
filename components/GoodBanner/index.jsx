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
      activeBanner: this.bannerSource && this.bannerSource[0]
    }
  }

  handleClick(item) {
    this.setState({
      activeBanner: item
    })
  }

  render() {
    return (
      <div className={less.goodBanner_md}>
        {this.state.activeBanner && (
          <div className={less.currentImg}>
            <img src={`../../static/img/goods/${this.state.activeBanner}.jpg`} alt={this.state.activeBanner}/>
          </div>
        )}
          <Carousel autoplay dots>
            {this.bannerSource.map(item => (
              <div
                className={less.imgWrap}
                onClick={v => this.handleClick(item)}
                key={item}
              >
                  <img src={`../../static/img/goods/${item}.jpg`}
                       alt={item}
                       onLoad={() => {
                         const event = 'resize'
                         if (document.createEventObject){
                           // IE浏览器支持fireEvent方法
                           const evt = document.createEventObject()
                           return window.fireEvent('on'+event, evt)
                         }
                         else{
                           // 其他标准浏览器使用dispatchEvent方法
                           const evt = document.createEvent( 'HTMLEvents' )
                           evt.initEvent(event, true, true)
                           return !window.dispatchEvent(evt)
                         }
                       }}
                  />
              </div>
            ))}
          </Carousel>
      </div>
    )

  }
}
