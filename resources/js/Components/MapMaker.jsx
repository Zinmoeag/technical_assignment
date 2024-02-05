import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

const MapMaker = () => {
    const [currentPosition, setCurrentPosition] = useState(null);

    const mapEvents = useMapEvents({
        click: (event) => {
          const { latlng } = event;
          setCurrentPosition(latlng);
    
          // Optionally handle displaying a marker or popup at the clicked location
          // ...
        },
      });
      
    return (
        <Marker position={currentPosition}>
          <Popup>You clicked here!</Popup>
        </Marker>
    )
}

export default MapMaker;