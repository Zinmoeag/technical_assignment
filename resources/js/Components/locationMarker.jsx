import { 
    useMapEvents,
} from 'react-leaflet'

export default function LocationMarker({setPosition}) {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(Object.values(e.latlng))
        map.flyTo(e.latlng, map.getZoom())
      },
    })
}