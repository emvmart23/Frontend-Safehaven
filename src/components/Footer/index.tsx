import { Instagram, Linkedin, Twitter } from "lucide-react"
import { LogoSafehavenExpanded } from "../Icons";

const data = [
    { title: "Service", context: ["Hogar ", "Integraciones ", "Clientes ", "Precios ", "Seguridad "] },
    { title: "Empresa", context: ["Nosotros ", "Team"] },
    { title: "Desarrolladores", context: ["Api"] }
]

const icons = [
    {
        logo: <Twitter />,
        ref: "",
    },
    {
        logo: <Linkedin />,
        ref: "",
    },
    {
        logo: <Instagram />,
        ref: "",
    }
];


function Footer() {
    return (
        <footer className="md:py-[2rem] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 w-[50%] mx-auto mb-8">
            <div className="w-full flex flex-col items-center md:items-start justify-start md:justify-center gap-2">
                <LogoSafehavenExpanded className="w-[8rem] h-[5rem]" />
                <p className="font-light text-[0.8rem] max-w-[170px]">tienes el control total de tu negocio como trabajador independiente.
                    Crea tu perfil, define tus servicios y tarifas, y conecta con clientes
                    de forma segura y eficiente.
                </p>
                <ul className="flex justify-between items-center w-min gap-4 mt-4">
                    {icons.map(({ logo }, index) => (
                        <li className="rounded-full p-2 border border-foreground" key={index}>{logo}</li>
                    ))}
                </ul>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row  justify-center gap-10 md:gap-28">
                    {data.map(({ title, context }, index) => (
                        <ul key={index} className="flex flex-col justify-center items-center gap-3">
                            <p className="text-[0.9rem]">{title}</p>
                            <li className="text-[0.9rem] font-medium max-w-[50px]">{context}</li>
                        </ul>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer