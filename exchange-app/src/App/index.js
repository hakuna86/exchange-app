import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import ExchangeTable from './components/ExchangeTable';
import './index.css';
import { connect } from 'react-redux';
import { getSellingData, getBuyData, execute } from '../actions';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint : "http://localhost:5000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const { _getSellingData, _getBuyData, _execute } = this.props;
    const socket = socketIOClient(endpoint);
    socket.on("exchageData", (data) => {
      if(data.type === 'S'){
        _getSellingData(data);
        //_execute(data, this.props.sell);
      }else{
        _getBuyData(data);
        //_execute(data, this.props.buy);
      }
    });
  }

  componentWillReceiveProps(nextProps) {

  }
  
  render() {
    return (
      <div className="App">
        <ExchangeTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sell : state.exchange.sellingList,
    buy: state.exchange.buyList,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    _getSellingData : (data) => dispatch(getSellingData(data)),
    _getBuyData : (data) => dispatch(getBuyData(data)),
    _execute : (data, refArr) => dispatch(execute(data, refArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);