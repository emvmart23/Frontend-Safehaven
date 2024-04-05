import { useMemo, useState } from "react";
import PlacesAutocomplete from "../PlacesAutocomplete";
import { GoogleMap, Marker } from "@react-google-maps/api"


interface Local {
    lat: number
    lng: number
}

function Map() {

    const [selected, setSelected] = useState<Local | null>(null)
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

    return (
        <>
            <PlacesAutocomplete setSelected={setSelected} />

            {/* {selected ?  */}
                <GoogleMap
                    zoom={5}
                    center={center}
                    mapContainerClassName="w-96 h-96 absolute top-40 rounded-xl"
                >
                    {selected && <Marker position={selected} />}
                </GoogleMap> 
            {/* : null} */}
        </>
    )
}

export default Map