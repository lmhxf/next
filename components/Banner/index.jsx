import React, {PureComponent} from 'react'
import { Row, Carousel } from 'antd'
import less from './banner.less'
import Link from 'next/link'

export default class Banner extends PureComponent {
  constructor (props) {
    super(props)
    this.bannerSource = [
      {key: '01', id: '01', title: '诚信为本，质量为首'},
      {key: '02', id: '02', title: '2014款黑鹰8810型疝气调焦电警棍'},
      {key: '03', id: '03', title: '2014款黑鹰8810型疝气调焦电警棍'},
      {key: '04', id: '04', title: '2014款黑鹰8810型疝气调焦电警棍'},
      {key: '05', id: '05', title: '2014款黑鹰8810型疝气调焦电警棍'},
    ]
  }

  handleClick(item) {
    console.log(item)
  }

  render() {
    return (
      <div type='flex' justify='center' align='middle' className={less.banner_md}>
        <Carousel autoplay dots>
          {this.bannerSource.map(item => (
            <div
              className={less.imgWrap}
              onClick={v => this.handleClick(item)}
              key={item.id}
            >
              <img src={`../../static/img/home/banner/${item.key}.png`}
                   alt={item.title}
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
