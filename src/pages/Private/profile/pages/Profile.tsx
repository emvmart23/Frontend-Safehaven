import { Button } from "@/components/ui/Button"
import useAuth from "@/hooks/useAuth"
import { BadgeHelp, Mail, MapPin, UserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"
import SwichToWorkerRole from "../components/SwichToWorkerRole"

function Profile() {
  const navigate = useNavigate()

  const { user } = useAuth()

  return (
    <div className="bg-background graphics-container block ">
      <div className="flex flex-col items-center xl:items-start xl:flex-row gap-20 md:gap-28 xl:gap-16 md:pt-[4rem] mb-20">
        <div className="flex flex-col justify-center items-center basis-1/2 2xl:basis-1/3 min-w-[320px]">
          <figure className="absolute rounded-full p-2 border-[0.3rem] border-foreground z-50">
            <img
              src={user?.picture}
              alt="perfil"
              className="rounded-full w-52 h-52 2xl:w-[18rem] 2xl:h-[18rem] flex-initial object-cover"
            />
          </figure>
          <div className="top-[12rem] 2xl:top-[15.5rem] relative rounded-xl w-[19rem] sm:w-[30rem] xl:w-[90%] h-[20rem] border-2 border-dashed border-foreground text-foreground pt-[6rem] text-center">
            <p className="mb-8 font-semibold text-[1.2rem]">Max Martinez</p>
            <ul className="space-y-4 flex flex-col items-center">
              <li className="flex gap-3">
                <Mail /> <span>{user?.email}</span>
              </li>
              <li className="flex gap-3">
                <Mail /> <span>max@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 2xl:gap-8 w-[18rem] md:w-[24rem] mt-[12rem] xl:mt-0">
          <h2 className="font-semibold text-xl">Ajustes de Cuenta</h2>
          <Button
            onClick={() => navigate("/privado/detalles-perfil")}
            variant="outline"
            className="flex justify-start gap-3 h-[2.8rem]"
          >
            <UserRound size={20} />
            Datos personales
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-3 h-[2.8rem]"
          >
            <MapPin size={20} />
            Mis direcciones
          </Button>
          <Button
            variant="outline"
            className="flex justify-between h-[2.8rem]"
          >
            Quieres ofrecer servicios
          </Button>
        </div>
        <div className="flex flex-col gap-10 w-[18rem] md:w-[24rem]">
          <div className="flex flex-col gap-4 2xl:gap-8">
            <h2 className="font-semibold text-xl">¿ Quieres ofrecer servicios ?</h2>
            <SwichToWorkerRole />
          </div>
          <div className="flex flex-col gap-4 2xl:gap-8">
            <h2 className="font-semibold text-xl">Centro de soporte</h2>
            <Button
              onClick={() => navigate("/privado/ayuda/reserva", { replace: true })}
              variant="outline"
              className="flex justify-start gap-3 h-[2.8rem]"
            >
              <BadgeHelp size={20} />
              Ayuda
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile