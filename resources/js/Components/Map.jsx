import { 
  MapContainer, 
  Marker,
  Popup,
  TileLayer, 
} from 'react-leaflet'
import { useState } from 'react'
import InputLabel from './InputLabel'
import TextInput from './TextInput'
import 'leaflet/dist/leaflet.css'
import LocationMarker from './locationMarker'
import { useRef, useMemo, useCallback } from 'react'
import { getListItemSecondaryActionClassesUtilityClass } from '@mui/material'


const Map = ({position, setPosition, data, setData}) => {

  const [draggable, setDraggable] = useState(true)
  const icon = {
      iconUrl: 'https://s.tmimgcdn.com/scr/1200x750/284700/location-point-icon-vector-illustration-v4_284781-original.jpg',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
  }

  const markerRef = useRef(null)

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(Object.values(marker.getLatLng()))
        }
      },
    }),
    [data.owner_location, setPosition],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [data.owner_location])

  return (
      <div className='w-full h-full'>

        <div className="my-2 w-[20rem] overflow-hidden">
          <InputLabel>
              Owner location
          </InputLabel>

          <TextInput
          value={position}
          disabled
          placeholder="Location"
          className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"                       
          >
          </TextInput>
      </div>
          
      <div className='my-2'>
        <h3>
            Click Map To get Current Location
        </h3>
        <p className='text-sm text-slate-400'>Drag Marker if you want</p>
      </div>
      <MapContainer 
      center={[16.854531334092727, 96.15740774315687]} 
      zoom={10}
      scrollWheelZoom={true}
      minZoom = {8}
      className='h-[20rem]'
      >
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {position && (
                <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                    <Popup>
                        hello
                    </Popup>
                </Marker>
            )
          }

          <LocationMarker setPosition={setPosition} />
      </MapContainer>
  </div>
  )
}

export default Map;