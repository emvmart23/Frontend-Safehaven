import { LogoSafehaven } from "@/components/Icons"
import { Loader2 } from "lucide-react"

function ProgressBar() {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <Loader2 className="animate-spin w-[3.7rem] h-[3.9rem]" />
            <LogoSafehaven className="w-7 h-7 absolute" />
        </div>
    )
}
export default ProgressBar