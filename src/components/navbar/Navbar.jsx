const Navbar = (props) => {
    return (
        <nav className={"flex justify-between px-20"}>
            <div>
                <img src="./" alt=""/>img
            </div>
            <div>
                <ul className={"flex gap-5"}>
                    <li>Sobre mi</li>
                    <li>Proyectos</li>
                    <li>Certificaciones</li>
                    <li>Contacto</li>
                    <li>Componentes</li>
                </ul>
            </div>
            <div className={"flex gap-4"}>
                <div>Es</div>
                <div>CV</div>
            </div>
        </nav>
    )
}

export default Navbar