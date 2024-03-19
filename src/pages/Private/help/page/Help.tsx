import { SectionBlock } from "@/common/components";
import { Outlet, useNavigate } from "react-router-dom";
import { LogoReserva } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import useBreakpointer from "@/hooks/useBreakpointer";

const links = [
    {
        icon: <LogoReserva className="w-[8rem] h-full bg-purpouse/20 rounded-lg p-2" />,
        title: 'Ayuda para reservar',
        to: '/privado/ayuda/reserva'
    },
    {
        icon: <LogoReserva className="w-[8rem] h-full bg-purpouse/20 rounded-lg p-2" />,
        title: 'Problema con un servicio',
        to: '/privado/ayuda/service'
    },
    {
        icon: <LogoReserva className="w-[8rem] h-full bg-purpouse/20 rounded-lg p-2" />,
        title: "Pagos y devoluciones",
        to: ''
    },
    {
        icon: <LogoReserva className="w-[8rem] h-full bg-purpouse/20 rounded-lg p-2" />,
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
                    {links.map(({ to, icon, title }, index) => (
                        <Button onClick={() => handlerRedirectButton(to)} variant="outline" key={index} className="flex justify-start items-center gap-1  md:gap-8 w-full h-[7.2rem] rounded-xl shadow-2xl sm:text-center p-2">
                            {icon}
                            <strong className="w-full sm:text-[1rem]">{title}</strong>
                        </Button>
                    ))}
                </ul>
                <Outlet />
            </div>
        </SectionBlock>

    )
}
