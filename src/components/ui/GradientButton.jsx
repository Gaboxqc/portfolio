import {Link} from "react-router";

const GradientButton = ({label, nav}) => {
    return(
        <Link to={nav} className={"h-13 w-auto flex justify-center items-center px-6 rounded-lg bg-linear-to-r from-primary to-accent text-white cursor-pointer" +
            " hover:shadow-lg shadow-accent/60"}>
            {label}
        </Link>
    )
}

export default GradientButton