import React, { Component } from "react";
// // import logo from "./logo.svg";
import "./App.css";
import socket from "./util/socketConnection";
import Widget from "./components/Widget";

class App extends Component {
  constructor() {
    super();
    this.state = {
      performanceData: {}
    };
  }

  componentDidMount() {
    socket.on("data", data => {
      // inside this callback, we are getting new data from the server. That need to be update to DOM
      // lets update state so we can re-render App ---> Widget ---> CPU/<Mem/Info
      // we need to make copy of the current state so we can mutate it
      const currentState = { ...this.state.performanceData };
      // const currentState = Object.assign(this.state.performanceData, {})
      // currentState is an object! Not an array!
      // the reason for this is so we can use the machine's
      // macA as it's property
      // So what we are doing is wrapping the data accoding to the Address from which data has been send
      currentState[data.macA] = data;

      this.setState({
        performanceData: currentState
      });
    });
  }

  render() {
    // console.log(this.state.performanceData);
    let widgets = [];
    const data = this.state.performanceData;
    // filter each machines from the data that we got based of the key value i.e macAddress
    // so if we have two maching this loop will run two time for each render process
    // that means in each render process this loop will run two times
    // So in the widget array we will push two widge component each having different props passed
    Object.entries(data).forEach(([key, value]) => {
      widgets.push(<Widget key={key} data={value} />);
    });
    // React can render an array of components

    return <div className="App">{widgets}</div>;
  }
}

export default App;
