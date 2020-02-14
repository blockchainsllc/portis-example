import React from 'react';
import axios from 'axios';
import './App.css';
import RentableAsset from './RentableAsset';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }

    this.getDevices = this.getDevices.bind(this)
  }

  getDevices() {
    axios.get("https://search-test-usn.slock.it/search")
      .then((response) => {
        this.setState({
          devices: response.data.data.filter(k => k.url.endsWith("omega"))
        })
      })
  }

  componentWillMount() {
    this.getDevices()
  }

  render() {

    const deviceCards = this.state.devices.map((device) => {
      return (
        <div key={device.deviceId} className="device-card">
          <RentableAsset key={device.deviceId} device={device}/>
        </div>
      )
    })

    return (
      <div className="app-container">
        <div className="header-container">
          <h1 style={{color: "#FFFFFF"}}>
            Omega Team's Slocks
          </h1>
        </div>
        <div className="device-cards-container">
          {deviceCards}
        </div>
      </div>
    );
  }

}

export default App;
