import React, { Component } from 'react';
import margeValueToArr from '../../lib/margeValueToArr';
import './style.css';
import { connect } from 'react-redux';

class ExchangeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buying : [],
      sell : [],
      gridColum: ['매도수량', '매도가격', '매수가격', '매수수량'],
      girdComplete: ['체결가', '수량'],
      execute : []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState) => {
      return {
        buying : margeValueToArr(nextProps.buy, 'price', 'quantity').reverse(),
        sell : margeValueToArr(nextProps.sell, 'price', 'quantity'),
        execute : margeValueToArr(nextProps.excute, 'price', 'quantity'),
      }
    });
  }

  render() {
    return (
      <div className="exchange-table">
        <div className="sale">
        <h3 className="title">실시간으로 들어오는 매수, 매도에 대해서 호가창을 보여주는 어플리케이션</h3>
          <table>
            <thead>
              <tr>
              {
                this.state.gridColum.map((item, i) => <th key={i}>{item}</th> )
              }
              </tr>
            </thead>
            <tbody>
            {
              this.state.sell.map((item, i) => (
                  <tr className="sell" key={i}>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td></td>
                    <td></td>
                  </tr>
              ))
            }
            {
              this.state.buying.map((item, i) => (
                  <tr className="buy" key={i}>
                    <td></td>
                    <td></td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        <div className="complate">
        <h3 className="title">채결내역</h3>
        <table>
          <thead>
            <tr>
            {
              this.state.girdComplete.map((item, i) => <th key={i}>{item}</th> )
            }
            </tr>
          </thead>
          <tbody>
          {
            this.state.execute.map((item, i) => (
                  <tr className="buy" key={i}>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
            ))
          }
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sell : state.exchange.sellingList,
    buy: state.exchange.buyList,
    excute : state.exchange.executedList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeTable);