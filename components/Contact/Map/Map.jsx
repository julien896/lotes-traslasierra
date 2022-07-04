import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from "@react-google-maps/api";

const GMap = () => {

    const Map = ({ text }) => <div className="mapStyles">{text}</div>;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD9JHUyupozNNbADOmNQzFSSMoAheekvGM"
    })

    const defaultProps = {
        center: {
          lat: -31.726849430658437,
          lng: -65.00419003105927
        },
        zoom: 16
      };

    return ( 
/*       <div style={{ height: '100vh', width: '100%', marginTop: 40 }}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key: "AIzaSyD9JHUyupozNNbADOmNQzFSSMoAheekvGM" }}
            bootstrapURLKeys={{ key: "AIzaSyCpkK8XnI8-_M5rBYaH3h_BNvDXuH3D7ic" }}
            defaultCenter={defaultProps.center}
            yesIWantToUseGoogleMapApiInternals
            defaultZoom={defaultProps.zoom}
        >
            <Map text="Coronado Hotel & Suites" lat={-31.7274462} lng={-65.0088367} />
        </GoogleMapReact>
      </div> */
      <div className='map'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ 
            height: '100vh', 
            width: '100%', 
            marginTop: 40, 
            borderRadius: 6,
            boxShadow: '1px 2px 1px 1px rgb(34 34 34 / 15%) '
          }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <Marker position={defaultProps.center} />
        </GoogleMap>
      ) : (
        <></>
      )}
      </div>
    );
}
 
export default GMap