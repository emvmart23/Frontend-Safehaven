import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/Command"

interface Props {
    setSelected: (value: { lat: number, lng: number }) => void
}

function PlacesAutocomplete({ setSelected }: Props) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()

    const handleSelect = async (address: any) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode(address);
        const { lat, lng } = await getLatLng(results[0])
        setSelected({ lat, lng })
    }

    return (
        <Command onSelect={handleSelect} className="rounded-lg border shadow-md w-[40%]">
            <CommandInput
                value={value}
                onChangeCapture={(e) => setValue(e.currentTarget.value)}
                disabled={!ready}
                placeholder="Search an address" />
            <CommandList>
                {status === "OK" ?
                    data.map(({ place_id, description }) => (
                        <CommandItem key={place_id} value={description} />
                    )) : (
                        <CommandEmpty>No results found.</CommandEmpty>
                    )}
            </CommandList>
        </Command>
    )
}

export default PlacesAutocomplete