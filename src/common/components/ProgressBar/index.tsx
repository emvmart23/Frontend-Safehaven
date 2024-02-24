import { LogoSafehaven } from "@/components/Icons"
import { Loader2 } from "lucide-react"

function ProgressBar() {
    return (
        <div className="h-[50vh] relative flex justify-center items-center translate-y-1/2">
            <Loader2 className="animate-spin w-[3.9rem] h-[3.9rem] " />
            <LogoSafehaven className="w-7 h-7 absolute" />
        </div>
    )
}
export default ProgressBar