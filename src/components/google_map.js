import React, Component from 'react';


class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: this.proprs.lat,
          lng: this.proprs.lon
        }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }

}

export default GoogleMap;
