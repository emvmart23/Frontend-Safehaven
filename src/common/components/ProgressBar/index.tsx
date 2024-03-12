import { LogoSafehaven } from "@/components/Icons"
import { Loader2 } from "lucide-react"

function ProgressBar() {0
    return (
        <div className="flex absolute top-[20rem] justify-center items-center translate-y-1/2">
            <Loader2 className="animate-spin w-[3.7rem] h-[3.9rem] " />
            <LogoSafehaven className="w-7 h-7 absolute" />
        </div>
    )
}
export default ProgressBar