import logoIcon from '../../assets/Logo.svg'
import githubIcon from '../../assets/Github.svg'
import linkedinIcon from '../../assets/LinkedIn.svg'
import mailIcon from '../../assets/Mail.svg'
import locationIcon from '../../assets/Location.svg'
import timeIcon from '../../assets/Time.svg'

const Footer = () => {
    return(
        <footer className={"container mx-auto p-4"}>
            <div className={"flex flex-col items-start gap-8 mt-4 mb-16"}>
                <div className={"flex gap-4"}>
                    <img src={logoIcon} alt="Logo icon" className={"h-8 w-8"}/>
                    <h2>Gabriel Mayorga</h2>
                </div>
                <p className={"text-muted-foreground text-md"}>Desarrollador full-stack y diseñador digital especializado en crear experiencias web excepcionales.</p>
                <div className={"flex items-center justify-center gap-4"}>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={githubIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={linkedinIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                    <button className={"bg-primary/10 outline-1 p-2 rounded-xl"}>
                        <img src={mailIcon} alt="Github" className={"h-8 w-8"}/>
                    </button>
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"}>
                <div>
                    <h4 className={"text-lg"}>Navegación</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li>Sobre Mí</li>
                        <li>Proyectos</li>
                        <li>Certificaciones</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div>
                    <h4 className={"text-lg"}>Servicios</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li>Desarrollo Web</li>
                        <li>Diseño UI/UX</li>
                        <li>Consultoría</li>
                        <li>Mentoring</li>
                    </ul>
                </div>
                <div>
                    <h4 className={"text-lg"}>Contacto</h4>
                    <ul className={"text-muted-foreground flex flex-col gap-4 my-4"}>
                        <li className={"flex items-center gap-2"}>
                            <img src={mailIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>gabrielmayorgate@gmail.com</p>
                        </li>
                        <li className={"flex items-center gap-2"}>
                            <img src={locationIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>Managua, NI</p>
                        </li>
                        <li className={"flex items-center gap-2"}>
                            <img src={timeIcon} alt="Mail icon" className={"h-4 w-4"}/>
                            <p>Lun - Vie, 2PM - 10PM PST</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"text-muted-foreground text-sm text-center py-12 border-t"}>
                <p>© 2026 Gabriel Mayorga. Todos los derechos reservados.</p>
                <div className={"flex justify-center gap-4 mt-4"}>
                    <p>Política de Privacidad</p>
                    <p>Términos de Servicio</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer