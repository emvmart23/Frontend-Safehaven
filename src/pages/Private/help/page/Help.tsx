import { SectionBlock } from "@/common/components";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const links = [
    {
        img: "/logoReserva.svg",
        title: 'Ayuda para reservar',
        to: '/privado/ayuda/reserva'
    },
    {
        img: "/ring.svg",
        title: 'Problema con un servicio',
        to: '/privado/ayuda/servicio'
    },
    {
        img: "/credit-card.svg",
        title: "Pagos y devoluciones",
        to: '/privado/ayuda/pagos'
    },
    {
        img: "/openbook.svg",
        title: "Otro problema",
        to: ''
    }
]

export function Help() {
    const navigate = useNavigate()

    const handlerRedirectButton = (to: string) => {
        navigate(to, { replace: true })
    }

    return (

        <SectionBlock back title="¿ Cómo podemos ayudarte ?" className="p-2 md:p-24" >
            <div className="w-full flex md:gap-[5rem] xl:gap-[7rem] flex-col xl:flex-row relative px-8">
                <ul className="flex flex-col mx-auto gap-10 w-full md:w-[80%] xl:w-[60%] xl:max-w-[500px] pt-5">
                    {links.map(({ to, img, title }, index) => (
                        <Button onClick={() => handlerRedirectButton(to)} variant="outline" key={index} className="flex justify-start items-center gap-1 md:gap-8 w-full h-[7.2rem] rounded-xl shadow-2xl sm:text-center">
                            <img src={img} alt="" className="w-[6rem] h-full p-3 bg-purpouse/30 rounded-xl"/>
                            <strong className="w-full sm:text-[1rem]">{title}</strong>
                        </Button>
                    ))}
                </ul>
                <Outlet />
            </div>
        </SectionBlock>

    )
}
