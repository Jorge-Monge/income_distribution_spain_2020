import { MapContainer, Marker, Popup } from "react-leaflet"
import VectorBasemapLayer from "react-esri-leaflet/plugins/VectorBasemapLayer"

import "./index.css"

function App() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <VectorBasemapLayer
        name="ArcGIS:DarkGray"
        apikey={process.env.REACT_APP_ARCGIS_API_KEY}
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
