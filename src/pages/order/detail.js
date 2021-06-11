import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card } from 'antd'
import api from '@/api'
import './detail.less'

const { useState, useEffect } = React

const Detail = (props) => {

  const [detail, setDetail] = useState({})
  const [map, setMap] = useState()

  useEffect(() => {
    getOrderDetail()
    renderMap()
  }, [])

  const getOrderDetail = async() => {

    let { id } = props.match.params

    const res = await api.order.getOrderDetail({
      params: {
        id
      }
    })
    // console.log(res)

    if (res.data.status) {
      setDetail(res.data.data)
    } else {
      setDetail({
        'status': false,
        'data': {
          'mode': '-',
          'orderId': '-',
          'carId': '-',
          'userName': '-',
          'phone': '-',
          'start': '-',
          'end': '-',
          'mileage': '-'
        }
      })
    }

  }

  const renderMap = () => {
    console.log(window.BMap)
    // 百度地图API功能
    let map = new window.BMap.Map('map');    // 创建Map实例

    setMap(map)

    map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11);

    let p1 = new window.BMap.Point(116.301934, 39.977);
    let p2 = new window.BMap.Point(116.608328, 39.919141);

    let driving = new window.BMap.DrivingRoute(map, { renderOptions: { map, autoViewport: true } });
    driving.search(p1, p2);

    map.setCurrentCity('北京');          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
  }

  return (
    <div className="detail-wrap">
      <Card>
        <div id="map">
          ditu
        </div>
      </Card>
      <Card>
        <div className="item-wrap">
          <h2 className="item-title">基础信息</h2>
          <ul className="item-list">
            <li>
              <span>用车模式</span><span>
              {detail.mode === 1 && ' 禁停区模式'}
              {detail.mode === 2 && '指定停车点'}
            </span>
            </li>
            <li>
              <span>订单编号</span>
              <span>{detail.orderId}</span>
            </li>
            <li>
              <span>车辆编号</span>
              <span>{detail.carId}</span>
            </li>
            <li>
              <span>用户姓名</span>
              <span>{detail.userName}</span>
            </li>
            <li>
              <span>手机号码</span>
              <span>{detail.phone}</span>
            </li>
          </ul>
        </div>
        <div className="item-wrap">
          <h2 className="item-title">行驶轨迹</h2>
          <ul className="item-list">
            <li>
              <span>行程起点</span>
              <span>{detail.start}</span>
            </li>
            <li>
              <span>行程终点</span>
              <span>{detail.end}</span>
            </li>
            <li>
              <span>行驶里程</span>
              <span>{`${detail.mileage}公里`}</span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default withRouter(Detail);
