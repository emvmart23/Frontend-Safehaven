import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import FormDetails from "../components/FormDetails"

function DetailsUser() {

  return (
    <div className="mx-auto mt-20 w-[70%] space-y-8 flex flex-col max-w-md min-w-[310px] border-2 border-dashed border-foreground p-8 rounded-lg">
        <Link to={"/privado/perfil"} className="flex items-center gap-4">
            <ArrowLeft/>
            <span className="text-[1.5rem] font-medium">Datos personales</span>
        </Link>
        <FormDetails/>
    </div>
  )
}

export default DetailsUser