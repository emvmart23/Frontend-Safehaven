// import { useMemo, useState } from "react";
// import PlacesAutocomplete from "../PlacesAutocomplete";
// import { GoogleMap, Marker } from "@react-google-maps/api"


// interface Local {
//     lat: number
//     lng: number
// }

// function Map() {

//     const [selected, setSelected] = useState<Local | null>(null)
//     const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

//     return (
//         <>
//             <PlacesAutocomplete setSelected={setSelected} />
//             <GoogleMap
//                 zoom={5}
//                 center={center}
//                 mapContainerClassName="w-80 h-80 absolute"
//             >
//                 {selected && <Marker position={selected} />}
//             </GoogleMap>
//         </>
//     )
// }

// export default Map
