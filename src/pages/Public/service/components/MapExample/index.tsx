import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

interface Props {
  geocode : [number, number]
  popUp:string
}

const position: [number, number] = [11.00, 77.09]

const markers : Props[] = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];

export default function MapExample() {
  return (
    <div className="w-[50%] h-[50vh] absolute top-5">
      <MapContainer center={position} zoom={13} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        // iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker, index) => (
          <Marker position={marker.geocode} key={index}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
    </div>
  )
}