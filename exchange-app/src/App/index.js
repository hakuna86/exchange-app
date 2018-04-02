import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import ExchangeTable from './components/ExchangeTable';
import './index.css';
import { connect } from 'react-redux';
import { executeAndDataController } from '../actions';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint : "http://localhost:5000"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const { _executeAndDataController } = this.props;
    const socket = socketIOClient(endpoint);
    socket.on("exchageData", (data) => {
      _executeAndDataController(data, { sellList : this.props.sell, buyList : this.props.buy});
    });
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
    _executeAndDataController : (data, props) => dispatch(executeAndDataController(data, props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);