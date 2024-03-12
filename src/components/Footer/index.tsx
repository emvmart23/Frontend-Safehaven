import { Instagram, Linkedin, Twitter } from "lucide-react"
import { LogoSafehavenExpanded } from "../Icons";
import { List } from "@/common/components/index";

const data = [
    { title: "Service", context: ["Hogar ", "Integraciones ", "Clientes ", "Precios ", "Seguridad "] },
    { title: "Empresa", context: ["Nosotros ", "Team"] },
    { title: "Desarrolladores", context: ["Api"] }
]

const icons = [
    {
        logo: <Twitter />,
        ref: "https://github.com/emvmart23",
    },
    {
        logo: <Linkedin />,
        ref: "https://www.linkedin.com/in/max-saavedraa/",
    },
    {
        logo: <Instagram />,
        ref: "https://www.linkedin.com/in/max-saavedraa/",
    }
];


function Footer() {
    return (
        <footer className="px-[20rem] py-[2rem] flex justify-center items-center gap-10">
            <div className="w-full">
                <LogoSafehavenExpanded className="w-[8rem] h-[5rem]" />
                <p className="font-light text-[0.8rem] mb-5">tienes el control total de tu negocio como trabajador independiente.
                    Crea tu perfil, define tus servicios y tarifas, y conecta con clientes
                    de forma segura y eficiente.
                </p>
                <ul className="flex justify-between items-center w-min gap-4">
                    {icons.map(({ logo }, index) => (
                        <li className="rounded-full p-2 border border-foreground" key={index}>{logo}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full">
                <div className="flex justify-center  gap-24">
                    {data.map(({ title, context }, index) => (
                        <ul key={index} className="flex flex-col gap-3">
                            <p className="text-[0.9rem]">{title}</p>
                            <li className="text-[0.9rem] font-medium">{context}</li>
                        </ul>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer