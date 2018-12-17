import React, { Component } from 'react';
/* import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  */
class SimpleMap extends Component {
  /*  static defaultProps = {
     center: {
       lat: 59.95,
       lng: 30.33
     },
     zoom: 11
   };
   */
  render() {
    return (
      <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1415.1482616155076!2d20.469492360518718!3d44.81552344403418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aba65f310bf%3A0xadd620eea6b26355!2zRMW-b3Jkxb5hIFZhxaFpbmd0b25hIDM4LCBCZW9ncmFkIDExMDAw!5e0!3m2!1sen!2srs!4v1532174966760"
          // style="border:0" width="100%" height="500px" 
          style={{
            border:'0',
            width:"50%", 
            height:"25em"
          }}
          frameborder="0"  
          allowfullscreen
          ></iframe>
      </div>
      // // Important! Always set the container height explicitly
      // <div style={{ height: '100vh', width: '100%' }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <AnyReactComponent
      //       lat={59.955413}
      //       lng={30.337844}
      //       text={'Kreyser Avrora'}
      //     />
      //   </GoogleMapReact>
      // </div>
    );
  }
}

export default SimpleMap;