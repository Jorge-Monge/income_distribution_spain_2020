import { useState } from "react"
import { MapContainer, Popup } from "react-leaflet"
import VectorBasemapLayer from "react-esri-leaflet/plugins/VectorBasemapLayer"
import { FeatureLayer } from "react-esri-leaflet"

import "./index.css"

const MUNICIPIOS_URL =
  "https://services7.arcgis.com/SEjlCWTAIsMEEXNx/ArcGIS/rest/services/2_Renta_neta_media_por_hogar__2020_/FeatureServer/1"

const startLoc = [40, -3.8085]

const stringToLocaleNumber = (str) => {
  return Number(str).toLocaleString()
}

function App() {
  const [popup, setPopup] = useState(null)

  const onClick = (e) => {
    console.log("click")
    const [lat, lng] = [e.latlng.lat, e.latlng.lng]
    const properties = e.sourceTarget.feature.properties

    setPopup(
      <Popup position={[lat, lng]}>
        <p>Municipio:{properties.NMUN}</p>
        <p>
          Renta neta media por persona:
          {stringToLocaleNumber(properties.DATO1)}
        </p>
        <p>
          Renta neta media por hogar:{stringToLocaleNumber(properties.DATO2)}
        </p>
        <p>
          Poblacion con ingresos por unidad de consumo por debajo del 7.500
          Euros:{stringToLocaleNumber(properties.DATO3)} %
        </p>
        <p>
          Poblacion con ingresos por unidad de consumo por debajo 60% de la
          mediana:{stringToLocaleNumber(properties.DATO4)} %
        </p>
        <p>
          Poblacion con ingresos por unidad de consumo por encima 200% de la
          mediana:{stringToLocaleNumber(properties.DATO5)} %
        </p>
        <p>
          Poblacion con ingresos por unidad de consumo por debajo 60% de la
          mediana:{stringToLocaleNumber(properties.DATO6)} %
        </p>
        <p>
          Porcentaje de poblacion menor de 18 años:
          {stringToLocaleNumber(properties.DATO7)} %
        </p>
        <p>
          Porcentaje de poblacion de 65 y mas años:
          {stringToLocaleNumber(properties.DATO8)} %
        </p>
        <p>Indice de Gini:{stringToLocaleNumber(properties.DATO9)}</p>
      </Popup>
    )
  }

  return (
    <MapContainer center={startLoc} zoom={13} scrollWheelZoom={true}>
      <VectorBasemapLayer
        name="ArcGIS:DarkGray"
        apikey={process.env.REACT_APP_ARCGIS_API_KEY}
      />

      <FeatureLayer
        url={MUNICIPIOS_URL}
        outFields={["NMUN"]}
        simplifyFactor={0.6}
        precision={4}
        fetchAllFeatures={true}
        eventHandlers={{
          loading: () => console.log("featurelayer loading"),
          load: () => console.log("featurelayer loaded"),
          click: (e) => {
            onClick(e)
          },
        }}
        style={{ color: "red", fillColor: "red", weight: 1, transparency: 0.5 }}
        // style={(feature) => {
        //   if (feature.properties.DATO2 >= 25000) {
        //     return { color: "red", fillColor: "red", weight: 1 }
        //   } else {
        //     return { color: "white", fillColor: "white", weight: 1 }
        //   }
        // }}
      >
        {popup}
      </FeatureLayer>
    </MapContainer>
  )
}

export default App
